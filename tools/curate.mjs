// 从 untranslated-report.json 筛选高置信 UI 字符串，生成待翻译清单
// 用法: node tools/curate.mjs <report.json> <outDir>
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const [reportPath, outDir = 'gap'] = process.argv.slice(2);
const report = JSON.parse(readFileSync(reportPath, 'utf-8'));
mkdirSync(outDir, { recursive: true });

// 高价值 bundle 文件（应用 UI 本体），排除 catalog(第三方技能描述)/websocket(聊天流内容)
const GOOD_FILES = /^(?:App-|run-|SpaceView-|WorkflowGalleryRoute-|CloudProjectView-|healthCheckView-|PlatformDataDiagnosticsView-|SettingsPanel|MainLayout|SessionsView|SearchView|AutomationsView|HomeView|MyWorkView|ChatComposer|ModelPicker|account-|session-|project-)/;

function isUiSentence(s) {
  if (s.length < 5 || s.length > 170) return false;
  if (!/^[A-Z]/.test(s)) return false;
  if (!/[A-Za-z]/.test(s)) return false;
  if (/[{}<>=|_]/.test(s)) return false;                       // 代码味
  if (/https?:|\/\/|\\/.test(s)) return false;
  if (/\b[A-Z]{5,}\b/.test(s) && !/\s/.test(s)) return false;   // 全大写标识符
  if (/^[a-z]+(?:[A-Z][a-z]+)+$/.test(s)) return false;         // camelCase
  if ((s.match(/[^\x20-\x7E…—‘’“”·•]/g) || []).length) return false;
  const words = s.split(/\s+/).length;
  return words >= 1 && (words >= 2 || /^[A-Z][a-z]{3,}$/.test(s));
}

// 运行时：人工排除噪音（用户名/极短/非界面）
const RUNTIME_EXCLUDE = /^(YAO Changsong|YC|left|Free|Preview|Manage|Customize|Computer Use|Typeahead menu|Environments)$/;

const picks = { runtime: [], bundle: [] };
for (const e of report.runtime || []) {
  if (!RUNTIME_EXCLUDE.test(e.text)) picks.runtime.push(e.text);
}
const seen = new Set(picks.runtime);
for (const e of report.bundle || []) {
  const from = (e.resources || []).some(r => GOOD_FILES.test(r.split('/').pop() || ''));
  if (!from) continue;
  if (!isUiSentence(e.text)) continue;
  if (seen.has(e.text)) continue;
  seen.add(e.text);
  picks.bundle.push(e.text);
}
// bundle 上限 450 条本轮
picks.bundle = picks.bundle.slice(0, 450);

writeFileSync(`${outDir}/to-translate.json`, JSON.stringify(picks, null, 2), 'utf-8');
console.log(`运行时待译: ${picks.runtime.length}`);
console.log(`bundle 待译: ${picks.bundle.length}`);
console.log(`示例:`);
for (const t of picks.bundle.slice(0, 8)) console.log('  ·', t.slice(0, 80));
