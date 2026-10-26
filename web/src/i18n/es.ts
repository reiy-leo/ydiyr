import type { Messages } from "./types.ts";

export const es: Messages = {
  title: "Tus datos son tu responsabilidad · ydiyr",
  description: "Mis apps guardan tus datos en tus propios dispositivos y solo sincronizan con tu Google Drive o tu WebDAV, nunca con un servidor del desarrollador.",
  nav: { apps: "Apps", webdav: "WebDAV propio", language: "Idioma", followBrowser: "Según el navegador" },
  hero: {
    badge: "Tus datos, tu decisión",
    h1: "Tus datos son tu responsabilidad.",
    lede: "Todas mis apps guardan tus datos en tu dispositivo. Para sincronizar entre dispositivos, conectas tu propio Google Drive o WebDAV. No tengo servidor y nunca toco tus datos.",
    ctaApps: "Ver las apps",
    ctaWebdav: "¿Sin WebDAV?",
  },
  principles: {
    h2: "Qué significa",
    items: [
      { t: "Los tienes tú", d: "Los datos viven primero en tu dispositivo y funcionan sin conexión. Exportarlos, moverlos o borrarlos: tú decides." },
      { t: "Solo se sincronizan con tu almacenamiento", d: "La sincronización pasa por tu propio Google Drive o WebDAV. No hay ningún servidor del desarrollador en medio." },
      { t: "Nadie puede perderlos ni venderlos", d: "No tengo acceso a tus datos, así que no puedo perderlos ni venderlos. Si algún día dejo de mantener una app, tus datos siguen siendo tuyos." },
    ],
    flip: {
      t: "La otra cara: si los pierdes, nadie puede recuperarlos",
      d: "Si olvidas la contraseña maestra, borras los archivos de tu nube o pierdes un dispositivo sin copia, yo no tengo nada que recuperar. Las copias de seguridad dependen de ti.",
    },
  },
  flow: {
    h2: "Por dónde van tus datos",
    lede: "Sincronizar es solo que tus dispositivos hablen con tu almacenamiento. Yo no soy parte de eso.",
    device: "Tus dispositivos",
    drive: "Tu Google Drive",
    webdav: "Tu WebDAV",
    or: "o",
    server: "Servidor del desarrollador",
    serverNote: "No participa. No existe.",
  },
  apps: {
    h2: "Apps hechas así",
    lede: "Todas funcionan en local primero y solo sincronizan con tu almacenamiento.",
    platforms: "Plataformas",
    sync: "Sincronización",
    soon: "próximamente",
    site: "Sitio web",
    navill: {
      tagline: "Gestor de marcadores en la nueva pestaña: espacios, cajones, alias y compartir.",
      note: "Solo se comparte cuando pulsas Compartir, y solo se sube el espacio o cajón que elijas.",
    },
    mimatory: {
      tagline: "Gestor de contraseñas local primero, con bóveda cifrada.",
      note: "En Google Drive usa la carpeta oculta de datos de la app. Solo sale de tu dispositivo texto cifrado (AES-256-GCM).",
    },
    reicky: {
      tagline: "Notas adhesivas de escritorio, como Stickies en macOS.",
      note: "Por ahora las notas se quedan en tu equipo. La sincronización con Google Drive y WebDAV está en camino.",
    },
  },
  duties: {
    h2: "Tu parte del trato",
    lede: "Ser dueño de tus datos significa ser dueño de la red de seguridad. Diez minutos bastan.",
    items: [
      { t: "Exporta una copia de vez en cuando", d: "Guárdala en otro sitio, como un disco externo u otra nube." },
      { t: "Recuerda tu contraseña maestra", d: "Si olvidas la contraseña maestra de Mimatory, nadie puede abrir la bóveda. Ni yo." },
      { t: "Protege tu cuenta de almacenamiento", d: "Activa la verificación en dos pasos en Google y usa una contraseña larga en WebDAV." },
      { t: "Sincroniza antes de cambiar de dispositivo", d: "Comprueba que todo está en el nuevo antes de borrar el viejo." },
    ],
  },
  webdav: {
    h2: "¿Sin WebDAV? Monta el tuyo",
    lede: "WebDAV es un protocolo de archivos muy común que admiten muchas herramientas. Si no tienes uno, hay dos caminos.",
    r2: {
      t: "Tu propio WebDAV en Cloudflare R2",
      d: "Mi fork de r2-webdav se despliega en tu propia cuenta de Cloudflare en pocos minutos. Los archivos quedan en tu bucket de R2 e incluye un gestor de archivos en el navegador.",
      cta: "Ver r2-webdav",
    },
    others: {
      t: "O usa uno que ya tengas",
      d: "Nextcloud, un NAS Synology y Jianguoyun (坚果云) hablan WebDAV. Pon la dirección y tu usuario, y listo.",
    },
  },
  footer: { meaning: "ydiyr = your data is your responsibility", license: "Licencia MIT" },
};
