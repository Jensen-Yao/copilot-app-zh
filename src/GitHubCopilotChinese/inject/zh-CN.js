(() => {
  'use strict';
  const VERSION = '1.3.0-jy.1';
  if (window.__githubCopilotChineseVersion === VERSION) return;
  window.__githubCopilotChineseVersion = VERSION;

  const zh = new Map(Object.entries({
    'Sidebar':'侧边栏','Quick links':'快捷入口','Home':'主页','My work':'我的工作','Automations':'自动化','Search':'搜索','Sessions':'会话','Chats':'聊天','Projects':'项目',
    'No sessions yet':'暂无会话','No quick chats yet':'暂无快捷聊天','New chat':'新建聊天','Add project':'添加项目','Settings':'设置','General':'常规','Accounts':'账户','Themes':'主题','Accessibility':'辅助功能','Skills':'技能','MCP servers':'MCP 服务器','Plugins':'插件','Model providers':'模型提供商','Experimental':'实验性功能',
    'Interactive':'交互式','Auto':'自动','Message':'消息','Ask anything, paste a URL, type / for commands or # for issues…':'可以询问任何问题、粘贴网址，输入 / 使用命令或输入 # 引用议题…','What feedback would you like to share?':'你想分享什么反馈？','Send message':'发送消息','Add files or folders':'添加文件或文件夹','Select model':'选择模型','Choose from GitHub':'从 GitHub 选择','Use local folder':'使用本地文件夹',
    'Up next':'接下来','Recently updated pull requests and issues across your connected repos.':'已连接仓库中最近更新的拉取请求和议题。','Add a repository to get started':'添加仓库以开始使用',
    'Extend your experience':'扩展使用体验','Find new ways to work with the app, from automating tasks to connecting your tools.':'探索更多使用方式，包括自动执行任务和连接工具。','Read documentation':'阅读文档','Connect a repository':'连接仓库','Use a GitHub repository or local folder to start working with your code and open pull requests.':'使用 GitHub 仓库或本地文件夹开始处理代码并创建拉取请求。',
    'Run recurring automations':'运行定期自动化','Schedule recurring tasks that run in the background, like summaries, reports, or code health checks.':'安排在后台定期运行的任务，例如摘要、报告或代码健康检查。','Browse templates':'浏览模板','Create automation':'创建自动化',
    "What's new":'新增功能','Explore the changes included in the latest release.':'查看最新版本包含的更改。','Unable to load changelog.':'无法加载更新日志。','Retry':'重试','GitHub Copilot uses AI. Check for mistakes.':'GitHub Copilot 使用 AI，请检查可能的错误。',
    'Toggle sidebar':'切换侧边栏','Go back':'后退','Go forward':'前进','Resize sidebar':'调整侧边栏大小','Change how sessions are grouped':'更改会话分组方式','Create new project or session':'新建项目或会话','User profile and settings':'用户资料和设置','Share feedback':'分享反馈','Close dialog':'关闭对话框',
    'Report a bug or suggest a feature':'报告错误或提出功能建议','This will be posted as a public GitHub issue.':'这将作为公开的 GitHub 议题发布。','Cancel':'取消','Copy':'复制','Delete':'删除','Edit':'编辑','Save':'保存','Done':'完成','Close':'关闭','Open':'打开','Confirm':'确认','Continue':'继续','Back':'返回','Next':'下一步',
    'Auto model selection':'自动选择模型','Picks the best model for each task.':'为每项任务选择最佳模型。','No manual models are available to switch to.':'当前没有可手动切换的模型。','Use Auto mode':'使用自动模式','Optimized for':'优化目标','Quality, speed, and cost':'质量、速度和成本','How Auto model selection works':'自动模型选择的工作原理',
    'Check for updates':'检查更新','Automatically check for updates':'自动检查更新','Check for new versions in the background. When off, you can still check manually above.':'在后台检查新版本。关闭后仍可在上方手动检查。','Storage location':'存储位置','Where repositories and worktrees are stored.':'仓库和工作树的存储位置。','Change location…':'更改位置…','Current theme':'当前主题','Customize the app\'s color palette':'自定义应用配色','Change theme':'更改主题','Show in system tray':'在系统托盘中显示','Show the GitHub Copilot icon in the system tray.':'在系统托盘中显示 GitHub Copilot 图标。','Delete chats without confirmation':'删除聊天时不确认','Skip the confirmation dialog when deleting chats.':'删除聊天时跳过确认对话框。','Find in workspace position':'工作区查找位置','Position of the find-in-workspace dialog when active.':'工作区查找对话框启用时的位置。','Top right':'右上角','Enable sound':'启用声音','Play a sound when a session needs attention.':'会话需要注意时播放声音。','Session complete sound':'会话完成声音','Sound when a session\'s task is complete.':'会话任务完成时播放的声音。','Needs input sound':'需要输入时的声音','Sound when a session needs your input.':'会话需要你输入时播放的声音。','Volume':'音量','Adjust notification volume.':'调整通知音量。','Reset to default location':'恢复默认位置','Copy path':'复制路径','Show in Explorer':'在资源管理器中显示','Preview session complete sound':'试听会话完成声音','Preview needs input sound':'试听需要输入声音',
    'GitHub.com':'GitHub.com','Projects use the default account unless changed in project settings.':'除非在项目设置中更改，否则项目使用默认账户。','Add account':'添加账户','Default':'默认','Upgrade Copilot':'升级 Copilot','Upgrade your Copilot plan for higher usage limits, premium models, AI reviews and more.':'升级 Copilot 套餐以获得更高用量限制、高级模型、AI 审查等功能。','Upgrade plan':'升级套餐','Sign in to access your GitHub Enterprise Cloud (*.ghe.com) repositories.':'登录以访问 GitHub Enterprise Cloud (*.ghe.com) 仓库。','Add Enterprise Cloud account':'添加 Enterprise Cloud 账户',
    'Verbosity':'详细程度','Choose how much detail sessions show in the conversation view.':'选择会话在对话视图中显示的详细程度。','Detailed':'详细','Instructions':'指令','Preferences that apply to every session across all projects.':'应用于所有项目中每个会话的偏好设置。','Tool permissions':'工具权限','Choose when new local sessions ask before running tools. Use /allow-all-tools or /reset-allowed-tools for a session-specific override.':'选择新的本地会话在运行工具前何时询问。可用 /allow-all-tools 或 /reset-allowed-tools 对单个会话进行覆盖。','Approve all':'全部批准','Agent merge reply attribution':'代理合并回复署名','Append a short attribution line to the replies agent merge posts on review comments, noting they were made automatically by the GitHub Copilot app.':'在代理合并发布的审查评论回复后附加简短署名，说明该回复由 GitHub Copilot 应用自动生成。','New sessions remote access':'新会话远程访问','Choose the default remote access for new sessions.':'选择新会话的默认远程访问权限。','View only':'仅查看','Default branch prefix':'默认分支前缀','Prefix added to generated branch names. Use %username% for your GitHub login.':'添加到生成分支名称前的前缀。可使用 %username% 代表你的 GitHub 登录名。','Keep awake':'保持唤醒','Prevent sleep while a session is active. Keep awake for some additional time after a session goes idle.':'会话活动时阻止系统睡眠，并在会话空闲后继续保持一段时间。','Keep awake while agent is running':'代理运行时保持唤醒','Delete sessions without confirmation':'删除会话时不确认','Skip the confirmation dialog when deleting sessions.':'删除会话时跳过确认对话框。','Show Copilot CLI Session':'显示 Copilot CLI 会话','Include sessions created by the Copilot CLI in the sidebar. Choose how far back to surface them, or turn this off to hide CLI-created sessions entirely.':'在侧边栏中显示 Copilot CLI 创建的会话。可选择显示多早的会话，或关闭以完全隐藏。','Off':'关闭','On':'开启',
    'Mode':'模式','Light or dark appearance and color variant.':'浅色或深色外观及配色变体。','System':'跟随系统','Light':'浅色','Dark':'深色','Terminal':'终端','Customize the terminal\'s appearance independently from the app.':'独立于应用自定义终端外观。','Font':'字体','Set the font used for embedded terminals.':'设置嵌入式终端使用的字体。','Palettes':'调色板','Pick a color palette for the app.':'为应用选择调色板。','Staff picks':'精选','Active':'已启用',
    'Open in My work':'在“我的工作”中打开','Open on GitHub':'在 GitHub 上打开','Copy link':'复制链接','New session':'新建会话','Pull request':'拉取请求','Issue':'议题','Loading…':'正在加载…','No results':'没有结果','Learn more':'了解更多','Sign in':'登录','Sign out':'退出登录'
  }));


  for (const [key, value] of Object.entries({
    "Search settings":"搜索设置","Search settings…":"搜索设置…","Account actions":"账户操作",
    "Display":"显示","Adjust zoom and cursor behavior.":"调整缩放和光标行为。","Zoom":"缩放","Scale the whole interface for larger text and controls.":"缩放整个界面，使文字和控件更大。","Show pointer on hover":"悬停时显示手形指针","Use a pointer cursor over buttons and links.":"鼠标悬停在按钮和链接上时使用手形指针。",
    "Notifications":"通知","Control how long notifications are displayed.":"控制通知的显示时长。","Error duration":"错误显示时长","Problems that require immediate attention.":"需要立即处理的问题。","Announcement duration":"公告显示时长","Updates that don't require immediate attention.":"无需立即处理的更新。","Announcements":"屏幕阅读器播报","Control what content is announced by a screen reader.":"控制屏幕阅读器播报哪些内容。","Interaction hints":"交互提示","Announce keys to press for atypical interactions.":"对于非常规交互，播报需要按下的按键。","Sessions and quick chats":"会话和快捷聊天","Set what types of Copilot activity are announced.":"设置要播报哪些类型的 Copilot 活动。",
    "Reasoning":"推理","Tool calls":"工具调用","Code search":"代码搜索","Reading files":"读取文件","Creating files":"创建文件","Editing files":"编辑文件","Running CLI commands":"运行 CLI 命令","CLI commands finish running":"CLI 命令运行完成","Changing models and agents":"切换模型和代理","Compacting the conversation":"压缩对话",
    "Keyboard":"键盘","Control whether the app responds to keyboard shortcuts.":"控制应用是否响应键盘快捷键。","Use keyboard shortcuts":"使用键盘快捷键","Enable or disable all keyboard shortcuts.":"启用或禁用全部键盘快捷键。","Keyboard shortcuts":"键盘快捷键","View and remap shortcuts for every command.":"查看并重新映射每个命令的快捷键。","Command palette":"命令面板","Find in file":"在文件中查找","Find next match":"查找下一个匹配项","Find previous match":"查找上一个匹配项","Open settings":"打开设置","View keyboard shortcuts":"查看键盘快捷键","Go to session by number":"按编号转到会话","Next unread session":"下一个未读会话","Quote selection":"引用所选内容","Copy selection":"复制所选内容","Navigation":"导航","Previous session":"上一个会话","Next session":"下一个会话","Collapse or expand thinking":"折叠或展开思考过程","Toggle file edits panel":"切换文件编辑面板","Toggle review panel":"切换审查面板","Open review changes panel":"打开更改审查面板","Open review changes":"打开更改审查","Open pull request panel":"打开拉取请求面板","Open plan panel":"打开计划面板","Open or cycle terminal":"打开或循环切换终端","Collapse all diff files":"折叠所有差异文件","Sessions and projects":"会话和项目","Go to file":"转到文件","New general chat":"新建常规聊天","Run current session":"运行当前会话","Stop running":"停止运行","Cycle through composer modes":"循环切换输入模式","Tabs":"标签页","New tab":"新建标签页","Switch to tab by number":"按编号切换标签页","Previous tab":"上一个标签页","Next tab":"下一个标签页","Close tab":"关闭标签页","Split right":"向右拆分","Split down":"向下拆分","Reopen last closed tab":"重新打开最近关闭的标签页","Browser":"浏览器","Toggle Pick & Polish":"切换 Pick & Polish","Pull requests":"拉取请求","Submit pull request review":"提交拉取请求审查","Comments":"评论","Submit comment":"提交评论","Attach selection to prompt":"将所选内容附加到提示词","Attach selection to prompt with comment":"将所选内容及评论附加到提示词","Filter shortcuts":"筛选快捷键","Search keyboard shortcuts":"搜索键盘快捷键","Search commands…":"搜索命令…","Assign…":"分配…",
    "Loading skills":"正在加载技能","No servers configured":"尚未配置服务器","Choose from popular servers below or add a custom one.":"从下方热门服务器中选择，或添加自定义服务器。","Add server":"添加服务器","Popular MCP servers":"热门 MCP 服务器","Use MCP servers to extend what the agent can do.":"使用 MCP 服务器扩展代理能力。","Search popular MCP servers":"搜索热门 MCP 服务器","Sort and filter palettes":"排序和筛选调色板","Feeling lucky":"手气不错","More palettes":"更多调色板","Search palettes":"搜索调色板",
    "Crawl websites, extract data, and automate browsers.":"抓取网站、提取数据并自动操作浏览器。","Connect AI agents to Azure cloud services and resources.":"将 AI 代理连接到 Azure 云服务和资源。","Manage repositories, work items, pipelines, and code.":"管理仓库、工作项、流水线和代码。","Search, extract, and navigate web content at scale.":"大规模搜索、提取和浏览网页内容。","搜索, extract, and navigate web content at scale.":"大规模搜索、提取和浏览网页内容。","Work with Chroma vector databases and collections.":"使用 Chroma 向量数据库和集合。","Inspect, debug, and automate Chrome through DevTools.":"通过 DevTools 检查、调试和自动操作 Chrome。","Pull up-to-date library and framework docs into prompts.":"将最新的库和框架文档引入提示词。","Query PostgreSQL, MySQL, MariaDB, SQL Server, and SQLite.":"查询 PostgreSQL、MySQL、MariaDB、SQL Server 和 SQLite。","Run terminal commands and manage files and processes.":"运行终端命令并管理文件和进程。","Query Elasticsearch clusters for search and analytics.":"查询 Elasticsearch 集群以进行搜索和分析。","Connect to your data expert in Microsoft Fabric.":"连接 Microsoft Fabric 中的数据专家。","Turn Power BI data into insights and guided decisions.":"将 Power BI 数据转化为洞察和决策指导。","Bring design context into your AI-powered workflow.":"将设计上下文引入 AI 工作流。","Extract and transform website content with Firecrawl.":"使用 Firecrawl 提取和转换网站内容。","Manage repos, issues, pull requests, and workflows.":"管理仓库、议题、拉取请求和工作流。","Convert PDF, Word, Excel, images, and audio to Markdown.":"将 PDF、Word、Excel、图片和音频转换为 Markdown。","Search up-to-date Microsoft official documentation.":"搜索最新的 Microsoft 官方文档。","Query and manage MongoDB databases and collections.":"查询和管理 MongoDB 数据库及集合。","Manage Neon Postgres projects and SQL workflows.":"管理 Neon Postgres 项目和 SQL 工作流。","Monitor infrastructure metrics, logs, and alerts.":"监控基础设施指标、日志和警报。","Debug and inspect Next.js and React apps with MCP.":"使用 MCP 调试和检查 Next.js 与 React 应用。","Read, search, and manage Notion pages and databases.":"读取、搜索和管理 Notion 页面及数据库。","Search, browse, and manage NuGet package dependencies.":"搜索、浏览和管理 NuGet 包依赖项。","搜索, browse, and manage NuGet package dependencies.":"搜索、浏览和管理 NuGet 包依赖项。","Understand and inspect your Vite or Nuxt application.":"理解并检查 Vite 或 Nuxt 应用。","Design and prototype interfaces with AI assistance.":"借助 AI 设计界面并制作原型。","Automate browsers with accessibility-tree interactions.":"通过无障碍树交互自动操作浏览器。","Triage issues, track errors, and debug with Sentry.":"使用 Sentry 分类议题、跟踪错误并进行调试。","Retrieve and edit code using semantic understanding.":"利用语义理解检索和编辑代码。","Read designs, export assets, and automate Sketch via AI.":"读取设计、导出资源并通过 AI 自动操作 Sketch。","Send messages, manage channels, and search in Slack.":"在 Slack 中发送消息、管理频道和搜索。","Manage customers, products, and payments in Stripe.":"管理 Stripe 中的客户、产品和付款。","Manage your Supabase projects, databases, and storage.":"管理 Supabase 项目、数据库和存储。","Search the web and extract content with Tavily.":"使用 Tavily 搜索网页并提取内容。","Manage HCP Terraform and Terraform Enterprise.":"管理 HCP Terraform 和 Terraform Enterprise。","Curate and discover tools via Microsoft Foundry.":"通过 Microsoft Foundry 整理和发现工具。","Control the Unity Editor through the local Unity bridge.":"通过本地 Unity 桥控制 Unity 编辑器。",
    "Extend the app with plugins that add skills, agents, MCP servers, and hooks.":"使用可添加技能、代理、MCP 服务器和钩子的插件扩展应用。","Only install plugins from sources you trust.":"只安装来自可信来源的插件。","All":"全部","Installed":"已安装","Install":"安装","Loading plugins":"正在加载插件","Plugin view":"插件视图","Filter plugins":"筛选插件","Filter…":"筛选…",
    "Configured providers":"已配置的提供商","Model provider status checked: 1 connected.":"模型提供商状态已检查：已连接 1 个。","Access models from other providers with your own API keys. Keys stay private and go straight to the provider.":"使用自己的 API 密钥访问其他提供商的模型。密钥保持私密并直接发送给提供商。","Add provider":"添加提供商","From your GitHub Copilot subscription.":"来自你的 GitHub Copilot 订阅。","Connected":"已连接",
    "Early-access features that may change or be removed. Help shape the product by trying them out and sharing feedback.":"这些抢先体验功能可能会更改或移除。欢迎试用并分享反馈，帮助改进产品。","Canvas":"画布","Plan tab":"计划标签页","Use the canvas rich text editor for plan.md in the workspace Plan tab while Copilot waits for plan approval.":"当 Copilot 等待计划审批时，在工作区的“计划”标签页中使用画布富文本编辑器编辑 plan.md。","Inbox":"收件箱","Board view":"看板视图","Add a board layout to My Work that groups the current view's issues and pull requests into Backlog, Active, Needs attention, and Done columns derived from their state and linked session activity.":"为“我的工作”添加看板布局，根据状态和关联会话活动，将当前视图中的议题和拉取请求分为待办、进行中、需要关注和已完成。","Rename session to PR title":"将会话重命名为 PR 标题","When a pull request is created for a session, rename the session to the pull request title so the sidebar reflects the PR.":"为会话创建拉取请求后，将会话重命名为拉取请求标题，使侧边栏与 PR 保持一致。","Full-height right panel":"全高度右侧面板","Use the redesigned workspace layout with a full-height right panel, compact titlebar actions, and updated panel tabs.":"使用重新设计的工作区布局，包括全高度右侧面板、紧凑的标题栏操作和更新后的面板标签页。","Session grid":"会话网格","Cmd/Ctrl+click sessions in the sidebar to view several at once in a responsive grid.":"按住 Cmd/Ctrl 点击侧边栏中的会话，在响应式网格中同时查看多个会话。","Side chats":"侧边聊天","Add workspace-scoped chats to the review panel.":"在审查面板中添加工作区范围的聊天。","Cloud sessions":"云端会话","Run sessions in a cloud sandbox.":"在云端沙盒中运行会话。","Agents":"代理","Session automations":"会话自动化","Create lightweight automations by repeating prompts on a schedule.":"按计划重复提示词，创建轻量级自动化。","Rubber-duck agent":"橡皮鸭代理","Enable the rubber-duck subagent for constructive feedback on code and designs (Claude and GPT models only). Adds the /rubber-duck slash command to the composer. Restart the app after toggling.":"启用橡皮鸭子代理，为代码和设计提供建设性反馈（仅支持 Claude 和 GPT 模型）。启用后会在输入框中添加 /rubber-duck 命令，切换后请重启应用。","Diffs":"差异","Dynamic-height diff surface":"动态高度差异界面","Use the diff v4 surface for PR files, with dynamic inline comment block heights instead of fixed slot estimates. Turn off to fall back to the v3 diff surface.":"对 PR 文件使用 diff v4 界面，内联评论块采用动态高度而非固定槽位估算。关闭后回退到 v3 界面。","Voice dictation":"语音听写","Record speech with a shortcut and transcribe it locally into the composer.":"使用快捷键录音，并在本地转写到输入框。","Use bundled git":"使用内置 Git","Use the git binary shipped with the app instead of the system-installed one. Falls back to your system git when off.":"使用应用附带的 Git，而不是系统安装的 Git。关闭时使用系统 Git。","Other":"其他","Impeccable design skill":"Impeccable 设计技能","Adds /impeccable, a frontend design and UI-craft skill by Paul Bakaus (impeccable.style), bundled under Apache-2.0. Its optional automation scripts need Node 18+ on your PATH; without Node the agent falls back to the design guidance alone.":"添加 /impeccable，这是 Paul Bakaus（impeccable.style）制作的前端设计与 UI 工艺技能，以 Apache-2.0 许可内置。其可选自动化脚本需要 PATH 中存在 Node 18+；没有 Node 时，代理仅使用设计指导。",
    "Error":"错误","Error details":"错误详情","Copy error":"复制错误","Copy error details":"复制错误详情","Collapse error details":"折叠错误详情","Expand error details":"展开错误详情","Unknown error":"未知错误","unknown error":"未知错误","request cancelled":"请求已取消","Request cancelled":"请求已取消","Restart failed":"重启失败","Automation failed":"自动化运行失败","Automation could not start":"无法启动自动化","Failed to open browser":"无法打开浏览器","Authentication failed":"身份验证失败","Project MCP servers":"项目 MCP 服务器","Project MCP servers could not be loaded":"无法加载项目 MCP 服务器","Session todos request timed out":"会话待办事项请求超时","Voice model download failed":"语音模型下载失败","The voice model could not be downloaded. Try again.":"无法下载语音模型，请重试。","Could not open System Settings":"无法打开系统设置","Voice dictation could not start":"无法启动语音听写","Voice dictation could not initialize the microphone.":"语音听写无法初始化麦克风。","Microphone access denied":"麦克风访问被拒绝","Allow microphone access for GitHub in System Settings, then try again.":"请在系统设置中允许 GitHub 访问麦克风，然后重试。","Microphone unavailable":"麦克风不可用","Voice dictation could not open the selected microphone. Try System default instead.":"语音听写无法打开所选麦克风，请尝试使用系统默认设备。","Transcription failed":"转写失败","Voice dictation could not process the live audio stream.":"语音听写无法处理实时音频流。","Version unavailable":"版本不可用","Copy failed":"复制失败","Failed to load browser screenshot.":"无法加载浏览器截图。","Failed to crop browser screenshot.":"无法裁剪浏览器截图。","Failed to load license notices:":"无法加载许可证声明：","Failed to load artifact files:":"无法加载产物文件：","Failed to open the URL.":"无法打开网址。","Handler error":"处理程序错误","Failed to enqueue message from MCP app.":"无法将 MCP 应用消息加入队列。","Not Found":"未找到","Internal Server Error":"服务器内部错误","Unexpected Application Error!":"发生意外的应用错误！","Something went wrong":"出现错误","Try again":"重试","Timed out":"已超时","Network error":"网络错误","Offline":"离线","Disconnected":"连接已断开"
  })) zh.set(key, value);
  for (const [key, value] of Object.entries({
    "Custom instructions for Copilot":"Copilot 自定义指令","e.g., Prefer functional patterns. Write concise commit messages. Always add tests for new code.":"例如：优先使用函数式模式；编写简洁的提交信息；新代码始终添加测试。","No prefix":"无前缀","or":"或","Question mark":"问号","Backtick":"反引号","Left bracket":"左方括号","Right bracket":"右方括号","Left Arrow":"左方向键","Right Arrow":"右方向键","Comma":"逗号","Control":"Ctrl",
    "GitHub Account":"GitHub 账户","Account this project bills to and uses for API calls and agent tools.":"此项目用于计费、API 调用和代理工具的账户。","Scripts":"脚本","Commands that run during workspace lifecycle events.":"在工作区生命周期事件期间运行的命令。","Add script":"添加脚本","Environment variables available to all scripts and terminals":"可供所有脚本和终端使用的环境变量","Browser auto-open":"自动打开浏览器","Open a browser tab when Run output exposes a local URL.":"当运行输出提供本地网址时打开浏览器标签页。","Open browser automatically":"自动打开浏览器","Server ready pattern":"服务器就绪匹配模式","Regex used to detect a dev server URL in Run output. Matches VS Code's serverReadyAction.pattern. Clear the field and save to go back to the default detector.":"用于在运行输出中检测开发服务器网址的正则表达式，与 VS Code 的 serverReadyAction.pattern 一致。清空并保存可恢复默认检测方式。","Per-repository instructions added to every session, alongside global ones.":"与全局指令一起添加到每个会话的仓库级指令。","Remote control":"远程控制","Access your sessions from GitHub web and mobile. Use /remote to toggle per session.":"从 GitHub 网页版和移动端访问会话。使用 /remote 为单个会话切换此功能。","Servers defined by this repository in .mcp.json or .github/mcp.json.":"此仓库在 .mcp.json 或 .github/mcp.json 中定义的服务器。","Remove folder":"移除文件夹",
    "Choose when new local sessions ask before running tools. Use ":"选择新的本地会话在运行工具前何时询问。使用 "," for a session-specific override.":" 可为单个会话覆盖此设置。","Prefix added to generated branch names. Use ":"添加到生成分支名称前的前缀。使用 "," for your GitHub login.":" 代表你的 GitHub 登录名。"
  })) zh.set(key, value);

  for (const [key, value] of Object.entries({
    "signature verification failed":"签名验证失败","could not be decoded":"无法解码","Unable to encode submission body":"无法编码提交内容","Invalid redirect location":"重定向位置无效","Failed to unpin removed chat session":"无法取消固定已移除的聊天会话","Failed to migrate optimistic chat artifacts":"无法迁移临时聊天产物","Failed to send response for session":"无法发送会话响应","Failed to list workspace file paths:":"无法列出工作区文件路径：","Failed to initialize app window activity":"无法初始化应用窗口活动状态","Failed to apply native zoom level":"无法应用系统缩放级别","Failed to queue repository creation.":"无法将仓库创建任务加入队列。","Failed to open folder picker:":"无法打开文件夹选择器：","Publishing timed out. The repository may have been created — check GitHub and try again.":"发布超时。仓库可能已经创建，请在 GitHub 上检查后重试。","Failed to queue publish operation.":"无法将发布操作加入队列。","time unavailable":"时间不可用","runtime error: failed to send message to the webview":"运行时错误：无法向 WebView 发送消息","Voice dictation needs a local transcription model. Download one in Settings · Voice dictation, then try again.":"语音听写需要本地转写模型。请在“设置 → 语音听写”中下载后重试。","Voice dictation types into whichever text box you've selected. Open a workspace or click in a text field, then try again.":"语音听写会输入到当前选中的文本框。请打开工作区或点击文本输入区域后重试。"
  })) zh.set(key, value);
  for (const [key, value] of Object.entries({
    "Top left":"左上角","Top center":"顶部居中","Bottom left":"左下角","Bottom center":"底部居中","Bottom right":"右下角",
    "All notifications cleared.":"已清除所有通知。","Error: Project MCP servers could not be loaded. request cancelled":"错误：无法加载项目 MCP 服务器。请求已取消"
  })) zh.set(key, value);
  for (const [key, value] of Object.entries({
    "Open audio file…":"打开音频文件…","Copilot Done":"Copilot 完成","Speech Disambiguation":"语音消歧","Speech Misrecognition":"语音识别错误","Speech Off":"语音关闭","Speech On":"语音开启","Speech Sleep":"语音休眠","Windows Background":"Windows 后台","Windows Balloon":"Windows 气泡提示","Windows Battery Critical":"Windows 电量严重不足","Windows Battery Low":"Windows 电量低","Windows Critical Stop":"Windows 严重停止","Windows Default":"Windows 默认","Windows Error":"Windows 错误","Windows Exclamation":"Windows 警告","Windows Feed Discovered":"Windows 发现订阅源","Windows Foreground":"Windows 前台","Windows Hardware Fail":"Windows 硬件故障","Windows Hardware Insert":"Windows 插入硬件","Windows Hardware Remove":"Windows 移除硬件","Windows Information Bar":"Windows 信息栏","Windows Logoff Sound":"Windows 注销声音","Windows Logon":"Windows 登录","Windows Menu Command":"Windows 菜单命令","Windows Message Nudge":"Windows 消息提醒","Windows Minimize":"Windows 最小化","Windows Navigation Start":"Windows 开始导航","Windows Notify":"Windows 通知","Windows Notify Calendar":"Windows 日历通知","Windows Notify Email":"Windows 邮件通知","Windows Notify Messaging":"Windows 消息通知","Windows Notify System Generic":"Windows 系统通用通知","Windows Pop-up Blocked":"Windows 已阻止弹出窗口","Windows Print complete":"Windows 打印完成","Windows Proximity Connection":"Windows 邻近连接","Windows Proximity Notification":"Windows 邻近通知","Windows Recycle":"Windows 回收站","Windows Restore":"Windows 还原","Windows Ringin":"Windows 来电铃声","Windows Ringout":"Windows 呼出铃声","Windows Shutdown":"Windows 关机","Windows Startup":"Windows 启动","Windows Unlock":"Windows 解锁","Windows User Account Control":"Windows 用户账户控制",
    "Update authorization":"更新授权","Manage plan":"管理套餐","Remove account":"移除账户",
    "Minimal":"精简","Collapse completed turn details behind a summary panel":"将已完成轮次的详情折叠到摘要面板中","Balanced":"平衡","Group consecutive tool calls into a single panel":"将连续工具调用合并到一个面板中","Show every tool call and intermediate message":"显示每次工具调用和中间消息","Run tools without asking.":"无需询问即可运行工具。","Ask every time":"每次询问","Ask before running tools.":"运行工具前询问。","Disabled":"已禁用","Sessions are only available on this device":"会话仅在此设备上可用","View session activity from another device":"从其他设备查看会话活动","Control sessions from another device":"从其他设备控制会话",
    "Color blind":"色觉辅助","High contrast":"高对比度","Dim":"柔和","Monospaced":"等宽字体","All fonts":"所有字体","Sort":"排序","Name":"名称","Hue":"色相","Family":"系列","Gray":"灰色","Blue":"蓝色","Cyan":"青色","Green":"绿色","Orange":"橙色","Yellow":"黄色","Red":"红色","Purple":"紫色",
    "Indefinite":"不自动消失","Show":"显示","Modified":"已修改","Category":"分类",
    "Add custom server":"添加自定义服务器","Install plugin":"安装插件","Add marketplace":"添加市场",
    "Custom endpoint":"自定义端点","Any OpenAI-compatible HTTP endpoint (vLLM, OpenRouter, fine-tune, etc.).":"任意兼容 OpenAI 的 HTTP 端点（vLLM、OpenRouter、微调模型等）。","Hosted Claude models over the Messages API.":"通过 Messages API 使用托管的 Claude 模型。","Service deployments via your resource host, API version, and per-model deployment names.":"通过资源主机、API 版本和各模型部署名称使用服务部署。","Local runtime with no API key, over an OpenAI-compatible endpoint.":"无需 API 密钥、通过兼容 OpenAI 端点运行的本地运行时。","OpenAI-compatible endpoints. Defaults to the Responses API for GPT-5.":"兼容 OpenAI 的端点；GPT-5 默认使用 Responses API。","Ollama (local)":"Ollama（本地）","Local runtime with no API key, over the OpenAI-compatible /v1 endpoint.":"无需 API 密钥、通过兼容 OpenAI 的 /v1 端点运行的本地运行时。","Hosted models over the Chat Completions API.":"通过 Chat Completions API 使用托管模型。"
  })) zh.set(key, value);
  for (const [key, value] of Object.entries({
    "Manage accounts":"管理账户","Manage sessions":"管理会话","Theme":"主题","Health check":"健康检查","About":"关于","Help center":"帮助中心",
    "Step-by-step collaboration":"分步协作","Plan":"计划","Plan first, execute when ready":"先制定计划，准备好后再执行","Autopilot":"自动驾驶","End-to-end execution without interruption":"不间断地端到端执行",
    "Chat":"聊天","Group by":"分组方式","Project":"项目","Status":"状态","Last updated":"最近更新",
    "Start session in":"在以下项目中开始会话","Add project from":"从以下来源添加项目","Local folder or repository…":"本地文件夹或仓库…","GitHub repository…":"GitHub 仓库…","Repository URL…":"仓库网址…","Resume remote session…":"恢复远程会话…","Add files...":"添加文件…","Add folder...":"添加文件夹…"
  })) zh.set(key, value);
  for (const [key, value] of Object.entries({
    "Model provider status checked: 2 connected.":"模型提供商状态已检查：已连接 2 个。","No models configured":"尚未配置模型","Sync from the endpoint or add one by ID.":"从端点同步模型，或按 ID 添加模型。","Browse catalog":"浏览模型目录","Add model by ID":"按 ID 添加模型","Refresh catalog":"刷新模型目录",
    "Display name":"显示名称","Base URL":"基础网址","Include the OpenAI-compatible root, e.g. \"https://api.openai.com/v1\" or \"https://api.together.xyz/v1\".":"请包含兼容 OpenAI 的根路径，例如“https://api.openai.com/v1”或“https://api.together.xyz/v1”。","Wire API":"API 协议","Pick the wire format this endpoint speaks. Most OpenAI-compatible gateways are Chat Completions; OpenAI's own GPT-5 series uses Responses. Per-model overrides can refine this.":"选择此端点使用的通信格式。大多数兼容 OpenAI 的网关使用 Chat Completions；OpenAI 自己的 GPT-5 系列使用 Responses。可通过单独模型设置进一步覆盖。","API key":"API 密钥","Leave blank to keep the existing key.":"留空可保留现有密钥。","Custom headers (JSON)":"自定义请求头（JSON）","Optional. Object of additional HTTP headers, e.g. {\"X-Org\": \"acme\"}.":"可选。填写额外 HTTP 请求头对象，例如 {\"X-Org\": \"acme\"}。","Save changes":"保存更改","Shown next to models in the picker":"显示在选择器中的模型名称旁","Replace key":"替换密钥",
    "Add model":"添加模型","Model ID":"模型 ID","Display name (optional)":"显示名称（可选）","Shown in picker":"显示在选择器中","Remove":"移除"
  })) zh.set(key, value);
  for (const [key, value] of Object.entries({
    "Search providers…":"搜索提供商…","Message input":"消息输入区","Dismiss connect repository card":"关闭连接仓库卡片","Dismiss recurring automations card":"关闭定期自动化卡片"
  })) zh.set(key, value);
  for (const [key, value] of Object.entries({
    "Loading models…":"正在加载模型…","Couldn't load models.":"无法加载模型。","No models match the filter.":"没有符合筛选条件的模型。","Search models…":"搜索模型…","Add model from provider catalog":"从提供商目录添加模型","Edit model":"编辑模型","Wire model (optional)":"实际模型 ID（可选）","Override the model ID sent to the provider.":"覆盖发送给提供商的模型 ID。","Max prompt tokens":"最大提示词令牌数","Max output tokens":"最大输出令牌数",
    "Hide API key":"隐藏 API 密钥","Show API key":"显示 API 密钥","Headers must be valid JSON.":"请求头必须是有效的 JSON。","Headers must be a JSON object, e.g. {\"X-Org\": \"acme\"}.":"请求头必须是 JSON 对象，例如 {\"X-Org\": \"acme\"}。","Every header value must be a string.":"每个请求头的值都必须是字符串。","Stored in your OS keychain — never written to the database.":"存储在操作系统密钥链中，绝不会写入数据库。",
    "Anthropic API root, e.g. \"https://api.anthropic.com\".":"Anthropic API 根地址，例如“https://api.anthropic.com”。","Optional. Object of additional HTTP headers, e.g. {\"anthropic-version\": \"2023-06-01\"}.":"可选。填写额外 HTTP 请求头对象，例如 {\"anthropic-version\": \"2023-06-01\"}。","Sync from Anthropic or add one by ID.":"从 Anthropic 同步模型，或按 ID 添加模型。",
    "Your Azure OpenAI resource endpoint, e.g. \"https://my-resource.openai.azure.com\".":"Azure OpenAI 资源端点，例如“https://my-resource.openai.azure.com”。","API version":"API 版本","Azure REST API version, e.g. \"2024-10-21\". Leave as the default unless your deployment needs a specific version.":"Azure REST API 版本，例如“2024-10-21”。除非部署需要特定版本，否则请保留默认值。","Pick the wire format this deployment speaks. Azure GPT-5 deployments use Responses; older ones use Chat Completions. Per-model overrides can refine this.":"选择此部署使用的通信格式。Azure GPT-5 部署使用 Responses，旧部署使用 Chat Completions。可通过单独模型设置进一步覆盖。","Azure API key":"Azure API 密钥","Add deployment":"添加部署","Add one by its Azure deployment name.":"使用 Azure 部署名称添加。","Use the deployment name from your Azure OpenAI resource.":"使用 Azure OpenAI 资源中的部署名称。","Bearer token":"Bearer 令牌",
    "Optional — leave blank if your endpoint doesn't require auth. Stored in your OS keychain.":"可选。如果端点不需要身份验证可留空。密钥存储在操作系统密钥链中。","Local runtime endpoint with no API key required.":"无需 API 密钥的本地运行时端点。","Add model by tag":"按标签添加模型","Sync from the runtime or add a tag.":"从运行时同步模型，或添加标签。","Sync from the runtime or add one by ID.":"从运行时同步模型，或按 ID 添加模型。","Provided by your signed-in GitHub account.":"由当前登录的 GitHub 账户提供。","Models follow your Copilot subscription — no API key or configuration needed.":"模型遵循你的 Copilot 订阅，无需 API 密钥或配置。"
  })) zh.set(key, value);
  for (const [key, value] of Object.entries({
    "编辑 model":"编辑模型","Models":"模型"
  })) zh.set(key, value);
  zh.set('Max prompt tokens', '最大提示词令牌数（Max prompt tokens）');
  zh.set('Max output tokens', '最大输出令牌数（Max output tokens）');
  for (const [key, value] of Object.entries({
    'GitHub Copilot':'GitHub Copilot', 'CodeFlow':'CodeFlow', 'GPT-5.6 Sol':'GPT-5.6 Sol',
    'A speech-to-text model is required to record. Download one from voice settings to get started.':'录音需要语音转文字模型。请从语音设置下载模型后再试。',
    'Open voice settings':'打开语音设置', 'Set up voice dictation':'设置语音听写', 'Cancel recording':'取消录音', 'Use transcript':'使用转写内容',
    'New worktree':'新建工作树', 'View all':'查看全部', "You're all caught up":'已全部查看', 'Open inbox':'打开收件箱',
    'Turn issues into pull requests':'将议题转换为拉取请求', 'Code review':'代码审查', 'Create pull requests when you\'re ready':'准备好后创建拉取请求',
    'Extend with MCP servers':'通过 MCP 服务器扩展', 'Read changelog':'阅读更新日志', 'Release':'版本发布', 'Resume a session':'恢复会话',
    'Security':'安全', 'Loading GitHub session…':'正在加载 GitHub 会话…', 'Signing in to GitHub…':'正在登录 GitHub…',
    'The default model selection now matches what\'s actually available to your account instead of always defaulting to a fixed model.':'默认模型选择现在会匹配账户实际可用的模型，而不再始终使用固定模型。',
    'To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.':'要拾取可拖动项目，请按空格键。拖动时使用方向键移动项目；再次按空格键放下项目，或按 Esc 取消。',
    'Sessions keep changes until you decide to share them. Review the diff and create a pull request when you\'re ready.':'会话会保留更改，直到你决定分享。请查看差异，并在准备好后创建拉取请求。',
    'Generate a changelog from recent commits grouped by type.':'根据最近按类型分组的提交生成更新日志。',
    'Review recent changes and suggest improvements.':'查看最近的更改并提出改进建议。',
    'Scan for security vulnerabilities and fix them.':'扫描安全漏洞并修复。',
    'Connect tools like Figma, Playwright, or Azure so agents can take actions beyond your codebase.':'连接 Figma、Playwright 或 Azure 等工具，让代理执行代码库之外的操作。',
    'Cloud automation triggers with a query field now use the same smart search filter input as issue triggers, with qualifier autocomplete and hints.':'带查询字段的云端自动化触发器现在与议题触发器使用相同的智能搜索筛选输入框，并提供限定符自动补全和提示。',
    'GitHub Copilot now appears automatically as a read-only model provider in Model Providers settings when you have an active Copilot seat.':'拥有有效 Copilot 席位后，GitHub Copilot 现在会自动作为只读模型提供商显示在“模型提供商”设置中。',
    'Assign a GitHub issue to an agent and get a pull request back, ready to review.':'将 GitHub 议题分配给代理，并获得一个可供审查的拉取请求。'
  })) zh.set(key, value);  zh.set('最大提示词令牌数', '最大提示词令牌数（Max prompt tokens）');
  zh.set('最大输出令牌数', '最大输出令牌数（Max output tokens）');
  for (const [key, value] of Object.entries({
    'Communication':'沟通',
    'Documentation':'文档',
    'Summarize this project for someone new to the team.':'为刚加入团队的成员总结此项目。',
    'Update or generate documentation from the source.':'根据源代码更新或生成文档。',
    'SCORE':'得分（SCORE）',
    'Base URL':'基础网址（Base URL）',
    'Wire API':'API 协议（Wire API）',
    'API key':'API 密钥（API key）',
    'Model ID':'模型 ID（Model ID）'
  })) zh.set(key, value);
  for (const [key, value] of Object.entries({
    'Activate voice transcription':'启用语音转写',
    'Allow desktop apps to access your microphone in Settings.':'请在系统设置中允许桌面应用访问麦克风。',
    'Chat messages':'聊天消息',
    'Choose which microphone Voice dictation should use when recording.':'选择语音听写录音时使用的麦克风。',
    'Copilot Free':'Copilot Free',
    'Copilot Notification':'Copilot 通知音（Copilot Notification）',
    'Copilot Success':'Copilot 成功提示音（Copilot Success）',
    'CC Switch':'CC Switch',
    'Detecting input devices':'正在检测输入设备',
    'GitHub Enterprise Cloud (*.ghe.com)':'GitHub Enterprise Cloud (*.ghe.com)',
    'Hold the shortcut to record. Release to stop and transcribe.':'按住快捷键录音，松开后停止并转写。',
    'Input device':'输入设备',
    'Keyboard shortcut to activate voice transcription.':'用于启用语音转写的键盘快捷键。',
    'Learn more about plans':'了解套餐详情',
    'Microphone permissions':'麦克风权限',
    'No marketplaces added':'尚未添加市场',
    'Open preferences':'打开首选项',
    'Pick an open issue and start working on a fix.':'选择一个未关闭的议题并开始修复。',
    'Push to talk':'按住说话',
    'Record a short local sample to check whether Voice dictation can hear the selected input.':'录制一段本地短音频，检查语音听写能否听到所选输入设备。',
    'Resets monthly. Each request costs its model’s multiplier toward your allowance.':'每月重置。每次请求会根据模型倍率扣除相应额度。',
    'Skill actions':'技能操作',
    'Skill category':'技能分类',
    'Skills extend what the agent can do with specialized knowledge for tasks like writing tests, reviewing code, or following project conventions.':'技能通过专业知识扩展代理能力，可用于编写测试、审查代码或遵循项目约定等任务。',
    'System default':'系统默认',
    'Test mic':'测试麦克风',
    'Test microphone':'测试麦克风',
    'Transcription models':'转写模型',
    'Upgrade outdated dependencies and fix breaking changes.':'升级过时的依赖项并修复破坏性变更。',
    'Voice dictation shortcut, click to edit':'语音听写快捷键，点击编辑',
    'Voice dictation uses a local model to transcribe your speech. Download a model to get started.':'语音听写使用本地模型转写语音。请下载模型以开始使用。',
    'Issues':'议题',
    'Maintenance':'维护'
  })) zh.set(key, value);
  for (const [key, value] of Object.entries({
    'Accessibility audit':'辅助功能审计',
    'All repositories':'所有仓库',
    'Audit open PRs and identify blockers or risky changes.':'审计未关闭的拉取请求，并识别阻塞项或高风险更改。',
    'Change theme mode':'更改主题模式',
    'Change view (currently list)':'更改视图（当前为列表）',
    'Changelog draft':'更新日志草稿',
    'Cost tips':'成本建议',
    'Get personalized tips to reduce token usage and cost.':'获取个性化建议，以减少令牌用量和成本。',
    'GitHub logo, play wave animation':'GitHub 徽标，播放波浪动画',
    'GitHub, the fastest way from idea to merged pull request. Run parallel sessions, track changes, zero conflicts.':'GitHub，让想法更快变成已合并的拉取请求。并行运行会话、跟踪更改，避免冲突。',
    'Go to Automations':'转到自动化',
    'Go to Home':'转到主页',
    'Go to My work':'转到我的工作',
    'Go to Settings':'转到设置',
    'Group sessions':'会话分组',
    'Identify 10 performance improvements, then open a PR for the highest-impact, lowest-effort one.':'找出 10 项性能改进，并针对影响最大、工作量最小的一项创建拉取请求。',
    'Issue triage':'议题分类处理',
    'My work filters':'“我的工作”筛选器',
    'New automation':'新建自动化',
    'New issue':'新建议题',
    'New view':'新建视图',
    'Nothing here':'这里暂无内容',
    'Open detail panel':'打开详情面板',
    'Performance improvements':'性能改进',
    'Refactor duplicated code into shared modules.':'将重复代码重构为共享模块。',
    'Repo audit':'仓库审计',
    'Resume remote session':'恢复远程会话',
    'Review a PR for user-facing changes and suggest required telemetry events and properties.':'审查拉取请求中面向用户的更改，并建议所需的遥测事件和属性。',
    'Review PRs merged yesterday and summarize any accessibility issues.':'审查昨天合并的拉取请求，并总结所有辅助功能问题。',
    'Review requests':'审查请求',
    'Review the latest GitHub issues and propose priorities and owners.':'查看最新的 GitHub 议题，并建议优先级和负责人。',
    'Set up automations':'设置自动化',
    'Settings: Keyboard shortcuts':'设置：键盘快捷键',
    'Sign in to GitHub':'登录 GitHub',
    'Sign in to GitHub Enterprise Cloud (*.ghe.com)':'登录 GitHub Enterprise Cloud (*.ghe.com)',
    'Start automating':'开始自动化',
    'Summarize key merged PRs this week into a release-note draft.':'将本周已合并的关键拉取请求总结为版本说明草稿。',
    'Telemetry review':'遥测审查',
    'Turn an existing agent skill into an automation.':'将现有代理技能转换为自动化。',
    'Use a different account':'使用其他账户',
    'Use agents to handle recurring work on a cadence you choose or triggered by events.':'使用代理按你选择的周期或由事件触发来处理重复工作。',
    'You can start from scratch or turn an existing agent skill into an automation.':'你可以从头开始，也可以将现有代理技能转换为自动化。',
    'Your models':'你的模型'
  })) zh.set(key, value);
  for (const [key, value] of Object.entries({
    'An error was thrown.':'发生了错误。',
    'An unexpected error occurred.':'发生意外错误。',
    'Connection unavailable. Please try again.':'连接不可用，请重试。',
    'Failed':'失败',
    'FAILURE':'失败',
    'ERROR':'错误',
    'Invalid':'无效',
    'Unavailable':'不可用',
    'Not found':'未找到',
    'No error details':'没有错误详情',
    'Raw error output':'原始错误输出',
    "You're offline":'当前处于离线状态'
  })) zh.set(key, value);

  const failureTerms = new Map(Object.entries({
    'Agency install':'Agency 安装', 'Attachment':'附件', 'Auto-merge':'自动合并', 'Branch update':'分支更新',
    'Cloud automation':'云端自动化', 'Cloud session creation':'云端会话创建', 'Collect debug logs':'收集调试日志',
    'Command':'命令', 'Commit':'提交', 'Connection':'连接', 'Copilot CLI':'Copilot CLI', 'Copilot sessions':'Copilot 会话',
    'Create issue':'创建议题', 'Debug log archive':'调试日志归档', 'Debug logs gist':'调试日志 Gist', 'Delete':'删除',
    'Environment':'环境', 'Export':'导出', 'Fork':'复刻', 'Issue details':'议题详情', 'Link':'链接', 'MCP app view':'MCP 应用视图',
    'Merge':'合并', 'Model promotion':'模型提升', 'Open in app':'在应用中打开', 'Page':'页面', 'Project context':'项目上下文',
    'Project path':'项目路径', 'Pull':'拉取', 'Pull request details':'拉取请求详情', 'Push':'推送', 'Question':'问题',
    'Queue':'队列', 'Remote control':'远程控制', 'Rename':'重命名', 'Review':'审查', 'Session creation':'会话创建',
    'Session initialization':'会话初始化', 'Sync':'同步', 'Task':'任务', 'Terminal command':'终端命令',
    'Terminal':'终端', 'Update':'更新', 'Version':'版本', 'Voice model deletion':'语音模型删除',
    'Workspace update':'工作区更新', 'Worktree setup':'工作树设置',
    'dependency':'依赖项', 'files':'文件', 'folder':'文件夹', 'session':'会话', 'workspace':'工作区', 'run':'运行',
    'changes':'更改', 'changeset':'更改集', 'canvas 2d context':'画布 2D 上下文', 'extension':'扩展', 'models':'模型',
    'session models':'会话模型', 'comment':'评论', 'reply':'回复', 'clipboard image':'剪贴板图像', 'pasted text':'粘贴文本',
    'diagram':'图表', 'debug log archive':'调试日志归档', 'all files':'所有文件', 'attachments':'附件',
    'PR review':'拉取请求审查', 'native extension canvas':'本机扩展画布', 'element inspector':'元素检查器',
    'tool permissions':'工具权限', 'tool approvals':'工具批准设置', 'the file':'文件', 'this comment':'此评论', 'this thread':'此讨论串'
  }));

  function localizeFailureSubject(value) {
    const clean = value.replace(/[.:]+$/, '').trim();
    return zh.get(clean) || failureTerms.get(clean) || clean;
  }

  function localizeActionPhrase(value) {
    const clean = value.replace(/[.:]+$/, '').trim();
    const actions = [
      ['add ', '添加'], ['archive ', '归档'], ['attach ', '附加'], ['cancel ', '取消'], ['check ', '检查'],
      ['clear ', '清除'], ['commit ', '提交'], ['compute ', '计算'], ['connect ', '连接'], ['convert ', '转换'],
      ['copy ', '复制'], ['create ', '创建'], ['delete ', '删除'], ['download ', '下载'], ['enqueue ', '加入队列'],
      ['export ', '导出'], ['fetch ', '获取'], ['fork', '复刻'], ['get ', '获取'], ['initialize ', '初始化'],
      ['install ', '安装'], ['list ', '列出'], ['load', '加载'], ['mark as ', '标记为'], ['open ', '打开'],
      ['post ', '发布'], ['process ', '处理'], ['pull from ', '从以下位置拉取：'], ['push to ', '推送到'],
      ['register ', '注册'], ['remove ', '移除'], ['render ', '渲染'], ['restore ', '恢复'], ['reveal ', '显示'],
      ['save ', '保存'], ['search ', '搜索'], ['send ', '发送'], ['stage ', '暂存'], ['start ', '启动'],
      ['submit ', '提交'], ['sync ', '同步'], ['toggle ', '切换'], ['update ', '更新'], ['upload ', '上传'], ['verify ', '验证'], ['write ', '写入']
    ];
    for (const [prefix, translated] of actions) {
      if (clean.toLowerCase().startsWith(prefix)) return translated + localizeFailureSubject(clean.slice(prefix.length));
    }
    return localizeFailureSubject(clean);
  }
  for (const [key, value] of Object.entries({
    'Actions':'操作',
    'Chat canvas tabs':'聊天画布标签页',
    'Custom':'自定义',
    'Daily':'每天',
    'Debug':'调试',
    'Discard draft chat':'丢弃聊天草稿',
    'Dismiss':'关闭',
    'Find performance bottlenecks and optimize them.':'查找性能瓶颈并进行优化。',
    'Loading':'正在加载',
    'Manual':'手动',
    'Maximize panel':'最大化面板',
    'New':'新建',
    'Or':'或者',
    'Performance':'性能',
    'Plan mode drafts an approach for you to review first.':'计划模式会先拟定方案供你审查。',
    'Recent':'最近',
    'Refactoring':'重构',
    'Share as secret gist':'分享为私密 Gist',
    'Shortcut':'快捷键',
    'Toggle canvas panel':'切换画布面板',
    'Usage':'用量',
    'Utility':'实用工具',
    'View plan & usage':'查看套餐与用量',
    'Weekly':'每周',
    'chat options':'聊天选项',
    'greet':'问候',
    'msg':'消息',
    'name':'名称'
  })) zh.set(key, value);
  for (const [key, value] of Object.entries({
    'Ask anything or type / for commands…':'可以询问任何问题，输入 / 使用命令…',
    'Ask anything or type / for commands...':'可以询问任何问题，输入 / 使用命令…',
    'Ask anything. Type / for commands or @ for files…':'可以询问任何问题，输入 / 使用命令，或输入 @ 引用文件…',
    'Ask anything. Type / for commands or # for issues…':'可以询问任何问题，输入 / 使用命令，或输入 # 引用议题…',
    'Ask anything. Type / for commands, @ for files, or # for issues…':'可以询问任何问题，输入 / 使用命令、输入 @ 引用文件或输入 # 引用议题…',
    'Describe a task to run autonomously. Type / for commands, @ for files, or # for issues…':'描述要自动执行的任务。输入 / 使用命令、输入 @ 引用文件或输入 # 引用议题…',
    'Prompt':'提示词',
    'View session history and activity chronicle.':'查看会话历史和活动记录。',
    'Get a report on your work from the last day.':'获取过去一天的工作报告。',
    'Search all session content by keyword or topic.':'按关键词或主题搜索所有会话内容。',
    'Get personalized tips based on usage patterns.':'根据使用习惯获取个性化建议。',
    'Suggest improvements to copilot-instructions.md.':'为 copilot-instructions.md 提出改进建议。',
    'Rebuild the Chronicle session index.':'重新构建 Chronicle 会话索引。',
    'Gather data and render an interactive inbox widget.':'收集数据并显示交互式收件箱组件。',
    'Shares the chat transcript as a secret GitHub gist and copies the link.':'将聊天记录分享为私密 GitHub Gist，并复制链接。',
    'Renames the current chat or session.':'重命名当前聊天或会话。',
    'Shorthand for agentfinder. Discover installable MCP servers, tools, skills, and agents for a task by searching an ARD Agent Finder.':'agentfinder 的简写。通过 ARD Agent Finder 搜索适合任务且可安装的 MCP 服务器、工具、技能和代理。',
    'Discover installable MCP servers, tools, skills, and agents for a task by searching an ARD Agent Finder. Use whenever the user wants to find or install a tool, MCP server, skill, agent, or integration for something they are trying to do — email, calendars, databases, payments, cloud platforms, CI/CD, messaging, monitoring, file storage, and similar services.':'通过 ARD Agent Finder 搜索并安装适合任务的工具、MCP 服务器、技能、代理或集成，支持邮件、日历、数据库、支付、云平台、CI/CD、消息、监控和文件存储等服务。',
    'Author, validate, and debug canvas extensions that the agent can open in the GitHub Copilot app\'s side panel. Use when creating, reviewing, or troubleshooting a canvas extension — including its actions, inputs, rendered content, and the surrounding extension wiring (tools, hooks, lifecycle).':'创建、验证和调试可在 GitHub Copilot 侧边面板中打开的画布扩展，包括操作、输入、渲染内容以及工具、钩子和生命周期连接。',
    'Use when the user wants to design, redesign, shape, critique, audit, polish, clarify, distill, harden, optimize, adapt, animate, colorize, extract, or otherwise improve a frontend interface. Covers websites, landing pages, dashboards, product UI, app shells, components, forms, settings, onboarding, and empty states. Handles UX review, visual hierarchy, information architecture, cognitive load, accessibility, performance, responsive behavior, theming, anti-patterns, typography, fonts, spacing, layout, alignment, color, motion, micro-interactions, UX copy, error states, edge cases, i18n, and reusable design systems or tokens. Also use for bland designs that need to become bolder or more delightful, loud designs that should become quieter, live browser iteration on UI elements, or ambitious visual effects that should feel technically extraordinary. Not for backend-only or non-UI tasks. — impeccable by Paul Bakaus (https://impeccable.style), bundled under Apache-2.0.':'用于设计、重构、审查、打磨和优化前端界面，覆盖网站、落地页、仪表板、组件、表单、设置、引导和空状态，并处理可访问性、性能、响应式、主题、排版、布局、颜色、动效、文案、错误状态和国际化。仅适用于 UI 相关任务。',
    'Kimi WebBridge lets AI control the user\'s real browser — navigate, click, type, read, screenshot, and interact with any website using the user\'s actual login sessions. Use this skill whenever the user wants to interact with websites, automate browser tasks, scrape web content, or perform any action requiring a real browser. Also use when the user mentions "browser", "webpage", "open URL", "screenshot", or asks to read/interact with any website. Use even for simple-sounding browser requests — the daemon handles all complexity.':'Kimi WebBridge 可使用用户现有登录状态控制真实浏览器，包括导航、点击、输入、读取、截图和网站交互。适用于网页操作、浏览器自动化和网页内容采集。',
    'Technical quality checks (a11y, perf, responsive)':'技术质量检查（辅助功能、性能和响应式）',
    'UX design review with heuristic scoring':'使用启发式评分进行 UX 设计审查',
    'Visual variant mode: pick elements in the browser, generate alternatives':'视觉变体模式：在浏览器中选择元素并生成替代方案',
    'Final quality pass before shipping':'发布前的最终质量检查',
    'Strip to essence, remove complexity':'保留核心，移除复杂性',
    'Step-by-step collaboration. Accepts a message after the command.':'分步协作。命令后可以继续输入消息。',
    'Plan first, execute when ready. Accepts a message after the command.':'先制定计划，准备好后再执行。命令后可以继续输入消息。',
    'End-to-end execution without interruption. Accepts a message after the command.':'不间断地端到端执行。命令后可以继续输入消息。',
    'Open file picker to attach files to this message':'打开文件选择器，将文件附加到此消息',
    'Open folder picker to attach a folder to this message':'打开文件夹选择器，将文件夹附加到此消息',
    'Investigate a topic deeply and save a cited markdown report.':'深入研究主题并保存带引用的 Markdown 报告。',
    'Adversarial reasoning with opposing perspectives and synthesis.':'使用对立观点和综合分析进行对抗性推理。',
    'Dispatch the rubber-duck sub-agent for an independent critique of the current approach, plan, or recent work.':'调用橡皮鸭子代理，独立评议当前方法、计划或最近的工作。',
    'Coordinate work across sessions and repos — multi-repo changes, cross-repo research, stacked PRs, or parallel workstreams. Accepts a message after the command.':'协调跨会话和跨仓库工作，包括多仓库修改、跨仓库研究、堆叠拉取请求或并行工作流。命令后可以继续输入消息。',
    'Spin up one nested child session for a focused task — e.g. research or a fix in another repo. Accepts a message after the command.':'启动一个嵌套子会话处理专门任务，例如研究或修复其他仓库。命令后可以继续输入消息。',
    'Build a stack of small, dependent PRs — one session per layer, each reviewed natively, then linked as a GitHub Stack. Accepts a message after the command.':'构建一组小型且相互依赖的拉取请求，每层使用一个会话并分别审查，然后关联为 GitHub Stack。命令后可以继续输入消息。',
    'Display the current session\'s context window usage information.':'显示当前会话的上下文窗口用量。',
    'Open your plan\'s usage and rate limits.':'打开套餐用量和速率限制。',
    'Open the model picker, or select by model name or ID.':'打开模型选择器，或按模型名称、ID 选择模型。',
    'Alias for /model. Open the model picker, or select by model name or ID.':'/model 的别名。打开模型选择器，或按模型名称、ID 选择模型。',
    'An active session is required to compact conversation context.':'需要活动会话才能压缩对话上下文。',
    'No active session is available to copy.':'没有可用于复制的活动会话。',
    'An active chat session is required to collect debug logs.':'需要活动聊天会话才能收集调试日志。',
    'No active session is available to deploy Fleet.':'没有可用于部署 Fleet 的活动会话。'
  })) zh.set(key, value);
  for (const [key, value] of Object.entries({
    'Trigger':'触发方式',
    'Hours':'小时',
    'Minute':'分钟',
    'Run in the cloud':'在云端运行',
    'Run even when your computer is off, triggered by events or on a schedule.':'即使电脑关机，也可通过事件或计划在云端运行。',
    'Select project':'选择项目',
    'Without a project, this automation will run as a chat.':'未选择项目时，此自动化将作为聊天运行。',
    'Use Create and run from the menu to test your prompt right away.':'使用菜单中的“创建并运行”立即测试提示词。',
    'Create':'创建',
    'Create automation options':'创建自动化选项',
    'Create and run':'创建并运行',
    'Save the automation and start a manual run right away.':'保存自动化并立即启动一次手动运行。',
    'Discard unsaved changes?':'要放弃未保存的更改吗？',
    'Your automation draft will be lost.':'你的自动化草稿将会丢失。',
    'Keep editing':'继续编辑',
    'Discard':'放弃',
    'Hourly':'每小时',
    'CRON':'CRON',
    'Issue created':'创建议题时',
    'Issue comment created':'创建议题评论时',
    'Pull request comment created: Review comment':'创建拉取请求评论时：审查评论',
    'Pull request comment created: Timeline comment':'创建拉取请求评论时：时间线评论',
    'Pull request merged':'合并拉取请求时',
    'Pull request opened':'打开拉取请求时',
    'Pull request synchronized':'同步拉取请求时',
    'e.g., Daily code review':'例如：每日代码审查',
    'Describe what this automation should do. Type / for skills…':'描述此自动化要执行的操作。输入 / 使用技能…',
    'Describe what this automation should do. Type / for skills...':'描述此自动化要执行的操作。输入 / 使用技能…'
  })) zh.set(key, value);

  const formValueZh = new Map(Object.entries({
    'Issue triage':'议题分类处理',
    'Review the latest GitHub issues and propose priorities and owners.':'查看最新的 GitHub 议题，并建议优先级和负责人。',
    'Changelog draft':'更新日志草稿',
    'Summarize key merged PRs this week into a release-note draft.':'将本周已合并的关键拉取请求总结为版本说明草稿。',
    'Repo audit':'仓库审计',
    'Audit open PRs and identify blockers or risky changes.':'审计未关闭的拉取请求，并识别阻塞项或高风险更改。',
    'Telemetry review':'遥测审查',
    'Review a PR for user-facing changes and suggest required telemetry events and properties.':'审查拉取请求中面向用户的更改，并建议所需的遥测事件和属性。',
    'Performance improvements':'性能改进',
    'Identify 10 performance improvements, then open a PR for the highest-impact, lowest-effort one.':'找出 10 项性能改进，并针对影响最大、工作量最小的一项创建拉取请求。',
    'Accessibility audit':'辅助功能审计',
    'Review PRs merged yesterday and summarize any accessibility issues.':'审查昨天合并的拉取请求，并总结所有辅助功能问题。',
    'Cost tips':'成本建议',
    'Get personalized tips to reduce token usage and cost.':'获取个性化建议，以减少令牌用量和成本。'
  }));
  const fragmentZh = new Map(Object.entries({
    "Choose when new local sessions ask before running tools. Use ":"选择新的本地会话在运行工具前何时询问。使用 ",
    " or ":" 或 ",
    " for a session-specific override.":" 可为单个会话覆盖此设置。",
    "Prefix added to generated branch names. Use ":"添加到生成分支名称前的前缀。使用 ",
    " for your GitHub login.":" 代表你的 GitHub 登录名。"
  }));
  fragmentZh.set("Preview:", "预览：");
  fragmentZh.set('Chat:', '聊天：');
  fragmentZh.set('fastest', '最快的');
  fragmentZh.set('from', '从');
  fragmentZh.set('GitHub', 'GitHub');
  fragmentZh.set('idea', '想法');
  fragmentZh.set('merged', '已合并的');
  fragmentZh.set('parallel', '并行');
  fragmentZh.set('pull', '拉取');
  fragmentZh.set('Run', '运行');
  fragmentZh.set('the', '这个');
  fragmentZh.set('to', '到');
  fragmentZh.set('track', '跟踪');
  fragmentZh.set('way', '方式');
  fragmentZh.set('zero', '零');  fragmentZh.set('changes,', '项更改，');
  fragmentZh.set('sessions,', '个会话，');
  fragmentZh.set('Continue as @', '以 @');
  fragmentZh.set('sign in with GitHub Enterprise Cloud (*.ghe.com)', '使用 GitHub Enterprise Cloud (*.ghe.com) 登录');  fragmentZh.set('"Hi, "', '“你好，”');
  fragmentZh.set('Hi, ', '你好，');
  fragmentZh.set('Show the GitHub Copilot icon in the', '在以下位置显示 GitHub Copilot 图标：');
  fragmentZh.set('system tray', '系统托盘');
  fragmentZh.set('action', '操作');
  fragmentZh.set('without shortcut', '未设置快捷键');  for (const [key, value] of Object.entries({
    "Choose when new local sessions ask before running tools. Use":"选择新的本地会话在运行工具前何时询问。使用",
    "Prefix added to generated branch names. Use":"添加到生成分支名称前的前缀。使用",
    "for your GitHub login.":"代表你的 GitHub 登录名。",
    "Regex used to detect a dev server URL in Run output. Matches VS Code's":"用于在运行输出中检测开发服务器网址，与 VS Code 的",
    ". Clear the field and save to go back to the default detector.":"。清空并保存可恢复默认检测方式。",
    "Access your sessions from GitHub web and mobile. Use":"从 GitHub 网页版和移动端访问会话。使用",
    "to toggle per session.":"为单个会话切换此功能。"
  })) fragmentZh.set(key, value);

  // ===== v1.3.0 扩展字典（本仓库自动生成，1234 条）=====
  for (const [key, value] of Object.entries({
"Ask anything or paste a URL. Use / for commands, & for sessions, # for issues…":"可以询问任何问题或粘贴网址。输入 / 使用命令、& 引用会话、# 引用议题…",
"Ask anything or paste a URL. Use / for commands, & sessions, # issues…":"可以询问任何问题或粘贴网址。输入 / 使用命令、& 引用会话、# 引用议题…",
"Automatically launch GitHub Copilot when you log in to your computer.":"登录电脑时自动启动 GitHub Copilot。",
"Build a personal landing page with dark mode.":"构建一个带深色模式的个人主页。",
"Build a personal landing page with dark mode. Creates a sample folder.":"构建一个带深色模式的个人主页。会创建示例文件夹。",
"Build a snake game with score tracking and increasing speed.":"构建一个记录分数并逐渐加速的贪吃蛇游戏。",
"Build a snake game with score tracking and increasing speed. Creates a sample folder.":"构建一个记录分数并逐渐加速的贪吃蛇游戏。会创建示例文件夹。",
"Build a weather app that shows live forecasts.":"构建一个显示实时预报的天气应用。",
"Build a weather app that shows live forecasts. Creates a sample folder.":"构建一个显示实时预报的天气应用。会创建示例文件夹。",
"Check for new versions in the background. When off, you can still check manually at any time.":"在后台检查新版本。关闭后，你仍可随时手动检查。",
"Configure sessions":"配置会话",
"Default, model and reasoning, Ctrl + Shift + E":"默认，模型与推理，Ctrl + Shift + E",
"Delete My work views without confirmation":"删除“我的工作”视图时不确认",
"Environment: This computer":"环境：本机",
"Free, show disk usage":"空闲空间，显示磁盘用量",
"Get started with one of these project ideas.":"从以下项目点子开始。",
"Keep running when window is closed":"关闭窗口后继续运行",
"Loading GitHub Copilot":"正在加载 GitHub Copilot",
"Low disk space":"磁盘空间不足",
"Mode:":"模式：",
"Model and reasoning:":"模型与推理：",
"New project, Ctrl + Alt + Shift + N":"新建项目，Ctrl + Alt + Shift + N",
"New session, Ctrl + N. New chat, Ctrl + Shift + N.":"新建会话，Ctrl + N。新建聊天，Ctrl + Shift + N。",
"Repository: Chat":"仓库：聊天",
"Skip the confirmation dialog when deleting My work views.":"删除“我的工作”视图时跳过确认对话框。",
"Skip to settings content":"跳到设置内容",
"Start on system start":"开机自启动",
"This computer":"本机",
"When you close the window, keep GitHub Copilot running in the system tray instead of quitting. Sessions keep running in the background.":"关闭窗口时，让 GitHub Copilot 保留在系统托盘中继续运行，而不是退出。会话会在后台继续运行。",
"Where repositories are stored.":"仓库的存储位置。",
"A checks canary request is being armed.":"正在准备检查金丝雀请求。",
"A merge to parent is already in progress.":"已有一个合并到父会话的操作正在进行。",
"A new version is ready to install with new features, improvements and fixes.":"新版本已可安装，包含新功能、改进和修复。",
"A session for this pull request is already being prepared.":"此拉取请求的会话已在准备中。",
"A short description of your repository":"仓库的简短描述",
"Account":"账户",
"Account used to clone this repository.":"用于克隆此仓库的账户。",
"Active backend subscriptions.":"活动的后端订阅。",
"Active Copilot CLI processes.":"活动的 Copilot CLI 进程。",
"Active resource subscriptions":"活动的资源订阅",
"Adding repository. You can still cancel.":"正在添加仓库。你仍可取消。",
"Adding this session's folder lets you open the session here.":"添加此会话的文件夹后，即可在这里打开该会话。",
"Adding this session's repository lets you open the session here.":"添加此会话的仓库后，即可在这里打开该会话。",
"Additional actions available, press tab to explore.":"有更多可用操作，按 Tab 浏览。",
"Agency":"代理机构",
"Agent changed to Default.":"代理已切换为默认。",
"Agent conversation":"代理对话",
"Agent merge":"代理合并",
"Agent merge is waiting for commit status.":"代理合并正在等待提交状态。",
"Agents that run on a schedule or when events happen.":"按计划或事件触发的代理。",
"AHP client protocol":"AHP 客户端协议",
"Alive state":"存活状态",
"All automations":"所有自动化",
"All returned repositories already exist locally.":"返回的所有仓库均已存在本地。",
"All sessions paused. Send a message to resume.":"所有会话已暂停。发送消息以继续。",
"All severities":"所有严重级别",
"All shortcuts reset to defaults":"所有快捷键已重置为默认",
"All sources":"所有来源",
"Allow":"允许",
"Allowing access from other Copilot apps while this app is open.":"此应用打开时，允许其他 Copilot 应用访问。",
"Already in progress":"已在进行中",
"Also archive nested sessions":"同时归档嵌套会话",
"Also delete nested sessions":"同时删除嵌套会话",
"An active session is required to ask a side question.":"需要活动会话才能提出旁路问题。",
"An active session is required to clear it.":"需要活动会话才能清空。",
"An active session is required to collect debug logs.":"需要活动会话才能收集调试日志。",
"An active session is required to restart it.":"需要活动会话才能重启。",
"An unexpected error caused the view to crash. You can try reloading to recover.":"意外错误导致视图崩溃。你可以尝试重新加载以恢复。",
"Annotate":"标注",
"Annotated image attached to the chat":"已标注并附加到聊天的图片",
"Answered":"已回答",
"Any uncommitted work is saved to a recovery ref first.":"所有未提交的工作会先保存到恢复引用。",
"Appearance":"外观",
"Application":"应用程序",
"Applications":"应用程序",
"Applied":"已应用",
"Applies to the next turn.":"应用于下一轮。",
"Applying":"正在应用",
"Approve":"批准",
"Approve this change?":"批准此更改？",
"Arabic":"阿拉伯语",
"Archive":"归档",
"Archive all chats":"归档所有聊天",
"Archive merged or closed PRs":"归档已合并或已关闭的拉取请求",
"Archived":"已归档",
"Archived sessions can't be pinned.":"已归档的会话无法置顶。",
"Archived sessions cannot merge to parent.":"已归档的会话无法合并到父会话。",
"Archived sessions do not expose local workspace files":"已归档的会话不会暴露本地工作区文件",
"Archives":"归档",
"Ask an agent to build a canvas.":"让代理构建一个画布。",
"Attached per-session Tauri Channels.":"附加的每会话 Tauri 通道。",
"Attempts":"尝试次数",
"Automation":"自动化",
"Automation added to group":"自动化已添加到分组",
"Automation added, but the run wasn't started":"自动化已添加，但未启动运行",
"Automation goal":"自动化目标",
"Automation group":"自动化分组",
"Automation group sections":"自动化分组区域",
"Automation is running":"自动化正在运行",
"Automation link copied":"自动化链接已复制",
"Automation links are not available.":"自动化链接不可用。",
"Automation needs your input":"自动化需要你的输入",
"Automation source filters":"自动化来源筛选器",
"Automation views":"自动化视图",
"Automation was interrupted":"自动化已被中断",
"Automations couldn't be checked. Check your connection and account access.":"无法检查自动化。请检查连接和账户访问权限。",
"Automations created in Takeoff for this repository appear here.":"在 Takeoff 中为此仓库创建的自动化会显示在这里。",
"Automations that work together in this group.":"在此分组中协同工作的自动化。",
"Automations triggered by repository events, even when your computer is off.":"由仓库事件触发的自动化，即使电脑关机也会运行。",
"Availability":"可用性",
"Available":"可用",
"Available fields":"可用字段",
"Available only in development builds.":"仅在开发构建中可用。",
"Azure DevOps fast poll enabled":"Azure DevOps 快速轮询已启用",
"Backend diagnostics":"后端诊断",
"Badge":"徽章",
"Bar chart":"柱状图",
"Base: pull request target branch":"基准：拉取请求目标分支",
"Branch":"分支",
"Browser preview":"浏览器预览",
"Building widget":"正在构建小组件",
"Bulgarian":"保加利亚语",
"Bundled version":"捆绑版本",
"Cache tier":"缓存层级",
"Cancel and try again to choose another environment.":"取消并重试，以选择其他环境。",
"Cancelled":"已取消",
"Canvases":"画布",
"Canvases, sidebar section":"画布，侧边栏区域",
"Categories":"分类",
"Changes":"更改",
"Changes suggested":"已建议更改",
"Chart":"图表",
"Chart settings":"图表设置",
"Check again":"再次检查",
"Check back later for improvements proposed by your automations.":"稍后再来查看自动化提出的改进。",
"Check your account and connection.":"请检查你的账户和连接。",
"Check your connection and account access, then try again.":"请检查连接和账户访问权限，然后重试。",
"Check your connection and try again in the group conversation.":"请检查连接，然后在分组对话中重试。",
"Check your connection and try again.":"请检查连接后重试。",
"Check your connection and try requesting an explanation again.":"请检查连接，然后再次请求解释。",
"Check your project and environment, then try again.":"请检查项目和环境的设置，然后重试。",
"Checking Computer Use status…":"正在检查 Computer Use 状态…",
"Checking for updates":"正在检查更新",
"Checks canary rollout is disabled.":"检查金丝雀发布已禁用。",
"Chinese (Mandarin)":"中文（普通话）",
"Choose a canvas…":"选择画布…",
"Choose a cloud project":"选择云端项目",
"Choose a filter":"选择筛选器",
"Choose a repository focus scenario…":"选择仓库聚焦场景…",
"Choose a sandbox option":"选择沙盒选项",
"Choose a Sandbox owner first.":"请先选择沙盒所有者。",
"Choose a supported effort in the model picker and try again.":"请在模型选择器中选择受支持的推理力度后重试。",
"Choose an account":"选择账户",
"Choose an account or organization":"选择账户或组织",
"Choose an environment":"选择环境",
"Choose Investigate to try again.":"选择“调查”以重试。",
"Choose needs input sound":"选择需要输入提示音",
"Choose notification sound":"选择通知提示音",
"Choose repositories":"选择仓库",
"Choose stable releases or opt into prerelease builds.":"选择稳定版本，或加入预发布版体验。",
"Choose storage location":"选择存储位置",
"Choose the account to associate with this repository.":"选择与此仓库关联的账户。",
"Choose the account whose organizations you want to use.":"选择要使用其组织的账户。",
"Choose the folder's environment":"选择文件夹的环境",
"Clear":"清空",
"Clear already queued":"清空操作已加入队列",
"Clear failed to queue":"清空操作未能加入队列",
"Clear filters":"清除筛选器",
"Clear is not available for cloud sessions yet.":"云端会话暂不支持清空。",
"Clear is not available for Projects. Use /compact to reduce context instead.":"项目不支持清空。请改用 /compact 压缩上下文。",
"Clearing session":"正在清空会话",
"Click to disable React Scan and reload":"点击禁用 React Scan 并重新加载",
"Click to enable React Scan and reload":"点击启用 React Scan 并重新加载",
"Click to enable React Scan and reload.":"点击启用 React Scan 并重新加载。",
"Clone on":"克隆于",
"Clone repository":"克隆仓库",
"Clone repository to create session?":"克隆仓库以创建会话？",
"Clone to this computer":"克隆到本机",
"Close and reopen the panel to try again.":"关闭并重新打开面板以重试。",
"Close editor":"关闭编辑器",
"Close the app while agents still have unfinished work?":"代理还有未完成的工作，仍要关闭应用？",
"Close updates":"关闭更新",
"Closed":"已关闭",
"Closing Copilot now will interrupt active work in":"现在关闭 Copilot 将中断正在进行的工作：",
"Cloud":"云端",
"Cloud automations":"云端自动化",
"Cloud is no longer available for this repository.":"此仓库已无法使用云端功能。",
"Cloud project":"云端项目",
"Cloud Projects":"云端项目",
"Cloud Projects are off":"云端项目已关闭",
"Cloud Projects use your github.com account.":"云端项目使用你的 github.com 账户。",
"Cloud sessions can't be archived.":"云端会话无法归档。",
"Cloud sessions do not expose local files":"云端会话不会暴露本地文件",
"Cloud sessions don't open in an app.":"云端会话不会在应用中打开。",
"Code scanning":"代码扫描",
"Collapse all":"全部折叠",
"Collapse file edits":"折叠文件编辑",
"Collapse tables":"折叠表格",
"Collapse thinking":"折叠思考过程",
"Comment":"评论",
"Commit SHA":"提交 SHA",
"Compaction":"上下文压缩",
"Complete command output could not be loaded. Reload the conversation and try again.":"无法加载完整命令输出。请重新加载对话后重试。",
"Complete diagnostic output.":"完整诊断输出。",
"Complete history could not be loaded.":"无法加载完整历史记录。",
"Complete history is already loaded.":"完整历史记录已加载。",
"Complete notification details.":"完整通知详情。",
"Completed":"已完成",
"Computer Use":"Computer Use",
"Computer Use is available on macOS and Windows.":"Computer Use 适用于 macOS 和 Windows。",
"Computer Use update in progress":"Computer Use 正在更新",
"Configuring filters...":"正在配置筛选器…",
"Connect":"连接",
"Connect a host to continue":"连接主机以继续",
"Connect a source":"连接来源",
"Connect this widget in the Copilot desktop app.":"在 Copilot 桌面应用中连接此小组件。",
"Connect to environment":"连接环境",
"Connect to load GitHub Trending.":"连接后加载 GitHub 趋势。",
"Connect to load this widget.":"连接后加载此小组件。",
"Connect to these remote sessions before archiving them.":"归档前请先连接这些远程会话。",
"Consumed":"已消耗",
"Consumer":"消费者",
"Continue anyway":"仍要继续",
"Conversation":"对话",
"Conversation compacted":"对话已压缩",
"Conversation is archived":"对话已归档",
"Copied":"已复制",
"Copied platform data diagnostics to clipboard":"平台数据诊断已复制到剪贴板",
"Copied the branch name to your clipboard.":"分支名称已复制到剪贴板。",
"Copied the checkout path to your clipboard.":"检出路径已复制到剪贴板。",
"Copied the project ID to your clipboard.":"项目 ID 已复制到剪贴板。",
"Copied the pull request URL to your clipboard.":"拉取请求网址已复制到剪贴板。",
"Copied the session ID to your clipboard.":"会话 ID 已复制到剪贴板。",
"Copilot CLI":"Copilot CLI",
"Copilot CLI failed to start":"Copilot CLI 启动失败",
"Copilot CLI is missing or not reachable, so sessions can't start.":"Copilot CLI 缺失或无法访问，因此会话无法启动。",
"Copilot CLI is not ready. Open the health check for troubleshooting details.":"Copilot CLI 未就绪。请打开健康检查查看排障详情。",
"Copilot code review":"Copilot 代码审查",
"Copilot could not confirm the effective managed policy for this session. Try again before changing the sandbox.":"Copilot 无法确认此会话生效的托管策略。更改沙盒前请重试。",
"Copilot file ownership":"Copilot 文件所有权",
"Copilot file ownership check":"Copilot 文件所有权检查",
"Copy all":"全部复制",
"Copy branch":"复制分支",
"Copy details":"复制详情",
"Copy ownership check error":"复制所有权检查错误",
"Copy raw data":"复制原始数据",
"Copy URL":"复制网址",
"Copy version, AHP client protocol":"复制版本，AHP 客户端协议",
"Copy version, copilotd":"复制版本，copilotd",
"Copy virtualization traces":"复制虚拟化跟踪",
"Couldn't apply Deployments filters":"无法应用部署筛选器",
"Couldn't attach file":"无法附加文件",
"Couldn't attach some files":"无法附加部分文件",
"Couldn't cancel performance profile":"无法取消性能分析",
"Couldn't cancel widget creation":"无法取消小组件创建",
"Couldn't change reasoning effort.":"无法更改推理力度。",
"Couldn't change the model.":"无法更改模型。",
"Couldn't change the sandbox":"无法更改沙盒",
"Couldn't clear the session.":"无法清空会话。",
"Couldn't confirm sandbox policy":"无法确认沙盒策略",
"Couldn't confirm your answer reached Takeoff. If the question is still open, answer it again.":"无法确认你的回答是否已送达 Takeoff。如果问题仍处于打开状态，请重新回答。",
"Couldn't connect to environment":"无法连接环境",
"Couldn't connect, but your prompt and selection were kept.":"连接失败，但你的提示词和选择已保留。",
"Couldn't copy keybindings.":"无法复制键位绑定。",
"Couldn't copy platform data diagnostics":"无法复制平台数据诊断",
"Couldn't copy the automation link.":"无法复制自动化链接。",
"Couldn't copy the automation link. Try again.":"无法复制自动化链接。请重试。",
"Couldn't copy the document link.":"无法复制文档链接。",
"Couldn't copy to clipboard.":"无法复制到剪贴板。",
"Couldn't copy to the clipboard.":"无法复制到剪贴板。",
"Couldn't create pull request session":"无法创建拉取请求会话",
"Couldn’t detach session":"无法分离会话",
"Couldn't disable automation":"无法禁用自动化",
"Couldn't enable automation":"无法启用自动化",
"Couldn't finish widget editing":"无法完成小组件编辑",
"Couldn't load application log files":"无法加载应用日志文件",
"Couldn't load application logs":"无法加载应用日志",
"Couldn't load automation group":"无法加载自动化分组",
"Couldn't load automation sessions":"无法加载自动化会话",
"Couldn't load canvases.":"无法加载画布。",
"Couldn't load choices.":"无法加载选项。",
"Couldn't load code scanning alerts.":"无法加载代码扫描警报。",
"Couldn't load data sources, so close and reopen this menu to try again.":"无法加载数据源。请关闭并重新打开此菜单以重试。",
"Couldn't load data sources.":"无法加载数据源。",
"Couldn't load deployments.":"无法加载部署。",
"Couldn't load Dreaming activity.":"无法加载 Dreaming 活动。",
"Couldn't load environments":"无法加载环境",
"Couldn’t load files":"无法加载文件",
"Couldn't load sessions":"无法加载会话",
"Couldn't load this project":"无法加载此项目",
"Couldn't load widget options.":"无法加载小组件选项。",
"Couldn't load workflow runs.":"无法加载工作流运行。",
"Couldn't load your repositories, so reload the app to try again.":"无法加载你的仓库。请重新加载应用以重试。",
"Couldn't mark performance profile":"无法标记性能分析",
"Couldn’t open artifact":"无法打开产物",
"Couldn't open Automation group":"无法打开自动化分组",
"Couldn't open conversation":"无法打开对话",
"Couldn't open environment choices":"无法打开环境选项",
"Couldn't open repository":"无法打开仓库",
"Couldn't open session in browser":"无法在浏览器中打开会话",
"Couldn't open the session in your browser.":"无法在浏览器中打开该会话。",
"Couldn't open this dialog":"无法打开此对话框",
"Couldn't open Web Inspector":"无法打开 Web 检查器",
"Couldn't prepare session for the GitHub mobile app":"无法为 GitHub 移动端准备会话",
"Couldn't prepare the session for the GitHub mobile app.":"无法为 GitHub 移动端准备该会话。",
"Couldn't refresh diagnostics. Showing the previous results while checking again.":"无法刷新诊断。正在再次检查，先显示上次结果。",
"Couldn't refresh diagnostics. Showing the previous results. Check again to retry.":"无法刷新诊断。当前显示上次结果。点击“再次检查”重试。",
"Couldn't refresh Dreaming activity.":"无法刷新 Dreaming 活动。",
"Couldn't refresh the base branch. Try again.":"无法刷新基准分支。请重试。",
"Couldn't resolve the pull request base branch. Try again.":"无法解析拉取请求基准分支。请重试。",
"Couldn't restore experiment choices":"无法恢复实验选项",
"Couldn't restore experiment choices.":"无法恢复实验选项。",
"Couldn’t resume":"无法恢复",
"Couldn't retry session":"无法重试会话",
"Couldn't reveal telemetry capture":"无法显示遥测采集",
"Couldn't save the SSH host label.":"无法保存 SSH 主机标签。",
"Couldn't send setup request":"无法发送设置请求",
"Couldn't send the clear request.":"无法发送清空请求。",
"Couldn't send the side question. Check your connection and try again.":"无法发送旁路问题。请检查连接后重试。",
"Couldn't start editing":"无法开始编辑",
"Couldn't start group editing. Check your connection and try again.":"无法开始分组编辑。请检查连接后重试。",
"Couldn't start improver setup":"无法启动改进器设置",
"Couldn't start improver setup. Check your connection and try again.":"无法启动改进器设置。请检查连接后重试。",
"Couldn't start performance profile":"无法启动性能分析",
"Couldn't start run":"无法启动运行",
"Couldn't stop performance profile":"无法停止性能分析",
"Couldn't stop run":"无法停止运行",
"Couldn't unlock private preview":"无法解锁预览体验",
"Couldn't update":"无法更新",
"Coverage / freshness":"覆盖率 / 新鲜度",
"Create an automation":"创建自动化",
"Create automations that run locally on your machine, on a schedule you choose.":"创建在你本机按所选计划运行的自动化。",
"Create automations that run on WSL or Mission Control.":"创建运行在 WSL 或 Mission Control 上的自动化。",
"Create from":"创建自",
"Create from content":"从内容创建",
"Create from ready.":"“创建自”已就绪。",
"Create from…":"从…创建",
"Create group":"创建分组",
"Create large conversation":"创建大型对话",
"Create nested session":"创建嵌套会话",
"Create new repository":"新建仓库",
"Create Pull Request…":"创建拉取请求…",
"Create repository":"创建仓库",
"Create Sandbox":"创建沙盒",
"Create Session…":"创建会话…",
"Created":"创建时间",
"Creating pull request session…":"正在创建拉取请求会话…",
"Croatian":"克罗地亚语",
"Current database version is":"当前数据库版本为",
"Current view:":"当前视图：",
"Customize":"自定义",
"Czech":"捷克语",
"Danish":"丹麦语",
"Dashboard name":"仪表板名称",
"Dashboards":"仪表板",
"Dashboards is not available.":"仪表板不可用。",
"Data source:":"数据源：",
"Database":"数据库",
"Database path":"数据库路径",
"Date format":"日期格式",
"Date range":"日期范围",
"Debug build":"调试构建",
"Debug tools":"调试工具",
"Delete automation?":"删除自动化？",
"Delete dashboard":"删除仪表板",
"Delete dashboard?":"删除仪表板？",
"Delete empty sessions":"删除空会话",
"Delete group":"删除分组",
"Delete older than 7 days":"删除 7 天前的记录",
"Delete remote session?":"删除远程会话？",
"Delete session anyway":"仍要删除会话",
"Deletion could not be confirmed.":"无法确认删除。",
"Dependabot":"Dependabot",
"Deployments":"部署",
"Describe a change…":"描述一处更改…",
"Describe a filter change...":"描述筛选器更改…",
"Describe the filters to send.":"描述要发送的筛选器。",
"Describe the widget to send.":"描述要发送的小组件。",
"Describe the work":"描述这项工作",
"Describe this widget":"描述此小组件",
"Describe what the nested session should do…":"描述嵌套会话要执行的操作…",
"Describe what to show…":"描述要显示的内容…",
"Description":"描述",
"Desktop":"桌面",
"Desktop entries":"桌面项",
"Detach session":"分离会话",
"Detail subscription":"详情订阅",
"Developer tools":"开发者工具",
"Disable":"禁用",
"Disabling":"正在禁用",
"Disabling remote control…":"正在禁用远程控制…",
"Discard filter changes":"放弃筛选器更改",
"Dismissed":"已关闭",
"Don't show me this again":"不再显示",
"Downloading update":"正在下载更新",
"Draft":"草稿",
"Draft sessions can't be archived.":"草稿会话无法归档。",
"Drag fields and choose their appearance.":"拖动字段并选择其显示方式。",
"Dreaming activity couldn't be loaded":"无法加载 Dreaming 活动",
"Dreaming activity isn't available for your GitHub.com account yet.":"你的 GitHub.com 账户暂不支持 Dreaming 活动。",
"Dreaming isn't available":"Dreaming 不可用",
"Dreaming isn't available.":"Dreaming 不可用。",
"Dreaming run":"Dreaming 运行",
"Duplicate":"复制副本",
"Dutch":"荷兰语",
"Earlier messages could not be requested. Scroll up to retry.":"无法请求更早的消息。请向上滚动以重试。",
"Effective PATH entries":"生效的 PATH 条目",
"Enable":"启用",
"Enable easter eggs":"启用彩蛋",
"Enabled":"已启用",
"Enabling":"正在启用",
"English (United Kingdom)":"英语（英国）",
"English (United States)":"英语（美国）",
"Enter":"Enter",
"Enter a complete session ID.":"请输入完整的会话 ID。",
"Enter a label for this SSH host.":"为此 SSH 主机输入一个标签。",
"Enter a reference like owner/repo#123.":"输入引用，例如 owner/repo#123。",
"Enter Full Screen":"进入全屏",
"Environment":"环境",
"Environments":"环境",
"Escape":"Esc",
"Estimated merge shortly":"预计很快合并",
"Estonian":"爱沙尼亚语",
"Events":"事件",
"Evidence eligible":"符合证据条件",
"Excluded":"已排除",
"Executable":"可执行文件",
"Executables":"可执行文件",
"ExP flags":"ExP 标志",
"Expand all":"全部展开",
"Expand done item":"展开已完成项",
"Expand file edits":"展开文件编辑",
"Expand item":"展开条目",
"Expand tables":"展开表格",
"Expand thinking":"展开思考过程",
"Expected a secure HTTPS document URL.":"需要安全的 HTTPS 文档网址。",
"Experiment choices restored":"实验选项已恢复",
"Expires":"到期时间",
"Explanation request sent to the group conversation.":"解释请求已发送到分组对话。",
"Export":"导出",
"Extension access changed. Close this dialog and try again.":"扩展访问权限已变化。请关闭此对话框后重试。",
"Fail-closed state":"失败关闭状态",
"Failed / conflicted":"失败 / 冲突",
"Fenced":"已隔离",
"Fenced / rejected":"已隔离 / 已拒绝",
"Fetching diagnostics":"正在获取诊断",
"Filter by level":"按级别筛选",
"Filter environments":"筛选环境",
"Filter repository sources…":"筛选仓库来源…",
"Filter runs":"筛选运行",
"Filters":"筛选器",
"Filters applied":"筛选器已应用",
"Filters applied.":"筛选器已应用。",
"Finding available environments":"正在查找可用环境",
"Finnish":"芬兰语",
"Fix Failed Checks":"修复失败的检查",
"Folder":"文件夹",
"Follows":"关注者",
"Forward":"前进",
"Found":"已找到",
"French (Canada)":"法语（加拿大）",
"French (France)":"法语（法国）",
"Full detail available":"完整详情可用",
"German":"德语",
"GitHub":"GitHub",
"GitHub auth":"GitHub 身份验证",
"GitHub CLI":"GitHub CLI",
"GitHub CLI is not installed":"未安装 GitHub CLI",
"GitHub Copilot is not connected.":"GitHub Copilot 未连接。",
"GitHub Privacy Statement":"GitHub 隐私声明",
"Go to latest":"转到最新",
"Go to repository":"转到仓库",
"Google Drive is available in the desktop app.":"Google Drive 已在桌面应用中可用。",
"Group":"分组",
"Group access changed during discovery.":"发现过程中分组访问权限发生了变化。",
"Group changes are unavailable. Reconnect or refresh group access before adding an automation.":"分组更改不可用。添加自动化前请重新连接或刷新分组访问权限。",
"Group goal":"分组目标",
"Group metadata is unavailable. Retry groups to refresh.":"分组元数据不可用。请重试分组以刷新。",
"Grouping":"分组方式",
"Groups":"分组",
"Health check logs":"健康检查日志",
"Health check logs copied to the clipboard.":"健康检查日志已复制到剪贴板。",
"Healthy":"健康",
"Help me add a scheduled improvement automation to this group.":"帮我为此分组添加一个定期的改进自动化。",
"Help me add automations to this group.":"帮我为此分组添加自动化。",
"Help me edit this automation group.":"帮我编辑此自动化分组。",
"Help us track down what happened. Start an investigation session. (Staff only)":"帮助我们排查原因。启动一个调查会话。（仅限员工）",
"Here’s what needs you":"以下事项需要你处理",
"Hide session chat":"隐藏会话聊天",
"Hindi":"印地语",
"History not loaded":"历史记录未加载",
"Hit rate":"命中率",
"Home tips will show again":"主页提示将再次显示",
"Hungarian":"匈牙利语",
"Image comparison mode":"图像对比模式",
"Improvement setup is unavailable. Check your account access and connection.":"改进设置不可用。请检查账户访问权限和连接。",
"Improvements":"改进",
"Improvements proposed by this group's automations appear here.":"此分组的自动化提出的改进会显示在这里。",
"Improvements proposed by your automations appear here for review.":"你的自动化提出的改进会显示在这里供审查。",
"In flight":"进行中",
"Include label":"包含标签",
"Inspect item":"检查条目",
"Install and restart":"安装并重启",
"Install GitHub CLI":"安装 GitHub CLI",
"Install now":"立即安装",
"Installing update":"正在安装更新",
"Installing update…":"正在安装更新…",
"Interrupted":"已中断",
"Investigate":"调查",
"Issue detail":"议题详情",
"Issues and pull requests":"议题与拉取请求",
"It is safe to close Copilot now. All active agent work has finished.":"现在关闭 Copilot 是安全的。所有代理工作均已完成。",
"It runs in the cloud on Takeoff and can work across repositories.":"它在 Takeoff 云端运行，并可跨仓库工作。",
"It runs in the cloud on Takeoff and works in one repository. Cross-repository projects aren't enabled on this Takeoff yet.":"它在 Takeoff 云端运行并作用于单个仓库。此 Takeoff 尚未启用跨仓库项目。",
"Italian":"意大利语",
"Item inspector":"条目检查器",
"Item layout":"条目布局",
"Its worktree is removed, but committed work on its branch is safe.":"其工作树已被移除，但分支上已提交的工作是安全的。",
"Japanese":"日语",
"Keep holding the shortcut while the local model starts.":"本地模型启动期间请按住快捷键不放。",
"Keep holding the shortcut while you speak.":"说话期间请按住快捷键不放。",
"Keeps the focused loading message on screen.":"让当前加载消息保持在屏幕上。",
"Keybindings copied":"键位绑定已复制",
"Korean":"韩语",
"Last fetched":"上次获取",
"Last successful sync":"上次成功同步",
"Latency":"延迟",
"Latest":"最新",
"Latest supported":"最新受支持",
"Latest visible run started":"最近一次可见运行开始于",
"Layout restored to when the editor opened.":"布局已恢复到编辑器打开时的状态。",
"Legacy cache flag":"旧版缓存标志",
"Light and dark, 1s each, then stops":"浅色与深色各 1 秒，然后停止",
"Line chart":"折线图",
"Link copied":"链接已复制",
"Live CLI process, resource subscription, channel, and network diagnostics.":"实时 CLI 进程、资源订阅、通道和网络诊断。",
"Live updates remain available. Retrying the saved items.":"实时更新仍可用。正在重试已保存的条目。",
"Load complete history":"加载完整历史记录",
"Load complete history?":"加载完整历史记录？",
"Load earlier":"加载更早内容",
"Load more":"加载更多",
"Loading accounts and organizations...":"正在加载账户和组织…",
"Loading active backend subscriptions":"正在加载活动后端订阅",
"Loading active subscriptions.":"正在加载活动订阅。",
"Loading attached session channels":"正在加载附加的会话通道",
"Loading attached session channels.":"正在加载附加的会话通道。",
"Loading automation group":"正在加载自动化分组",
"Loading automation group details":"正在加载自动化分组详情",
"Loading automation group...":"正在加载自动化分组…",
"Loading automation membership":"正在加载自动化成员关系",
"Loading automations...":"正在加载自动化…",
"Loading automations…":"正在加载自动化…",
"Loading backend subscriptions":"正在加载后端订阅",
"Loading changes…":"正在加载更改…",
"Loading CLI processes":"正在加载 CLI 进程",
"Loading CLI processes.":"正在加载 CLI 进程。",
"Loading command output":"正在加载命令输出",
"Loading complete stored output before exporting this conversation.":"导出此对话前先加载完整的已存储输出。",
"Loading Dashboards...":"正在加载仪表板…",
"Loading database schema version":"正在加载数据库架构版本",
"Loading database schema version.":"正在加载数据库架构版本。",
"Loading deployments…":"正在加载部署…",
"Loading environments…":"正在加载环境…",
"Loading filters...":"正在加载筛选器…",
"Loading group":"正在加载分组",
"Loading history...":"正在加载历史记录…",
"Loading logs…":"正在加载日志…",
"Loading merge queue…":"正在加载合并队列…",
"Loading organizations":"正在加载组织",
"Loading project":"正在加载项目",
"Loading runs…":"正在加载运行…",
"Loading the retained repository before recovery can start.":"恢复开始前先加载保留的仓库。",
"Loading trending":"正在加载趋势",
"Loading workflow runs…":"正在加载工作流运行…",
"Local":"本地",
"Local detail reads":"本地详情读取",
"Local files for worktree sessions are removed.":"工作树会话的本地文件将被移除。",
"Local session":"本地会话",
"Local summary reads":"本地摘要读取",
"Log file":"日志文件",
"Looking up link…":"正在查找链接…",
"Looking up session…":"正在查找会话…",
"Make all columns the same width":"使所有列等宽",
"Make all widgets in this column the same height":"使此列中所有小组件等高",
"Manage":"管理",
"Mark all as read":"全部标为已读",
"Mark as":"标记为",
"Mark as seen":"标记为已读",
"Marked as done":"已标记完成",
"Match system theme":"跟随系统主题",
"Matches / mismatches":"匹配 / 未匹配",
"Membership unavailable. Not counted as standalone.":"成员关系不可用。未计入独立项。",
"Memories":"记忆",
"Merge queue":"合并队列",
"Merge queue isn't set up for the default branch.":"默认分支未设置合并队列。",
"Merge to parent is only available for git-backed local sessions.":"合并到父会话仅适用于基于 git 的本地会话。",
"Merge to parent requires changes in this fork that differ from its parent.":"合并到父会话要求此复刻包含与其父级不同的更改。",
"Merged":"已合并",
"Message sent, starting new chat":"消息已发送，正在开始新聊天",
"Message the project":"给项目发消息",
"Missing":"缺失",
"Missing worktree":"缺失工作树",
"Model promotion unavailable for cloud sessions":"云端会话无法使用模型提升",
"More actions":"更多操作",
"More automations":"更多自动化",
"More repositories":"更多仓库",
"Move down":"下移",
"Move to":"移动到",
"Move up":"上移",
"Multiple repository extensions support this URL.":"多个仓库扩展都支持此网址。",
"Mutation outbox":"变更发件箱",
"Mutation queue":"变更队列",
"My Copilot":"我的 Copilot",
"Name (A-Z)":"名称（A-Z）",
"Name (Z-A)":"名称（Z-A）",
"Name an agent.":"为代理命名。",
"Name can only contain alphanumeric characters, hyphens, underscores, and periods.":"名称只能包含字母、数字、连字符、下划线和句点。",
"Needs approval":"需要批准",
"Needs attention":"需要关注",
"Needs input":"需要输入",
"Nested sessions will remain active and appear independently.":"嵌套会话将保持活动状态并独立显示。",
"New automation...":"新建自动化…",
"New canvas":"新建画布",
"New Chat":"新建聊天",
"New cloud automation":"新建云端自动化",
"New cloud project":"新建云端项目",
"New dashboard":"新建仪表板",
"New environment available":"有新环境可用",
"New project":"新建项目",
"New Project":"新建项目",
"New window":"新建窗口",
"Next artifact":"下一个产物",
"No account linked":"未关联账户",
"No active sessions":"没有活动会话",
"No artifact is open.":"没有打开的产物。",
"No automations found":"未找到自动化",
"No automations match these filters.":"没有符合这些筛选条件的自动化。",
"No automations to show.":"没有可显示的自动化。",
"No automations yet":"还没有自动化",
"No automations yet.":"还没有自动化。",
"No branches found for this repository yet.":"此仓库还没有找到分支。",
"No branches found.":"未找到分支。",
"No canvases yet":"还没有画布",
"No changed keybindings":"没有已更改的键位绑定",
"No chats older than 7 days.":"没有 7 天前的聊天。",
"No chats to archive.":"没有可归档的聊天。",
"No chats yet":"还没有聊天",
"No code scanning alerts match these filters.":"没有符合这些筛选条件的代码扫描警报。",
"No code scanning alerts yet.":"还没有代码扫描警报。",
"No curated sources are available.":"没有可用的精选来源。",
"No Dependabot alerts yet.":"还没有 Dependabot 警报。",
"No deployments match these filters.":"没有符合这些筛选条件的部署。",
"No deployments yet.":"还没有部署。",
"No diagnostic output was captured.":"未捕获到诊断输出。",
"No Dreaming activity yet":"还没有 Dreaming 活动",
"No Dreaming activity yet.":"还没有 Dreaming 活动。",
"No eligible missing indexes":"没有符合条件的缺失索引",
"No enabled extension supports this pull request URL.":"没有已启用的扩展支持此拉取请求网址。",
"No environments found.":"未找到环境。",
"No fields available for grouping":"没有可用于分组的字段",
"No groups in this view.":"此视图中没有分组。",
"No improvements available.":"没有可用的改进。",
"No improvements right now":"目前没有改进",
"No improvements to show":"没有可显示的改进",
"No improvements to show.":"没有可显示的改进。",
"No improvements yet":"还没有改进",
"No list items yet.":"还没有列表条目。",
"No local automations":"没有本地自动化",
"No matching accounts or organizations":"没有匹配的账户或组织",
"No matching automations.":"没有匹配的自动化。",
"No model promotion available":"没有可用的模型提升",
"No models are available.":"没有可用模型。",
"No notification details are available.":"没有可用的通知详情。",
"No other connected repositories":"没有其他已连接的仓库",
"No pinned sessions yet":"还没有置顶会话",
"No platform data events found":"未找到平台数据事件",
"No platform data reads or prefetches have been recorded yet.":"尚未记录到平台数据读取或预取。",
"No PR":"无拉取请求",
"No projects yet":"还没有项目",
"No pull requests in the merge queue yet.":"合并队列中还没有拉取请求。",
"No queries":"没有查询",
"No remote automations":"没有远程自动化",
"No remote sessions found":"未找到远程会话",
"No repositories added yet.":"还没有添加仓库。",
"No repositories found":"未找到仓库",
"No repositories, issues, or pull requests found":"未找到仓库、议题或拉取请求",
"No repository":"无仓库",
"No repository extension is available.":"没有可用的仓库扩展。",
"No results found":"未找到结果",
"No runs loaded":"未加载运行",
"No runs match the current filters.":"没有符合当前筛选条件的运行。",
"No runs yet":"还没有运行",
"No runs yet.":"还没有运行。",
"No secret scanning alerts yet.":"还没有机密扫描警报。",
"No security alerts yet.":"还没有安全警报。",
"No sessions":"没有会话",
"No sessions found":"未找到会话",
"No sessions match these filters":"没有符合这些筛选条件的会话",
"No settings found":"未找到设置",
"No settings imported":"未导入设置",
"No shortcut assigned":"未分配快捷键",
"No trace events recorded yet — copied an empty snapshot.":"尚未记录跟踪事件——已复制空快照。",
"No trending":"暂无趋势",
"No visible automations":"没有可见的自动化",
"No visible runs":"没有可见的运行",
"No widget yet.":"还没有小组件。",
"No widgets have been built since the app started.":"应用启动以来尚未构建任何小组件。",
"No workflow runs match these filters.":"没有符合这些筛选条件的工作流运行。",
"No workflow runs yet.":"还没有工作流运行。",
"Normalized checks canary":"规范化检查金丝雀",
"Norwegian (Bokmal)":"挪威语（书面）",
"Not applied":"未应用",
"Not live":"非实时",
"Not needed":"不需要",
"Not run yet":"尚未运行",
"Not seeing your cloud automations?":"看不到你的云端自动化？",
"Not writable":"不可写",
"Nothing on screen can be searched.":"屏幕上没有可搜索的内容。",
"Nothing to copy.":"没有可复制的内容。",
"Notification":"通知",
"Notification details":"通知详情",
"Number format":"数字格式",
"On extended PATH":"在扩展 PATH 上",
"On live registry PATH":"在实时注册表 PATH 上",
"On process PATH":"在进程 PATH 上",
"Online":"在线",
"Only an active child chat can be detached.":"只有活动的子聊天才能分离。",
"Only available in development builds with developer tools enabled.":"仅在启用了开发者工具的开发构建中可用。",
"Open Automations":"打开自动化",
"Open Automations to load automations.":"打开“自动化”以加载自动化。",
"Open canvas":"打开画布",
"Open canvas to launch it when you're ready.":"准备好后打开画布以启动。",
"Open Chat":"打开聊天",
"Open Environments":"打开环境",
"Open External Link":"打开外部链接",
"Open GitHub Copilot":"打开 GitHub Copilot",
"Open in":"打开于",
"Open in browser":"在浏览器中打开",
"Open in default app":"用默认应用打开",
"Open in GitHub":"在 GitHub 中打开",
"Open in individual sessions":"在独立会话中打开",
"Open in new session":"在新会话中打开",
"Open in new window":"在新窗口中打开",
"Open in panel":"在面板中打开",
"Open in…":"在…中打开",
"Open installed canvas":"打开已安装的画布",
"Open one from Cloud Projects in the sidebar, or create a new one.":"从侧边栏的“云端项目”打开一个，或新建一个。",
"Open Project":"打开项目",
"Open repository":"打开仓库",
"Open security alerts, with secrets first, then severity and oldest first among loaded alerts.":"打开安全警报：机密优先，其次按严重级别和最早排序。",
"Open Session":"打开会话",
"Open Takeoff in your browser and sign in once, then refresh.":"在浏览器中打开 Takeoff 并登录一次，然后刷新。",
"Open the automation and use Run now when the connection and group access are available.":"待连接和分组访问权限可用后，打开该自动化并使用“立即运行”。",
"Opening canvas…":"正在打开画布…",
"Opening Create from.":"正在打开“创建自”。",
"Opening repository picker.":"正在打开仓库选择器。",
"Opening session…":"正在打开会话…",
"Opening this automation on GitHub is not available.":"无法在 GitHub 上打开此自动化。",
"Operation":"操作",
"Operational errors":"运营错误",
"Options":"选项",
"Orchestration":"编排",
"Ordering":"排序",
"Organization":"组织",
"Other automations":"其他自动化",
"Overlap the images and drag the divider to compare":"重叠两张图片并拖动分隔条进行对比",
"Overview":"概览",
"Owned by another user":"属于其他用户",
"Owner":"所有者",
"Ownership check":"所有权检查",
"Ownership establishes billing and access boundaries.":"所有权用于确定计费和访问边界。",
"Paste a local session ID from /chronicle.":"粘贴来自 /chronicle 的本地会话 ID。",
"Paste a session ID…":"粘贴会话 ID…",
"PATH entries":"PATH 条目",
"Path length":"路径长度",
"Paused":"已暂停",
"Paused ·":"已暂停 ·",
"Pending":"待处理",
"Performance profile cancelled":"性能分析已取消",
"Performance profile saved":"性能分析已保存",
"Performance profile saved with errors":"性能分析已保存，但包含错误",
"Performance profiling started":"性能分析已开始",
"Permanently deletes":"永久删除",
"Personal account":"个人账户",
"Pick a canvas…":"选择画布…",
"Pick a model":"选择模型",
"Pick a repository before changing the sandbox.":"更改沙盒前请先选择仓库。",
"Pick a repository…":"选择仓库…",
"Pick a review verdict":"选择审查结论",
"Pick a theme mode":"选择主题模式",
"Pick an account":"选择账户",
"Pick an effort level":"选择推理力度",
"Pick pin or unpin":"选择置顶或取消置顶",
"Pick read or unread":"选择已读或未读",
"Pick what to copy":"选择要复制的内容",
"Pick where to open the session":"选择会话的打开位置",
"Pinned":"已置顶",
"Platform":"平台",
"Platform cache diagnostics":"平台缓存诊断",
"Platform data":"平台数据",
"Platform store database":"平台存储数据库",
"Platform store enabled":"平台存储已启用",
"Please check your connection and try again.":"请检查连接后重试。",
"Plugin":"插件",
"Plugin inventory is still loading.":"插件清单仍在加载。",
"Polish":"波兰语",
"Polling":"轮询",
"Portuguese (Brazil)":"葡萄牙语（巴西）",
"Portuguese (Portugal)":"葡萄牙语（葡萄牙）",
"Preparing environment...":"正在准备环境…",
"Preparing onboarding…":"正在准备引导…",
"Preparing the local transcription model.":"正在准备本地转写模型。",
"Prerelease":"预发布",
"Press the shortcut again to stop recording.":"再次按快捷键停止录音。",
"Preview":"预览",
"Previous artifact":"上一个产物",
"Private preview already unlocked":"预览体验已解锁",
"Process PATH entries":"进程 PATH 条目",
"Project details":"项目详情",
"Project details tabs":"项目详情标签页",
"Project ID":"项目 ID",
"Project name":"项目名称",
"Project repositories":"项目仓库",
"Proposal pending":"提案待处理",
"Pull request detail":"拉取请求详情",
"Pull request URL access changed. Reopen Quick Open and try again.":"拉取请求网址访问权限已变化。请重新打开快速打开并重试。",
"Queries / hits / misses":"查询 / 命中 / 未命中",
"Queue not loaded.":"队列未加载。",
"Queued message recovery is waiting for session history. Your queued messages are still saved.":"排队消息恢复正在等待会话历史记录。你的排队消息仍在保存中。",
"Queued message recovery needs session history":"排队消息恢复需要会话历史记录",
"Raw diagnostics JSON":"原始诊断 JSON",
"React Scan active. Click to disable and reload.":"React Scan 已启用。点击禁用并重新加载。",
"Read-only; refreshes every minute.":"只读；每分钟刷新。",
"Reading the project from Takeoff.":"正在从 Takeoff 读取项目。",
"Ready to merge":"可以合并",
"Ready to review":"可以审查",
"Recent activity across the automations in this group.":"此分组中各自动化的近期活动。",
"Recent activity from your automations.":"你的自动化的近期活动。",
"Recent activity from your Dreaming automations.":"你的 Dreaming 自动的近期活动。",
"Recent evidence":"近期证据",
"Recent history is still loading.":"近期历史记录仍在加载。",
"Recent model history":"最近的模型历史",
"Recent model history reset.":"最近的模型历史已重置。",
"Recent platform data events":"近期平台数据事件",
"Reconnect or refresh group access before adding automations.":"添加自动化前请重新连接或刷新分组访问权限。",
"Recording stopped and the unsaved capture was discarded.":"录音已停止，未保存的录音已丢弃。",
"Recovered from backup":"已从备份恢复",
"Recovery":"恢复",
"Recovery sanitation":"恢复清理",
"Refresh":"刷新",
"Refresh cloud automations":"刷新云端自动化",
"Refreshing base branch.":"正在刷新基准分支。",
"Refreshing base branch...":"正在刷新基准分支…",
"Registry install path":"注册表安装路径",
"Reload":"重新加载",
"Remaining automations:":"剩余自动化：",
"Remote":"远程",
"Remote cleanup for this session could not be completed. Deleting":"此会话的远程清理未能完成。正在删除",
"Remote environment":"远程环境",
"Remote host (WSL)…":"远程主机（WSL）…",
"Remote sessions not archived":"远程会话未归档",
"Rename":"重命名",
"Reopen the repository and try creating this workspace again.":"请重新打开仓库，然后再次尝试创建此工作区。",
"Reorder":"重新排序",
"Repositories":"仓库",
"Repositories this project can work in":"此项目可使用的仓库",
"Repository":"仓库",
"Repository focus scenarios":"仓库聚焦场景",
"Repository host":"仓库主机",
"Repository memories":"仓库记忆",
"Repository name":"仓库名称",
"Repository path":"仓库路径",
"Repository picker content":"仓库选择器内容",
"Repository picker ready.":"仓库选择器已就绪。",
"Repository source":"仓库来源",
"Repository storage":"仓库存储",
"Repository URL":"仓库网址",
"Repository URL access changed. Reopen Quick Open and try again.":"仓库网址访问权限已变化。请重新打开快速打开并重试。",
"Request changes":"请求更改",
"Requested":"已请求",
"Required":"必填",
"Reset":"重置",
"Reset changes":"重置更改",
"Reset filters":"重置筛选器",
"Reset the last-used and recent model history used by the model picker.":"重置模型选择器使用的最近使用和最近模型历史。",
"Resetting experiments is available to staff.":"重置实验仅限员工使用。",
"Resetting session":"正在重置会话",
"Resize project details":"调整项目详情大小",
"Resolve Comments":"解决评论",
"Resolved via":"解决方式",
"Resolving repository":"正在解析仓库",
"Resolving the pull request URL.":"正在解析拉取请求网址。",
"Resource":"资源",
"Restart now":"立即重启",
"Restart required":"需要重启",
"Restart to update":"重启以更新",
"Restarting project…":"正在重启项目…",
"Restarting session…":"正在重启会话…",
"Restarting the app.":"正在重启应用。",
"Restore":"恢复",
"Restore the original conversation in Manage sessions before reopening it. No replacement conversation was created.":"重新打开前，请先在“管理会话”中恢复原始对话。未创建替代对话。",
"Restore the original conversation in Manage sessions before requesting an explanation. No replacement conversation was created.":"请求解释前，请先在“管理会话”中恢复原始对话。未创建替代对话。",
"Result":"结果",
"Resume":"恢复",
"Resume project":"恢复项目",
"Resume session":"恢复会话",
"Resume Session":"恢复会话",
"Resume session by ID":"按 ID 恢复会话",
"Retry loading":"重试加载",
"Retry to check for a crash.":"重试以检查崩溃。",
"Retry to dismiss this notification.":"重试以关闭此通知。",
"Return to the group and refresh access to finish adding the automation.":"返回分组并刷新访问权限，以完成自动化的添加。",
"Return to the group to finish adding the automation.":"返回分组以完成自动化的添加。",
"Review verdicts":"审查结论",
"Review what's left of":"审查剩余内容：",
"Romanian":"罗马尼亚语",
"Run data unavailable ·":"运行数据不可用 ·",
"Run now":"立即运行",
"Run on":"运行于",
"Run started":"运行已开始",
"Running":"运行中",
"Running work could not be checked. Please try again.":"无法检查正在运行的工作。请重试。",
"Runs of":"运行于",
"Runtime / authority":"运行时 / 授权方",
"Russian":"俄语",
"Sandbox owner":"沙盒所有者",
"Sandbox policy is unconfirmed":"沙盒策略未确认",
"Saved canvas state could not be loaded.":"无法加载已保存的画布状态。",
"Saving Streamer Mode.":"正在保存直播模式。",
"Scheduled":"已排期",
"Schema version":"架构版本",
"Search accounts and organizations...":"搜索账户和组织…",
"Search automations":"搜索自动化",
"Search by branch name":"按分支名称搜索",
"Search by title, number, author, or URL":"按标题、编号、作者或网址搜索",
"Search connected repositories":"搜索已连接的仓库",
"Search for a repository by name, owner/repo, or GitHub URL.":"按名称、owner/repo 或 GitHub 网址搜索仓库。",
"Search GitHub repositories":"搜索 GitHub 仓库",
"Search or type owner/repo…":"搜索或输入 owner/repo…",
"Search projects, repositories, PRs, issues, or paste a URL…":"搜索项目、仓库、拉取请求、议题，或粘贴网址…",
"Search remote sessions…":"搜索远程会话…",
"Search runs":"搜索运行",
"Search shared automations…":"搜索共享的自动化…",
"Searching repositories, issues, and pull requests…":"正在搜索仓库、议题和拉取请求…",
"Secret scanning":"机密扫描",
"Section name":"区域名称",
"See details for why this canvas could not be reopened.":"查看此画布无法重新打开的原因。",
"Select a repository.":"请选择仓库。",
"Select account":"选择账户",
"Select at least one repository.":"请至少选择一个仓库。",
"Select repository account":"选择仓库账户",
"Select run":"选择运行",
"Select where to run this session before creating it.":"创建会话前请先选择运行位置。",
"Selected":"已选择",
"Selecting a repository determines where the child session will be spawned.":"选择的仓库决定子会话的创建位置。",
"Send feedback":"发送反馈",
"Send prompt":"发送提示词",
"Send to project":"发送到项目",
"Sent each selected item to its own session.":"已将每个所选条目发送到各自的会话。",
"Separator":"分隔符",
"Session":"会话",
"Session archive unavailable:":"会话归档不可用：",
"Session Channel subscriptions":"会话通道订阅",
"Session chat":"会话聊天",
"Session creation cancelled.":"会话创建已取消。",
"Session creation could not be started.":"无法启动会话创建。",
"Session ID":"会话 ID",
"Session not archived":"会话未归档",
"Session opening options":"会话打开选项",
"Session started":"会话已开始",
"Session summary":"会话摘要",
"Session warmup:":"会话预热：",
"Set the Takeoff origin":"设置 Takeoff 源",
"Set up a scheduled automation to review this group and propose improvements.":"设置一个定期自动化来审查此分组并提出改进。",
"Set up groups":"设置分组",
"Setting up cloud container...":"正在设置云容器…",
"Setup request sent to the group conversation.":"设置请求已发送到分组对话。",
"Severity":"严重级别",
"Share as gist":"分享为 Gist",
"Share session as secret gist?":"将会话分享为私密 Gist？",
"Shared automations":"共享的自动化",
"Shell commands not supported":"不支持 Shell 命令",
"Short":"短",
"Show all changes":"显示所有更改",
"Show all events":"显示所有事件",
"Show as":"显示为",
"Show changes":"显示更改",
"Show in":"显示于",
"Show in Finder":"在 Finder 中显示",
"Show in menu bar":"在菜单栏中显示",
"Show less":"收起",
"Show more":"显示更多",
"Show sample repositories":"显示示例仓库",
"Show session chat":"显示会话聊天",
"Show telemetry capture":"显示遥测采集",
"Side by side":"并排",
"Sidebar items":"侧边栏条目",
"Sign in to Takeoff":"登录 Takeoff",
"Sign in to the app again with a github.com account that has repo and read:org access.":"请使用具有 repo 和 read:org 权限的 github.com 账户重新登录应用。",
"Sign in with github.com":"使用 github.com 登录",
"Sign out?":"退出登录？",
"Size calculation complete.":"空间计算完成。",
"Skipped":"已跳过",
"Slider":"滑块",
"Slovak":"斯洛伐克语",
"Slow moment marked":"已标记卡顿时刻",
"Snapshot sampled":"已采样快照",
"Some automations couldn't be checked.":"部分自动化无法检查。",
"Some capture evidence could not be collected. See the saved profile for details.":"部分采集证据未能收集。详情请查看已保存的分析文件。",
"Some Dreaming results couldn't be loaded.":"部分 Dreaming 结果无法加载。",
"Some files belong to another user":"部分文件属于其他用户",
"Some groups couldn't be checked.":"部分分组无法检查。",
"Some improvements couldn't be checked.":"部分改进无法检查。",
"Some results couldn't be loaded.":"部分结果无法加载。",
"Some security alerts couldn't be loaded.":"部分安全警报无法加载。",
"Some work still needs attention":"仍有工作需要关注",
"Something went wrong creating the folder. Please try again.":"创建文件夹时出错。请重试。",
"Source":"来源",
"Spanish (Spain)":"西班牙语（西班牙）",
"Spanish (United States)":"西班牙语（美国）",
"Spark line":"走势线",
"Stable":"稳定版",
"Stacked bars":"堆叠柱状图",
"Staff":"员工",
"Start a session or chat…":"开始会话或聊天…",
"Start prompting in this session to create the worktree":"在此会话中开始输入提示词以创建工作树",
"Start the repository with an initial README file":"用初始 README 文件初始化仓库",
"Started merge into":"已开始合并到",
"Starting an investigation session…":"正在启动调查会话…",
"Startup index repair":"启动索引修复",
"State":"状态",
"Status unavailable ·":"状态不可用 ·",
"Status unknown":"状态未知",
"Stopped":"已停止",
"Storage":"存储",
"Streamer Mode":"直播模式",
"Succeeded":"已成功",
"Suggested filters":"建议的筛选器",
"Suggested repositories":"建议的仓库",
"Suggestion cards restored.":"建议卡片已恢复。",
"Suggestions hidden":"建议已隐藏",
"Suggestions to help this group's automations work better.":"帮助此分组的自动化更好工作的建议。",
"Suggestions to make this group's automations better.":"让此分组的自动化更好的建议。",
"Supported":"已支持",
"Surface":"呈现",
"Swedish":"瑞典语",
"Switch account":"切换账户",
"Switch to a local or worktree session to select this model.":"请切换到本地或工作树会话以选择此模型。",
"Switch to a local or worktree session to select this promoted model.":"请切换到本地或工作树会话以选择此提升模型。",
"Switch to dark theme":"切换到深色主题",
"Switch to light theme":"切换到浅色主题",
"Takeoff applies it to":"Takeoff 将其应用于",
"Takeoff didn't accept the answer.":"Takeoff 未接受该回答。",
"Takeoff hasn't started this project's coordinator yet, so there's no chat. It appears here once Takeoff activates the project.":"Takeoff 尚未启动此项目的协调器，因此没有聊天。Takeoff 激活项目后会显示在这里。",
"Takeoff refused the message: sign in to this Takeoff origin in your browser once, then try again.":"Takeoff 拒绝了消息：请在浏览器中登录此 Takeoff 源一次，然后重试。",
"Takeoff rejected your GitHub token":"Takeoff 拒绝了你的 GitHub 令牌",
"Takeoff rejected your GitHub token. Sign in to the app again, then retry.":"Takeoff 拒绝了你的 GitHub 令牌。请重新登录应用后重试。",
"Tell us what's working well for you...":"告诉我们哪些功能对你有帮助…",
"Terminal commands aren't available for cloud sessions.":"云端会话不支持终端命令。",
"Text style":"文本样式",
"That palette is no longer available.":"该调色板已不可用。",
"That repository or folder is gone.":"该仓库或文件夹已不存在。",
"That session belongs to a project. Open it from the project instead.":"该会话属于某个项目。请改从项目打开。",
"That session has nothing to copy yet.":"该会话还没有可复制的内容。",
"That session is already archived.":"该会话已归档。",
"That session is gone.":"该会话已不存在。",
"That session is hidden from navigation.":"该会话已从导航中隐藏。",
"That session isn't archived.":"该会话未归档。",
"That session's files aren't on this computer.":"该会话的文件不在此电脑上。",
"The artifact is still loading.":"产物仍在加载。",
"The canvas catalog could not load. Open canvas to retry.":"画布目录无法加载。请打开画布重试。",
"The checks canary request is unconfirmed. Refresh platform data diagnostics before trying again.":"检查金丝雀请求未确认。重试前请刷新平台数据诊断。",
"The clipboard has no settings this app supports.":"剪贴板中没有此应用支持的设置。",
"The conversation couldn't be loaded. Open it and try again.":"无法加载该对话。请打开后重试。",
"The conversation wasn't created. Try opening the panel again.":"对话未创建。请再次打开面板。",
"The Copilot CLI isn't responding. Open the health check for details.":"Copilot CLI 未响应。详情请打开健康检查。",
"The count may be incomplete.":"计数可能不完整。",
"The dialog failed to load. Try again.":"对话框加载失败。请重试。",
"The extension installed, but no canvases could be loaded. Open canvas to retry.":"扩展已安装，但无法加载画布。请打开画布重试。",
"The file tab could not be opened.":"无法打开文件标签页。",
"The group response is invalid. Cancel and refresh groups before trying again.":"分组响应无效。请取消并刷新分组后重试。",
"The improvement changed. Reopen it before requesting an explanation.":"该改进已变化。请求解释前请重新打开。",
"The keybindings are invalid.":"键位绑定无效。",
"The model is not downloading.":"模型未在下载。",
"The original Side chat's parent is missing. Restore its parent before reopening; no replacement was created.":"原旁路聊天的父级缺失。重新打开前请先恢复其父级；未创建替代项。",
"The parent session is no longer available.":"父会话已不可用。",
"The project was created, but your message wasn't sent":"项目已创建，但你的消息未发送",
"The renderer just crashed.":"渲染进程刚崩溃了。",
"The runtime refused the sandbox change.":"运行时拒绝了沙盒更改。",
"The sandbox remains on as a fail-safe until Copilot confirms managed policy.":"在 Copilot 确认托管策略之前，沙盒作为兜底保持开启。",
"The selected account is unavailable. Choose another GitHub cloud account, or sign in and reopen this picker.":"所选账户不可用。请选择其他 GitHub 云账户，或重新登录并再打开此选择器。",
"The selected file couldn't be launched as an application.":"无法将所选文件作为应用程序启动。",
"The session could not be created. Reconnect and try again.":"无法创建会话。请重新连接后重试。",
"The session wasn't shared.":"会话未分享。",
"The settings are invalid.":"设置无效。",
"The thinking effort can't be changed here.":"无法在此处更改思考力度。",
"The timestamp was added to the active performance profile.":"时间戳已添加到当前性能分析。",
"Their history is kept and they are restored with this":"它们的历史会保留，并随此恢复",
"Their local files are kept.":"它们的本地文件会保留。",
"Their local files are preserved.":"它们的本地文件将被保留。",
"Themes and graphics":"主题与图形",
"There is no other account to switch to.":"没有其他可切换的账户。",
"There is no recent model history to reset.":"没有可重置的最近模型历史。",
"There isn't an active model promotion to select right now.":"当前没有可选择的模型提升。",
"Thinking effort":"思考力度",
"This also deletes":"这还将删除",
"This application was removed.":"此应用已被移除。",
"This artifact isn't a file.":"此产物不是文件。",
"This automation's group changed or is ambiguous. Refresh the group before requesting an explanation.":"此自动化的分组已变化或不明确。请求解释前请刷新分组。",
"This canvas does not support selection completion.":"此画布不支持选择补全。",
"This file could not be opened.":"无法打开此文件。",
"This folder is not available locally. Select its WSL environment before creating a session.":"此文件夹在本地不可用。创建会话前请选择其 WSL 环境。",
"This group has no visible automations.":"此分组没有可见的自动化。",
"This group is unavailable. Check account access and whether grouping is enabled.":"此分组不可用。请检查账户访问权限以及是否启用分组。",
"This is the first artifact.":"这是第一个产物。",
"This is the last artifact.":"这是最后一个产物。",
"This page is no longer available.":"此页面已不可用。",
"This pull request already has an active checks canary request.":"此拉取请求已有活动的检查金丝雀请求。",
"This saved widget couldn't be restored, so recreate it to load new data.":"此已保存的小组件无法恢复。请重新创建以加载新数据。",
"This session has no conversation yet.":"此会话还没有对话。",
"This session is no longer available.":"此会话已不可用。",
"This session will run on a remote environment, where the local sandbox does not apply.":"此会话将在远程环境中运行，本地沙盒不适用。",
"This SSH environment is no longer available.":"此 SSH 环境已不可用。",
"This widget fills one column.":"此小组件占满一列。",
"This widget no longer exists.":"此小组件已不存在。",
"This widget was deleted.":"此小组件已被删除。",
"This will remove the widget from your space. Your issues, pull requests, and saved views will not be deleted.":"这会从你的空间中移除该小组件。你的议题、拉取请求和已保存的视图不会被删除。",
"Tools":"工具",
"Trending":"趋势",
"Trending developers":"趋势开发者",
"Trending repositories":"趋势仓库",
"Triggers":"触发器",
"Trust review needed":"需要信任审查",
"Try a different search or adjust your filters.":"请尝试其他搜索或调整筛选条件。",
"Try again to load cloud automations":"重试加载云端自动化",
"Try again. Check the repository remote and linked account if the problem continues.":"请重试。如果问题持续，请检查仓库远程和关联账户。",
"Try Open again, or use Open in new session if the canvas needs chat or an agent.":"请再次尝试“打开”；如果画布需要聊天或代理，请使用“在新会话中打开”。",
"Try opening the session again.":"请再次尝试打开会话。",
"Try opening the session on mobile again.":"请再次尝试在移动端打开会话。",
"Try selecting the diagnostics and copying manually.":"请尝试手动选择诊断内容并复制。",
"Turkish":"土耳其语",
"Turn finished, unread response":"轮次已完成，回复未读",
"Turn off hidden animations (rocket, emoji fireworks)":"关闭隐藏动画（火箭、表情烟花）",
"Turn on hidden animations (rocket, emoji fireworks)":"开启隐藏动画（火箭、表情烟花）",
"Ukrainian":"乌克兰语",
"Unavailable group":"分组不可用",
"Unexpected fresh database":"意外的全新数据库",
"Unknown":"未知",
"Unknown sandbox option":"未知沙盒选项",
"Unknown session":"未知会话",
"Unpinned":"已取消置顶",
"Unread":"未读",
"Unread activity":"未读活动",
"Unresolved mutation details":"未解决的变更详情",
"Unresolved mutations":"未解决的变更",
"Unresolved platform mutations":"未解决的平台变更",
"Until":"截止",
"Untitled chat":"未命名聊天",
"Untitled session":"未命名会话",
"Update channel":"更新渠道",
"Update deferred until a compatible release is available. Your data has not been changed.":"更新已推迟，直到有兼容版本可用。你的数据未被更改。",
"Update with Microsoft Store":"通过 Microsoft Store 更新",
"Updated":"已更新",
"Updates are managed by Microsoft Store. Check for updates here.":"更新由 Microsoft Store 管理。请在此处检查更新。",
"Updating filters...":"正在更新筛选器…",
"Updating widget":"正在更新小组件",
"Upload the conversation from":"上传对话自",
"Uptime":"运行时长",
"Usage and plan":"用量与套餐",
"Use \"/sandbox on\" or \"/sandbox off\".":"使用 \"/sandbox on\" 或 \"/sandbox off\"。",
"Use * for any user or none for unassigned.":"使用 * 表示任意用户，留空表示未指派。",
"Use a text box":"使用文本框",
"Use agents to handle recurring work on a cadence you choose.":"使用代理按你选择的节奏处理重复工作。",
"Use Check again to retry.":"使用“再次检查”重试。",
"Use for cloud sessions without cloning locally.":"用于不在本地克隆的云端会话。",
"Use or clone the repository on this host.":"在此主机上使用或克隆仓库。",
"Use the answers I chose in the form.":"使用我在表单中选择的答案。",
"Use the app until it feels slow, then run Debug: mark slow moment or Debug: stop performance profile.":"正常使用应用直到感觉变慢，然后运行“调试：标记卡顿时刻”或“调试：停止性能分析”。",
"Use this account to open the pull request session.":"使用此账户打开拉取请求会话。",
"Use this for non-GitHub repositories or private repos without app access.":"适用于非 GitHub 仓库，或应用无权访问的私有仓库。",
"Version":"版本",
"Version error":"版本错误",
"Vietnamese":"越南语",
"View in Issues":"在 Issues 中查看",
"View options":"视图选项",
"View release":"查看版本",
"View timeline":"查看时间线",
"Voice dictation is listening":"语音听写正在聆听",
"Voice dictation types into whichever text box you've selected. Open a session or click in a text field, then try again.":"语音听写会输入到你选中的文本框。请打开会话或点击文本框后重试。",
"Voice models are temporarily rate limited. Try again shortly.":"语音模型暂时受到速率限制。请稍后重试。",
"Wait for Copilot to finish.":"请等待 Copilot 完成。",
"Wait for the GitHub rate limit to reset.":"请等待 GitHub 速率限制重置。",
"Warning":"警告",
"We couldn't run the Copilot health check. Sessions won't start until this is resolved.":"无法运行 Copilot 健康检查。解决此问题前会话无法启动。",
"Web Inspector could not be opened. Try again.":"无法打开 Web 检查器。请重试。",
"Web Inspector requires a native debug build with developer tools enabled.":"Web 检查器需要启用开发者工具的原生调试构建。",
"Website":"网站",
"WebSocket port":"WebSocket 端口",
"What do you find most valuable?":"你觉得最有价值的是什么？",
"What is missing or could be improved?":"缺少什么或可以改进什么？",
"What should this chart show?":"此图表应显示什么？",
"What should this list show?":"此列表应显示什么？",
"What should this project work on?":"此项目应该做什么？",
"What would make this app better for you...":"什么能让这个应用对你更好用…",
"What’s new":"新功能",
"When Dreaming is on, recent runs for your account and for repositories you've added appear here.":"Dreaming 开启后，你的账户和已添加仓库的近期运行会显示在这里。",
"Widget creation logs are available in the Copilot desktop app.":"小组件创建日志可在 Copilot 桌面应用中查看。",
"Widget creation logs copied":"小组件创建日志已复制",
"Widget updated":"小组件已更新",
"Worker":"工作器",
"Workers can start in any repository you've connected to Takeoff.":"工作器可在你连接到 Takeoff 的任何仓库中启动。",
"Workers start only in these repositories.":"工作器仅在这些仓库中启动。",
"Workflow":"工作流",
"Working":"进行中",
"Writable":"可写",
"Yes, and don't ask again":"是，并且不再询问",
"Yes, I agree to GitHub and Microsoft linking my survey responses with my Copilot usage data for research purposes. See the":"是，我同意 GitHub 和 Microsoft 将我的问卷回答与我的 Copilot 使用数据关联用于研究目的。参见",
"You can restore them anytime from settings.":"你可以随时在设置中恢复它们。",
"You haven't changed any shortcuts, so the copied list is empty.":"你没有更改任何快捷键，因此复制的列表为空。",
"You'll need to sign in again to use Copilot.":"你需要重新登录才能使用 Copilot。",
"You’ll see them on the home page next time.":"下次你会在主页看到它们。",
"Your automations":"你的自动化",
"Your canvases":"你的画布",
"Your changes could not be saved. Please try again.":"无法保存你的更改。请重试。",
"Your color blind setting needs an update":"你的色觉辅助设置需要更新",
"Your feedback will be used to diagnose and fix GitHub Copilot app issues. Feedback is visible to other GitHub staff.":"你的反馈将用于诊断和修复 GitHub Copilot 应用问题。反馈对其他 GitHub 员工可见。",
"Your previous color blind adjustment is no longer available. Choose a new color filter.":"你之前的色觉辅助调整已不可用。请选择新的颜色滤镜。",
"Your settings were updated.":"你的设置已更新。",
"Your shortcuts were updated.":"你的快捷键已更新。",
"Your widget preview appears here.":"你的小组件预览会显示在这里。",
"Typeahead menu":"预输入菜单",
"MONDAY":"周一",
"TUESDAY":"周二",
"SUNDAY":"周日"
  })) zh.set(key, value);

  const skipSelector = 'pre,code,kbd,samp,textarea,input,[contenteditable="true"],[data-testid*="message-content"],[data-testid*="markdown"],.markdown-body,.cm-editor,.xterm';
  const attrNames = ['aria-label','title','placeholder','data-tooltip-content'];


  const auditStorageKey = 'github-copilot-chinese-audit-v1';
  const runtimeUntranslated = new Map();
  const bundleUntranslated = new Map();
  const auditSkipSelector = `${skipSelector},[data-testid*="conversation"],[data-testid*="chat-message"],[data-testid*="user-message"],[data-testid*="assistant-message"]`;
  let auditPersistTimer = 0;
  let auditUpdatedAt = new Date().toISOString();
  let resourceScanPromise = null;

  function cleanCandidate(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function isLikelyUiText(value, source = 'runtime') {
    const s = cleanCandidate(value);
    if (s.length < 2 || s.length > 320 || !/[A-Za-z]/.test(s)) return false;
    if (/^[,;:()[\]{}<>]|^__|^--|^@|^\u2192/.test(s)) return false;
    if (/[\u3400-\u9fff]/.test(s)) return false;
    if (/^(?:https?:|file:|data:|blob:|ws:|wss:)/i.test(s)) return false;
    if (/^(?:(?:Ctrl|Alt|Shift|Cmd|Meta|Option)\s*\+\s*)+(?:[A-Za-z]+|[,.;/\\'`\[\]-])$/i.test(s)) return false;
    if (/^[A-Za-z]:\\|^(?:\.\.?[/\\]|[/\\])/.test(s)) return false;
    if (/^[\w.-]+@[\w.-]+$/.test(s) || /^[a-f0-9]{20,}$/i.test(s)) return false;
    if (/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)+$/.test(s)) return false;
    if (/^[_$A-Za-z][_$A-Za-z0-9]*$/.test(s) && s.length > 18) return false;
    if (source === 'runtime' && /^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(s) && /[0-9._-]/.test(s)) return false;
    if (source === 'bundle' && (!/^[A-Z]/.test(s) || (!/\s/.test(s) && !/^[A-Z][A-Za-z0-9]*(?:[.!?])?$/.test(s)))) return false;
    if (/^[.#]?[a-z0-9_-]+(?:\s+[.#]?[a-z0-9_-]+){2,}$/i.test(s) && /[-_]/.test(s)) return false;
    if (/[{}<>]|=>|\b(?:function|const|let|var|return|import|export)\b/.test(s)) return false;
    const letters = (s.match(/[A-Za-z]/g) || []).length;
    return letters >= 2 && letters / s.length >= 0.28;
  }

  function elementHint(el) {
    if (!(el instanceof Element)) return '';
    const parts = [];
    let current = el;
    for (let depth = 0; current && depth < 4; depth++, current = current.parentElement) {
      let part = current.tagName.toLowerCase();
      if (current.getAttribute('role')) part += `[role="${current.getAttribute('role')}"]`;
      if (current.getAttribute('data-testid')) part += `[data-testid="${current.getAttribute('data-testid')}"]`;
      parts.unshift(part);
    }
    return parts.join(' > ');
  }

  function scheduleAuditPersist() {
    if (auditPersistTimer) return;
    auditPersistTimer = window.setTimeout(() => {
      auditPersistTimer = 0;
      try {
        localStorage.setItem(auditStorageKey, JSON.stringify({
          version: VERSION,
          runtime: [...runtimeUntranslated.values()],
          bundle: [...bundleUntranslated.values()]
        }));
      } catch { }
    }, 500);
  }

  function rememberUntranslated(value, meta = {}) {
    const text = cleanCandidate(value);
    if (!isLikelyUiText(text, meta.source || 'runtime')) return;
    const el = meta.element instanceof Element ? meta.element : null;
    if (el?.closest(auditSkipSelector)) return;
    const hint = el ? elementHint(el) : '';
    if ((meta.source || 'runtime') === 'runtime') {
      if (/role=\"tree\"/.test(hint)) return;
      if (/^\d+(?:\.\d+)?\s*(?:KB|MB|GB|TB)$/i.test(text)) return;
      if (/div\[role=\"group\"\] > button/.test(hint) && !/[.!?]/.test(text)) return;
      if (/div > h3 > button/.test(hint) && !/[.!?]/.test(text)) return;
      if (/div > button > div > p$/.test(hint) && text.split(/\s+/).length <= 6 && !/[.!?]/.test(text)) return;
    }
    const target = meta.source === 'bundle' ? bundleUntranslated : runtimeUntranslated;
    const key = `${meta.attribute || 'text'}\u0000${text}`;
    const now = new Date().toISOString();
    const old = target.get(key);
    if (old) {
      if (meta.url && !old.resources.includes(meta.url) && old.resources.length < 5) {
        old.resources.push(meta.url);
        old.lastSeenAt = now;
        auditUpdatedAt = now;
        scheduleAuditPersist();
      }
      return;
    } else if (target.size < 8000) {
      target.set(key, {
        text,
        source: meta.source || 'runtime',
        attribute: meta.attribute || null,
        context: el ? elementHint(el) : '',
        route: location.pathname + location.search,
        resources: meta.url ? [meta.url] : [],
        count: 1,
        firstSeenAt: now,
        lastSeenAt: now
      });
      auditUpdatedAt = now;
    }
    scheduleAuditPersist();
  }

  function restoreAudit() {
    try {
      const saved = JSON.parse(localStorage.getItem(auditStorageKey) || 'null');
      if (!saved || saved.version !== VERSION) return;
      for (const item of saved.runtime || []) runtimeUntranslated.set(`${item.attribute || 'text'}\u0000${item.text}`, item);
      for (const item of saved.bundle || []) bundleUntranslated.set(`${item.attribute || 'text'}\u0000${item.text}`, item);
    } catch { }
  }

  function getAuditReport() {
    return {
      schemaVersion: 1,
      translationVersion: VERSION,
      generatedAt: auditUpdatedAt,
      page: { title: document.title, url: location.href, route: location.pathname + location.search },
      counts: { runtime: runtimeUntranslated.size, bundle: bundleUntranslated.size },
      runtime: [...runtimeUntranslated.values()].sort((a, b) => b.count - a.count || a.text.localeCompare(b.text)),
      bundle: [...bundleUntranslated.values()].sort((a, b) => a.text.localeCompare(b.text))
    };
  }

  function decodeLiteral(raw) {
    return raw
      .replace(/\\n|\\r|\\t/g, ' ')
      .replace(/\\u([0-9a-f]{4})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
      .replace(/\\x([0-9a-f]{2})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
      .replace(/\\([\\"'`])/g, '$1');
  }

  function hasUiStringContext(source, index) {
    const context = source.slice(Math.max(0, index - 220), Math.min(source.length, index + 420));
    return /(?:children|label|title|description|placeholder|message|ariaLabel|aria-label|tooltip|heading|subtitle|emptyState|toast|error|success|warning|confirm|caption|text)\s*[:=]/i.test(context)
      || /(?:jsx|jsxs|createElement)\s*\(/.test(context);
  }

  function collectBundleStrings(source, url) {
    const patterns = [
      /"((?:\\.|[^"\\\r\n]){2,320})"/g,
      /'((?:\\.|[^'\\\r\n]){2,320})'/g,
      /`((?:\\.|[^`\\]){2,320})`/g
    ];
    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(source))) {
        const text = cleanCandidate(decodeLiteral(match[1]));
        if (!hasUiStringContext(source, match.index) || !isLikelyUiText(text, 'bundle')) continue;
        if (zh.has(text) || dynamic(text) !== text) continue;
        rememberUntranslated(text, { source: 'bundle', url });
      }
    }
  }

  async function scanResources() {
    if (resourceScanPromise) return resourceScanPromise;
    resourceScanPromise = (async () => {
      const queue = [];
      const queued = new Set();
      const scanned = new Set();
      const enqueue = raw => {
        try {
          const url = new URL(raw, location.href);
          const assetName = url.pathname.split('/').pop()?.toLowerCase() || '';
          if (url.origin !== location.origin || !/\.m?js(?:$|\?)/i.test(url.href) || queued.has(url.href)) return;
          if (/^(?:vendor-|katex-|mermaid-|shiki-|highlight-|codemirror-|monaco-|emoji-|syntax\.worker-|path-|stores-|invertocatcanvas-)/.test(assetName)) return;
          queued.add(url.href);
          queue.push(url.href);
        } catch { }
      };
      document.querySelectorAll('script[src]').forEach(el => enqueue(el.src));
      performance.getEntriesByType('resource').forEach(entry => enqueue(entry.name));
      while (queue.length && scanned.size < 160) {
        const url = queue.shift();
        if (!url || scanned.has(url)) continue;
        scanned.add(url);
        try {
          const response = await fetch(url, { credentials: 'same-origin' });
          if (!response.ok) continue;
          const source = await response.text();
          collectBundleStrings(source, url.replace(location.origin, ''));
          const refs = source.matchAll(/["'`]((?:\.\.?\/|\/assets\/)[^"'`\s]+?\.m?js(?:\?[^"'`\s]*)?)["'`]/g);
          for (const ref of refs) enqueue(new URL(ref[1], url).href);
        } catch { }
        await new Promise(resolve => setTimeout(resolve, 0));
      }
      scheduleAuditPersist();
      return { scannedResources: scanned.size, candidates: bundleUntranslated.size };
    })();
    return resourceScanPromise;
  }

  restoreAudit();

  function dynamic(s) {
    let m;
    const known = value => zh.get(value) || value;
    if ((m = s.match(/^(\d+)% quota used$/))) return `已使用 ${m[1]}% 配额`;
    if ((m = s.match(/^All \((\d+)\)$/))) return `全部（${m[1]}）`;
    if ((m = s.match(/^Built-in \((\d+)\)$/))) return `内置（${m[1]}）`;
    if ((m = s.match(/^On this device \((\d+)\)$/))) return `此设备上（${m[1]}）`;
    if ((m = s.match(/^Disable (.+)$/))) return `禁用 ${m[1]}`;
    if ((m = s.match(/^Download (.+)$/))) return `下载 ${m[1]}`;
    if ((m = s.match(/^Testing connection, (.+)$/))) return `正在测试连接：${m[1]}`;
    if ((m = s.match(/^Chat messages used: (\d+)%$/))) return `已使用聊天消息：${m[1]}%`;
    if ((m = s.match(/^Continue as @(.+)$/))) return `以 @${m[1]} 身份继续`;
    if ((m = s.match(/^Filter: (.+)$/))) return `筛选：${known(m[1])}`;
    if ((m = s.match(/^No items match "(.+)"\.$/))) return `没有与“${known(m[1])}”匹配的项目。`;
    if ((m = s.match(/^Change view \(currently (.+)\)$/))) return `更改视图（当前为${known(m[1])}）`;
    if ((m = s.match(/^Error checking for updates: Failed to contact GitHub for app updates: error sending request for url \((.+)\)$/))) return `检查更新时出错：无法联系 GitHub 获取应用更新，请求网址失败（${m[1]}）`;
    if ((m = s.match(/^Failed to (.+?)[.:]?$/))) return `无法${localizeActionPhrase(m[1])}`;
    if ((m = s.match(/^Unable to (.+?)[.:]?$/))) return `无法${localizeActionPhrase(m[1])}`;
    if ((m = s.match(/^Could not (.+?)[.:]?$/))) return `无法${localizeActionPhrase(m[1])}`;
    if ((m = s.match(/^(.+?) failed[.]?$/))) return `${localizeFailureSubject(m[1])}失败`;
    if ((m = s.match(/^(.+?) unavailable[.]?$/))) return `${localizeFailureSubject(m[1])}不可用`;
    if ((m = s.match(/^(.+?) not found[.]?$/i))) return `未找到${localizeFailureSubject(m[1])}`;
    if ((m = s.match(/^Invalid (.+?)[.]?$/))) return `${localizeFailureSubject(m[1])}无效`;
    if ((m = s.match(/^(.+?) was denied[.]?$/))) return `${localizeFailureSubject(m[1])}被拒绝`;
    if ((m = s.match(/^Chat: (.+)$/))) return `聊天：${known(m[1])}`;
    if ((m = s.match(/^(\d+)% used$/))) return `已使用 ${m[1]}%`;
    if ((m = s.match(/^(.+)[，,]\\s*chat options$/))) return `${known(m[1])}，聊天选项`;
    if ((m = s.match(/^(.+)\. Status: (.+)\.$/))) return `${known(m[1])}。状态：${known(m[2])}。`;
    if ((m = s.match(/^Search (\d+) skills(…|\.\.\.)?$/))) return `搜索 ${m[1]} 个技能${m[2] || ''}`;
    if ((m = s.match(/^Trigger: (.+)$/))) return `触发方式：${known(m[1])}`;
    if ((m = s.match(/^Hours: (.+)$/))) return `小时：${m[1]}`;
    if ((m = s.match(/^Minute: (.+)$/))) return `分钟：${m[1]}`;
    if ((m = s.match(/^Project: (.+)$/))) return `项目：${known(m[1])}`;
    if ((m = s.match(/^Chat messages quota: (\d+)% used$/))) return `聊天消息配额：已使用 ${m[1]}%`;
    if ((m = s.match(/^Success: Auto-scroll traces copied\. (\d+) trace events copied as JSON\.$/))) return `成功：已复制自动滚动跟踪，并将 ${m[1]} 个跟踪事件复制为 JSON。`;
    if ((m = s.match(/^Branch:\s*(.+)$/))) return `分支：${m[1]}`;
    if ((m = s.match(/^Workspace:\s*(.+)$/))) return `工作区：${known(m[1])}`;
    if ((m = s.match(/^Create project from pull requests, branches, or issues in (.+)$/))) return `从 ${m[1]} 的拉取请求、分支或议题创建项目`;
    if ((m = s.match(/^Dismiss (.+) card$/))) return `关闭“${known(m[1])}”卡片`;
    if ((m = s.match(/^(.+)\. Status: (.+)\. Last updated (.+)\. Repository: (.+)\.$/))) return `${known(m[1])}。状态：${m[2]}。上次更新：${m[3]}。仓库：${m[4]}。`;
    if ((m = s.match(/^New session in (.+)$/))) return `在 ${m[1]} 中新建会话`;
    if ((m = s.match(/^Models \((\d+)\)$/))) return `模型（${m[1]}）`;
    if ((m = s.match(/^Add (.+)$/))) return `添加 ${zh.get(m[1]) || m[1]}`;
    if ((m = s.match(/^Provided by your GitHub account @([A-Za-z0-9_-]+)\.$/))) return `由你的 GitHub 账户 @${m[1]} 提供。`;
    if ((m = s.match(/^Open user menu for (.+)$/))) return `打开 ${m[1]} 的用户菜单`;
    if ((m = s.match(/^Edit (.+)$/))) return `编辑 ${m[1]}`;
    if ((m = s.match(/^Remove (.+)\?$/))) return `确定移除 ${m[1]}？`;
    if ((m = s.match(/^Remove (.+)$/))) return `移除 ${m[1]}`;
    if ((m = s.match(/^移除 (.+)\?$/))) return `确定移除 ${m[1]}？`;
    if ((m = s.match(/^由你的 GitHub 账户 @([A-Za-z0-9_-]+)\. Models follow your Copilot subscription — no API key or configuration needed 提供。$/))) return `由你的 GitHub 账户 @${m[1]} 提供。模型遵循你的 Copilot 订阅，无需 API 密钥或配置。`;
    if ((m = s.match(/^Projects: (.+)$/))) return `项目：${m[1]}`;
    if ((m = s.match(/^Mode: (.+?)(, .+)?$/))) return `模式：${known(m[1])}${m[2] || ''}`;
    if ((m = s.match(/^Search(, .+)?$/))) return `搜索${m[1] || ''}`;
    if ((m = s.match(/^Search (\d+) palettes…$/))) return `搜索 ${m[1]} 个调色板…`;
    if ((m = s.match(/^Search (\d+) servers…$/))) return `搜索 ${m[1]} 个服务器…`;
    if ((m = s.match(/^(\d+) seconds?$/))) return `${m[1]} 秒`;
    if ((m = s.match(/^(\d+) actions? without shortcut$/))) return `${m[1]} 个操作未设置快捷键`;
    if ((m = s.match(/^Last (\d+) days?$/))) return `最近 ${m[1]} 天`;
    if ((m = s.match(/^(\d+) minutes?$/))) return `${m[1]} 分钟`;
    if ((m = s.match(/^Up to date\. Last checked on (.+)\.$/))) {
      const months = {January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12};
      const d = m[1].match(/^([A-Za-z]+) (\d+), (\d+), at (\d+):(\d+) (AM|PM)$/);
      return d && months[d[1]] ? `已是最新版本。上次检查时间：${d[3]}年${months[d[1]]}月${d[2]}日 ${d[6] === 'AM' ? '上午' : '下午'}${d[4]}:${d[5]}。` : `已是最新版本。上次检查时间：${m[1]}。`;
    }
    if ((m = s.match(/^已是最新版本。上次检查时间：(.+)。$/))) {
      const months = {January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12};
      const d = m[1].match(/^([A-Za-z]+) (\d+), (\d+), at (\d+):(\d+) (AM|PM)$/);
      if (d && months[d[1]]) return `已是最新版本。上次检查时间：${d[3]}年${months[d[1]]}月${d[2]}日 ${d[6] === 'AM' ? '上午' : '下午'}${d[4]}:${d[5]}。`;
    }    if ((m = s.match(/^Preview: (.+)$/))) return `预览：${m[1]}`;
    if ((m = s.match(/^(.+)\. Opens in a new browser tab\.$/))) return `${known(m[1])}。将在新的浏览器标签页中打开。`;
    if ((m = s.match(/^Edit shortcut for (.+)$/))) return `编辑“${known(m[1])}”的快捷键`;
    if ((m = s.match(/^Assign shortcut for (.+)$/))) return `为“${known(m[1])}”分配快捷键`;
    if ((m = s.match(/^(.+), edit shortcut for (.+)$/))) return `${m[1]}，编辑“${known(m[2])}”的快捷键`;
    if ((m = s.match(/^Close notification: (.+)$/))) return `关闭通知：${known(m[1])}`;
    if ((m = s.match(/^Error:\s*(.+)$/))) return `错误：${known(m[1])}`;
    if ((m = s.match(/^Failed to load (.+?)[.:]?$/))) return `无法加载${known(m[1])}`;
    if ((m = s.match(/^Failed to open (.+?)[.:]?$/))) return `无法打开${known(m[1])}`;
    if ((m = s.match(/^Failed to save (.+?)[.:]?$/))) return `无法保存${known(m[1])}`;
    if ((m = s.match(/^Failed to create (.+?)[.:]?$/))) return `无法创建${known(m[1])}`;
    if ((m = s.match(/^Failed to update (.+?)[.:]?$/))) return `无法更新${known(m[1])}`;
    if ((m = s.match(/^Failed to delete (.+?)[.:]?$/))) return `无法删除${known(m[1])}`;
    if ((m = s.match(/^Failed to copy (.+?)[.:]?$/))) return `无法复制${known(m[1])}`;
    if ((m = s.match(/^(.+) could not be loaded$/))) return `无法加载${known(m[1])}`;
    if ((m = s.match(/^Unable to load (.+?)[.:]?$/))) return `无法加载${known(m[1])}`;
    if ((m = s.match(/^Unable to open (.+?)[.:]?$/))) return `无法打开${known(m[1])}`;
    if ((m = s.match(/^Could not open (.+?)[.:]?$/))) return `无法打开${known(m[1])}`;
    if ((m = s.match(/^(.+) timed out$/))) return `${known(m[1])}超时`;
    if ((m = s.match(/^Provided by your GitHub account @(.+)\. Models follow your Copilot subscription — no API key or configuration needed\.$/))) return `由你的 GitHub 账户 @${m[1]} 提供。模型遵循你的 Copilot 订阅，无需 API 密钥或配置。`;
    if ((m = s.match(/^Model provider status checked: (\d+) connected\.$/))) return `模型提供商状态已检查：已连接 ${m[1]} 个。`;
    if ((m = s.match(/^Removes (.+) from the sidebar\. Your files on disk are not affected\.$/))) return `从侧边栏移除 ${m[1]}。磁盘上的文件不会受影响。`;
    if ((m = s.match(/^(.+), (.+)$/))) {
      const left = known(m[1]);
      const seconds = m[2].match(/^(\d+) seconds?$/);
      const right = known(m[2]) !== m[2] ? known(m[2]) : seconds ? `${seconds[1]} 秒` : m[2];
      if (left !== m[1] || right !== m[2]) return `${left}，${right}`;
    }
    if (s.includes('+') || /edit shortcut|编辑“/.test(s)) {
      const localized = s
        .replace(/\bControl\b/g, 'Ctrl')
        .replace(/\bQuestion mark\b/g, '问号')
        .replace(/\bApostrophe\b/g, '撇号键')
        .replace(/\bBacktick\b/g, '反引号键')
        .replace(/\bBackslash\b/g, '反斜杠键')
        .replace(/\bLeft bracket\b/g, '左方括号键')
        .replace(/\bRight bracket\b/g, '右方括号键')
        .replace(/\bLeft Arrow\b/g, '左方向键')
        .replace(/\bRight Arrow\b/g, '右方向键');
      if (localized !== s) return localized;
    }
    if ((m = s.match(/^(.+), open user menu$/))) return `打开 ${m[1]} 的用户菜单`;
    if ((m = s.match(/^Environment: (.+)$/))) return `环境：${known(m[1])}`;
    if ((m = s.match(/^Repository: (.+)$/))) return `仓库：${known(m[1])}`;
    if ((m = s.match(/^Free, (\d+(?:\.\d+)?) GB$/))) return `可用 ${m[1]} GB`;
    if ((m = s.match(/^Free up disk space\. (\d+) GB free\. Copilot sessions use (\d+) MB\.$/))) return `释放磁盘空间。可用 ${m[1]} GB，Copilot 会话占用 ${m[2]} MB。`;
    if ((m = s.match(/^Restore v(.+)$/))) return `恢复 v${m[1]}`;
    if ((m = s.match(/^Archive (\d+) sessions?$/))) return `归档 ${m[1]} 个会话`;
    if ((m = s.match(/^Loading (.+)$/))) return `正在加载 ${m[1]}`;
    return s;
  }

  function translateValue(value, meta = {}) {
    if (!value || (!/[A-Za-z]/.test(value) && !zh.has(value.trim()))) return value;
    const lead = value.match(/^\s*/)?.[0] || '', tail = value.match(/\s*$/)?.[0] || '';
    const core = value.slice(lead.length, value.length - tail.length);
    const normalizedCore = cleanCandidate(core);
    const knownTranslation = zh.get(core) ?? (normalizedCore !== core ? zh.get(normalizedCore) : undefined);
    const translated = knownTranslation ?? dynamic(normalizedCore);
    if (translated === core && knownTranslation === undefined) rememberUntranslated(core, meta);
    return translated === core ? value : lead + translated + tail;
  }

  function translateKnownFormValue(el) {
    if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) return;
    if (el.dataset.githubCopilotChineseValueTranslated === VERSION) return;
    const translated = formValueZh.get(el.value);
    if (!translated || translated === el.value) return;
    const prototype = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
    const setter = Object.getOwnPropertyDescriptor(prototype, 'value')?.set;
    if (!setter) return;
    setter.call(el, translated);
    el.dataset.githubCopilotChineseValueTranslated = VERSION;
    el.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertReplacementText', data: translated }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function translateElement(el) {
    if (!(el instanceof Element)) return;
    for (const name of attrNames) {
      const oldValue = el.getAttribute(name);
      if (oldValue) {
        const newValue = translateValue(oldValue, { source: 'runtime', attribute: name, element: el });
        if (newValue !== oldValue) el.setAttribute(name, newValue);
      }
    }
    translateKnownFormValue(el);
  }

  function translateTree(root) {
    if (!root) return;
    if (root.nodeType === Node.ELEMENT_NODE) translateElement(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.ELEMENT_NODE) { translateElement(node); continue; }
      const parent = node.parentElement;
      if (!parent || parent.closest(skipSelector)) continue;
      const oldValue = node.nodeValue || '';
      const fragment = fragmentZh.get(oldValue) ?? fragmentZh.get(cleanCandidate(oldValue));
      const newValue = fragment ?? translateValue(oldValue, { source: 'runtime', element: parent });
      if (newValue !== oldValue) node.nodeValue = newValue;
    }
  }

  function start() {
    // 首次翻译完整页面；后续只处理新增节点，不修改 class、字体、颜色或状态样式。
    translateTree(document.body);
    const queue = new Set(); let scheduled = false;
    const flush = () => { scheduled = false; for (const node of queue) translateTree(node); queue.clear(); };
    new MutationObserver(records => {
      for (const record of records) {
        if (record.type === 'characterData' || record.type === 'attributes') queue.add(record.target.parentElement || record.target);
        else for (const node of record.addedNodes) queue.add(node);
      }
      if (!scheduled) { scheduled = true; requestAnimationFrame(flush); }
    }).observe(document.documentElement, {subtree:true, childList:true, characterData:true, attributes:true, attributeFilter:attrNames});
    if (window.__githubCopilotChineseRescanTimer) clearInterval(window.__githubCopilotChineseRescanTimer);
    window.__githubCopilotChineseRescanTimer = setInterval(() => {
      if (document.hidden) return; // 性能：窗口隐藏/最小化时暂停重扫
      document.querySelectorAll('[aria-live],[role="tooltip"],[role="menu"],[role="listbox"],[role="dialog"]')
        .forEach(el => { if (/[A-Za-z]/.test(el.textContent || '')) translateTree(el); }); // 性能：廉价预检再翻译
    }, 1000);
    window.__githubCopilotChinese = {
      version: VERSION,
      getReport: getAuditReport,
      clearReport() {
        runtimeUntranslated.clear();
        bundleUntranslated.clear();
        try { localStorage.removeItem(auditStorageKey); } catch { }
        return getAuditReport();
      },
      rescan() { translateTree(document.body); return getAuditReport(); },
      scanResources
    };
    // 性能：bundle 全量扫描改为按需（默认关闭；审计快捷方式或 window.__copilotZhScanBundles 开启时执行）
    const runStaticScan = () => scanResources().catch(() => {});
    if (window.__copilotZhScanBundles) {
      if ('requestIdleCallback' in window) requestIdleCallback(runStaticScan, { timeout: 4000 });
      else setTimeout(runStaticScan, 1500);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once:true}); else start();
})();
