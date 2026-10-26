import type { Messages } from "./types.ts";

export const en: Messages = {
  title: "Your data is your responsibility · ydiyr",
  description: "My apps keep your data on your own devices and sync only through your own Google Drive or WebDAV, never a developer's server.",
  nav: { apps: "Apps", webdav: "Self-host WebDAV", language: "Language", followBrowser: "Follow browser" },
  hero: {
    badge: "Your data, your call",
    h1: "Your data is your responsibility.",
    lede: "Every app I make keeps your data on your device. To sync across devices, you connect your own Google Drive or WebDAV. I run no server and never touch your data.",
    ctaApps: "See the apps",
    ctaWebdav: "No WebDAV?",
  },
  principles: {
    h2: "What that means",
    items: [
      { t: "You hold it", d: "Data lives on your device first and works offline. Export it, move it, delete it: your choice." },
      { t: "It syncs only to storage you own", d: "Sync goes through your own Google Drive or WebDAV. There's no developer server in between." },
      { t: "Nobody can lose it or sell it", d: "I can't reach your data, so I can't lose it or sell it. If I ever stop maintaining an app, your data is still yours." },
    ],
    flip: {
      t: "The flip side: if you lose it, nobody can restore it",
      d: "Forget your master password, delete the files in your drive, or lose a device without a backup, and there's nothing on my end to recover. Backups are on you.",
    },
  },
  flow: {
    h2: "Where your data goes",
    lede: "Sync is just your devices talking to your storage. I'm not a step in it.",
    device: "Your devices",
    drive: "Your Google Drive",
    webdav: "Your WebDAV",
    or: "or",
    server: "Developer server",
    serverNote: "Not involved. Doesn't exist.",
  },
  apps: {
    h2: "Apps built this way",
    lede: "Each one is local-first and syncs only to storage you own.",
    platforms: "Platforms",
    sync: "Sync",
    soon: "coming soon",
    site: "Website",
    navill: {
      tagline: "A new-tab bookmark manager: workspaces, drawers, aliases, and sharing.",
      note: "Sharing only happens when you click Share, and uploads just the workspace or drawer you picked.",
    },
    mimatory: {
      tagline: "A local-first password manager with an encrypted vault.",
      note: "On Google Drive it uses the hidden app data folder. Only ciphertext leaves your device (AES-256-GCM).",
    },
    reicky: {
      tagline: "Desktop sticky notes that feel like Stickies on macOS.",
      note: "Notes stay on your machine for now. Google Drive and WebDAV sync are in the works.",
    },
  },
  duties: {
    h2: "Your part of the deal",
    lede: "Owning your data means owning the safety net. Ten minutes covers it.",
    items: [
      { t: "Export a backup now and then", d: "Keep it somewhere else, like an external drive or a second cloud." },
      { t: "Remember your master password", d: "If you forget Mimatory's master password, nobody can unlock the vault. Not even me." },
      { t: "Lock down your storage account", d: "Turn on 2-step verification for Google, and use a long password for WebDAV." },
      { t: "Sync before you switch devices", d: "Check everything is on the new device before you wipe the old one." },
    ],
  },
  webdav: {
    h2: "No WebDAV? Run your own",
    lede: "WebDAV is a common file-sync protocol that lots of tools support. If you don't have one, you have two options.",
    r2: {
      t: "Your own WebDAV on Cloudflare R2",
      d: "My fork of r2-webdav deploys to your own Cloudflare account in a few minutes. Files live in your R2 bucket, and it comes with a file manager in the browser.",
      cta: "View r2-webdav",
    },
    others: {
      t: "Or use one you already have",
      d: "Nextcloud, a Synology NAS, and Jianguoyun (坚果云) all speak WebDAV. Enter the address and login and you're set.",
    },
  },
  footer: { meaning: "ydiyr = your data is your responsibility", license: "MIT License" },
};
