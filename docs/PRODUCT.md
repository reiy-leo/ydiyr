# ydiyr 产品说明

## 一句话
给用 Rei 的 app 的人看：你的数据你自己管，也自己负责。

## 页面结构
1. 顶栏：图标、App、自建 WebDAV 锚点、语言菜单（跟随浏览器 + 9 种语言）、GitHub
2. 首屏：「你的数据，你负责。」+ 一段说明 + 两个按钮
3. 这句话是什么意思：三条好处 + 一条「反过来说」的提醒
4. 数据怎么走：你的设备 ⇄ 你的 Google Drive / WebDAV，开发者服务器划掉
5. App 卡片：名称、一句话、补充说明、平台、同步徽章、链接
6. 交给你的几件事：备份、主密码、账号安全、换设备前同步
7. 没有 WebDAV：r2-webdav（Rei 的 fork），或 Nextcloud / 群晖 / 坚果云
8. 页脚：ydiyr 含义、MIT、仓库

## 语言
按 `?lang=` > 语言菜单（localStorage `ydiyr-lang`）> 浏览器语言 > 中文。

## 图标
Rei 给的图（https://m.rei8t.dev/i/X2tuaxmY.png，2026-10-26），裁边后生成 favicon.ico、icon-32/192/512、apple-touch-icon、顶栏 logo-64。

## 加一个 app
在 `web/src/apps.ts` 加一项，在 `web/src/i18n/types.ts` 的 `apps` 里加文案字段，九种语言都写上。
