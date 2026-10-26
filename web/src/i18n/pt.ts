import type { Messages } from "./types.ts";

export const pt: Messages = {
  title: "Seus dados são sua responsabilidade · ydiyr",
  description: "Meus apps guardam seus dados nos seus próprios dispositivos e só sincronizam pelo seu Google Drive ou WebDAV, nunca por um servidor do desenvolvedor.",
  nav: { apps: "Apps", webdav: "WebDAV próprio", language: "Idioma", followBrowser: "Seguir o navegador" },
  hero: {
    badge: "Seus dados, sua escolha",
    h1: "Seus dados são sua responsabilidade.",
    lede: "Todos os apps que eu faço guardam seus dados no seu dispositivo. Para sincronizar entre dispositivos, você conecta seu próprio Google Drive ou WebDAV. Não tenho servidor e nunca toco nos seus dados.",
    ctaApps: "Ver os apps",
    ctaWebdav: "Sem WebDAV?",
  },
  principles: {
    h2: "O que isso quer dizer",
    items: [
      { t: "Os dados ficam com você", d: "Eles ficam primeiro no seu dispositivo e funcionam offline. Exportar, mover ou apagar: quem decide é você." },
      { t: "Só sincronizam com o seu armazenamento", d: "A sincronização passa pelo seu próprio Google Drive ou WebDAV. Não há servidor do desenvolvedor no meio." },
      { t: "Ninguém pode perdê-los nem vendê-los", d: "Eu não tenho acesso aos seus dados, então não posso perdê-los nem vendê-los. Se um dia eu parar de manter um app, seus dados continuam seus." },
    ],
    flip: {
      t: "O outro lado: se você perder, ninguém recupera",
      d: "Se esquecer a senha mestra, apagar os arquivos do seu drive ou perder um dispositivo sem backup, não há nada do meu lado para recuperar. O backup é com você.",
    },
  },
  flow: {
    h2: "Por onde seus dados passam",
    lede: "Sincronizar é só seus dispositivos conversando com o seu armazenamento. Eu não faço parte disso.",
    device: "Seus dispositivos",
    drive: "Seu Google Drive",
    webdav: "Seu WebDAV",
    or: "ou",
    server: "Servidor do desenvolvedor",
    serverNote: "Não participa. Não existe.",
  },
  apps: {
    h2: "Apps feitos assim",
    lede: "Todos funcionam localmente primeiro e só sincronizam com o seu armazenamento.",
    platforms: "Plataformas",
    sync: "Sincronização",
    soon: "em breve",
    site: "Site",
    navill: {
      tagline: "Gerenciador de favoritos na nova aba: espaços, gavetas, aliases e compartilhamento.",
      note: "Só compartilha quando você clica em Compartilhar, e envia apenas o espaço ou a gaveta escolhida.",
    },
    mimatory: {
      tagline: "Gerenciador de senhas local primeiro, com cofre criptografado.",
      note: "No Google Drive usa a pasta oculta de dados do app. Só texto cifrado sai do seu dispositivo (AES-256-GCM).",
    },
    reicky: {
      tagline: "Notas adesivas para o desktop, como o Stickies do macOS.",
      note: "Por enquanto as notas ficam no seu computador. A sincronização com Google Drive e WebDAV está a caminho.",
    },
  },
  duties: {
    h2: "A sua parte",
    lede: "Ser dono dos seus dados é ser dono da rede de segurança. Dez minutos resolvem.",
    items: [
      { t: "Exporte um backup de vez em quando", d: "Guarde em outro lugar, como um HD externo ou outra nuvem." },
      { t: "Lembre da sua senha mestra", d: "Se esquecer a senha mestra do Mimatory, ninguém abre o cofre. Nem eu." },
      { t: "Proteja sua conta de armazenamento", d: "Ative a verificação em duas etapas no Google e use uma senha longa no WebDAV." },
      { t: "Sincronize antes de trocar de dispositivo", d: "Confira se está tudo no novo antes de apagar o antigo." },
    ],
  },
  webdav: {
    h2: "Sem WebDAV? Rode o seu",
    lede: "WebDAV é um protocolo de arquivos comum, aceito por muitas ferramentas. Se você não tem um, há dois caminhos.",
    r2: {
      t: "Seu próprio WebDAV no Cloudflare R2",
      d: "Meu fork do r2-webdav é implantado na sua própria conta Cloudflare em poucos minutos. Os arquivos ficam no seu bucket R2, e vem com um gerenciador de arquivos no navegador.",
      cta: "Ver r2-webdav",
    },
    others: {
      t: "Ou use um que você já tem",
      d: "Nextcloud, um NAS Synology e o Jianguoyun (坚果云) falam WebDAV. Informe o endereço e o login e pronto.",
    },
  },
  footer: { meaning: "ydiyr = your data is your responsibility", license: "Licença MIT" },
};
