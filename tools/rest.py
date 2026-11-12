# 提取 GOOD_FILES 全量里 > 'Fix Failed Checks' 的剩余字符串
import json, re

r = json.load(open(r'C:\Users\18052\AppData\Local\GitHubCopilotChinese\untranslated-report.json', encoding='utf-8'))
GOOD = re.compile(r'^(?:App-|run-|SpaceView-|WorkflowGalleryRoute-|CloudProjectView-|healthCheckView-|PlatformDataDiagnosticsView-|SettingsPanel|MainLayout|SessionsView|SearchView|AutomationsView|HomeView|MyWorkView|ChatComposer|ModelPicker|account-|session-|project-)')

def ui(s: str) -> bool:
    if not (5 <= len(s) <= 170):
        return False
    if not s[0].isupper():
        return False
    if re.search(r'[{}<>=|_]', s) or 'http' in s or '\\' in s:
        return False
    if re.match(r'^[a-z]+([A-Z][a-z]+)+$', s):
        return False
    if any(ord(c) > 0x2026 for c in s):
        return False
    return True

seen, out = set(), []
for e in r['bundle']:
    res = e.get('resources', [])
    if not any(GOOD.match(x.split('/')[-1] or '') for x in res):
        continue
    if not ui(e['text']) or e['text'] in seen:
        continue
    seen.add(e['text'])
    out.append(e['text'])

print('GOOD_FILES 全量:', len(out))
rest = [t for t in out if t > 'Fix Failed Checks']
print('剩余 G-Z:', len(rest))
json.dump(rest, open('gap/rest.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
