// 验证汉化注入：版本、样本翻译
// 用法: node tools/verify.mjs <port>
const port = process.argv[2];
const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
const page = list.find(t => t.type === 'page' && t.url.startsWith('http://tauri.localhost'));
if (!page) { console.log('未找到主页面 target'); process.exit(1); }

const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
let seq = 0; const pending = new Map();
ws.onmessage = (ev) => {
  const m = JSON.parse(ev.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id); }
};
const eval_ = (expression) => new Promise((res) => {
  const id = ++seq; pending.set(id, res);
  ws.send(JSON.stringify({ id, method: 'Runtime.evaluate', params: { expression, returnByValue: true, awaitPromise: true } }));
});

const version = await eval_('window.__githubCopilotChineseVersion');
console.log('注入版本:', version?.result?.value);

const probeExpr = `(() => {
  const samples = ['自动化','仪表板','环境','会话','合并队列','趋势','我的工作'];
  const body = document.body.innerText || '';
  const hits = samples.filter(s => body.includes(s));
  const english = ['Automations','Environments','Dashboard','Merge queue'].filter(s => body.includes(s));
  return JSON.stringify({ 命中: hits, 残留英文: english, API: !!window.__githubCopilotChinese });
})()`;
const probe = await eval_(probeExpr);
console.log('界面抽查:', probe?.result?.value);
ws.close();
