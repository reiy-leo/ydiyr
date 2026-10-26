import type { Messages } from "./types.ts";

export const de: Messages = {
  title: "Deine Daten, deine Verantwortung · ydiyr",
  description: "Meine Apps speichern deine Daten auf deinen eigenen Geräten und synchronisieren nur über dein Google Drive oder WebDAV, nie über einen Server des Entwicklers.",
  nav: { apps: "Apps", webdav: "Eigenes WebDAV", language: "Sprache", followBrowser: "Wie im Browser" },
  hero: {
    badge: "Deine Daten, deine Sache",
    h1: "Deine Daten sind deine Verantwortung.",
    lede: "Jede App, die ich baue, speichert deine Daten auf deinem Gerät. Für die Synchronisierung verbindest du dein eigenes Google Drive oder WebDAV. Ich betreibe keinen Server und komme nie an deine Daten.",
    ctaApps: "Apps ansehen",
    ctaWebdav: "Kein WebDAV?",
  },
  principles: {
    h2: "Was das heißt",
    items: [
      { t: "Du hast sie", d: "Die Daten liegen zuerst auf deinem Gerät und funktionieren offline. Exportieren, umziehen, löschen: Du entscheidest." },
      { t: "Sync nur mit deinem Speicher", d: "Synchronisiert wird über dein eigenes Google Drive oder WebDAV. Dazwischen gibt es keinen Server des Entwicklers." },
      { t: "Niemand kann sie verlieren oder verkaufen", d: "Ich komme nicht an deine Daten, also kann ich sie weder verlieren noch verkaufen. Höre ich irgendwann auf, eine App zu pflegen, bleiben die Daten deine." },
    ],
    flip: {
      t: "Die Kehrseite: Wenn du sie verlierst, kann sie niemand wiederherstellen",
      d: "Masterpasswort vergessen, Dateien im Drive gelöscht oder ein Gerät ohne Backup verloren: Bei mir liegt nichts, was ich zurückholen könnte. Backups sind deine Sache.",
    },
  },
  flow: {
    h2: "Wo deine Daten hingehen",
    lede: "Sync heißt nur: Deine Geräte reden mit deinem Speicher. Ich bin kein Teil davon.",
    device: "Deine Geräte",
    drive: "Dein Google Drive",
    webdav: "Dein WebDAV",
    or: "oder",
    server: "Server des Entwicklers",
    serverNote: "Nicht beteiligt. Gibt es nicht.",
  },
  apps: {
    h2: "Apps, die so gebaut sind",
    lede: "Alle arbeiten lokal zuerst und synchronisieren nur mit deinem eigenen Speicher.",
    platforms: "Plattformen",
    sync: "Sync",
    soon: "bald",
    site: "Website",
    navill: {
      tagline: "Lesezeichen-Manager für den neuen Tab: Arbeitsbereiche, Schubladen, Aliase und Teilen.",
      note: "Geteilt wird nur, wenn du auf Teilen klickst, und nur der gewählte Arbeitsbereich oder die Schublade.",
    },
    mimatory: {
      tagline: "Lokaler Passwortmanager mit verschlüsseltem Tresor.",
      note: "In Google Drive nutzt er den versteckten App-Datenordner. Dein Gerät verlässt nur Chiffretext (AES-256-GCM).",
    },
    reicky: {
      tagline: "Haftnotizen für den Desktop, wie Notizzettel unter macOS.",
      note: "Notizen bleiben vorerst auf deinem Rechner. Sync mit Google Drive und WebDAV ist in Arbeit.",
    },
  },
  duties: {
    h2: "Dein Teil",
    lede: "Wer seine Daten selbst besitzt, spannt auch das Sicherheitsnetz selbst. Zehn Minuten reichen.",
    items: [
      { t: "Ab und zu ein Backup exportieren", d: "Leg es woanders ab, etwa auf einer externen Platte oder in einer zweiten Cloud." },
      { t: "Masterpasswort merken", d: "Wer das Masterpasswort von Mimatory vergisst, bekommt den Tresor nicht mehr auf. Ich auch nicht." },
      { t: "Speicherkonto absichern", d: "Bei Google die Bestätigung in zwei Schritten einschalten, für WebDAV ein langes Passwort wählen." },
      { t: "Vor dem Gerätewechsel synchronisieren", d: "Erst prüfen, dass alles auf dem neuen Gerät ist, dann das alte löschen." },
    ],
  },
  webdav: {
    h2: "Kein WebDAV? Betreib dein eigenes",
    lede: "WebDAV ist ein verbreitetes Dateiprotokoll, das viele Tools können. Wenn du keins hast, gibt es zwei Wege.",
    r2: {
      t: "Eigenes WebDAV auf Cloudflare R2",
      d: "Mein Fork von r2-webdav läuft in ein paar Minuten in deinem eigenen Cloudflare-Konto. Die Dateien liegen in deinem R2-Bucket, und im Browser gibt es eine Dateiverwaltung.",
      cta: "r2-webdav ansehen",
    },
    others: {
      t: "Oder nimm, was du schon hast",
      d: "Nextcloud, ein Synology-NAS und Jianguoyun (坚果云) sprechen WebDAV. Adresse und Login eintragen, fertig.",
    },
  },
  footer: { meaning: "ydiyr = your data is your responsibility", license: "MIT-Lizenz" },
};
