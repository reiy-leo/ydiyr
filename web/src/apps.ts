// 收录标准：数据存在用户设备上，同步只走用户自己的 Google Drive / WebDAV。
// 走开发者服务器同步的 app（比如 Mindough）不收。商店链接只放从仓库或官网核实过的。
export type App = {
  key: "navill" | "mimatory" | "reicky";
  name: string;
  platforms: string[];
  site?: string;
  repo: string;
  stores?: { label: string; href: string }[];
  /** 同步还没上线：徽章显示「即将支持」 */
  syncSoon?: boolean;
};

export const APPS: App[] = [
  {
    key: "navill",
    name: "Navill",
    platforms: ["Chrome", "Edge", "Firefox"],
    site: "https://navill.rei8t.dev/",
    repo: "https://github.com/reiy-leo/navill",
    stores: [
      { label: "Chrome", href: "https://chromewebstore.google.com/detail/navill/lphobabkijoeabbjphfafflimnjgpdfb" },
      { label: "Edge", href: "https://microsoftedge.microsoft.com/addons/detail/navill/gibnfncjbimhkiepbgoddljaekgfenlc" },
      { label: "Firefox", href: "https://addons.mozilla.org/firefox/addon/navill/" },
    ],
  },
  {
    key: "mimatory",
    name: "Mimatory",
    platforms: ["macOS", "Windows", "Linux", "iOS", "Android"],
    repo: "https://github.com/reiy-leo/mimatory",
  },
  {
    key: "reicky",
    name: "Reicky",
    platforms: ["macOS", "Windows", "Linux"],
    repo: "https://github.com/reiy-leo/reicky",
    syncSoon: true,
  },
];

export const LINKS = {
  repo: "https://github.com/reiy-leo/ydiyr",
  r2webdav: "https://github.com/reiy-leo/r2-webdav",
};
