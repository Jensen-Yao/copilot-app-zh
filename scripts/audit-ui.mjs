import fs from 'node:fs';
import path from 'node:path';

const localAppData = process.env.LOCALAPPDATA;
if (!localAppData) throw new Error('LOCALAPPDATA is not set.');
const dataDir = path.join(localAppData, 'GitHubCopilotChinese');
const logPath = path.join(dataDir, 'launcher.log');
const reportPath = path.join(dataDir, 'untranslated-report.json');
const textPath = path.join(dataDir, 'untranslated-report.txt');
const log = fs.readFileSync(logPath, 'utf8');
const matches = [...log.matchAll(/CDP port (\d+)/g)];
if (!matches.length) throw new Error('No CDP port found. Start Copilot with the Chinese launcher first.');
const port = Number(matches.at(-1)[1]);
const targets = await fetch(`http://127.0.0.1:${port}/json/list`).then(r => r.json());
const target = targets.find(x => x.type === 'page' && String(x.url).startsWith('http://tauri.localhost'));
if (!target?.webSocketDebuggerUrl) throw new Error('Copilot main WebView was not found.');

const socket = new WebSocket(target.webSocketDebuggerUrl);
let nextId = 1;
const pending = new Map();
await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true });
  socket.addEventListener('error', reject, { once: true });
});
socket.addEventListener('message', event => {
  const message = JSON.parse(event.data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error || message.result?.exceptionDetails) reject(new Error(JSON.stringify(message.error || message.result.exceptionDetails)));
  else resolve(message.result?.result?.value);
});
function evaluate(expression, awaitPromise = true) {
  const id = nextId++;
  socket.send(JSON.stringify({ id, method: 'Runtime.evaluate', params: { expression, awaitPromise, returnByValue: true } }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

const result = await evaluate(`(async () => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const text = element => (element?.innerText || element?.textContent || '').trim();
  const visible = element => !!element && (element.offsetWidth || element.offsetHeight || element.getClientRects().length);
  const buttons = () => [...document.querySelectorAll('button,[role="button"],[role="tab"],[role="menuitem"]')].filter(visible);
  const exact = labels => buttons().find(element => labels.includes(text(element)) || labels.includes(element.getAttribute('aria-label') || ''));
  const clickAndScan = async (labels, wait = 450) => {
    const element = exact(labels);
    if (!element) return false;
    element.click();
    await sleep(wait);
    window.__githubCopilotChinese?.rescan?.();
    await sleep(80);
    return true;
  };
  const escape = async () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', bubbles: true }));
    await sleep(180);
  };
  const visited = [];

  // Safe top-level surfaces.
  for (const labels of [['主页','Home'], ['我的工作','My work'], ['自动化','Automations'], ['搜索','Search']]) {
    visited.push([labels[0], await clickAndScan(labels)]);
    if (labels[0] === '搜索') await escape();
  }
  await clickAndScan(['主页','Home']);

  // Settings and every built-in category. No setting values are changed.
  const settings = buttons().find(element => ['设置','Settings'].includes(element.getAttribute('aria-label') || '') || ['设置','Settings'].includes(text(element)));
  if (settings) {
    settings.click();
    await sleep(500);
    window.__githubCopilotChinese?.rescan?.();
    const categories = [
      ['常规','General'], ['账户','Accounts'], ['会话','Sessions'], ['主题','Themes'],
      ['辅助功能','Accessibility'], ['语音听写','Voice dictation'], ['技能','Skills'],
      ['MCP 服务器','MCP servers'], ['插件','Plugins'], ['模型提供商','Model providers'],
      ['实验性功能','Experimental']
    ];
    for (const labels of categories) visited.push([labels[0], await clickAndScan(labels, 520)]);
    await clickAndScan(['常规','General']);
    await escape();
  }

  // Safe pop-up menus; open, scan, and close without selecting anything.
  const popupAria = [
    /Ctrl \+ Shift \+ M/i,
    /^(?:选择模型|Select model)$/i,
    /^(?:项目|Project)：|^(?:项目|Project):/i,
    /^(?:分支|Branch)：|^(?:分支|Branch):/i,
    /(?:用户菜单|user menu)/i,
    /(?:更改会话分组方式|Change how sessions are grouped)/i
  ];
  for (const pattern of popupAria) {
    const element = buttons().find(item => pattern.test(item.getAttribute('aria-label') || ''));
    if (!element) continue;
    element.click();
    await sleep(320);
    window.__githubCopilotChinese?.rescan?.();
    await escape();
  }

  return JSON.stringify({ visited, report: window.__githubCopilotChinese?.getReport?.() || null });
})()`);
const parsed = JSON.parse(result);
if (!parsed.report) throw new Error('Chinese audit API is unavailable. Restart with the latest launcher.');
fs.writeFileSync(reportPath, JSON.stringify(parsed.report), 'utf8');
const lines = [
  'GitHub Copilot 汉化待处理文案',
  `翻译脚本版本：${parsed.report.translationVersion}`,
  `生成时间：${parsed.report.generatedAt}`,
  '',
  '=== 运行时实际出现 ===',
  ...parsed.report.runtime.map(item => item.text),
  '',
  '=== 前端资源候选 ===',
  ...parsed.report.bundle.map(item => item.text),
  ''
];
fs.writeFileSync(textPath, '\uFEFF' + lines.join('\r\n'), 'utf8');
console.log(JSON.stringify({
  visited: parsed.visited,
  version: parsed.report.translationVersion,
  runtime: parsed.report.counts.runtime,
  bundle: parsed.report.counts.bundle,
  reportPath,
  textPath
}, null, 2));
socket.close();