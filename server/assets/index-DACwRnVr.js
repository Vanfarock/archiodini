import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { W as WHATSAPP_URL, c as cozinha, g as getAllPosts, f as formatDatePt, F as FAQ_ITEMS } from "./router-BdB4GxJI.js";
import { Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ArrowRight, ArrowUpRight, Home, Flower, Store, ClipboardList, Quote, Minus, Plus } from "lucide-react";
import { l as luana } from "./luana-retrato-DPp5-nbX.js";
import { a as PROJECTS, P as PORTFOLIO_FILTERS } from "./portfolio-CJAD7YLM.js";
import "@tanstack/react-query";
import "marked";
import "yaml";
function Arch({ className, fill = "currentColor" }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      viewBox: "0 0 200 280",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      className,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M0 100 C0 44.77 44.77 0 100 0 C155.23 0 200 44.77 200 100 L200 280 L0 280 Z",
          fill
        }
      )
    }
  );
}
const TESTIMONIALS = [
  {
    quote: "Nossa Lu, ficou tudo maravilhoso!!! O closet em especial superou todas as expectativas. Sério, está lindo demais.",
    name: "Bruna C.",
    project: "Projeto Casa"
  },
  {
    quote: "Um acompanhamento impecável! Desde as medidas à entrega dos documentos. Não poderíamos ter escolhido outra pessoa para fazer parte dessa etapa tão importante. Aguardando ansiosa todos os próximos projetos!",
    name: "Julie P.",
    project: "Projeto Apartamento"
  },
  {
    quote: "Perfeita! Tive apoio em todas as etapas do processo, me ajudou muito com os orçamentos e prazos! Minha casa ficou linda!",
    name: "Vinicius M.",
    project: "Projeto Apartamento"
  },
  {
    quote: "Gostei muito do projeto, superou minhas expectativas! Faz toda diferença ter o olhar de uma profissional que valoriza ouvir o cliente e transformar isso em algo tão especial. Parabéns pelo trabalho lindo!",
    name: "Maria F.",
    project: "Projeto Sobrado"
  },
  {
    quote: "Foi ótima! Atendeu todas as minhas ideias, sugeriu ideias que complementaram o projeto, ficou tudo perfeito do jeito que queríamos, tudo detalhado, e super atenciosa 💖",
    name: "Ellen B.",
    project: "Projeto Apartamento"
  }
];
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Sobre, {}),
    /* @__PURE__ */ jsx(Servicos, {}),
    /* @__PURE__ */ jsx(Portfolio, {}),
    /* @__PURE__ */ jsx(Depoimentos, {}),
    /* @__PURE__ */ jsx(BlogPreview, {}),
    /* @__PURE__ */ jsx(FAQ, {}),
    /* @__PURE__ */ jsx(CTAFinal, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-12 px-5 pt-12 pb-16 sm:px-8 md:grid-cols-12 md:gap-10 md:pt-20 md:pb-28", children: [
    /* @__PURE__ */ jsxs("div", { className: "reveal md:col-span-6", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70", children: "Arquitetura · Interiores · Remoto" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-5 font-display text-[42px] leading-[1.05] text-primary sm:text-[56px] lg:text-[68px]", children: "Arquitetura de Interiores" }),
      /* @__PURE__ */ jsx("p", { className: "mt-7 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg", children: "Projetos funcionais que traduzem a sua personalidade." }),
      /* @__PURE__ */ jsxs("div", { className: "relative mt-10 flex flex-wrap items-center gap-5", children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute top-1/2 left-0 z-0 size-[7.5rem] -translate-x-1/2 -translate-y-1/4 rounded-full bg-primary/10 sm:size-32 md:size-36", "aria-hidden": true }),
        /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "group relative z-10 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-[12px] uppercase tracking-luxe text-primary-foreground transition-opacity hover:opacity-90", children: [
          "Quero meu projeto",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "#portfolio", className: "relative z-10 text-[12px] uppercase tracking-luxe text-primary/80 underline-offset-8 hover:underline", children: "Ver portfólio ↓" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "reveal reveal-delay-2 relative md:col-span-6", children: [
      /* @__PURE__ */ jsx(Arch, { className: "absolute -top-10 -left-6 h-44 w-32 text-primary/15 md:-top-16 md:-left-10 md:h-56 md:w-40", fill: "currentColor" }),
      /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(60,65,40,0.35)]", children: /* @__PURE__ */ jsx("img", { src: cozinha, alt: "Projeto de cozinha gourmet assinado por Luana Chiodini, com ilha de mármore, marcenaria em madeira ripada e armários verde oliva", width: 1200, height: 750, className: "h-[460px] w-full object-cover sm:h-[560px]" }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 left-6 hidden rounded-full bg-background px-5 py-3 text-[11px] uppercase tracking-luxe text-primary shadow-md ring-1 ring-primary/10 sm:block", children: "Projeto residencial" })
    ] })
  ] }) });
}
function Sobre() {
  return /* @__PURE__ */ jsx("section", { id: "sobre", className: "border-t border-border/60 bg-card/40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 md:grid-cols-12 md:gap-16 md:py-28", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative md:col-span-5", children: [
      /* @__PURE__ */ jsx("div", { className: "relative mx-auto aspect-[4/5] w-full max-w-md", children: /* @__PURE__ */ jsx("div", { className: "clip-arch h-full w-full", children: /* @__PURE__ */ jsx("img", { src: luana, alt: "Retrato de Luana Chiodini, arquiteta de interiores", className: "h-full w-full object-cover object-[center_10%]", loading: "lazy" }) }) }),
      /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute -bottom-8 -right-4 size-28 rounded-full bg-primary/15 -z-index-1" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70", children: "Sobre a Luana" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl", children: "Ambientes que contam a sua história." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-7 space-y-5 text-base leading-relaxed text-foreground/80", children: [
        /* @__PURE__ */ jsx("p", { children: "Nossa missão é criar lares com a personalidade dos nossos clientes e por meio de detalhes, contar sua história dentro do projeto. Nosso objetivo é criar ambientes atemporais e com significado." }),
        /* @__PURE__ */ jsx("p", { children: "Para nós cada espaço influencia diretamente na qualidade de vida, por isso nossos projetos respeitam o seu estilo e necessidades. Mais do que estética, buscamos o bem-estar e a praticidade para seu dia a dia." }),
        /* @__PURE__ */ jsxs("p", { className: "pt-2", children: [
          "Atenciosamente,",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "mt-2 block font-display text-sm uppercase tracking-luxe text-primary", children: "Luana Chiodini" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("dl", { className: "mt-10 grid max-w-lg grid-cols-3 gap-4", children: [
        [{
          n: "150+",
          l: "Projetos entregues"
        }, {
          n: "100%",
          l: "Atendimento remoto"
        }].map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-primary/15 bg-background p-5 text-center", children: [
          /* @__PURE__ */ jsx("dt", { className: "font-display text-3xl text-primary", children: s.n }),
          /* @__PURE__ */ jsx("dd", { className: "mt-1 text-[11px] uppercase tracking-luxe text-muted-foreground", children: s.l })
        ] }, s.l)),
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center rounded-2xl border border-primary/15 bg-background p-5 text-center", children: /* @__PURE__ */ jsx("dd", { className: "mt-1 text-[11px] uppercase tracking-luxe text-muted-foreground", children: "De Blumenau para o mundo" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxs(Link, { to: "/sobre", className: "inline-flex items-center gap-2 text-[12px] uppercase tracking-luxe text-primary hover:opacity-80", children: [
        "Nosso propósito ",
        /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })
      ] }) })
    ] })
  ] }) });
}
const SERVICES = [{
  icon: Home,
  title: "Projeto de Interiores Residencial",
  desc: "Ambientes pensados para refletir seu estilo e tornar sua rotina mais leve."
}, {
  icon: Flower,
  title: "Assessoria de Decoração",
  desc: "Ajuda personalizada para escolher móveis, cores e detalhes que combinam com você."
}, {
  icon: Store,
  title: "Projeto de Interiores Comercial",
  desc: "Espaços funcionais e acolhedores que fortalecem a identidade do seu negócio."
}, {
  icon: ClipboardList,
  title: "Assessoria em Orçamentos",
  desc: "Menos dúvidas na hora de comprar, mais tranquilidade para investir no seu espaço."
}];
function Servicos() {
  return /* @__PURE__ */ jsx("section", { id: "servicos", className: "border-t border-border/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28", children: [
    /* @__PURE__ */ jsxs("header", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70", children: "Serviços" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl", children: "Como podemos ajudar você?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: "Cada serviço é entregue digitalmente, com cronograma e contrato. Você escolhe o escopo que faz sentido para o seu momento." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-2", children: SERVICES.map((s) => {
      const Icon = s.icon;
      return /* @__PURE__ */ jsxs("article", { className: "group relative overflow-hidden rounded-2xl border border-primary/15 bg-card p-8 transition-colors hover:bg-primary hover:text-primary-foreground", children: [
        /* @__PURE__ */ jsx(Icon, { className: "h-7 w-7 stroke-[1.25] text-primary transition-colors group-hover:text-primary-foreground" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 font-display text-2xl leading-tight", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-foreground/75 transition-colors group-hover:text-primary-foreground/85", children: s.desc }),
        /* @__PURE__ */ jsxs(Link, { to: "/servicos", className: "mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe", children: [
          "Saiba mais ",
          /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
        ] })
      ] }, s.title);
    }) })
  ] }) });
}
function Portfolio() {
  const [filter, setFilter] = useState("todos");
  const items = useMemo(() => filter === "todos" ? PROJECTS : PROJECTS.filter((p) => p.category === filter), [filter]);
  return /* @__PURE__ */ jsx("section", { id: "portfolio", className: "border-t border-border/60 bg-card/40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70", children: "Portfólio" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl", children: "Projetos que falam por si." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: PORTFOLIO_FILTERS.map((f) => /* @__PURE__ */ jsx("button", { onClick: () => setFilter(f.value), className: `rounded-full border px-4 py-2 text-[11px] uppercase tracking-luxe transition-colors ${filter === f.value ? "border-primary bg-primary text-primary-foreground" : "border-primary/20 text-foreground/70 hover:border-primary/50"}`, children: f.label }, f.value)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] md:grid-cols-3 md:gap-5", children: items.map((p, i) => /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: `group relative overflow-hidden rounded-2xl ${p.span === "wide" ? "md:col-span-2" : p.span === "tall" ? "row-span-2" : ""}`, children: [
      /* @__PURE__ */ jsx("img", { src: p.image, alt: `${p.title} — projeto de interiores em ${p.city}`, loading: i < 2 ? "eager" : "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 translate-y-3 p-5 text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-xl leading-tight", children: p.title }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1 text-[11px] uppercase tracking-luxe text-primary-foreground/85", children: [
          p.room,
          " · ",
          p.city
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "mt-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-luxe", children: [
          "Quero um projeto assim ",
          /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-[10px] uppercase tracking-luxe text-primary backdrop-blur-sm", children: p.category === "residencial" ? "Residencial" : "Comercial" })
    ] }, p.slug)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxs(Link, { to: "/portfolio", className: "inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-[12px] uppercase tracking-luxe text-primary transition-colors hover:bg-primary hover:text-primary-foreground", children: [
      "Ver mais projetos ",
      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
    ] }) })
  ] }) });
}
function Depoimentos() {
  return /* @__PURE__ */ jsx("section", { className: "border-t border-border/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28", children: [
    /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70", children: "Depoimentos" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 max-w-3xl font-display text-4xl leading-tight text-primary sm:text-5xl", children: "Relatos de quem confiou." }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxs("figure", { className: `relative rounded-2xl border border-primary/15 p-7 ${i === 1 ? "bg-primary text-primary-foreground" : "bg-card"}`, children: [
      /* @__PURE__ */ jsx(Quote, { className: `h-8 w-8 ${i === 1 ? "text-primary-foreground/60" : "text-primary/40"}`, strokeWidth: 1.5 }),
      /* @__PURE__ */ jsxs("blockquote", { className: "mt-5 text-[15px] leading-relaxed", children: [
        '"',
        t.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("figcaption", { className: "mt-8 border-t border-current/15 pt-5", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-lg", children: t.name }),
        /* @__PURE__ */ jsx("p", { className: `mt-1 text-[11px] uppercase tracking-luxe ${i === 1 ? "text-primary-foreground/75" : "text-muted-foreground"}`, children: t.project })
      ] })
    ] }, t.name)) })
  ] }) });
}
function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);
  return /* @__PURE__ */ jsx("section", { className: "border-t border-border/60 bg-card/40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70", children: "Conteúdo" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 max-w-2xl font-display text-4xl leading-tight text-primary sm:text-5xl", children: "Tudo o que você precisa saber antes de decorar ou reformar." })
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/blog", className: "text-[12px] uppercase tracking-luxe text-primary hover:opacity-80", children: "Ver todos os artigos →" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-8 md:grid-cols-3", children: posts.map((p) => /* @__PURE__ */ jsx("article", { className: "group", children: /* @__PURE__ */ jsxs(Link, { to: "/blog/$slug", params: {
      slug: p.slug
    }, className: "block", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden rounded-2xl bg-secondary", children: /* @__PURE__ */ jsx("img", { src: p.cover, alt: p.title, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" }) }),
      /* @__PURE__ */ jsxs("p", { className: "mt-5 text-[11px] uppercase tracking-luxe text-primary/70", children: [
        p.category,
        " · ",
        formatDatePt(p.date)
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-2xl leading-tight text-primary", children: p.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 line-clamp-2 text-sm leading-relaxed text-foreground/75", children: p.excerpt }),
      /* @__PURE__ */ jsxs("span", { className: "mt-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-luxe text-primary", children: [
        "Ler mais ",
        /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
      ] })
    ] }) }, p.slug)) })
  ] }) });
}
function FAQ() {
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsx("section", { className: "border-t border-border/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-12 md:py-28", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70", children: "FAQ" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl", children: "Perguntas frequentes." }),
      /* @__PURE__ */ jsxs("p", { className: "mt-6 max-w-sm text-sm text-muted-foreground", children: [
        "As dúvidas mais comuns sobre projeto de interiores online. Não encontrou a sua? Me chama no",
        " ",
        /* @__PURE__ */ jsx("a", { href: WHATSAPP_URL, className: "text-primary font-bold", target: "_blank", rel: "noopener noreferrer", children: "WhatsApp" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "md:col-span-7", children: FAQ_ITEMS.map((f, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxs("li", { className: "border-b border-primary/15 py-5", children: [
        /* @__PURE__ */ jsxs("button", { onClick: () => setOpen(isOpen ? null : i), className: "flex w-full items-center justify-between gap-6 text-left", "aria-expanded": isOpen, children: [
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl leading-snug text-primary", children: f.q }),
          isOpen ? /* @__PURE__ */ jsx(Minus, { className: "h-5 w-5 shrink-0 text-primary" }) : /* @__PURE__ */ jsx(Plus, { className: "h-5 w-5 shrink-0 text-primary" })
        ] }),
        isOpen && /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-prose text-[15px] leading-relaxed text-foreground/80", children: f.a })
      ] }, f.q);
    }) })
  ] }) });
}
function CTAFinal() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-primary text-primary-foreground", children: [
    /* @__PURE__ */ jsx(Arch, { className: "absolute -left-10 -top-16 h-72 w-52 text-primary-foreground/8", fill: "currentColor" }),
    /* @__PURE__ */ jsx(Arch, { className: "absolute -right-12 -bottom-20 h-72 w-52 rotate-180 text-primary-foreground/8", fill: "currentColor" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 md:py-32", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary-foreground/70", children: "Vamos começar?" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-5 font-display text-4xl leading-[1.1] sm:text-6xl", children: [
        "Pronto para transformar",
        /* @__PURE__ */ jsx("br", {}),
        "o seu espaço?"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-xl text-base text-primary-foreground/85", children: "Atendo 100% online para todo o mundo. Vamos conversar sobre o seu projeto?" }),
      /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "mt-10 inline-flex items-center gap-3 rounded-full bg-background px-8 py-4 text-[12px] uppercase tracking-luxe text-primary transition-transform hover:scale-[1.02]", children: [
        "Solicitar orçamento",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] })
  ] });
}
export {
  Index as component
};
