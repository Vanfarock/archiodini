import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { l as luana } from "./luana-retrato-DPp5-nbX.js";
import { W as WHATSAPP_URL } from "./router-BdB4GxJI.js";
import "@tanstack/react-query";
import "react";
import "marked";
import "yaml";
function SobrePage() {
  return /* @__PURE__ */ jsx("article", { className: "mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-14 md:grid-cols-12 md:gap-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative md:col-span-5", children: [
      /* @__PURE__ */ jsx("div", { className: "relative mx-auto aspect-[4/5] w-full max-w-md", children: /* @__PURE__ */ jsx("div", { className: "clip-arch h-full w-full", children: /* @__PURE__ */ jsx("img", { src: luana, alt: "Luana Chiodini, arquiteta de interiores", className: "h-full w-full object-cover object-[center_10%]" }) }) }),
      /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute -bottom-8 -right-4 size-28 rounded-full bg-primary/15 -z-index-1" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70", children: "Sobre" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-5xl leading-tight text-primary sm:text-6xl", children: "Luana Chiodini" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm uppercase tracking-luxe text-muted-foreground", children: "Arquiteta de Interiores · Blumenau, SC" }),
      /* @__PURE__ */ jsxs("div", { className: "prose-archiodini mt-10 max-w-xl", children: [
        /* @__PURE__ */ jsx("p", { children: "Sou Luana Chiodini, arquiteta apaixonada por criar ambientes que contam histórias. Desde os primeiros projetos, percebi que o meu trabalho não é decorar — é traduzir em forma, luz e textura o jeito como cada cliente quer viver." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Atendo ",
          /* @__PURE__ */ jsx("strong", { children: "100% de forma remota" }),
          " para todo o mundo — de São Paulo a Florianópolis, de Brasília ao interior do país. Esse modelo me permite estar perto de quem normalmente não teria acesso a um projeto detalhado, sem abrir mão de nenhuma etapa técnica."
        ] }),
        /* @__PURE__ */ jsx("h2", { children: "Como eu trabalho" }),
        /* @__PURE__ */ jsx("p", { children: "Cada projeto começa com uma conversa longa — sobre rotina, gostos, frustrações e orçamento. Depois venho com referências, paleta de materiais e render 3D, ajustando até estar 100% alinhado com a sua identidade. A entrega final é um pacote digital completo, pronto para qualquer equipe de obra executar na sua cidade." }),
        /* @__PURE__ */ jsx("h2", { children: "Onde já atendi" }),
        /* @__PURE__ */ jsx("p", { children: "Blumenau, Florianópolis, Joinville, Curitiba, São Paulo, Rio de Janeiro, Brasília, Belo Horizonte e várias cidades do interior. Onde tem internet, tem projeto." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[12px] uppercase tracking-luxe text-primary-foreground hover:opacity-90", children: [
          "Conversar comigo ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/portfolio", className: "inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-[12px] uppercase tracking-luxe text-primary hover:bg-primary hover:text-primary-foreground", children: "Ver portfólio" })
      ] })
    ] })
  ] }) });
}
export {
  SobrePage as component
};
