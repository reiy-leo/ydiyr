# AGENTS.md · ydiyr

## 目标
「你的数据你负责」宣言页 + app 目录。说清楚：数据在你设备上，只同步到你自己的 Google Drive / WebDAV；没人能弄丢或卖掉，反过来丢了也没人能找回。页面结构见 docs/PRODUCT.md。

## 边界
- 纯静态页：没有登录、没有后端数据、没有统计。
- 只收录同步只走用户自己存储的 app。Mindough（Turso + 开发者 Worker）不收，等它支持 Drive/WebDAV 再说。
- 商店链接只放从仓库或官网核实过的。

## 技术栈
- React + Vite + TypeScript，pnpm（不要用 npm）
- 设计：Kumo（`.agents/skills/kumo-design/SKILL.md`），尽量用 Kumo 组件；图标用 Lucide；深浅色跟随系统，只用 kumo 语义 token
- Cloudflare Worker `ydiyr`：主域名 your-data-is-your-responsibility.rei8t.dev；短链 ydiyr.rei8t.dev 在 `src/index.ts` 里 301 到主域名，保留路径和参数

## 目录
- `web/`：前端。`src/App.tsx` 页面，`src/apps.ts` app 列表和链接，`src/i18n/` 九种语言词典（zh en es pt ru ja de fr id，结构见 `types.ts`），`static/` 图标
- `src/index.ts`：Worker（短链跳转 + 静态资源）
- `worker-inline/`、`wrangler.inline.jsonc`：把 public/ 内联进脚本部署（API Token 上传 Static Assets 会 401）
- `scripts/kumo-lint.mjs`：kumo-design 规则检查

## 命令
- `pnpm dev`、`pnpm build`、`pnpm test`、`pnpm typecheck`
- 部署：`pnpm deploy:inline`（Hark 环境用这个）；本地有 wrangler 登录时也可 `pnpm deploy`

## 约定
- 改文案时九种语言一起改；中文写得像人说话（不用被动、不用「进行」「通过」）。
- 每轮改完 commit 并 push 到 main（reiy-leo/ydiyr）。
- 上线前检查：深浅色、至少中英两种语言、手机宽度。
- 发版 / 打 tag 先问 Rei。

## 禁止
- 不加任何追踪或第三方脚本。
- 不用原始 Tailwind 颜色、`dark:` 前缀、`font-bold`、`tracking-*`。
