import type { Messages } from "./types.ts";

export const zh: Messages = {
  title: "你的数据，你负责 · ydiyr",
  description: "我做的 app 把数据存在你自己的设备上，同步只走你自己的 Google Drive 或 WebDAV，不经过开发者的服务器。",
  nav: { apps: "App", webdav: "自建 WebDAV", language: "语言", followBrowser: "跟随浏览器" },
  hero: {
    badge: "自己的数据自己管",
    h1: "你的数据，你负责。",
    lede: "我做的 app 都把数据存在你的设备上。想在几台设备间同步，就连你自己的 Google Drive 或 WebDAV。我没有服务器，也碰不到你的数据。",
    ctaApps: "看看这些 app",
    ctaWebdav: "没有 WebDAV？",
  },
  principles: {
    h2: "这句话是什么意思",
    items: [
      { t: "数据在你手里", d: "数据先存在你的设备上，没网也能用。导出、搬走、删掉，都由你决定。" },
      { t: "只同步到你自己的地方", d: "多设备同步走你自己的 Google Drive 或 WebDAV。中间没有开发者的服务器。" },
      { t: "没人能弄丢，也没人能卖", d: "我拿不到你的数据，就弄不丢，也卖不了。哪天我不维护了，你的数据还在你那儿。" },
    ],
    flip: {
      t: "反过来说：丢了，没人能帮你找回",
      d: "忘了主密码、删了网盘里的文件、设备坏了又没备份，我这边什么都没有，帮不上忙。所以备份要靠你自己。",
    },
  },
  flow: {
    h2: "数据怎么走",
    lede: "同步就是你的设备和你的存储之间来回传。我这边没有任何一环。",
    device: "你的设备",
    drive: "你的 Google Drive",
    webdav: "你的 WebDAV",
    or: "或",
    server: "开发者服务器",
    serverNote: "不经过，也不存在",
  },
  apps: {
    h2: "按这个思路做的 app",
    lede: "每个都是本地优先，同步只连你自己的存储。",
    platforms: "平台",
    sync: "同步",
    soon: "即将支持",
    site: "官网",
    navill: {
      tagline: "新标签页书签管理：工作区、抽屉、分身，还能分享给别人。",
      note: "分享是你主动点的，只上传你选中的工作区或抽屉。",
    },
    mimatory: {
      tagline: "本地优先的密码管理器，密码库全程加密。",
      note: "Google Drive 用的是隐藏的应用数据区。离开设备的只有密文（AES-256-GCM）。",
    },
    reicky: {
      tagline: "桌面便签，用起来像 macOS 自带的便笺。",
      note: "现在先存在本机，Google Drive 和 WebDAV 同步在做。",
    },
  },
  duties: {
    h2: "交给你的几件事",
    lede: "自己管数据，就要自己兜底。花十分钟做好这几件事。",
    items: [
      { t: "定期导出一份备份", d: "放到另一个地方，比如移动硬盘或另一个网盘。" },
      { t: "记牢主密码", d: "Mimatory 的主密码忘了，谁都解不开，包括我。" },
      { t: "给存储账号加把锁", d: "Google 账号开两步验证，WebDAV 用一个够长的密码。" },
      { t: "换设备前先同步一次", d: "确认新设备上数据都在，再清旧设备。" },
    ],
  },
  webdav: {
    h2: "没有 WebDAV？自己搭一个",
    lede: "WebDAV 是一种通用的网盘协议，很多工具都支持。没有的话，有两条路。",
    r2: {
      t: "用 Cloudflare R2 跑你自己的 WebDAV",
      d: "我 fork 了 r2-webdav，部署到你自己的 Cloudflare 账号，几分钟就能用。数据存在你的 R2 存储桶里，浏览器打开还有文件管理页。",
      cta: "查看 r2-webdav",
    },
    others: {
      t: "或者用现成的",
      d: "Nextcloud、群晖 Synology NAS、坚果云都支持 WebDAV，填上地址和账号就行。",
    },
  },
  footer: { meaning: "ydiyr = your data is your responsibility", license: "MIT 许可" },
};
