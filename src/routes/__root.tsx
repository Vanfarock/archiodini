import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import appCss from "../styles.css?url";
import logo from "@/assets/logo-archiodini.png";
import { NAV_LINKS, SITE, WHATSAPP_URL } from "@/lib/site";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-primary">404</h1>
        <h2 className="mt-4 text-xl font-display text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          O conteúdo que você procura pode ter sido movido. Vamos voltar?
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:opacity-90"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-display tracking-tight text-foreground">
          Algo deu errado por aqui
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Tente recarregar ou voltar para a página inicial.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Tentar de novo
          </button>
          <a
            href="/"
            className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Archiodini Projetos",
  alternateName: "ARCHIODINI — arte e interiores",
  founder: {
    "@type": "Person",
    name: "Luana Chiodini",
    jobTitle: "Arquiteta e Designer de Interiores",
  },
  description:
    "Arquiteta de interiores com atendimento 100% remoto para todo o Brasil.",
  areaServed: "BR",
  serviceType: "Interior Design",
  url: "/",
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: SITE.country,
  },
  sameAs: [SITE.instagram, SITE.facebook, SITE.youtube],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#5C6340" },
      { property: "og:site_name", content: "Archiodini Projetos" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "description", content: "Archiodini Canvas is a modern, elegant website for Luana Chiodini, an architect offering remote interior design services across Brazil." },
      { property: "og:description", content: "Archiodini Canvas is a modern, elegant website for Luana Chiodini, an architect offering remote interior design services across Brazil." },
      { name: "twitter:description", content: "Archiodini Canvas is a modern, elegant website for Luana Chiodini, an architect offering remote interior design services across Brazil." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3a6eac12-2c6a-4ac3-9800-34a7e16fc754/id-preview-b6f3d9a8--3b10730e-f84c-434a-a315-c9cfb7b3b614.lovable.app-1779766756335.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3a6eac12-2c6a-4ac3-9800-34a7e16fc754/id-preview-b6f3d9a8--3b10730e-f84c-434a-a315-c9cfb7b3b614.lovable.app-1779766756335.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: logo },
      { rel: "apple-touch-icon", href: logo },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_JSONLD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        {/*
          GA4 placeholder — substitua G-XXXXXXXXXX pelo seu ID e descomente:
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
          <script>{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`}</script>
        */}
        {/*
          Meta Pixel placeholder — substitua PIXEL_ID e descomente o script.
        */}
        <Scripts />
      </body>
    </html>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-shadow ${
        scrolled ? "nav-blur shadow-[0_1px_0_0_rgba(0,0,0,0.04)]" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" aria-label="Archiodini — início" className="flex items-center gap-3">
          <span className="block h-11 w-11 overflow-hidden rounded-full ring-1 ring-primary/15">
            <img
              src={logo}
              alt="Logo Archiodini"
              className="logo-crop h-full w-full"
              width={44}
              height={44}
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-primary tracking-luxe">
              ARCHIODINI
            </span>
            <span className="text-[10px] uppercase tracking-luxe text-muted-foreground">
              arte e interiores
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13px] uppercase tracking-luxe text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-[12px] uppercase tracking-luxe text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Falar no WhatsApp
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="rounded-md p-2 text-primary md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 nav-blur md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-md px-3 py-3 text-sm uppercase tracking-luxe text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-[12px] uppercase tracking-luxe text-primary-foreground"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="block h-10 w-10 overflow-hidden rounded-full ring-1 ring-primary/15">
              <img src={logo} alt="" className="logo-crop h-full w-full" />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-display tracking-luxe text-primary">ARCHIODINI</span>
              <span className="text-[10px] uppercase tracking-luxe text-muted-foreground">
                arte e interiores
              </span>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">
            Arquitetura e design de interiores 100% remoto. Atendimento para todo o Brasil,
            de Blumenau ao seu endereço.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-luxe text-primary">Navegação</h4>
          <ul className="mt-5 space-y-2 text-sm text-foreground/80">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-luxe text-primary">Conecte-se</h4>
          <ul className="mt-5 space-y-2 text-sm text-foreground/80">
            <li>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                Instagram @{SITE.instagramHandle}
              </a>
            </li>
            <li>
              <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                YouTube
              </a>
            </li>
            <li>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                Facebook
              </a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-luxe text-primary">Atendimento</h4>
          <p className="mt-5 text-sm text-foreground/80">
            Blumenau, SC<br />Atendimento remoto para todo o Brasil
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Seg–Sex · 9h às 18h
          </p>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
          <p className="text-[11px] leading-relaxed text-muted-foreground">
            Archiodini Projetos — Arquiteta de Interiores Online · Projetos residenciais e
            comerciais em São Paulo, Rio de Janeiro, Brasília, Belo Horizonte, Curitiba,
            Porto Alegre, Florianópolis, Blumenau e todo o Brasil.
          </p>
          <p className="mt-2 text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Archiodini Projetos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </QueryClientProvider>
  );
}
