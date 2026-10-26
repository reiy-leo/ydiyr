import { useEffect, useState, type ReactNode } from "react";
import { Badge, Button, DropdownMenu, LayerCard, LinkButton, Text } from "@cloudflare/kumo";
import {
  ArrowRight,
  Ban,
  Bookmark,
  Cloud,
  Download,
  ExternalLink,
  Globe,
  HardDrive,
  KeyRound,
  Laptop,
  RefreshCw,
  ServerOff,
  Smartphone,
  StickyNote,
  TriangleAlert,
  UserLock,
} from "lucide-react";
import { LANGS, applyLang, detectLang, storeLang, storedLang, type Lang } from "./i18n/index.ts";
import type { Messages } from "./i18n/types.ts";
import { APPS, LINKS, type App as AppInfo } from "./apps.ts";

const ICON = 16;

function GitHubMark({ size = ICON }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.27 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LanguageMenu({ lang, onChange, m }: { lang: Lang; onChange: (l: Lang | null) => void; m: Messages }) {
  const chosen = storedLang();
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger render={<Button variant="ghost" shape="square" icon={<Globe size={ICON} />} aria-label={m.nav.language} title={m.nav.language} />} />
      <DropdownMenu.Content align="end">
        <DropdownMenu.Item onClick={() => onChange(null)}>
          {m.nav.followBrowser}
          {chosen ? "" : " ✓"}
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        {(Object.keys(LANGS) as Lang[]).map((l) => (
          <DropdownMenu.Item key={l} lang={LANGS[l].locale} onClick={() => onChange(l)}>
            {LANGS[l].name}
            {chosen && lang === l ? " ✓" : ""}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}

function Header({ lang, onLang, m }: { lang: Lang; onLang: (l: Lang | null) => void; m: Messages }) {
  return (
    <header className="sticky top-0 z-10 border-b border-kumo-line bg-kumo-base">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-5">
        <a href="#top" className="flex shrink-0 items-center gap-2" aria-label="ydiyr">
          <img src="/logo-64.png" alt="" width={28} height={28} className="size-7 rounded-lg bg-white ring ring-kumo-line" />
          <Text variant="heading3" as="span">ydiyr</Text>
        </a>
        <nav className="flex items-center gap-1">
          <a href="#apps" className="hidden rounded-md px-2.5 py-1.5 text-sm text-kumo-subtle hover:bg-kumo-tint hover:text-kumo-default sm:block">
            {m.nav.apps}
          </a>
          <a href="#webdav" className="hidden rounded-md px-2.5 py-1.5 text-sm text-kumo-subtle hover:bg-kumo-tint hover:text-kumo-default sm:block">
            {m.nav.webdav}
          </a>
          <LanguageMenu lang={lang} onChange={onLang} m={m} />
          <LinkButton href={LINKS.repo} external variant="ghost" shape="square" icon={<GitHubMark />} aria-label="GitHub" title="GitHub" />
        </nav>
      </div>
    </header>
  );
}

function Section({ id, title, lede, children }: { id?: string; title: string; lede?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto grid max-w-5xl gap-6 px-5 py-12 sm:py-16">
      <div className="grid max-w-2xl gap-1.5">
        <Text variant="heading2" as="h2">{title}</Text>
        {lede && <Text variant="secondary">{lede}</Text>}
      </div>
      {children}
    </section>
  );
}

function IconLine({ icon, title, text, tone = "brand" }: { icon: ReactNode; title: string; text: string; tone?: "brand" | "warning" }) {
  return (
    <div className="flex items-start gap-3">
      <span className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${tone === "warning" ? "bg-kumo-warning-tint text-kumo-warning" : "bg-kumo-tint text-kumo-brand"}`}>
        {icon}
      </span>
      <div className="grid gap-1">
        <Text variant="heading3" as="h3">{title}</Text>
        <Text variant="secondary">{text}</Text>
      </div>
    </div>
  );
}

function Hero({ m }: { m: Messages }) {
  return (
    <section id="top" className="border-b border-kumo-line bg-kumo-base">
      <div className="mx-auto grid max-w-5xl gap-6 px-5 pb-16 pt-14 sm:pb-24 sm:pt-20">
        <div>
          <Badge variant="secondary">{m.hero.badge}</Badge>
        </div>
        <div className="grid max-w-3xl gap-4">
          <h1 className="text-4xl font-semibold text-kumo-strong sm:text-6xl">{m.hero.h1}</h1>
          <p className="max-w-2xl text-base text-kumo-subtle sm:text-lg">{m.hero.lede}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <LinkButton href="#apps" variant="primary" icon={<ArrowRight size={ICON} />}>{m.hero.ctaApps}</LinkButton>
          <LinkButton href="#webdav" variant="secondary" icon={<HardDrive size={ICON} />}>{m.hero.ctaWebdav}</LinkButton>
        </div>
      </div>
    </section>
  );
}

function Principles({ m }: { m: Messages }) {
  const icons = [<Laptop size={ICON} key="a" />, <RefreshCw size={ICON} key="b" />, <UserLock size={ICON} key="c" />];
  return (
    <Section title={m.principles.h2}>
      <div className="grid gap-6 sm:grid-cols-3">
        {m.principles.items.map((it, i) => (
          <IconLine key={it.t} icon={icons[i]} title={it.t} text={it.d} />
        ))}
      </div>
      <div className="rounded-xl bg-kumo-warning-tint px-5 py-4">
        <IconLine tone="warning" icon={<TriangleAlert size={ICON} />} title={m.principles.flip.t} text={m.principles.flip.d} />
      </div>
    </Section>
  );
}

function FlowNode({ icon, label, muted }: { icon: ReactNode; label: string; muted?: boolean }) {
  return (
    <div className={`flex items-center gap-2 rounded-lg px-3 py-2 ring ring-kumo-line ${muted ? "text-kumo-inactive" : "bg-kumo-base"}`}>
      <span className="flex items-center">{icon}</span>
      <span className={`text-sm ${muted ? "line-through" : "font-medium"}`}>{label}</span>
    </div>
  );
}

function Flow({ m }: { m: Messages }) {
  return (
    <Section title={m.flow.h2} lede={m.flow.lede}>
      <LayerCard className="grid gap-5 px-5 py-6">
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-2">
            <FlowNode icon={<Laptop size={ICON} />} label={m.flow.device} />
            <div className="flex gap-2 text-kumo-subtle">
              <Smartphone size={ICON} />
              <Laptop size={ICON} />
            </div>
          </div>
          <div className="flex justify-center text-kumo-subtle sm:px-2">
            <RefreshCw size={18} />
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <FlowNode icon={<Cloud size={ICON} />} label={m.flow.drive} />
            <Text variant="secondary" as="span">{m.flow.or}</Text>
            <FlowNode icon={<HardDrive size={ICON} />} label={m.flow.webdav} />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 border-t border-kumo-line pt-4">
          <FlowNode muted icon={<ServerOff size={ICON} />} label={m.flow.server} />
          <span className="flex items-center gap-1.5 text-sm text-kumo-subtle">
            <Ban size={14} />
            {m.flow.serverNote}
          </span>
        </div>
      </LayerCard>
    </Section>
  );
}

const APP_ICON: Record<AppInfo["key"], ReactNode> = {
  navill: <Bookmark size={18} />,
  mimatory: <KeyRound size={18} />,
  reicky: <StickyNote size={18} />,
};

function AppCard({ app, m }: { app: AppInfo; m: Messages }) {
  const copy = m.apps[app.key];
  return (
    <LayerCard className="flex flex-col gap-4 px-5 py-4">
      <div className="flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-lg bg-kumo-tint text-kumo-brand">{APP_ICON[app.key]}</span>
        <Text variant="heading3" as="h3">{app.name}</Text>
      </div>
      <div className="grid gap-1.5">
        <Text>{copy.tagline}</Text>
        <Text variant="secondary" size="sm">{copy.note}</Text>
      </div>
      <dl className="grid gap-2 text-sm">
        <div className="grid gap-1">
          <dt className="text-kumo-subtle">{m.apps.platforms}</dt>
          <dd className="text-kumo-default">{app.platforms.join(" · ")}</dd>
        </div>
        <div className="grid gap-1">
          <dt className="text-kumo-subtle">{m.apps.sync}</dt>
          <dd className="flex flex-wrap gap-1.5">
            <Badge variant={app.syncSoon ? "neutral" : "blue"}>Google Drive</Badge>
            <Badge variant={app.syncSoon ? "neutral" : "teal"}>WebDAV</Badge>
            {app.syncSoon && <Badge variant="orange">{m.apps.soon}</Badge>}
          </dd>
        </div>
      </dl>
      <div className="mt-auto flex flex-wrap gap-2 pt-1">
        {app.site && (
          <LinkButton href={app.site} external size="sm" variant="primary" icon={<ExternalLink size={14} />}>{m.apps.site}</LinkButton>
        )}
        {app.stores?.map((s) => (
          <LinkButton key={s.label} href={s.href} external size="sm" variant="secondary" icon={<Download size={14} />}>{s.label}</LinkButton>
        ))}
        <LinkButton href={app.repo} external size="sm" variant="secondary" icon={<GitHubMark size={14} />}>GitHub</LinkButton>
      </div>
    </LayerCard>
  );
}

function Apps({ m }: { m: Messages }) {
  return (
    <Section id="apps" title={m.apps.h2} lede={m.apps.lede}>
      <div className="grid gap-4 md:grid-cols-3">
        {APPS.map((a) => (
          <AppCard key={a.key} app={a} m={m} />
        ))}
      </div>
    </Section>
  );
}

function Duties({ m }: { m: Messages }) {
  return (
    <Section title={m.duties.h2} lede={m.duties.lede}>
      <ol className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {m.duties.items.map((it, i) => (
          <li key={it.t} className="flex items-start gap-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-kumo-tint text-sm font-medium text-kumo-brand">{i + 1}</span>
            <div className="grid gap-1">
              <Text bold>{it.t}</Text>
              <Text variant="secondary">{it.d}</Text>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Webdav({ m }: { m: Messages }) {
  return (
    <Section id="webdav" title={m.webdav.h2} lede={m.webdav.lede}>
      <div className="grid gap-4 md:grid-cols-2">
        <LayerCard className="flex flex-col gap-4 px-5 py-4">
          <div className="grid gap-1.5">
            <Text variant="heading3" as="h3">{m.webdav.r2.t}</Text>
            <Text variant="secondary">{m.webdav.r2.d}</Text>
          </div>
          <div className="mt-auto">
            <LinkButton href={LINKS.r2webdav} external size="sm" variant="primary" icon={<GitHubMark size={14} />}>{m.webdav.r2.cta}</LinkButton>
          </div>
        </LayerCard>
        <LayerCard className="flex flex-col gap-4 px-5 py-4">
          <div className="grid gap-1.5">
            <Text variant="heading3" as="h3">{m.webdav.others.t}</Text>
            <Text variant="secondary">{m.webdav.others.d}</Text>
          </div>
          <div className="mt-auto flex flex-wrap gap-1.5">
            <Badge variant="neutral">Nextcloud</Badge>
            <Badge variant="neutral">Synology NAS</Badge>
            <Badge variant="neutral">坚果云 Jianguoyun</Badge>
          </div>
        </LayerCard>
      </div>
    </Section>
  );
}

function Footer({ m }: { m: Messages }) {
  return (
    <footer className="border-t border-kumo-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-kumo-subtle sm:flex-row sm:items-center sm:justify-between">
        <span>{m.footer.meaning}</span>
        <span className="flex items-center gap-3">
          <span>{m.footer.license}</span>
          <a href={LINKS.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-kumo-default">
            <GitHubMark size={14} />
            reiy-leo/ydiyr
          </a>
        </span>
      </div>
    </footer>
  );
}

export function App() {
  const [lang, setLang] = useState<Lang>(detectLang);
  const m = LANGS[lang].messages;

  useEffect(() => applyLang(lang), [lang]);

  const onLang = (l: Lang | null) => {
    storeLang(l);
    setLang(l ?? detectLang());
  };

  return (
    <div className="min-h-screen bg-kumo-canvas text-kumo-default">
      <Header lang={lang} onLang={onLang} m={m} />
      <main>
        <Hero m={m} />
        <Principles m={m} />
        <Flow m={m} />
        <Apps m={m} />
        <Duties m={m} />
        <Webdav m={m} />
      </main>
      <Footer m={m} />
    </div>
  );
}
