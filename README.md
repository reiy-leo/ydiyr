# ydiyr · Your data is your responsibility

<https://your-data-is-your-responsibility.rei8t.dev>（短链 <https://ydiyr.rei8t.dev>）

一页宣言加 app 目录：我做的 app 把数据存在你自己的设备上，同步只走你自己的 Google Drive 或 WebDAV，不经过开发者的服务器。数据你自己拿着、自己备份，没人能弄丢或卖掉；反过来，丢了也没人能帮你找回。

A one-page manifesto and catalog of apps that keep your data on your device and sync only to storage you own.

## 收录的 app

| App | 是什么 | 平台 | 同步 |
| --- | --- | --- | --- |
| [Navill](https://github.com/reiy-leo/navill) | 新标签页书签管理扩展 | Chrome / Edge / Firefox | Google Drive、WebDAV |
| [Mimatory](https://github.com/reiy-leo/mimatory) | 本地优先的密码管理器 | macOS / Windows / Linux / iOS / Android | Google Drive、WebDAV |
| [Reicky](https://github.com/reiy-leo/reicky) | 桌面便签 | macOS / Windows / Linux | 即将支持 |

收录标准：同步只走用户自己的存储。

## 开发

```sh
pnpm install
pnpm dev            # 本地预览前端
pnpm test           # kumo-design 规则检查
pnpm typecheck
pnpm deploy:inline  # 构建并部署到 Cloudflare Workers
```

技术栈：React + Vite + TypeScript，[Kumo](https://github.com/cloudflare/kumo) 组件，Lucide 图标，Cloudflare Workers。界面支持 9 种语言。

## 许可证

MIT
