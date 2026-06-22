import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, useRouterState, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { X, Menu, Home, Flower, Store, ClipboardList } from "lucide-react";
import { marked } from "marked";
import { parse } from "yaml";
const appCss = "/assets/styles-BBtkjn_f.css";
const logo = "/assets/logo-archiodini-Cy_mDhRw.png";
const cozinha = "/assets/projeto-cozinha-Yi3L0drD.png";
const SITE = {
  name: "Archiodini",
  tagline: "arquitetura de interiores",
  url: "https://archiodini.com.br",
  description: "Luana Chiodini, arquiteta de interiores 100% remota. Projetos residenciais e comerciais online para todo o mundo.",
  founder: "Luana Chiodini",
  city: "Blumenau",
  region: "SC",
  country: "BR",
  whatsappNumber: "5547991619082",
  instagram: "https://www.instagram.com/luanachiodini.arq/",
  instagramHandle: "luanachiodini.arq",
  facebook: "https://www.facebook.com/people/Archiodini-Projetos/61573096983076/?locale=pt_BR",
  youtube: "https://www.youtube.com/@archiodiniprojetos"
};
function absUrl(path) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}
const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  "Olá Luana! Vim pelo site e gostaria de conversar sobre um projeto."
)}`;
const NAV_LINKS = [
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Contato" }
];
function WhatsAppFloat() {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: WHATSAPP_URL,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Falar com Luana no WhatsApp",
      className: "wa-pulse fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105",
      style: { backgroundColor: "var(--whatsapp)" },
      children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 32 32", className: "h-7 w-7", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M19.11 17.21c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26 0 1.33.97 2.62 1.11 2.8.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.58.65.21 1.25.18 1.72.11.52-.08 1.61-.66 1.84-1.29.23-.64.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32zM16.03 5.33c-5.9 0-10.69 4.79-10.69 10.69 0 1.89.5 3.74 1.43 5.36L5.33 26.67l5.43-1.42c1.56.85 3.31 1.3 5.09 1.3h.01c5.89 0 10.69-4.79 10.69-10.69 0-2.85-1.11-5.54-3.13-7.56-2.02-2.02-4.71-3.13-7.56-3.13z" }) })
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-display text-primary", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-display text-foreground", children: "Página não encontrada" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "O conteúdo que você procura pode ter sido movido. Vamos voltar?" }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:opacity-90",
        children: "Voltar para o início"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-display tracking-tight text-foreground", children: "Algo deu errado por aqui" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Tente recarregar ou voltar para a página inicial." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90",
          children: "Tentar de novo"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground",
          children: "Início"
        }
      )
    ] })
  ] }) });
}
const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: SITE.name,
  alternateName: `${SITE.name} — ${SITE.tagline}`,
  founder: {
    "@type": "Person",
    name: SITE.founder,
    jobTitle: "Arquiteta de Interiores"
  },
  description: SITE.description,
  areaServed: "Worldwide",
  serviceType: "Interior Design",
  url: SITE.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: SITE.country
  },
  sameAs: [SITE.instagram, SITE.facebook, SITE.youtube]
};
const Route$9 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#5C6340" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: `Arquitetura de Interiores Online | ${SITE.name}` },
      { property: "og:title", content: `Arquitetura de Interiores Online | ${SITE.name}` },
      { name: "twitter:title", content: `Arquitetura de Interiores Online | ${SITE.name}` },
      { name: "description", content: SITE.description },
      { property: "og:description", content: SITE.description },
      { name: "twitter:description", content: SITE.description },
      { property: "og:image", content: absUrl(cozinha) },
      { name: "twitter:image", content: absUrl(cozinha) }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: logo },
      { rel: "apple-touch-icon", href: logo },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_JSONLD)
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx("svg", { width: "0", height: "0", "aria-hidden": "true", className: "absolute", children: /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip-arch", clipPathUnits: "objectBoundingBox", children: /* @__PURE__ */ jsx("path", { d: "M 0 0.4 C 0 0.1790625 0.223828125 0 0.5 0 C 0.776171875 0 1 0.1790625 1 0.4 V 1 H 0 Z" }) }) }) }),
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
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
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `sticky top-0 z-40 w-full transition-shadow ${scrolled ? "nav-blur shadow-[0_1px_0_0_rgba(0,0,0,0.04)]" : ""}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", "aria-label": "Archiodini — início", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "block h-11 w-11 overflow-hidden rounded-full ring-1 ring-primary/15", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: logo,
                alt: "Logo Archiodini",
                className: "logo-crop h-full w-full",
                width: 44,
                height: 44
              }
            ) }),
            /* @__PURE__ */ jsxs("span", { className: "flex flex-col leading-tight", children: [
              /* @__PURE__ */ jsx("span", { className: "font-display text-lg text-primary tracking-luxe", children: "ARCHIODINI" }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-luxe text-muted-foreground", children: "arquitetura de interiores" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-9 md:flex", children: NAV_LINKS.map((l) => /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              className: "text-[13px] uppercase tracking-luxe text-foreground/80 transition-colors hover:text-primary",
              activeProps: { className: "text-primary" },
              children: l.label
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: WHATSAPP_URL,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hidden rounded-full bg-primary px-5 py-2.5 text-[12px] uppercase tracking-luxe text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex",
                children: "Falar no WhatsApp"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setOpen((v) => !v),
                "aria-label": "Abrir menu",
                className: "rounded-md p-2 text-primary md:hidden",
                children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "border-t border-border/60 nav-blur md:hidden", children: /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4", children: [
          NAV_LINKS.map((l) => /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              className: "rounded-md px-3 py-3 text-sm uppercase tracking-luxe text-foreground/80 hover:bg-secondary",
              activeProps: { className: "text-primary" },
              children: l.label
            },
            l.to
          )),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: WHATSAPP_URL,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mt-2 rounded-full bg-primary px-5 py-3 text-center text-[12px] uppercase tracking-luxe text-primary-foreground",
              children: "Falar no WhatsApp"
            }
          )
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "mt-24 border-t border-border/60 bg-background", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "block h-10 w-10 overflow-hidden rounded-full ring-1 ring-primary/15", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "", className: "logo-crop h-full w-full" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col leading-tight", children: [
            /* @__PURE__ */ jsx("span", { className: "font-display tracking-luxe text-primary", children: "ARCHIODINI" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-luxe text-muted-foreground", children: "arquitetura de interiores" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-xs text-sm text-muted-foreground", children: "Arquitetura e design de interiores 100% remoto. Atendimento para todo o mundo, de Blumenau ao seu endereço." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-[11px] uppercase tracking-luxe text-primary", children: "Navegação" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-2 text-sm text-foreground/80", children: NAV_LINKS.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: l.to, className: "hover:text-primary", children: l.label }) }, l.to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-[11px] uppercase tracking-luxe text-primary", children: "Conecte-se" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-2 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: SITE.instagram,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hover:text-primary",
              children: [
                "Instagram @",
                SITE.instagramHandle
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: SITE.youtube,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hover:text-primary",
              children: "YouTube"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: SITE.facebook,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hover:text-primary",
              children: "Facebook"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: WHATSAPP_URL,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hover:text-primary",
              children: "WhatsApp"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-[11px] uppercase tracking-luxe text-primary", children: "Atendimento" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-5 text-sm text-foreground/80", children: [
          "Blumenau, SC",
          /* @__PURE__ */ jsx("br", {}),
          "Atendimento remoto para todo o mundo"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: "Seg–Sex · 9h às 18h" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-border/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 py-6 sm:px-8", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-[11px] leading-relaxed text-muted-foreground", children: [
        SITE.name,
        " — Arquiteta de Interiores Online · Projetos residenciais e comerciais em São São o, Rio de Janeiro, Brasília, Belo Horizonte, Curitiba, Porto Alegre, Flo Blumenau e tod o o mundo."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-2 text-[11px] text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        SITE.name,
        ". Todos os direitos reservados."
      ] })
    ] }) })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$9.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(WhatsAppFloat, {})
  ] }) });
}
const $$splitComponentImporter$7 = () => import("./sobre-DYD4auRa.js");
const Route$8 = createFileRoute("/sobre")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
  head: () => ({
    meta: [{
      title: "Sobre Luana Chiodini — Arquiteta de Interiores | Archiodini"
    }, {
      name: "description",
      content: "Conheça Luana Chiodini, arquiteta de interiores baseada em Blumenau (SC) com atendimento 100% remoto para todo o mundo."
    }, {
      property: "og:title",
      content: "Sobre Luana Chiodini — Arquiteta de Interiores"
    }, {
      property: "og:description",
      content: `Trajetória, método de trabalho e propósito por trás da ${SITE.name}.`
    }, {
      property: "og:url",
      content: absUrl("/sobre")
    }],
    links: [{
      rel: "canonical",
      href: absUrl("/sobre")
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Luana Chiodini",
        jobTitle: "Arquiteta de Interiores",
        worksFor: {
          "@type": "Organization",
          name: SITE.name
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.city,
          addressRegion: SITE.region,
          addressCountry: SITE.country
        },
        sameAs: [SITE.instagram, SITE.facebook, SITE.youtube]
      })
    }]
  })
});
const __vite_glob_0_0 = '---\nslug: "5-erros-comuns-reforma-apartamento"\ntitle: "5 erros comuns ao reformar um apartamento (e como evitar)"\nexcerpt: "Reformar sem projeto custa caro. Veja os erros que mais aparecem nas obras residenciais e as decisões simples que economizam tempo, dinheiro e arrependimento."\ncategory: "Reforma"\ndate: "2025-10-10"\nupdatedAt: "2025-10-10"\ntags:\n  - "erros reforma apartamento"\n  - "reforma residencial"\n  - "projeto de interiores"\n  - "arquiteta de interiores"\nreadingMinutes: 7\ncover: "cozinha"\nfaq:\n  - q: "Vale a pena contratar arquiteta para reforma pequena?"\n    a: "Sim. Mesmo em reformas pequenas, um projeto bem detalhado evita retrabalho e costuma se pagar em economia de materiais e mão de obra."\n  - q: "Posso contratar só a parte de elétrica e hidráulica?"\n    a: "Sim, é possível contratar etapas separadas. Avalie comigo o que faz mais sentido para o seu momento."\n  - q: "Quanto tempo dura uma reforma residencial?"\n    a: "Reformas pequenas costumam levar de 30 a 60 dias; reformas completas, de 90 a 180 dias, dependendo do escopo."\n---\n\nReformar um apartamento parece simples, até o orçamento dobrar, a marcenaria não encaixar e a tomada ficar atrás do sofá. A maior parte desses problemas vem de uma única causa: começar a obra sem projeto. Veja os cinco erros mais comuns e como evitá-los.\n\n## 1. Começar pela demolição\n\nAntes de derrubar uma parede, é preciso saber o que vai entrar no lugar. Layout, instalações elétricas, hidráulica e marcenaria devem estar definidos no papel.\n\n## 2. Comprar mobiliário antes do layout pronto\n\nO sofá perfeito não cabe em qualquer sala. Espere a definição do layout para evitar trocas e arrependimentos.\n\n## 3. Esquecer dos pontos elétricos\n\nTomada no lugar errado é o arrependimento número um da reforma. O projeto elétrico precisa nascer junto com o layout, não depois.\n\n## 4. Subestimar a iluminação\n\nUma única lâmpada no centro do ambiente achata o espaço. Camadas de luz: geral, tarefa e cênica transformam qualquer ambiente.\n\n## 5. Não documentar a obra\n\nSem caderno de especificações, cada profissional interpreta o pedido do seu jeito e a conta chega na entrega. Um projeto executivo bem feito é o que mantém a obra no prazo e no orçamento.\n\n';
const __vite_glob_0_1 = '---\r\nslug: "apartamento-parecendo-maior"\r\ntitle: "Como Deixar Meu Apartamento Parecendo Maior? Soluções Que Fazem Diferença no Dia a Dia"\r\nexcerpt: "Amplitude não depende só de metragem. Layout, marcenaria inteligente, cores, integração visual e iluminação fazem toda a diferença."\r\ncategory: "Ambientes"\r\ndate: "2026-03-20"\r\nupdatedAt: "2026-03-20"\r\ntags:\r\n  - "apartamento pequeno"\r\n  - "ampliar apartamento"\r\n  - "marcenaria planejada"\r\n  - "projeto de interiores"\r\ncover: "cozinha"\r\nfaq:\r\n  - q: "Apartamento pequeno precisa ser todo branco?"\r\n    a: "Não. Paletas suaves e harmoniosas ampliam visualmente sem deixar o ambiente frio ou sem personalidade."\r\n  - q: "Marcenaria planejada ajuda em apartamentos compactos?"\r\n    a: "Sim. Aproveita cada centímetro, organiza o espaço e reduz a quantidade de móveis soltos espalhados."\r\n  - q: "O layout realmente muda a percepção de tamanho?"\r\n    a: "Muito. A disposição correta dos móveis e a circulação livre são o primeiro passo para ampliar visualmente o ambiente."\r\n---\r\n\r\n# Como Deixar Meu Apartamento Parecendo Maior? Soluções Que Fazem Diferença no Dia a Dia\r\n\r\nSe você mora em um apartamento compacto, provavelmente já se fez essa pergunta:\r\n\r\n**"Como posso fazer meu apartamento parecer maior?"**\r\n\r\nA boa notícia é que a sensação de amplitude não depende apenas da metragem. Muitas vezes, dois apartamentos com o mesmo tamanho podem transmitir percepções completamente diferentes.\r\n\r\nEnquanto um parece apertado e cheio de obstáculos, o outro transmite leveza, organização e espaço. E isso acontece porque a sensação de amplitude está muito mais relacionada ao planejamento do que aos metros quadrados.\r\n\r\nSe você deseja aproveitar melhor seu apartamento e criar ambientes visualmente mais amplos, confira algumas estratégias que realmente funcionam.\r\n\r\n## O Primeiro Segredo Não É a Decoração. É o Layout.\r\n\r\nMuitas pessoas acreditam que o problema está nos móveis ou nas cores das paredes. Mas, na maioria das vezes, a principal questão está na distribuição dos ambientes.\r\n\r\nUm sofá mal posicionado, uma mesa grande demais ou uma circulação apertada podem fazer um apartamento parecer muito menor do que realmente é. Por isso, a disposição dos mobiliários é sempre o primeiro passo para criar sensação de amplitude. Quando os móveis ocupam os lugares corretos, o espaço começa a funcionar melhor e naturalmente parece maior.\r\n\r\n## Invista em Marcenaria Inteligente\r\n\r\nEm apartamentos pequenos, cada centímetro importa.\r\n\r\nA marcenaria planejada permite aproveitar espaços que normalmente seriam desperdiçados, criando soluções de armazenamento sem comprometer a circulação.\r\n\r\nAlém de manter a organização, ela ajuda a reduzir a quantidade de móveis soltos espalhados pelo ambiente, contribuindo para uma aparência mais limpa e ampla.\r\n\r\n## Utilize Cores de Forma Estratégica\r\n\r\nAs cores influenciam diretamente na percepção dos espaços. Tons claros costumam refletir melhor a luz e ampliar visualmente os ambientes, mas isso não significa que seu apartamento precise ser totalmente branco.\r\n\r\nHoje existem diversas paletas suaves e acolhedoras que ajudam a criar sensação de amplitude sem deixar os ambientes frios ou sem personalidade.\r\n\r\nO segredo está em manter uma linguagem visual harmoniosa entre os espaços.\r\n\r\n## Integração Visual Faz Toda a Diferença\r\n\r\nQuando existe muita divisão visual entre os ambientes, o apartamento tende a parecer menor.\r\n\r\nPor isso, criar continuidade através de materiais, cores e acabamentos ajuda a ampliar a percepção do espaço. Quanto mais fluida for a leitura visual dos ambientes, maior será a sensação de amplitude.\r\n\r\n## A Iluminação Pode Transformar a Percepção do Espaço\r\n\r\nUm apartamento mal iluminado tende a parecer menor e mais fechado. Já uma iluminação bem planejada valoriza os ambientes, destaca pontos estratégicos e cria profundidade. A combinação entre luz natural e iluminação artificial adequada faz toda a diferença no resultado final.\r\n\r\n## Organização Também É Projeto\r\n\r\nMuitas vezes, o que faz um apartamento parecer pequeno não é a metragem. É a falta de espaço para guardar as coisas.\r\n\r\nQuando objetos ficam acumulados sobre bancadas, mesas e móveis, o ambiente transmite uma sensação de excesso. Por isso, soluções inteligentes de armazenamento são fundamentais para criar espaços mais leves e organizados.\r\n\r\n## O Papel do Projeto de Interiores\r\n\r\nUma das maiores vantagens de um projeto de interiores é enxergar possibilidades que muitas vezes passam despercebidas. Pequenas alterações no layout, na marcenaria ou na escolha dos móveis podem transformar completamente a sensação dos ambientes.\r\n\r\nO objetivo não é fazer seu apartamento crescer em metros quadrados.\r\n\r\nÉ fazer com que cada metro quadrado trabalhe a seu favor.\r\n\r\n## Quer Aproveitar Melhor o Espaço do Seu Apartamento?\r\n\r\nSe você sente que seu apartamento poderia ser mais funcional, organizado e visualmente amplo, um projeto de interiores pode ajudar a revelar todo o potencial do espaço.\r\n\r\nEntre em contato para solicitar um orçamento e descubra como transformar seu apartamento em um ambiente que pareça maior, funcione melhor e reflita sua personalidade.\r\n\r\n';
const __vite_glob_0_2 = '---\r\nslug: "banheiro-pequeno-solucoes-funcionalidade"\r\ntitle: "Banheiro Pequeno: Soluções para Ampliar o Espaço e Ganhar Funcionalidade"\r\nexcerpt: "Banheiro compacto não precisa ser apertado. Veja soluções de projeto, cores, espelhos, iluminação e marcenaria para ganhar amplitude e funcionalidade."\r\ncategory: "Ambientes"\r\ndate: "2026-01-18"\r\nupdatedAt: "2026-01-18"\r\ntags:\r\n  - "banheiro pequeno"\r\n  - "projeto de banheiro"\r\n  - "marcenaria planejada"\r\n  - "arquitetura de interiores"\r\ncover: "cozinha"\r\nfaq:\r\n  - q: "Banheiro pequeno precisa ser todo branco?"\r\n    a: "Não. Tons claros ampliam visualmente, mas texturas, metais e acabamentos bem escolhidos trazem personalidade sem perder leveza."\r\n  - q: "Vale a pena fazer marcenaria planejada em banheiro pequeno?"\r\n    a: "Sim. Móveis sob medida aproveitam cada centímetro e ajudam a manter o ambiente organizado sem comprometer a circulação."\r\n  - q: "Espelho grande realmente amplia o banheiro?"\r\n    a: "Sim. Espelhos amplos criam profundidade e refletem luz, aumentando a sensação de espaço."\r\n---\r\n\r\n# Banheiro Pequeno: Soluções para Ampliar o Espaço e Ganhar Funcionalidade\r\n\r\nTer um banheiro pequeno não significa abrir mão de conforto, organização ou beleza. Com um bom **projeto** é possível aproveitar cada centímetro disponível e criar um ambiente visualmente mais amplo, funcional e agradável para o dia a dia.\r\n\r\nSe você está reformando ou planejando seu banheiro, confira algumas soluções que fazem toda a diferença no resultado final.\r\n\r\n## Invista em um Projeto Planejado\r\n\r\nO primeiro passo para **aproveitar melhor um banheiro pequeno** é contar com um projeto que considere as dimensões do ambiente e como funciona sua rotina.\r\n\r\nIsso vai trazer soluções inteligentes de armazenamento pra você, evitando desperdício de espaço.\r\n\r\n## Utilize Cores Claras para Ampliar Visualmente\r\n\r\nAs cores exercem grande influência na percepção do tamanho dos ambientes.\r\n\r\nTons claros como bege, areia, cinza claro e off-white ajudam a refletir a luz e criam uma sensação de amplitude.\r\n\r\nIsso não significa que o banheiro precisa ser totalmente branco. É possível adicionar personalidade através de texturas, metais, marcenaria e elementos decorativos sem comprometer a leveza visual. \r\n\r\n## Aposte em Espelhos Maiores\r\n\r\nUma das estratégias mais utilizadas em projetos de **banheiro pequeno moderno** é o uso de espelhos grandes.\r\n\r\nAlém de sua função prática, o espelho cria profundidade e aumenta a sensação de espaço.\r\n\r\nDependendo da proposta do ambiente, é possível utilizar espelhos que ocupam toda a largura da bancada ou até mesmo toda a altura da parede, potencializando ainda mais esse efeito.\r\n\r\n## Escolha uma Iluminação Bem Planejada\r\n\r\nA iluminação tem papel fundamental na valorização dos ambientes pequenos.\r\n\r\nUm banheiro bem iluminado parece bem maior, confortável e sofisticado.\r\n\r\nA combinação entre iluminação geral e iluminação no espelho proporciona mais conforto visual e destaca os acabamentos escolhidos para o ambiente.\r\n\r\nAlém disso, a luz adequada contribui para uma sensação maior de limpeza e organização.\r\n\r\n## Invista em Marcenaria Inteligente\r\n\r\nQuando o assunto é **banheiro pequeno com armário planejado**, cada centímetro faz diferença.\r\n\r\nMóveis sob medida permitem aproveitar espaços que normalmente seriam desperdiçados, criando locais para armazenar produtos de higiene, toalhas e objetos de uso diário.\r\n\r\nNichos internos, gavetas organizadoras e armários suspensos são algumas das soluções que ajudam a manter o ambiente organizado sem comprometer a circulação.\r\n\r\n## Prefira Box com Vidro Transparente\r\n\r\nUma dica simples que gera grande impacto visual é utilizar vidro transparente no box.\r\n\r\nDiferente de modelos jateados ou com películas escuras, o vidro incolor permite a continuidade visual do ambiente, fazendo o banheiro parecer maior.\r\n\r\nÉ uma solução muito utilizada em projetos de **banheiros pequenos e funcionais**, por ampliar a percepção do espaço disponível.\r\n\r\n## Revestimentos e Acabamentos Fazem Diferença\r\n\r\nA escolha dos revestimentos também influencia diretamente na sensação de amplitude.\r\n\r\nPeças maiores e com menos recortes, com cores que contam uma história, dão uma sensação de continuidade e acabam parecendo maiores dentro do espaço.\r\n\r\nAlém disso, o uso de poucos materiais e acabamentos bem definidos transmite uma sensação de organização e elegância, características muito desejadas em banheiros compactos.\r\n\r\n## Vale a Pena Fazer um Projeto para Banheiro Pequeno?\r\n\r\nMuitas pessoas acreditam que apenas ambientes grandes precisam de projeto, mas a realidade é justamente o contrário. **Quanto menor o espaço, mais importante se torna o planejamento.**\r\n\r\nUm **projeto de interiores para banheiro pequeno** ajuda a evitar erros, otimizar a área disponível e garantir um resultado bonito, confortável e funcional.\r\n\r\nCom as escolhas certas, é possível transformar um banheiro compacto em um ambiente organizado e adaptado às necessidades da sua família.\r\n\r\n## Quer Transformar Seu Banheiro?\r\n\r\nSe você deseja aproveitar melhor o espaço e criar um banheiro bonito, funcional e pensado para sua rotina, entre em contato para solicitar um orçamento.\r\n\r\nJuntos, podemos desenvolver um projeto personalizado que valorize cada detalhe do seu ambiente e transforme completamente a sua experiência no dia a dia.\r\n\r\n';
const __vite_glob_0_3 = '---\r\nslug: "como-escolher-arquiteta-casa-apartamento"\r\ntitle: "Como Escolher a Arquiteta para Sua Casa ou Apartamento: O Que Perguntar Antes de Contratar"\r\nexcerpt: "Perguntas essenciais antes de contratar: processo, personalização, visualização 3D, projeto executivo e alinhamento com sua rotina."\r\ncategory: "Guia"\r\ndate: "2026-02-18"\r\nupdatedAt: "2026-02-18"\r\ntags:\r\n  - "como escolher arquiteta"\r\n  - "projeto de interiores"\r\n  - "arquiteta de interiores online"\r\n  - "projeto 3D"\r\n  - "projeto executivo"\r\ncover: "cozinha"\r\nfaq:\r\n  - q: "O que perguntar na primeira conversa com uma arquiteta?"\r\n    a: "Entenda o processo completo: briefing, apresentações, revisões, entregáveis e prazos de cada etapa."\r\n  - q: "Projeto 3D é realmente necessário?"\r\n    a: "Ajuda muito na tomada de decisão, pois permite visualizar o resultado antes da execução e reduz inseguranças."\r\n  - q: "Como saber se a profissional é adequada para mim?"\r\n    a: "Observe se ela ouve suas necessidades, adapta soluções à sua rotina e apresenta projetos funcionais — não apenas estéticos."\r\n---\r\n\r\n# Como Escolher a Arquiteta para Sua Casa ou Apartamento: O Que Perguntar Antes de Contratar\r\n\r\nEscolher uma arquiteta para desenvolver o projeto da sua casa ou apartamento é uma decisão importante. Afinal, você não está contratando apenas um serviço, mas alguém que irá transformar seus sonhos, necessidades e investimentos em espaços que farão parte da sua rotina por muitos anos.\r\n\r\nCom tantas opções no mercado, é comum surgir a dúvida: como saber qual profissional é o mais adequado para o meu projeto?\r\n\r\nA resposta vai muito além de analisar fotos bonitas nas redes sociais. Um bom projeto de arquitetura de interiores precisa unir estética, funcionalidade, planejamento e, principalmente, entendimento sobre a forma como você vive.\r\n\r\nPara ajudar nessa escolha, separei algumas perguntas que vale a pena fazer antes de contratar uma arquiteta.\r\n\r\n## Como Funciona o Processo de Desenvolvimento do Projeto?\r\n\r\nCada profissional possui uma metodologia de trabalho diferente. Entender como o projeto será conduzido ajuda a evitar expectativas desalinhadas e traz mais segurança para todo o processo. \r\n\r\nProcure entender:\r\n\r\n- Como acontece o levantamento de informações;\r\n- Se existe uma etapa de briefing ou questionário;\r\n- Como são feitas as apresentações;\r\n- Em quais momentos e se é possível solicitar ajustes;\r\n- Quais materiais serão entregues ao final.\r\n\r\nQuanto mais estruturado for o processo, mais organizado e seguro tende a ser o desenvolvimento do projeto.\r\n\r\n## O Projeto Será Personalizado Para Minha Rotina?\r\n\r\nUma casa bonita não necessariamente é uma casa funcional. Por isso, uma das perguntas mais importantes é entender como a profissional irá conhecer seus hábitos, necessidades e estilo de vida. O objetivo de um projeto de interiores não é apenas reproduzir referências da internet, mas criar ambientes que façam sentido para quem vai utilizá-los todos os dias. Cada família possui uma rotina diferente, e o projeto deve refletir isso.\r\n\r\n## Vou Conseguir Visualizar o Resultado Antes da Execução?\r\n\r\nHoje, a maioria dos projetos permitem que você visualize os ambientes antes mesmo do início da obra. Essa etapa é extremamente importante porque ajuda na tomada de decisões e reduz inseguranças durante a execução. Ao contratar uma arquiteta, vale verificar se o processo inclui imagens realistas que permitam entender como os espaços ficarão após finalizados.\r\n\r\n## O Projeto Inclui Todas as Informações Necessárias Para a Execução?\r\n\r\nUm projeto precisa ser executável e não só bonito. Por isso, é importante entender se ao final do processo você receberá um projeto executivo completo, com informações técnicas suficientes para orientar fornecedores, marceneiros e profissionais da obra. Esse material é o que garante que aquilo que foi aprovado no 3D possa ser executado da forma mais fiel possível.\r\n\r\n## A Profissional Busca Soluções Funcionais ou Apenas Estéticas?\r\n\r\nUma boa arquiteta sabe equilibrar beleza e funcionalidade, criando ambientes que continuem agradáveis e práticos mesmo após muitos anos. Por isso, vale observar se o foco do profissional está apenas em acompanhar modismos ou se existe uma preocupação genuína com conforto, usabilidade e durabilidade das escolhas. Uma casa bem planejada envelhece muito melhor do que uma casa projetada apenas para seguir tendências.\r\n\r\n## O Portfólio Mostra Projetos Parecidos com o Que Eu Procuro?\r\n\r\nAnalisar o portfólio ajuda a entender o estilo de trabalho da profissional. Só que mais importante do que encontrar projetos idênticos ao que você deseja é perceber se existe a capacidade de adaptar cada projeto às características dos clientes. Os melhores projetos não são aqueles que parecem iguais entre si, mas aqueles que refletem a personalidade de quem mora neles.\r\n\r\n## Eu Me Sinto Ouvido Durante o Processo?\r\n\r\nEssa talvez seja uma das perguntas mais importantes de todas. \r\n\r\nO relacionamento entre cliente e arquiteta acontece durante semanas ou até meses. Por isso, é fundamental sentir confiança, abertura para diálogo e alinhamento na comunicação. Você deve sentir que suas necessidades estão sendo compreendidas e que existe uma construção conjunta das soluções.\r\n\r\nVocê está escolhendo alguém que vai planejar a casa onde as pessoas mais importantes e próximas da sua vida estarão, não escolha qualquer um!\r\n\r\nQuando você contrata um projeto de arquitetura de interiores, está investindo em conforto, funcionalidade, valorização do imóvel e qualidade de vida.\r\n\r\nPor isso, mais do que comparar preços, vale a pena avaliar o estilo, experiência, atenção aos detalhes e a forma como a profissional conduz o processo e principalmente como ela dá abertura para você se expressar.\r\n\r\nUm bom projeto reduz erros, evita retrabalhos, otimiza investimentos e traz muito mais segurança durante toda a execução.\r\n\r\n## Procurando uma Arquiteta Para Seu Projeto?\r\n\r\nMeu trabalho é desenvolver projetos personalizados, pensados para a realidade de cada cliente, equilibrando estética, funcionalidade e praticidade para o dia a dia.\r\n\r\nAcredito que uma casa bonita precisa, acima de tudo, funcionar bem para quem vive nela. Por isso, cada projeto começa entendendo a sua rotina, seus objetivos e suas necessidades, para que o resultado final seja não apenas bonito, mas verdadeiramente seu.\r\n\r\nSe você está construindo, reformando ou deseja transformar seus ambientes, será um prazer conversar sobre o seu projeto.\r\n\r\nEntre em contato e solicite um orçamento. Vamos criar juntos uma casa que faça sentido para a sua vida, sua rotina e sua história.\r\n\r\n';
const __vite_glob_0_4 = '---\r\nslug: "como-funciona-projeto-de-interiores"\r\ntitle: "Como Funciona um Projeto de Interiores: Entenda Cada Etapa Antes de Começar"\r\nexcerpt: "Entenda cada etapa de um projeto de interiores — do questionário ao executivo — e saiba o que esperar antes de começar a transformar sua casa."\r\ncategory: "Processo"\r\ndate: "2026-01-10"\r\nupdatedAt: "2026-01-10"\r\ntags:\r\n  - "como funciona projeto de interiores"\r\n  - "etapas projeto de interiores"\r\n  - "projeto executivo"\r\n  - "projeto 3D"\r\n  - "arquitetura de interiores online"\r\ncover: "cozinha"\r\nfaq:\r\n  - q: "Preciso ter o apartamento pronto para iniciar o projeto?"\r\n    a: "Não. Na maioria dos casos dá para começar com a planta da construtora e levantamento de medidas, mesmo antes da entrega das chaves."\r\n  - q: "O projeto inclui plantas técnicas de obra?"\r\n    a: "Sim. Dependendo do escopo, o projeto pode incluir demolição, elétrica, hidráulica, forro, pintura, revestimentos e marcenaria detalhada."\r\n  - q: "Vou ver como fica antes de executar?"\r\n    a: "Sim. Após o layout aprovado, desenvolvemos imagens 3D realistas para você visualizar cada ambiente antes da obra."\r\n---\r\n\r\n# Como Funciona um Projeto de Interiores: Entenda Cada Etapa Antes de Começar\r\n\r\nContratar um projeto é a melhor forma de transformar sua casa em um ambiente bonito, funcional e pensado para a sua rotina, mas muitas pessoas ainda têm dúvidas sobre como funciona o processo e o que esperar durante o desenvolvimento dessa criação.\r\n\r\nPara que você se sinta seguro em cada etapa, vou mostrar como isso tudo acontece.\r\n\r\n## 1. Questionário e Levantamento de Informações\r\n\r\nTudo começa com uma conversa para entender você, sua família e suas necessidades. Nesta etapa, você recebe um questionário que eu faço pensando em cada ambiente do seu espaço, e ali você compartilha informações importantes, como:\r\n\r\n- Estilo de decoração que gosta e preferencias;\r\n- Rotina da família;\r\n- Necessidades específicas de cada ambiente;\r\n- Se você quiser, pode até me passar seu orçamento previsto para execução da sua obra e tentamos planejar com base nisso.\r\n\r\nAlém disso, realizamos o levantamento das medidas do espaço, garantindo que todas as informações estejam corretas para o desenvolvimento do projeto. Se você for de outra cidade, te enviamos um passo a passo para tirar essas medidas sozinho ou contratamos uma pessoa só para isso!\r\n\r\n**Toda essa etapa é fundamental para criar um projeto de interiores personalizado, alinhado ao seu estilo de vida e às suas expectativas.**\r\n\r\n## 2. Desenvolvimento da Planta Baixa de Layout e Projeto de Obra\r\n\r\nCom todas as informações em mãos, iniciamos o estudo da distribuição dos ambientes através da **planta baixa de layout**.\r\n\r\nNesta etapa definimos:\r\n\r\n- Disposição dos móveis;\r\n- Circulação dos ambientes;\r\n- Aproveitamento dos espaços;\r\n- Funcionalidade de cada área.\r\n\r\nO objetivo é criar uma solução inteligente que seja prática e bonita para você e sua família.\r\n\r\nNessa etapa realizamos uma reunião de apresentação online, para explicar todas as escolhas realizadas e ouvir suas considerações. Ah! Ajustes e alterações podem ser feitos nesta fase para garantir que tudo esteja alinhado às suas expectativas.\r\n\r\n### Projeto Técnico para Obra\r\n\r\nNessa etapa deixamos todas informações de obra bruta reunidas com todos os detalhes necessários para não ter erros de execução lá na frente:\r\n\r\n- Planta de demolição e construção, quando houver alterações de paredes;\r\n- Projeto luminotécnico e pontos elétricos;\r\n- Projeto hidráulico para novos pontos de água ou modificações (por exemplo adicionar ponto para lava-louças);\r\n- Projeto de forro de gesso;\r\n- Projeto de rodapés, para você saber a quantidade que precisa comprar, sem gastar mais do que precisa;\r\n- Projeto de pintura, com especificação das cores e quantitativos para compra;\r\n- Projeto de revestimentos, com definição dos materiais, paginação de pisos e paredes e orientações de instalação para o pedreiro;\r\n\r\nO objetivo é garantir que todos os profissionais envolvidos na obra tenham informações claras e precisas, reduzindo atrasos e dinheiro jogado fora por conta de retrabalhos e dúvidas durante a execução.\r\n\r\nCom esse material em mãos, a obra acontece de forma muito mais organizada, previsível e fiel ao projeto aprovado.\r\n\r\n## 3. Projeto 3D: As amadas Imagens Realistas para você ver como vai ficar o seu espaço\r\n\r\nCom o layout aprovado, avançamos para uma das etapas mais aguardadas pelos clientes: o **projeto onde dá pra ver como vai ficar a sua casa, antes de ela estar pronta de verdade!**\r\n\r\nDá pra ver cada detalhe antes, incluindo:\r\n\r\n- Móveis planejados;\r\n- Revestimentos;\r\n- Cores;\r\n- Iluminação;\r\n- Decoração;\r\n- Materiais e acabamentos.\r\n\r\nEssa visualização antecipada traz mais segurança e confiança para a tomada de decisões e evita surpresas durante a obra.\r\n\r\n## 4. Apresentação do Projeto e Ajustes Finais\r\n\r\nApós a conclusão do projeto das imagens do seu lar, realizamos uma reunião online para apresentar todos os ambientes detalhadamente. \r\n\r\nDurante essa apresentação, você poderá ver cada espaço, tirar dúvidas e pedir mudanças. Nosso objetivo é garantir que o projeto transmita a sua personalidade para sua casa. Queremos que ela fique como nos seus sonhos e por isso queremos te ouvir. Ah e se não gostar de algo, você tem toda liberdade de falar!! \r\n\r\nSomente após sua aprovação seguimos para a etapa final.\r\n\r\n## 5. Projeto Executivo: O Guia Completo para a Execução\r\n\r\nCom o projeto aprovado, desenvolvemos o **projeto executivo de interiores**, também conhecido como projeto técnico.\r\n\r\nEssa etapa reúne todas as informações necessárias para que a execução aconteça de forma fiel ao que foi apresentado nas imagens 3D (aquelas realistas).\r\n\r\nO projeto executivo inclui:\r\n\r\n- Medidas detalhadas;\r\n- Marcenaria planejada da parte externa e interna (sim!! até as prateleiras e divisórias internas a gente deixa certinho no seu detalhamento;\r\n- Lista de compras com tamanhos e modelos que foram usados no projeto;\r\n- Pontos elétricos e iluminação nos móveis;\r\n- Especificações de materiais (mdf, mármore, tintas etc);\r\n- Detalhes de marcenaria inteligente;\r\n- Informações para fornecedores e profissionais da obra.\r\n\r\nÉ esse material que garante que cada detalhe seja executado corretamente, reduzindo erros, retrabalhos e gastos desnecessários.\r\n\r\n## Por Que Fazer um Projeto de Interiores?\r\n\r\nUm bom **projeto de interiores** vai muito além da estética. Ele te ajuda a:\r\n\r\n- Aproveitar melhor os espaços;\r\n\r\n- Evitar erros e atrasos por retrabalho durante a execução;\r\n\r\n- Planejar investimentos com mais segurança;\r\n\r\n- Criar ambientes funcionais e personalizados para sua rotina;\r\n\r\n- Visualizar o resultado antes mesmo da obra começar e ter muito mais segurança nas suas decisões!\r\n\r\n## Vamos Transformar Sua Casa?\r\n\r\nSe você está construindo, reformando ou deseja renovar seus ambientes, um **projeto de interiores personalizado** pode tornar esse processo muito mais tranquilo, organizado e previsível.\r\n\r\nEntre em contato e solicite seu orçamento. Será um prazer ajudar você a transformar sua casa em um espaço funcional, acolhedor e com a sua personalidade em cada detalhe.\r\n\r\n**Ficou com alguma dúvida? Pode me perguntar!**\r\n\r\n';
const __vite_glob_0_5 = '---\r\nslug: "como-saber-qual-e-meu-estilo"\r\ntitle: "Como Saber Qual é Realmente o Meu Estilo?"\r\nexcerpt: "Você não precisa escolher um único estilo decorativo. Descubra suas preferências reais observando sensações, referências e rotina."\r\ncategory: "Guia"\r\ndate: "2026-02-25"\r\nupdatedAt: "2026-02-25"\r\ntags:\r\n  - "estilo decorativo"\r\n  - "decoração personalizada"\r\n  - "projeto de interiores"\r\n  - "identidade visual"\r\ncover: "cozinha"\r\nfaq:\r\n  - q: "Preciso definir um estilo antes do projeto?"\r\n    a: "Não. O mais importante é entender como você quer se sentir em casa — aconchego, praticidade, leveza ou sofisticação."\r\n  - q: "Como identificar minhas preferências?"\r\n    a: "Analise as imagens que você salva: cores recorrentes, quantidade de objetos, sensação de calma ou impacto visual."\r\n  - q: "Tendências devem guiar minhas escolhas?"\r\n    a: "Use tendências como inspiração, mas priorize soluções que continuem fazendo sentido para você daqui a anos."\r\n---\r\n\r\n# Como Saber Qual é Realmente o Meu Estilo?\r\n\r\nUma das frases que mais escuto de clientes no início de um projeto é:\r\n\r\n"Eu não sei qual é o meu estilo." E a verdade é que, na maioria das vezes, isso não é um problema.\r\n\r\nMuitas pessoas acreditam que precisam escolher um único estilo de decoração antes de iniciar um projeto de interiores. Porém, na prática, uma casa não precisa se encaixar perfeitamente em uma categoria para ser bonita, funcional e acolhedora.\r\n\r\nNa verdade, as melhores casas costumam ser aquelas que refletem a personalidade dos moradores, e não aquelas que seguem regras rígidas de um único estilo. Se você sente dificuldade para definir seu estilo, saiba que isso é muito mais comum do que parece.\r\n\r\nQuando começamos a pesquisar referências, é normal encontrar termos como:\r\n\r\n- Estilo Moderno;\r\n- Estilo Contemporâneo;\r\n- Estilo Escandinavo;\r\n- Estilo Industrial;\r\n- Estilo Clássico;\r\n- Estilo Minimalista;\r\n- Estilo Rústico.\r\n\r\nMas a realidade é que poucas pessoas se identificam completamente com apenas um deles.\r\n\r\nÉ muito comum gostar da iluminação de um projeto, da marcenaria de outro, das cores de um terceiro e da sensação de aconchego de um quarto totalmente diferente.\r\n\r\nE está tudo bem.\r\n\r\nUma casa não precisa seguir um único estilo para ter identidade.\r\n\r\nO seu estilo está mais ligado ao que você sente do que ao que você vê, sabia?\r\n\r\nAo invés de tentar descobrir em qual categoria você se encaixa, uma pergunta mais importante é: Como você quer se sentir dentro da sua casa?\r\n\r\nTalvez você queira:\r\n\r\n- Mais aconchego;\r\n- Mais praticidade;\r\n- Mais leveza;\r\n- Mais sofisticação;\r\n- Mais conforto;\r\n- Mais conexão com a natureza.\r\n\r\nEssas sensações costumam revelar muito mais sobre suas preferências do que os nomes utilizados para definir estilos decorativos.\r\n\r\n**Observe as Referências que você salva**\r\n\r\nUma forma simples de identificar padrões é analisar as imagens que você já salvou ao longo do tempo.\r\n\r\nAbra suas pastas de inspiração no Pinterest, Instagram ou celular e tente responder:\r\n\r\n- O que essas imagens têm em comum?\r\n- Quais cores aparecem com frequência?\r\n- Os ambientes parecem mais claros ou mais escuros?\r\n- Existem muitos elementos decorativos ou poucos?\r\n- Os espaços transmitem calma ou impacto visual?\r\n\r\nMesmo que as referências sejam diferentes, normalmente começam a surgir padrões que ajudam a entender suas preferências.\r\n\r\n**Sua Rotina Também Influencia Seu Estilo**\r\n\r\nUm dos maiores erros ao escolher referências é pensar apenas na estética. Uma casa bonita precisa funcionar para quem mora nela. Por isso, seu estilo está diretamente ligado à sua rotina.\r\n\r\nUma família com crianças pequenas possui necessidades diferentes de alguém que mora sozinho. \r\n\r\nQuem gosta de receber visitas costuma utilizar os ambientes de forma diferente de quem busca mais privacidade e tranquilidade.\r\n\r\nO projeto ideal é aquele que une estética e funcionalidade, respeitando a forma como você vive.\r\n\r\n**Não Escolha Sua Casa Apenas Pela Tendência do Momento**\r\n\r\nAs redes sociais são ótimas fontes de inspiração, mas também podem gerar muitas dúvidas. A cada semana surge uma nova tendência, uma nova cor ou um novo acabamento. Porém, aquilo que está em alta nem sempre combina com sua personalidade ou com sua rotina. Por isso, mais importante do que seguir tendências é criar uma casa que continue fazendo sentido para você daqui a muitos anos.\r\n\r\nParte do trabalho de um projeto de interiores é ajudar você a descobrir suas preferências, organizar suas referências e transformar tudo isso em ambientes que reflitam sua personalidade.\r\n\r\nVocê não precisa saber exatamente qual é seu estilo. Você só precisa saber como deseja viver. O restante pode ser construído ao longo do processo.\r\n\r\n**No final das contas, a casa mais bonita não é aquela que segue perfeitamente um estilo específico. É aquela que faz você se sentir bem ao chegar em casa.**\r\n\r\n**Quer Descobrir o Que Realmente Combina Com Você?**\r\n\r\nSe você está construindo, reformando ou planejando transformar seus ambientes, posso ajudar a traduzir suas ideias, referências e necessidades em um projeto único, pensado para a sua rotina.\r\n\r\nEntre em contato para solicitar um orçamento e vamos criar juntos uma casa que tenha a sua essência, sem precisar se encaixar em rótulos ou tendências passageiras.\r\n\r\n';
const __vite_glob_0_6 = '---\r\nslug: "decoracao-afetiva-casa-com-cara-de-casa"\r\ntitle: "Decoração Afetiva: Como Deixar a Casa com \\"Cara de Casa\\""\r\nexcerpt: "Aprenda a equilibrar memórias, objetos pessoais e design para criar ambientes acolhedores — sem poluição visual."\r\ncategory: "Decoração"\r\ndate: "2026-01-25"\r\nupdatedAt: "2026-01-25"\r\ntags:\r\n  - "decoração afetiva"\r\n  - "casa com cara de casa"\r\n  - "decoração personalizada"\r\n  - "projeto de interiores"\r\ncover: "cozinha"\r\nfaq:\r\n  - q: "Decoração afetiva significa expor todos os objetos?"\r\n    a: "Não. O segredo está em selecionar o que realmente representa você e integrar esses elementos de forma harmoniosa."\r\n  - q: "Como usar fotos sem sobrecarregar o ambiente?"\r\n    a: "Padronize molduras ou crie uma composição planejada na parede para manter a estética equilibrada."\r\n  - q: "Preciso de projeto para integrar objetos afetivos?"\r\n    a: "Ajuda muito. Um projeto de interiores organiza referências e cria uma base neutra que valoriza memórias sem bagunça visual."\r\n---\r\n\r\n# Decoração Afetiva: Como Deixar a Casa com "Cara de Casa"\r\n\r\nVocê já entrou em uma casa que parecia bonita, mas ao mesmo tempo sem vida? E em outras que transmitiam aconchego, acolhimento e personalidade logo nos primeiros minutos?\r\n\r\nEssa sensação pode ser alcançada com a **decoração afetiva**, criando ambientes que contem histórias e reflitam a identidade de quem vive ali. Mas existe um desafio comum: como trazer personalidade para os ambientes sem exagerar na decoração e criar uma sensação de bagunça ou poluição visual?\r\n\r\nAqui, você vai entender como equilibrar estética, funcionalidade e memórias para criar uma casa verdadeiramente acolhedora.\r\n\r\n## O Que é Decoração Afetiva?\r\n\r\nA decoração afetiva é aquela que traz elementos com significado emocional para os moradores. Ao invés de seguir apenas tendências, ela valoriza objetos, lembranças, fotografias, obras de arte, viagens e histórias que fazem parte da vida da família.\r\n\r\n## Personalidade Não Significa Excesso\r\n\r\nUm dos maiores erros ao buscar uma decoração mais pessoal é acreditar que todos os objetos precisam ficar expostos ao mesmo tempo.\r\n\r\nQuando muitas informações visuais competem entre si, o resultado pode ser um ambiente cansativo e desorganizado. A verdadeira decoração afetiva está na seleção dos elementos mais importantes.\r\n\r\nAntes de incluir novos elementos, vale a pena se perguntar:\r\n\r\n- Esse objeto representa algo importante para mim?\r\n- Ele contribui para a estética do ambiente?\r\n- Ele complementa ou compete com os demais elementos?\r\n\r\nEsse filtro ajuda a criar espaços mais leves e agradáveis visualmente.\r\n\r\n## Fotografias Fazem Toda a Diferença\r\n\r\nPoucos elementos tornam uma casa tão pessoal quanto as fotografias. Fotos de viagens, momentos especiais, família e conquistas ajudam a criar conexão emocional com o ambiente.\r\n\r\nA dica é utilizar molduras padronizadas ou composições planejadas para manter a harmonia visual. Assim, você preserva as memórias sem comprometer a estética do espaço.\r\n\r\n## Misture Memórias com Design\r\n\r\nUma casa acolhedora não precisa abrir mão da sofisticação. Uma peça herdada da família, uma lembrança de viagem ou uma obra de arte podem se tornar protagonistas quando inseridas em uma composição bem planejada.\r\n\r\n## Utilize uma base neutra de fundo\r\n\r\nSe você está muito na dúvida e tem medo de usar cores, uma estratégia muito utilizada é criar uma base neutra para destacar os elementos afetivos.\r\n\r\nParedes, móveis e revestimentos em tons suaves permitem que objetos pessoais ganhem evidência sem sobrecarregar o ambiente. Além disso, essa escolha facilita futuras atualizações na decoração sem a necessidade de grandes mudanças.\r\n\r\n## O Papel do Projeto de Interiores\r\n\r\nMuitas vezes, os moradores sabem exatamente quais objetos possuem valor sentimental, mas têm dificuldade em encontrar a melhor forma de integrá-los ao espaço.\r\n\r\nÉ nesse momento que um **projeto de interiores personalizado** faz toda a diferença.\r\n\r\nO profissional consegue criar uma composição equilibrada, valorizando memórias e histórias sem comprometer a funcionalidade e a estética dos ambientes.\r\n\r\nO resultado é uma casa que não apenas parece bonita, mas que também faz sentido para quem vive nela.\r\n\r\n## Sua Casa Deve Contar a Sua História\r\n\r\nTendências vêm e vão, mas uma casa que reflete a personalidade dos moradores permanece especial ao longo do tempo.\r\n\r\nO estilo “casa com cara de casa” transforma ambientes em experiências, cria conexões emocionais e faz com que cada espaço tenha significado.\r\n\r\nPorque, no final das contas, uma casa bonita é importante. Mas uma casa que transmite quem você é torna-se muito mais acolhedora e memorável.\r\n\r\n## Quer Criar uma Casa com Mais Personalidade e Aconchego?\r\n\r\nSe você deseja transformar seus ambientes em espaços que reflitam sua história, seu estilo de vida e suas memórias, entre em contato para solicitar um orçamento.\r\n\r\n';
const __vite_glob_0_7 = '---\r\nslug: "erros-comprar-primeiro-apartamento"\r\ntitle: "Principais Erros ao Comprar o Primeiro Apartamento e Como Evitá-los"\r\nexcerpt: "Evite os erros mais comuns de quem compra o primeiro imóvel: esperar as chaves, comprar móveis antes do layout e ignorar pontos elétricos."\r\ncategory: "Guia"\r\ndate: "2026-03-05"\r\nupdatedAt: "2026-03-05"\r\ntags:\r\n  - "primeiro apartamento"\r\n  - "comprar apartamento"\r\n  - "projeto de interiores"\r\n  - "planejamento imobiliário"\r\ncover: "cozinha"\r\nfaq:\r\n  - q: "Posso começar o projeto antes de receber as chaves?"\r\n    a: "Sim. Com a planta da construtora já é possível desenvolver layout, 3D e projeto executivo com antecedência."\r\n  - q: "Devo comprar móveis antes do projeto?"\r\n    a: "Não é recomendado. Sem estudo de layout, é comum errar dimensões e comprometer circulação e conforto."\r\n  - q: "Vale contratar arquiteta para o primeiro apartamento?"\r\n    a: "Sim. O projeto evita compras erradas, retrabalhos e ajuda a otimizar cada investimento desde o início."\r\n---\r\n\r\n# Principais erros ao comprar o primeiro apartamento e como evitá-los\r\n\r\nComprar o primeiro apartamento é um momento muito especial. Depois de meses ou até anos de planejamento, finalmente chega a hora de conquistar o imóvel próprio e começar a imaginar como será a vida naquele novo espaço.\r\n\r\nMas existe um erro muito comum nessa fase: pensar apenas na compra do apartamento e deixar o planejamento dos ambientes para depois. Na prática, muitas das decisões que geram arrependimento poderiam ser evitadas com um projeto de interiores desenvolvido desde o início.\r\n\r\nSe você está comprando seu primeiro imóvel, confira os erros mais comuns e saiba como evitá-los.\r\n\r\n## Esperar a Entrega das Chaves Para Procurar uma Arquiteta\r\n\r\nMuitas pessoas acreditam que o projeto só pode começar depois que recebem o apartamento, mas isso não é verdade. Na maioria dos casos, é possível iniciar o desenvolvimento do projeto utilizando as plantas fornecidas pela construtora.\r\n\r\nIsso permite que o planejamento aconteça com antecedência, evitando correria após a entrega das chaves e permitindo que todas as decisões sejam tomadas de forma mais estratégica. Além disso, quando o projeto já está pronto, a execução acontece de forma muito mais organizada.\r\n\r\n## Comprar Móveis Antes de Ter um Projeto\r\n\r\nEsse é, sem dúvida, um dos erros mais comuns e os que mais afetam no ambiente.\r\n\r\nÉ normal encontrar uma mesa bonita, um sofá em promoção ou uma poltrona que parece perfeita para o futuro apartamento. O problema é que, sem um estudo de layout, é quase impossível saber se aquele móvel realmente é a melhor escolha para o espaço.\r\n\r\nMuitas vezes o resultado é:\r\n\r\n- Sofás grandes demais;\r\n- Mesas que comprometem a circulação;\r\n- Móveis que não conversam entre si;\r\n- Ambientes apertados e desconfortáveis.\r\n\r\nUm projeto de interiores define exatamente quais são as dimensões ideais para cada ambiente, evitando compras por impulso e gastos desnecessários.\r\n\r\n## Escolher os Móveis Individualmente\r\n\r\nOutro erro comum é montar a casa peça por peça, sem pensar no conjunto. \r\nCompra o sofá porque gostou, depois escolhe uma mesa, mais tarde encontra um painel e, quando percebe, os ambientes perderam harmonia. Uma casa bonita não acontece por acaso. Ela é resultado de escolhas que foram pensadas para funcionar juntas. **O projeto permite visualizar o ambiente completo antes de qualquer compra, garantindo mais segurança em cada decisão.**\r\n\r\n## Acreditar Que Quanto Maior o Móvel, Melhor\r\n\r\nMuitas pessoas sonham com aquele sofá enorme ou com uma mesa para oito lugares, mas nem sempre o tamanho ideal é o maior disponível.\r\n\r\nEm apartamentos, especialmente os mais compactos, a circulação é tão importante quanto os móveis. Um ambiente confortável é aquele que permite que as pessoas utilizem o espaço com facilidade no dia a dia. Por isso, o projeto analisa proporções, passagens e usos reais.\r\n\r\n## Copiar Referências Sem Considerar a Própria Rotina\r\n\r\nO Pinterest e o Instagram são ótimas fontes de inspiração, só que uma imagem bonita não garante que aquela solução funcionará para sua família. Cada apartamento possui características diferentes. Cada morador possui necessidades diferentes. Por isso, um dos papeis mais importantes da arquiteta é traduzir referências em soluções personalizadas, adaptadas à realidade de quem vai viver naquele espaço.\r\n\r\n## Não Planejar os Pontos Elétricos e de Iluminação\r\n\r\nMuitas pessoas só começam a pensar em tomadas, interruptores e iluminação quando a obra já está acontecendo. Nesse momento, qualquer alteração costuma gerar mais custos e retrabalho. Quando existe um projeto completo, essas definições são feitas antecipadamente, garantindo mais conforto e evitando improviso e dor de cabeça futura, fora a dor no bolso em um momento que não estava esperando...\r\n\r\n## Pensar Apenas na Estética\r\n\r\nUma casa bonita é importante, mas uma casa bonita que funciona para sua rotina é ainda melhor. Antes de escolher acabamentos, cores ou móveis, é fundamental entender como os ambientes serão utilizados. A verdadeira função de um projeto não é apenas deixar a casa bonita. É fazer com que ela funcione melhor para quem mora nela.\r\n\r\n## O Papel da Arquiteta Vai Muito Além da Decoração\r\n\r\nExiste uma ideia equivocada de que contratar uma arquiteta significa apenas definir a decoração. Na realidade, o projeto ajuda a planejar os ambientes, evitar erros de compra, otimizar investimentos e garantir que cada escolha faça sentido para a sua rotina.\r\n\r\nMuitas vezes, o valor economizado evitando compras erradas e retrabalhos já compensa grande parte do investimento no projeto.\r\n\r\n## O Melhor Momento Para Planejar Sua Casa é Antes dos Problemas Acontecerem\r\n\r\nSe você acabou de comprar um apartamento ou está aguardando a entrega das chaves, esse é o momento ideal para começar o planejamento.\r\n\r\nCom as plantas da construtora já é possível desenvolver o projeto, estudar layouts, definir mobiliário e antecipar decisões que farão toda a diferença no resultado final.\r\n\r\nPorque a melhor forma de evitar erros não é corrigi-los depois. É planejar para que eles nem aconteçam.\r\n\r\n## Comprou um Apartamento e Quer Planejar Tudo da Forma Certa?\r\n\r\nPosso ajudar você a transformar a planta do seu imóvel em uma casa funcional, acolhedora e pensada para sua rotina.\r\n\r\nEntre em contato para solicitar um orçamento e descubra como começar seu projeto antes mesmo da entrega das chaves.\r\n\r\n';
const __vite_glob_0_8 = '---\nslug: "home-office-bonito-e-produtivo"\ntitle: "Projeto de interiores para home office: como criar um espaço produtivo e bonito"\nexcerpt: "Trabalhar de casa pede um ambiente que ajude a focar e que você tenha orgulho de mostrar nas chamadas. Veja os princípios de um home office bem projetado."\ncategory: "Home Office"\ndate: "2025-10-22"\nupdatedAt: "2025-10-22"\ntags:\n  - "home office"\n  - "projeto home office"\n  - "escritório em casa"\n  - "arquitetura de interiores"\nreadingMinutes: 6\ncover: "cozinha"\nfaq:\n  - q: "Qual o tamanho mínimo para um home office confortável?"\n    a: "A partir de 4 m² já é possível criar um home office funcional, desde que o layout e a marcenaria sejam bem pensados."\n  - q: "Posso ter home office na sala?"\n    a: "Sim. Soluções com marcenaria embutida e divisórias leves criam um canto de trabalho integrado, sem perder a estética da sala."\n  - q: "Quais cores funcionam melhor para concentração?"\n    a: "Tons neutros e terrosos, com um ou dois acentos suaves, criam o equilíbrio ideal entre foco e acolhimento."\n---\n\nO home office deixou de ser um canto improvisado. Ele virou parte central da casa e merece a mesma atenção que damos à sala ou à cozinha. Um bom projeto equilibra ergonomia, iluminação, acústica e estética.\n\n## Comece pela luz natural\n\nPosicione a mesa de forma a receber luz lateral. Luz frontal cega; luz pelas costas gera reflexo na tela.\n\n## Cadeira: o investimento que mais paga\n\nAntes de pensar em decoração, garanta uma cadeira ergonômica. Coluna agradece, e o foco também.\n\n## Acústica importa\n\nTapete, cortina pesada, painéis acústicos discretos e estante com livros amenizam o eco e melhoram suas chamadas.\n\n## Background pensado\n\nO que aparece atrás de você nas reuniões diz muito. Uma parede texturizada, uma estante curada ou um painel de madeira ripado mudam completamente a percepção do seu trabalho.\n\n## Iluminação em camadas\n\nLâmpada geral + luminária de mesa + um ponto de luz cênica, como arandela ou pendente decorativo, deixam o ambiente convidativo do começo da manhã até a última call do dia.\n\n';
const __vite_glob_0_9 = '---\r\nslug: "projeto-pronto-antes-das-chaves"\r\ntitle: "Sabia Que É Possível Ter Seu Projeto Pronto Antes Mesmo de Receber as Chaves?"\r\nexcerpt: "Antecipe o projeto com a planta da construtora e reduza meses de espera entre a entrega das chaves e a mudança para o seu novo lar."\r\ncategory: "Processo"\r\ndate: "2026-03-28"\r\nupdatedAt: "2026-03-28"\r\ntags:\r\n  - "projeto antes das chaves"\r\n  - "apartamento na planta"\r\n  - "projeto de interiores"\r\n  - "arquiteta de interiores online"\r\ncover: "cozinha"\r\nfaq:\r\n  - q: "Dá para fazer projeto sem ter acesso ao apartamento?"\r\n    a: "Sim. Com a planta e medidas fornecidas pela construtora, é possível desenvolver layout, 3D e executivo antes da entrega."\r\n  - q: "Quais vantagens de antecipar o projeto?"\r\n    a: "Você ganha tempo na execução, organiza orçamentos com calma e reduz o período pagando condomínio sem morar no imóvel."\r\n  - q: "A marcenaria pode ser encomendada antes das chaves?"\r\n    a: "Sim. Com o executivo pronto, a produção pode ser planejada para iniciar logo após a entrega."\r\n---\r\n\r\n# Sabia Que É Possível Ter Seu Projeto Pronto Antes Mesmo de Receber as Chaves?\r\n\r\nComprar um apartamento é um momento muito esperado. Depois de meses ou até anos acompanhando a obra, finalmente chega a reta final para a entrega. E é justamente nessa fase que muitas pessoas cometem um erro que pode custar tempo, dinheiro e muita ansiedade.\r\n\r\nA maioria dos futuros moradores acredita que só pode contratar uma arquiteta depois de receber as chaves. Mas a verdade é que o projeto pode começar muito antes disso. E entender essa possibilidade pode fazer você economizar meses de espera para finalmente morar no seu novo lar.\r\n\r\n## O Que Acontece Quando Você Espera as Chaves Para Começar o Projeto?\r\n\r\nImagine a seguinte situação:\r\n\r\nVocê recebe as chaves do apartamento.\r\n\r\nEstá animado para se mudar o quanto antes.\r\n\r\nMas só então começa a procurar uma arquiteta.\r\n\r\nDepois vem:\r\n\r\n- Reuniões iniciais;\r\n- Desenvolvimento do layout;\r\n- Projeto 3D;\r\n- Ajustes;\r\n- Projeto executivo;\r\n- Orçamentos;\r\n- Contratação da marcenaria;\r\n- Produção dos móveis.\r\n\r\nQuando percebe, passaram-se meses.\r\n\r\nE durante todo esse período, muitas pessoas continuam pagando:\r\n\r\n- Aluguel;\r\n- Parcela do financiamento;\r\n- Condomínio;\r\n- Taxas do imóvel.\r\n\r\nTudo ao mesmo tempo.\r\n\r\nE o pior: sem conseguir morar no apartamento.\r\n\r\n## A Boa Notícia É Que Isso Pode Ser Evitado\r\n\r\nO que muita gente não sabe é que, na maioria dos casos, é possível iniciar o projeto utilizando as plantas fornecidas pela construtora.\r\n\r\nIsso significa que você não precisa esperar a entrega oficial para começar o planejamento dos ambientes.\r\n\r\nEnquanto a obra do prédio está sendo finalizada, o projeto da sua casa também pode estar avançando.\r\n\r\nQuando as chaves chegam, você já tem decisões importantes tomadas.\r\n\r\n## O Projeto Pode Estar Praticamente Pronto Antes da Entrega\r\n\r\nDependendo do cronograma, é possível concluir:\r\n\r\n- Estudo de layout;\r\n- Projeto 3D;\r\n- Definição de materiais;\r\n- Escolha de acabamentos;\r\n- Projeto executivo;\r\n- Detalhamento da marcenaria.\r\n\r\nOu seja, você já sabe exatamente como será sua futura casa antes mesmo de entrar nela pela primeira vez. Isso traz muito mais segurança e reduz significativamente o tempo entre a entrega das chaves e a mudança.\r\n\r\n## Quando Você Recebe as Chaves, Tudo Acontece Mais Rápido\r\n\r\nUma das maiores vantagens desse planejamento antecipado é a agilidade na execução.\r\n\r\nCom o projeto pronto:\r\n\r\n- A marcenaria já pode receber os detalhamentos;\r\n- Os orçamentos já podem estar encaminhados;\r\n- Os fornecedores já sabem o que será executado;\r\n- As compras podem ser planejadas com antecedência.\r\n\r\nEm vez de começar a tomar decisões após a entrega, você já chega nessa etapa com tudo organizado.\r\n\r\n## Mais Rapidez Não Significa Fazer as Coisas Com Pressa\r\n\r\nExiste uma diferença importante entre acelerar o processo e fazer tudo correndo.\r\n\r\nQuando o projeto é desenvolvido antes da entrega das chaves, você ganha tempo justamente porque consegue planejar com calma.\r\n\r\nAs escolhas são feitas de forma estratégica, sem improvisos e sem decisões tomadas na pressão.\r\n\r\nO resultado costuma ser uma execução mais tranquila, mais organizada e muito mais fiel ao projeto aprovado.\r\n\r\n## Menos Tempo Esperando. Mais Tempo Vivendo Sua Casa\r\n\r\nMuitas pessoas passam meses pagando condomínio sem morar no imóvel.\r\n\r\nOutras continuam pagando aluguel enquanto aguardam o desenvolvimento do projeto e a produção da marcenaria.\r\n\r\nEmbora cada situação seja diferente, antecipar o planejamento costuma reduzir significativamente esse período de espera.\r\n\r\nE isso significa uma coisa muito simples:\r\n\r\nVocê começa a aproveitar sua casa muito antes.\r\n\r\n## O Papel da Arquiteta Começa Antes da Entrega das Chaves\r\n\r\nAo contrário do que muita gente imagina, o trabalho da arquiteta não precisa começar apenas quando o apartamento está pronto.\r\n\r\nNa verdade, quanto antes o planejamento acontece, mais vantagens você tem.\r\n\r\nAlém de evitar atrasos, o projeto antecipado permite tomar decisões com mais segurança, organizar investimentos e garantir que tudo aconteça de forma mais eficiente quando chegar o momento da execução.\r\n\r\n## Está Aguardando a Entrega do Seu Apartamento?\r\n\r\nSe você já tem a planta da construtora, provavelmente já pode começar o desenvolvimento do seu projeto.\r\n\r\nE isso pode representar meses de diferença entre receber as chaves e realmente começar a viver no seu novo lar.\r\n\r\nEntre em contato para conversar sobre o seu imóvel e descobrir como antecipar o planejamento da sua casa de forma organizada, estratégica e personalizada.\r\n\r\n';
const __vite_glob_0_10 = '---\nslug: "quanto-custa-projeto-de-interiores-brasil"\ntitle: "Quanto custa um projeto de arquitetura de interiores no Brasil?"\nexcerpt: "Entenda como o valor de um projeto de interiores é calculado, o que influencia o preço e por que o projeto online costuma sair mais em conta sem perder qualidade."\ncategory: "Investimento"\ndate: "2025-09-28"\nupdatedAt: "2025-09-28"\ntags:\n  - "quanto custa projeto de interiores"\n  - "preço projeto de interiores"\n  - "projeto de interiores online"\n  - "arquiteta de interiores"\nreadingMinutes: 5\ncover: "cozinha"\nfaq:\n  - q: "O projeto online é mais barato que o presencial?"\n    a: "Geralmente sim, porque não há custos de deslocamento e o profissional otimiza o tempo. A qualidade técnica é a mesma."\n  - q: "É possível parcelar o investimento?"\n    a: "Sim. Trabalho com parcelamento que respeita as etapas do projeto, sempre alinhado no momento da contratação."\n  - q: "O valor do mobiliário entra no orçamento do projeto?"\n    a: "Não. O projeto entrega a especificação e os links, e você compra diretamente dos fornecedores, com liberdade total de escolha."\n---\n\nO investimento em um projeto de arquitetura de interiores no Brasil varia conforme área a ser projetada, número de ambientes, nível de detalhamento e tempo dedicado. Em média, projetos online residenciais começam em torno de R$ 80 a R$ 150 por metro quadrado, podendo variar muito conforme escopo.\n\n## O que está incluso no investimento\n\n- Reuniões de briefing e revisões por videochamada\n- Moodboard e estudo de cores e materiais\n- Render 3D realista de cada ambiente\n- Plantas técnicas: layout, elétrica, hidráulica e marcenaria\n- Lista de compras com links e fornecedores\n- Caderno de detalhes para a equipe de obra\n\n## Por que o projeto online costuma ser mais acessível\n\nSem deslocamento, sem horas de trânsito e com fluxo otimizado por videochamadas, o profissional consegue atender mais clientes mantendo qualidade e repassa parte dessa eficiência no preço final.\n\n## Como descobrir o valor do seu projeto\n\nCada espaço é único. Para receber um orçamento personalizado, basta me chamar no WhatsApp com algumas fotos do ambiente e uma breve descrição do que você precisa.\n\n';
const __vite_glob_0_11 = '---\r\nslug: "sala-mais-acolhedora-7-elementos"\r\ntitle: "Como Deixar Minha Sala Mais Aconchegante? 7 Elementos Que Fazem Toda a Diferença"\r\nexcerpt: "Iluminação, sofá confortável, texturas, cores, elementos naturais e personalidade: os 7 pilares de uma sala acolhedora."\r\ncategory: "Ambientes"\r\ndate: "2026-03-12"\r\nupdatedAt: "2026-03-12"\r\ntags:\r\n  - "sala aconchegante"\r\n  - "decoração de sala"\r\n  - "iluminação residencial"\r\n  - "projeto de interiores"\r\ncover: "cozinha"\r\nfaq:\r\n  - q: "O que mais influencia o aconchego da sala?"\r\n    a: "Iluminação em camadas e texturas — almofadas, tapetes e cortinas — criam a sensação de conforto mais rapidamente."\r\n  - q: "Preciso trocar todos os móveis?"\r\n    a: "Nem sempre. Muitas vezes, ajustar iluminação, cores e disposição dos móveis já transforma completamente o ambiente."\r\n  - q: "Sala aconchegante e funcional podem coexistir?"\r\n    a: "Sim. O melhor resultado vem quando o layout respeita sua rotina e a decoração reforça essa experiência."\r\n---\r\n\r\n# Como Deixar Minha Sala Mais Aconchegante? 7 Elementos Que Fazem Toda a Diferença\r\n\r\nSe existe um ambiente que representa o coração da casa, provavelmente é a sala.\r\n\r\nÉ nela que recebemos visitas, assistimos a um filme no final do dia, passamos tempo com a família e criamos memórias importantes. Por isso, é muito comum que as pessoas desejem uma sala bonita, mas principalmente uma sala aconchegante.\r\n\r\n## 1. Aposte em Uma Iluminação Mais Suave\r\n\r\nA iluminação é um dos elementos que mais influenciam a sensação de conforto dentro de um ambiente. Uma sala iluminada apenas por uma luz central forte costuma parecer mais fria e menos acolhedora.\r\n\r\nPor isso, projetos de interiores costumam trabalhar diferentes fontes de iluminação, como:\r\n\r\n- Luminárias de apoio;\r\n- Iluminação indireta;\r\n- Abajures;\r\n- Fuja de luz branca!\r\n\r\nO objetivo é criar uma atmosfera agradável para diferentes momentos do dia. Muitas vezes, apenas ajustar a iluminação já transforma completamente a sensação do ambiente.\r\n\r\n## 2. Escolha um Sofá Pensando no Conforto, Não Apenas na Estética\r\n\r\nÉ comum se apaixonar por um sofá bonito em uma loja ou nas redes sociais, mas uma sala aconchegante precisa convidar as pessoas a permanecerem nela.\r\n\r\nA profundidade do assento, a altura do encosto e o tamanho adequado para o ambiente fazem toda a diferença na experiência diária.\r\n\r\n## 3. Utilize Tecidos e Texturas\r\n\r\nOs ambientes mais acolhedores costumam ter uma característica em comum: textura.\r\n\r\nAlmofadas, mantas, tapetes e cortinas ajudam a criar camadas visuais que tornam a sala mais convidativa. Além da estética, esses elementos contribuem para uma sensação de conforto e acolhimento. É justamente essa combinação de materiais que faz um ambiente parecer mais "vivo" e menos impessoal.\r\n\r\n## 4. Invista em Tons Mais Aconchegantes\r\n\r\nAs cores têm um impacto direto na forma como percebemos os ambientes. Isso não significa que sua sala precisa ser super escura ou virar um carnaval.  Mas tons muito frios ou excessivamente neutros podem transmitir uma sensação mais distante.\r\n\r\nTons como:\r\n\r\n- Bege;\r\n- Areia;\r\n- Fendi;\r\n- Amadeirados;\r\n- Verdes suaves;\r\n- Tons terrosos;\r\n\r\ncostumam criar ambientes mais acolhedores e confortáveis visualmente.\r\n\r\n## 5. Traga Elementos Naturais Para Dentro de Casa\r\n\r\nMadeira, plantas, fibras naturais e tecidos com aparência mais orgânica ajudam a criar uma conexão com a natureza. Essa é uma das estratégias mais utilizadas em projetos de interiores quando o objetivo é tornar os ambientes mais acolhedores. Mesmo pequenas adições desses materiais já podem gerar uma grande diferença na percepção do espaço.\r\n\r\n## 6. Crie uma Sala Que Faça Sentido Para Sua Rotina\r\n\r\nEsse é um dos pontos mais importantes e menos comentados. Uma sala não será aconchegante apenas porque possui uma decoração bonita. Ela precisa funcionar para quem mora nela.\r\n\r\nTalvez sua família goste de assistir filmes juntos. Talvez vocês recebam amigos com frequência. Talvez o momento mais importante do dia seja sentar no sofá para conversar.\r\n\r\nQuando o ambiente é planejado para a forma como você vive, ele naturalmente se torna mais confortável e acolhedor.\r\n\r\n## 7. Adicione Elementos Que Contem Sua História\r\n\r\nAs salas mais bonitas nem sempre são as mais sofisticadas. Muitas vezes, são aquelas que possuem personalidade. Fotografias, livros, obras de arte, objetos de viagem e peças com significado ajudam a criar uma conexão emocional com o ambiente. São esses detalhes que fazem uma casa ter "cara de casa".\r\n\r\n## O Que Realmente Torna Uma Sala Aconchegante?\r\n\r\nCuriosamente, não é um móvel específico ou uma cor isolada. O aconchego surge quando todos os elementos trabalham juntos.\r\n\r\nIluminação, mobiliário, texturas, cores, funcionalidade e personalidade formam uma combinação que faz você se sentir bem dentro do ambiente.\r\n\r\nPor isso, uma sala aconchegante é muito mais sobre sensação do que sobre decoração.\r\n\r\n## O Papel do Projeto de Interiores\r\n\r\nMuitas vezes, as pessoas tentam resolver a falta de aconchego comprando mais objetos decorativos. Mas o problema raramente está na quantidade de decoração. Normalmente, ele está na falta de planejamento.\r\n\r\nUm projeto de interiores ajuda a equilibrar todos os elementos do ambiente para criar uma sala que seja bonita, funcional e acolhedora ao mesmo tempo.\r\n\r\nPorque uma sala não deve apenas impressionar quando alguém entra. Ela deve fazer você querer ficar.\r\n\r\n## Quer Transformar Sua Sala em um Ambiente Mais Aconchegante?\r\n\r\nSe você sente que sua sala poderia ser mais confortável, acolhedora e alinhada à sua rotina, um projeto de interiores pode ajudar a revelar todo o potencial do espaço.\r\n\r\nEntre em contato para solicitar um orçamento e descubra como transformar sua sala em um ambiente que una beleza, funcionalidade e bem-estar.\r\n\r\n';
const __vite_glob_0_12 = '---\r\nslug: "tendencias-arquitetura-interiores-2026"\r\ntitle: "Tendências de Arquitetura de Interiores em 2026: O Que Realmente Faz Sentido Para Sua Casa?"\r\nexcerpt: "Nem toda tendência vale o investimento. Veja o que priorizar em 2026: funcionalidade, conforto, materiais naturais e escolhas atemporais."\r\ncategory: "Tendências"\r\ndate: "2026-02-10"\r\nupdatedAt: "2026-02-10"\r\ntags:\r\n  - "tendências arquitetura 2026"\r\n  - "tendências de interiores"\r\n  - "decoração atemporal"\r\n  - "projeto de interiores"\r\ncover: "cozinha"\r\nfaq:\r\n  - q: "Devo seguir todas as tendências de 2026?"\r\n    a: "Não. Priorize soluções que melhoram sua rotina: armazenamento, iluminação aconchegante e materiais naturais."\r\n  - q: "Como usar tendências sem se arrepender?"\r\n    a: "Aposte em tendências em itens fáceis de trocar — almofadas, tapetes, luminárias — e mantenha a base do projeto atemporal."\r\n  - q: "Tendência e funcionalidade são opostas?"\r\n    a: "De forma alguma. As melhores tendências atuais valorizam ambientes que funcionam bem no dia a dia."\r\n---\r\n\r\n# Tendências de Arquitetura de Interiores em 2026: O Que Realmente Faz Sentido Para Sua Casa?\r\n\r\nTodos os anos surgem novas tendências de arquitetura de interiores. Cores, revestimentos, móveis, acabamentos e estilos aparecem nas redes sociais prometendo transformar qualquer ambiente. Mas existe uma pergunta que poucas pessoas fazem antes de seguir uma tendência:\r\n\r\n**Isso vai continuar funcionando para minha rotina daqui a dois ou cinco anos?**\r\n\r\nA verdade é que nem tudo que está em alta hoje fará sentido para sua casa amanhã.\r\n\r\nPor isso, antes de escolher qualquer elemento apenas porque está na moda, vale a pena entender quais tendências realmente agregam valor ao dia a dia e quais podem gerar arrependimento no futuro.\r\n\r\n## A Melhor Tendência é Aquela Que Funciona Para Você\r\n\r\nUma casa bonita precisa ser, acima de tudo, funcional.\r\n\r\nQuando um projeto é desenvolvido pensando apenas na estética do momento, existe o risco de criar ambientes que rapidamente parecem ultrapassados ou deixam de atender às necessidades dos moradores.\r\n\r\nPor isso, em vez de perseguir tendências passageiras, priorize:\r\n\r\n- Funcionalidade;\r\n- Conforto;\r\n- Facilidade de manutenção;\r\n- Flexibilidade;\r\n\r\nE isso não quer dizer que sua casa precisa ser sem graça ta? Dá pra ter um projeto cheio de personalidade, mas que seja atemporal!\r\n\r\n## Tendências Que Valem o Investimento\r\n\r\nAlgumas tendências têm se consolidado porque melhoram a experiência de uso da casa.\r\n\r\nEntre elas estão:\r\n\r\n### Ambientes Funcionais\r\n\r\nEm 2026, os projetos continuam valorizando espaços que realmente facilitam a rotina. Marcenaria inteligente, armazenamento bem planejado e layouts que favorecem a circulação são escolhas que dificilmente saem de moda.\r\n\r\n### Iluminação Aconchegante\r\n\r\nA iluminação deixou de ser apenas um elemento técnico. Hoje ela faz parte da experiência dos ambientes.\r\n\r\nLuzes indiretas, cenas de iluminação e projetos que valorizam o conforto visual continuam sendo investimentos que trazem resultado a longo prazo.\r\n\r\n### Materiais Naturais\r\n\r\nMadeira, pedras naturais, tecidos com textura e acabamentos que remetem à natureza seguem fortes porque criam ambientes acolhedores e atemporais.\r\n\r\nSão escolhas que costumam envelhecer muito melhor do que soluções extremamente marcadas por uma tendência específica.\r\n\r\n## Quer Apostar em Tendências com segurança e sem arrependimentos? Faça Isso nos Móveis Soltos\r\n\r\nUma estratégia muito inteligente é utilizar as tendências em elementos fáceis de substituir.\r\n\r\nPor exemplo:\r\n\r\n- Poltronas;\r\n- Almofadas;\r\n- Tapetes;\r\n- Objetos decorativos;\r\n- Quadros;\r\n- Luminárias;\r\n- Mesas laterais.\r\n\r\nDessa forma, se o gosto mudar ou a tendência passar, a renovação acontece de forma simples e sem necessidade de reformas.\r\n\r\n## A Casa Precisa Acompanhar Sua Vida\r\n\r\nAs tendências podem ser uma ótima fonte de inspiração, mas não devem ser o único critério para tomar decisões. O melhor projeto é aquele que continua fazendo sentido anos depois da sua conclusão.\r\n\r\nQuando a funcionalidade vem em primeiro lugar, a casa permanece bonita, confortável e adequada à sua rotina por muito mais tempo.\r\n\r\n## O Papel do Projeto de Interiores\r\n\r\nUm bom projeto de interiores ajuda a filtrar tendências e identificar o que realmente vale a pena incorporar.\r\n\r\nO objetivo não é impedir mudanças ou novidades, mas garantir que cada escolha tenha propósito e contribua para a qualidade de vida dentro de casa.\r\n\r\nPorque uma tendência passa. Uma casa bem planejada permanece.\r\n\r\n## Quer Criar uma Casa Bonita Hoje e Funcional por Muitos Anos?\r\n\r\nEntre em contato para solicitar um orçamento e descubra como desenvolver um projeto de interiores pensado para a sua rotina, seu estilo de vida e suas necessidades reais.\r\n\r\n \r\n\r\n---\r\n\r\n# OPÇÃO 2\r\n\r\n# Tendências de Arquitetura de Interiores em 2026: A Volta das Casas com Alma e Aconchego\r\n\r\nDurante muitos anos, vimos ambientes extremamente minimalistas, perfeitos para fotografias, mas que muitas vezes transmitiam pouca personalidade.\r\n\r\nEm 2026, uma das maiores tendências da arquitetura de interiores segue um caminho diferente: criar casas que acolhem, contam histórias e fazem as pessoas se sentirem verdadeiramente em casa. Mais do que seguir modismos, os projetos estão valorizando conforto, identidade e bem-estar.\r\n\r\n## A Casa com Cara de Casa Está em Alta\r\n\r\nSe existe uma tendência forte atualmente, é justamente o afastamento dos ambientes impessoais. As pessoas estão buscando espaços que transmitam pertencimento.\r\n\r\nCasas que refletem a personalidade dos moradores, suas histórias, memórias e estilo de vida.\r\n\r\nIsso significa ambientes mais acolhedores, menos "cenográficos" e muito mais conectados com quem vive neles.\r\n\r\n## O Conforto se Tornou Prioridade\r\n\r\nA estética continua importante, mas já não é suficiente sozinha.\r\n\r\nOs moradores querem ambientes bonitos que também proporcionem conforto no dia a dia.\r\n\r\nPor isso, vemos cada vez mais:\r\n\r\n- Sofás generosos e confortáveis;\r\n- Tecidos naturais;\r\n- Iluminação suave;\r\n- Materiais com textura;\r\n- Móveis que convidam à permanência;\r\n- Espaços pensados para convivência.\r\n\r\n## Tons Naturais e Paletas Aconchegantes\r\n\r\nAs cores que mais aparecem nos projetos atuais têm algo em comum: transmitem sensação de acolhimento.\r\n\r\nEntre elas estão:\r\n\r\n- Bege ou areia;\r\n- Pontos de cor;\r\n- Terracota;\r\n- Verde;\r\n- Tons amadeirados.\r\n\r\nEssas paletas ajudam a criar ambientes leves, sofisticados e atemporais.\r\n\r\n## Menos Perfeição, Mais Personalidade\r\n\r\nOutra tendência importante é a valorização da individualidade. Objetos de viagem, fotografias, obras de arte, livros e peças afetivas voltaram a ganhar espaço nos projetos. \r\n\r\nOs projetos mais atuais não buscam apenas impressionar visualmente. Eles procuram resolver problemas reais da rotina. Por isso, armazenamento inteligente, layouts funcionais e marcenaria bem planejada continuam sendo protagonistas.\r\n\r\nAfinal, uma casa aconchegante também precisa ser prática.\r\n\r\n## O Que Faz Sentido Levar Para Sua Casa?\r\n\r\nMais importante do que seguir tendências é entender quais delas fazem sentido para seu estilo de vida. Uma casa bem projetada não precisa parecer nova a cada ano. Ela precisa continuar acolhendo, funcionando e trazendo bem-estar ao longo do tempo. E talvez essa seja a maior tendência de 2026: criar ambientes que façam as pessoas quererem ficar.\r\n\r\n## Quer Uma Casa Bonita, Aconchegante e Com a Sua Identidade?\r\n\r\nEntre em contato para solicitar um orçamento e descubra como um projeto de interiores pode transformar sua casa em um espaço que une beleza, funcionalidade e personalidade.\r\n\r\n';
const __vite_glob_0_13 = '---\r\nslug: "tinta-paleta-cores-cada-ambiente"\r\ntitle: "Tinta e Paleta de Cores: Como Escolher as Cores Certas para Cada Ambiente da Casa"\r\nexcerpt: "Guia prático para definir a paleta de cores da sua casa: sala, quarto, cozinha, banheiro e ambientes pequenos com harmonia e personalidade."\r\ncategory: "Decoração"\r\ndate: "2026-02-02"\r\nupdatedAt: "2026-02-02"\r\ntags:\r\n  - "paleta de cores"\r\n  - "cores para interiores"\r\n  - "tinta para casa"\r\n  - "decoração de ambientes"\r\ncover: "cozinha"\r\nfaq:\r\n  - q: "Ambientes pequenos precisam ser sempre claros?"\r\n    a: "Não necessariamente. Cores mais intensas podem funcionar quando bem equilibradas com iluminação e proporção dos elementos."\r\n  - q: "Como montar uma paleta harmoniosa?"\r\n    a: "Trabalhe com cor base, complementar e de destaque — distribuindo cada uma em quantidades diferentes para criar equilíbrio."\r\n  - q: "Devo seguir tendências de cor?"\r\n    a: "Use tendências como inspiração, mas priorize cores que façam sentido para sua rotina e permaneçam agradáveis por muitos anos."\r\n---\r\n\r\n# Tinta e Paleta de Cores: Como Escolher as Cores Certas para Cada Ambiente da Casa\r\n\r\nEscolher as cores da casa parece uma tarefa simples, mas basta chegar ao momento de definir a tinta para surgirem as dúvidas. Afinal, qual cor combina com a sala? O quarto deve ser claro ou escuro? Vale a pena usar cores mais marcantes? Como criar harmonia entre os ambientes?\r\n\r\nA verdade é que a escolha da **paleta de cores para interiores** vai muito além da estética. As cores influenciam a sensação de conforto, amplitude, aconchego e até mesmo a forma como vivenciamos cada ambiente no dia a dia.\r\n\r\nSe você está construindo, reformando ou renovando sua casa, confira algumas dicas para escolher as cores de forma estratégica e criar ambientes equilibrados e acolhedores.\r\n\r\n## Por Que as Cores São Tão Importantes?\r\n\r\nAs cores têm o poder de transformar completamente a percepção de um espaço. Um mesmo ambiente pode parecer maior, mais aconchegante, mais sofisticado ou mais iluminado dependendo da paleta escolhida. Além disso, as cores ajudam a transmitir sensações e reforçam a identidade de cada projeto.\r\n\r\n## Cores para Sala de Estar\r\n\r\nA sala costuma ser um dos ambientes mais utilizados da casa, sendo um espaço para receber visitas, relaxar e conviver com a família. Por isso, cores que transmitem conforto e acolhimento costumam funcionar muito bem.\r\n\r\nAlgumas opções bastante utilizadas incluem:\r\n\r\n- Bege;\r\n- Areia;\r\n- Fendi;\r\n- Cinza claro;\r\n- Off-white;\r\n- Tons terrosos suaves.\r\n\r\nEssas tonalidades criam uma base neutra e permitem que móveis e objetos decorativos ganhem destaque.\r\n\r\nPara quem deseja mais personalidade, é possível inserir cores através de detalhes, painéis, obras de arte ou elementos decorativos.\r\n\r\n## Cores para Quartos\r\n\r\nO quarto é um ambiente voltado para descanso e bem-estar.\r\n\r\nPor isso, a escolha das cores deve contribuir para uma atmosfera tranquila e aconchegante.\r\n\r\nEntre as opções mais utilizadas estão:\r\n\r\n- Verde suave;\r\n- Azul acinzentado;\r\n- Bege;\r\n- Tons amadeirados combinados com cores neutras.\r\n\r\nEssas tonalidades ajudam a criar uma sensação de conforto e favorecem momentos de relaxamento.\r\n\r\n## Cores para Cozinhas\r\n\r\nAtualmente, muitas cozinhas fazem parte dos ambientes integrados da casa, exigindo uma paleta que converse com os demais espaços.\r\n\r\nAs cores neutras continuam sendo as favoritas por sua versatilidade, mas detalhes em tons mais marcantes também podem trazer personalidade ao projeto.\r\n\r\nAlgumas combinações bastante utilizadas são:\r\n\r\n- Branco e madeira;\r\n- Cinza e amadeirado;\r\n- Verde oliva e tons naturais;\r\n- Bege e preto em detalhes.\r\n\r\nO importante é equilibrar estética e praticidade.\r\n\r\n## Cores para Banheiros\r\n\r\nOs banheiros deixaram de ser apenas ambientes funcionais e passaram a receber mais atenção nos projetos de interiores.\r\n\r\nAlém dos tradicionais tons claros, atualmente é comum utilizar:\r\n\r\n- Verde suave;\r\n- Tons terrosos;\r\n- Bege quente;\r\n- Cinza claro;\r\n- Texturas inspiradas na natureza.\r\n\r\nEssas escolhas ajudam a criar ambientes mais acolhedores e sofisticados.\r\n\r\n## Ambientes Pequenos Precisam Ser Sempre Claros?\r\n\r\nEssa é uma das dúvidas mais frequentes.\r\n\r\nEmbora as cores claras realmente ampliem a sensação de espaço, isso não significa que ambientes pequenos não possam receber cores mais intensas.\r\n\r\nQuando bem planejadas, tonalidades mais marcantes podem trazer profundidade, personalidade e sofisticação.\r\n\r\nO segredo está no equilíbrio entre cores, iluminação e proporção dos elementos presentes no ambiente.\r\n\r\n## Como Criar uma Paleta de Cores Harmônica\r\n\r\nUma boa paleta geralmente trabalha com três categorias principais:\r\n\r\n### Cor Base\r\n\r\nÉ a cor predominante do ambiente e costuma aparecer em paredes, grandes superfícies e elementos principais.\r\n\r\n### Cor Complementar\r\n\r\nAjuda a criar contraste e enriquecer a composição.\r\n\r\nPode aparecer em móveis, tecidos ou revestimentos.\r\n\r\n### Cor de Destaque\r\n\r\nÉ utilizada em menor quantidade para trazer personalidade e criar pontos de interesse visual.\r\n\r\nEssa combinação garante equilíbrio e evita excessos.\r\n\r\n## Tendências Passam, Harmonia Permanece\r\n\r\nEmbora seja interessante acompanhar tendências, a escolha das cores deve considerar principalmente o estilo de vida dos moradores e a proposta do ambiente.\r\n\r\nUma paleta bem planejada continua agradável por muitos anos, reduzindo a necessidade de mudanças frequentes. Por isso, mais importante do que seguir uma moda é criar uma casa que faça sentido para quem vive nela.\r\n\r\n## Precisa de Ajuda para Escolher as Cores da Sua Casa?\r\n\r\nSe você está construindo, reformando ou deseja renovar seus ambientes, um projeto de interiores pode ajudar a definir uma paleta de cores que combine com seu estilo, valorize os espaços e torne sua casa ainda mais acolhedora.\r\n\r\nEntre em contato para solicitar um orçamento e descubra como transformar cada ambiente através das escolhas certas.\r\n\r\n \r\n\r\n- Como escolher o arquiteto(a) de interiores: o que perguntar antes de contratar\r\n\r\n##\r\n\r\nUm guia introdutório explicando o papel da arquitetura de interiores, etapas do projeto (briefing, conceito, anteprojeto, executivo) e como isso se diferencia de “decorar”.\r\n\r\n';
const covers = {
  cozinha
};
const postModules = /* @__PURE__ */ Object.assign({
  "../content/blog/5-erros-comuns-reforma-apartamento.md": __vite_glob_0_0,
  "../content/blog/apartamento-parecendo-maior.md": __vite_glob_0_1,
  "../content/blog/banheiro-pequeno-solucoes-funcionalidade.md": __vite_glob_0_2,
  "../content/blog/como-escolher-arquiteta-casa-apartamento.md": __vite_glob_0_3,
  "../content/blog/como-funciona-projeto-de-interiores.md": __vite_glob_0_4,
  "../content/blog/como-saber-qual-e-meu-estilo.md": __vite_glob_0_5,
  "../content/blog/decoracao-afetiva-casa-com-cara-de-casa.md": __vite_glob_0_6,
  "../content/blog/erros-comprar-primeiro-apartamento.md": __vite_glob_0_7,
  "../content/blog/home-office-bonito-e-produtivo.md": __vite_glob_0_8,
  "../content/blog/projeto-pronto-antes-das-chaves.md": __vite_glob_0_9,
  "../content/blog/quanto-custa-projeto-de-interiores-brasil.md": __vite_glob_0_10,
  "../content/blog/sala-mais-acolhedora-7-elementos.md": __vite_glob_0_11,
  "../content/blog/tendencias-arquitetura-interiores-2026.md": __vite_glob_0_12,
  "../content/blog/tinta-paleta-cores-cada-ambiente.md": __vite_glob_0_13
});
const posts = Object.entries(postModules).map(([path, raw]) => {
  const { metadata, content } = parsePost(raw);
  const slug = metadata.slug ?? path.split("/").pop()?.replace(/\.md$/, "") ?? "";
  const title = metadata.title ?? titleFromSlug(slug);
  const plainText = stripMarkdown(content);
  const date = metadata.date ?? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  return {
    slug,
    title,
    excerpt: metadata.excerpt ?? plainText.slice(0, 160),
    category: metadata.category ?? "Blog",
    date,
    updatedAt: metadata.updatedAt ?? date,
    readingMinutes: metadata.readingMinutes ?? estimateReadingMinutes(plainText),
    cover: covers[metadata.cover ?? "cozinha"] ?? cozinha,
    tags: Array.isArray(metadata.tags) ? metadata.tags : [],
    body: stripDuplicateTitle(marked.parse(content, { async: false }), title),
    faq: Array.isArray(metadata.faq) ? metadata.faq : []
  };
});
function getAllPosts() {
  return [...posts].sort((a, b) => a.date < b.date ? 1 : -1);
}
function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}
function formatDatePt(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}
function estimateReadingMinutes(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}
function parsePost(raw) {
  if (!raw.startsWith("---")) {
    return { metadata: {}, content: raw.trim() };
  }
  const closingFence = raw.indexOf("\n---", 3);
  if (closingFence === -1) {
    return { metadata: {}, content: raw.trim() };
  }
  const frontmatter = raw.slice(3, closingFence).replace(/\r/g, "");
  const metadata = parse(frontmatter);
  const content = raw.slice(closingFence + "\n---".length).trim();
  return { metadata: metadata ?? {}, content };
}
function stripMarkdown(markdown) {
  return markdown.replace(/```[\s\S]*?```/g, "").replace(/`([^`]+)`/g, "$1").replace(/!\[[^\]]*]\([^)]*\)/g, "").replace(/\[([^\]]+)]\([^)]*\)/g, "$1").replace(/[#>*_~-]/g, "").replace(/\s+/g, " ").trim();
}
function stripDuplicateTitle(html, title) {
  const normalizedTitle = title.trim().toLowerCase();
  return html.replace(/^<h1[^>]*>([\s\S]*?)<\/h1>\s*/i, (match, heading) => {
    const text = heading.replace(/<[^>]+>/g, "").trim().toLowerCase();
    return text === normalizedTitle ? "" : match;
  });
}
function titleFromSlug(slug) {
  return slug.split("-").filter(Boolean).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
const Route$7 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
          { path: "/sobre", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/servicos", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/portfolio", changefreq: "weekly", priority: "0.9", lastmod: today },
          { path: "/blog", changefreq: "weekly", priority: "0.8", lastmod: today },
          { path: "/contato", changefreq: "yearly", priority: "0.7", lastmod: today },
          ...getAllPosts().map((p) => ({
            path: `/blog/${p.slug}`,
            lastmod: p.updatedAt,
            changefreq: "monthly",
            priority: "0.7"
          }))
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${absUrl(e.path)}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const SERVICES = [{
  icon: Home,
  title: "Projeto de Interiores Residencial",
  desc: "Ambientes pensados para refletir seu estilo e tornar sua rotina mais leve.",
  inclusos: ["Briefing e levantamento de necessidades", "Estudo de layout e ergonomia", "Projeto de marcenaria sob medida", "Especificação de revestimentos, pinturas e acabamentos", "Render 3D dos ambientes", "Lista de compras com referências de produtos"]
}, {
  icon: Flower,
  title: "Assessoria de Decoração",
  desc: "Ajuda personalizada para escolher móveis, cores e detalhes que combinam com você.",
  inclusos: ["Paleta de cores e combinações de materiais", "Sugestão de móveis, objetos e acessórios", "Layout de decoração e posicionamento de peças", "Orientação sobre iluminação e têxteis", "Recomendações de fornecedores e lojas"]
}, {
  icon: Store,
  title: "Projeto de Interiores Comercial",
  desc: "Espaços funcionais e acolhedores que fortalecem a identidade do seu negócio.",
  inclusos: ["Análise de fluxo e circulação de clientes", "Projeto alinhado à identidade da marca", "Especificação de mobiliário e sinalização", "Render 3D para validação do conceito", "Plantas técnicas para execução da obra"]
}, {
  icon: ClipboardList,
  title: "Assessoria em Orçamentos",
  desc: "Menos dúvidas na hora de comprar, mais tranquilidade para investir no seu espaço.",
  inclusos: ["Análise crítica dos orçamentos recebidos", "Comparativo de itens, prazos e garantias", "Recomendação técnica de escolha", "Sugestão de fornecedores alternativos"]
}];
const $$splitComponentImporter$6 = () => import("./servicos-DhaLcE75.js");
const Route$6 = createFileRoute("/servicos")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  head: () => ({
    meta: [{
      title: "Serviços — Projetos de Arquitetura de Interiores Online | Archiodini"
    }, {
      name: "description",
      content: "Projeto de interiores residencial e comercial, assessoria de decoração e assessoria em orçamentos. Atendimento 100% remoto para todo o mundo."
    }, {
      property: "og:title",
      content: "Serviços de Arquitetura de Interiores Online"
    }, {
      property: "og:description",
      content: `Como podemos ajudar você? Conheça os serviços da ${SITE.name}.`
    }, {
      property: "og:url",
      content: absUrl("/servicos")
    }],
    links: [{
      rel: "canonical",
      href: absUrl("/servicos")
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: SERVICES.map((s, i) => ({
          "@type": "Service",
          position: i + 1,
          name: s.title,
          description: s.desc,
          provider: {
            "@type": "Organization",
            name: SITE.name
          },
          areaServed: "BR"
        }))
      })
    }]
  })
});
const $$splitComponentImporter$5 = () => import("./portfolio-sHjH4Tnv.js");
const Route$5 = createFileRoute("/portfolio")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  head: () => ({
    meta: [{
      title: `Portfólio de Projetos de Interiores | ${SITE.name}`
    }, {
      name: "description",
      content: "Conheça projetos residenciais e comerciais de interiores assinados por Luana Chiodini — atendimento remoto para todo o mundo."
    }, {
      property: "og:title",
      content: "Portfólio de Projetos de Interiores"
    }, {
      property: "og:description",
      content: "Projetos residenciais e comerciais de Luana Chiodini."
    }, {
      property: "og:url",
      content: absUrl("/portfolio")
    }],
    links: [{
      rel: "canonical",
      href: absUrl("/portfolio")
    }]
  })
});
const $$splitComponentImporter$4 = () => import("./contato-CAwIg9MP.js");
const Route$4 = createFileRoute("/contato")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  head: () => ({
    meta: [{
      title: `Contato — Fale com Luana Chiodini | ${SITE.name}`
    }, {
      name: "description",
      content: "Fale com Luana Chiodini no WhatsApp e comece seu projeto de interiores online. Atendimento remoto para todo o mundo."
    }, {
      property: "og:title",
      content: `Contato — ${SITE.name}`
    }, {
      property: "og:description",
      content: "Atendimento remoto para todo o mundo. Vamos conversar?"
    }, {
      property: "og:url",
      content: absUrl("/contato")
    }],
    links: [{
      rel: "canonical",
      href: absUrl("/contato")
    }]
  })
});
const $$splitComponentImporter$3 = () => import("./blog-9Hd3AP52.js");
const Route$3 = createFileRoute("/blog")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const FAQ_ITEMS = [{
  q: "Como funciona um projeto de interiores online?",
  a: "Todo o processo acontece de forma remota: reunião inicial por vídeo, envio de plantas e fotos, desenvolvimento do projeto e entrega digital completa, com plantas técnicas, render 3D e lista de compras."
}, {
  q: "Vocês atendem na minha cidade?",
  a: "Sim! Atendemos 100% de forma remota para todo o mundo."
}, {
  q: "Quanto tempo antes devo contratar um projeto de interiores?",
  a: "O ideal é contratar o projeto no mínimo 4 meses antes da obra começar. Isso permite que você aproveite o projeto para fazer melhores escolhas de materiais e móveis, além de ter mais tempo para pensar em detalhes que podem impactar a execução da obra."
}];
const $$splitComponentImporter$2 = () => import("./index-DACwRnVr.js");
const Route$2 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "Arquitetura de Interiores | Luana Chiodini"
    }, {
      name: "description",
      content: "Luana Chiodini, arquiteta de interiores 100% remota. Projetos residenciais completos, consultoria online e assessoria em reformas para todo o mundo. Fale agora no WhatsApp."
    }, {
      property: "og:title",
      content: "Arquitetura de Interiores | Luana Chiodini"
    }, {
      property: "og:description",
      content: "Projetos residenciais e comerciais 100% remotos, do conceito à execução. Atendemos todo o mundo."
    }, {
      property: "og:url",
      content: absUrl("/")
    }, {
      property: "og:image",
      content: absUrl(cozinha)
    }, {
      name: "twitter:image",
      content: absUrl(cozinha)
    }, {
      name: "keywords",
      content: "arquiteta de interiores online, projeto de interiores remoto, Luana Chiodini, Archiodini, arquiteta remota, design de interiores online"
    }],
    links: [{
      rel: "canonical",
      href: absUrl("/")
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }]
  })
});
const $$splitComponentImporter$1 = () => import("./blog.index-BjyrMLWF.js");
const Route$1 = createFileRoute("/blog/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => ({
    meta: [{
      title: `Blog — Arquitetura e Interiores | ${SITE.name}`
    }, {
      name: "description",
      content: "Artigos sobre projeto de interiores online, reformas, home office, custos e processos. Escrito por Luana Chiodini, arquiteta."
    }, {
      property: "og:title",
      content: "Blog — Arquitetura e Interiores"
    }, {
      property: "og:description",
      content: "Conteúdo para quem quer projetar com clareza e bom gosto."
    }, {
      property: "og:url",
      content: absUrl("/blog")
    }],
    links: [{
      rel: "canonical",
      href: absUrl("/blog")
    }]
  })
});
const $$splitComponentImporter = () => import("./blog._slug-D-kUDxRR.js");
const $$splitNotFoundComponentImporter = () => import("./blog._slug-sD21pEJ1.js");
const Route = createFileRoute("/blog/$slug")({
  loader: ({
    params
  }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return {
      post
    };
  },
  head: ({
    loaderData,
    params
  }) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: [{
          title: `Artigo não encontrado | ${SITE.name}`
        }]
      };
    }
    const articleUrl = absUrl(`/blog/${params.slug}`);
    const scripts = [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.updatedAt,
        image: absUrl(post.cover),
        keywords: post.tags.join(", "),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl
        },
        author: {
          "@type": "Person",
          name: SITE.founder,
          jobTitle: "Arquiteta de Interiores"
        },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url
        }
      })
    }, ...post.faq.length ? [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }] : []];
    const meta = [{
      title: `${post.title} | ${SITE.name}`
    }, {
      name: "description",
      content: post.excerpt
    }, {
      property: "og:title",
      content: post.title
    }, {
      property: "og:description",
      content: post.excerpt
    }, {
      property: "og:url",
      content: articleUrl
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:image",
      content: absUrl(post.cover)
    }, {
      name: "twitter:image",
      content: absUrl(post.cover)
    }, {
      name: "article:published_time",
      content: post.date
    }, {
      name: "article:modified_time",
      content: post.updatedAt
    }, {
      name: "author",
      content: SITE.founder
    }];
    if (post.tags.length > 0) {
      meta.push({
        name: "keywords",
        content: post.tags.join(", ")
      });
    }
    return {
      meta,
      links: [{
        rel: "canonical",
        href: articleUrl
      }],
      scripts
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SobreRoute = Route$8.update({
  id: "/sobre",
  path: "/sobre",
  getParentRoute: () => Route$9
});
const SitemapDotxmlRoute = Route$7.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$9
});
const ServicosRoute = Route$6.update({
  id: "/servicos",
  path: "/servicos",
  getParentRoute: () => Route$9
});
const PortfolioRoute = Route$5.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$9
});
const ContatoRoute = Route$4.update({
  id: "/contato",
  path: "/contato",
  getParentRoute: () => Route$9
});
const BlogRoute = Route$3.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$9
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const BlogIndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => BlogRoute
});
const BlogSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => BlogRoute
});
const BlogRouteChildren = {
  BlogSlugRoute,
  BlogIndexRoute
};
const BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  BlogRoute: BlogRouteWithChildren,
  ContatoRoute,
  PortfolioRoute,
  ServicosRoute,
  SitemapDotxmlRoute,
  SobreRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  FAQ_ITEMS as F,
  Route as R,
  SERVICES as S,
  WHATSAPP_URL as W,
  SITE as a,
  cozinha as c,
  formatDatePt as f,
  getAllPosts as g,
  router as r
};
