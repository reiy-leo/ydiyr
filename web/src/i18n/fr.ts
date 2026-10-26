import type { Messages } from "./types.ts";

export const fr: Messages = {
  title: "Vos données, votre responsabilité · ydiyr",
  description: "Mes applis gardent vos données sur vos propres appareils et ne synchronisent que via votre Google Drive ou votre WebDAV, jamais via un serveur du développeur.",
  nav: { apps: "Applis", webdav: "Votre WebDAV", language: "Langue", followBrowser: "Comme le navigateur" },
  hero: {
    badge: "Vos données, votre choix",
    h1: "Vos données sont votre responsabilité.",
    lede: "Toutes mes applis gardent vos données sur votre appareil. Pour synchroniser entre appareils, vous branchez votre propre Google Drive ou WebDAV. Je n'ai pas de serveur et je ne touche jamais à vos données.",
    ctaApps: "Voir les applis",
    ctaWebdav: "Pas de WebDAV ?",
  },
  principles: {
    h2: "Ce que ça veut dire",
    items: [
      { t: "C'est vous qui les gardez", d: "Les données vivent d'abord sur votre appareil et marchent hors ligne. Les exporter, les déplacer, les supprimer : c'est vous qui décidez." },
      { t: "Synchro uniquement vers votre stockage", d: "La synchro passe par votre propre Google Drive ou WebDAV. Aucun serveur du développeur au milieu." },
      { t: "Personne ne peut les perdre ni les vendre", d: "Je n'ai pas accès à vos données, donc je ne peux ni les perdre ni les vendre. Si un jour j'arrête de maintenir une appli, vos données restent à vous." },
    ],
    flip: {
      t: "Le revers : si vous les perdez, personne ne peut les récupérer",
      d: "Mot de passe maître oublié, fichiers effacés de votre drive, appareil perdu sans sauvegarde : je n'ai rien de mon côté pour vous aider. Les sauvegardes, c'est vous.",
    },
  },
  flow: {
    h2: "Où vont vos données",
    lede: "Synchroniser, c'est juste vos appareils qui parlent à votre stockage. Je ne fais pas partie du trajet.",
    device: "Vos appareils",
    drive: "Votre Google Drive",
    webdav: "Votre WebDAV",
    or: "ou",
    server: "Serveur du développeur",
    serverNote: "Pas impliqué. N'existe pas.",
  },
  apps: {
    h2: "Des applis faites comme ça",
    lede: "Toutes fonctionnent d'abord en local et ne synchronisent qu'avec votre stockage.",
    platforms: "Plateformes",
    sync: "Synchro",
    soon: "bientôt",
    site: "Site web",
    navill: {
      tagline: "Gestionnaire de favoris dans le nouvel onglet : espaces, tiroirs, alias et partage.",
      note: "Rien n'est partagé sans un clic sur Partager, et seul l'espace ou le tiroir choisi est envoyé.",
    },
    mimatory: {
      tagline: "Gestionnaire de mots de passe local d'abord, avec coffre chiffré.",
      note: "Sur Google Drive, il utilise le dossier caché des données d'appli. Seul du texte chiffré quitte votre appareil (AES-256-GCM).",
    },
    reicky: {
      tagline: "Notes adhésives pour le bureau, comme Stickies sur macOS.",
      note: "Pour l'instant, les notes restent sur votre ordinateur. La synchro Google Drive et WebDAV arrive.",
    },
  },
  duties: {
    h2: "Votre part du contrat",
    lede: "Posséder ses données, c'est aussi tendre son propre filet de sécurité. Dix minutes suffisent.",
    items: [
      { t: "Exportez une sauvegarde de temps en temps", d: "Rangez-la ailleurs, sur un disque externe ou un autre cloud." },
      { t: "Retenez votre mot de passe maître", d: "Si vous oubliez celui de Mimatory, personne ne peut ouvrir le coffre. Pas même moi." },
      { t: "Protégez votre compte de stockage", d: "Activez la validation en deux étapes chez Google et choisissez un long mot de passe pour WebDAV." },
      { t: "Synchronisez avant de changer d'appareil", d: "Vérifiez que tout est sur le nouveau avant d'effacer l'ancien." },
    ],
  },
  webdav: {
    h2: "Pas de WebDAV ? Hébergez le vôtre",
    lede: "WebDAV est un protocole de fichiers courant, compris par beaucoup d'outils. Si vous n'en avez pas, deux options.",
    r2: {
      t: "Votre propre WebDAV sur Cloudflare R2",
      d: "Mon fork de r2-webdav se déploie sur votre propre compte Cloudflare en quelques minutes. Les fichiers restent dans votre bucket R2, avec un gestionnaire de fichiers dans le navigateur.",
      cta: "Voir r2-webdav",
    },
    others: {
      t: "Ou prenez celui que vous avez déjà",
      d: "Nextcloud, un NAS Synology et Jianguoyun (坚果云) parlent WebDAV. Saisissez l'adresse et l'identifiant, c'est tout.",
    },
  },
  footer: { meaning: "ydiyr = your data is your responsibility", license: "Licence MIT" },
};
