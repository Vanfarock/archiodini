import { jsxs, jsx } from "react/jsx-runtime";
import { ArrowRight, Instagram, Youtube, Facebook, MapPin, Clock } from "lucide-react";
import { W as WHATSAPP_URL, a as SITE } from "./router-BdB4GxJI.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
import "marked";
import "yaml";
function ContatoPage() {
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24", children: [
    /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70", children: "Contato" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-5xl leading-tight text-primary sm:text-6xl", children: "Vamos conversar sobre o seu projeto." }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl text-base leading-relaxed text-foreground/75", children: "A forma mais rápida de começar é pelo WhatsApp. Me conta o que você tem em mente — pode ser uma reforma completa, um ambiente só ou só uma ideia ainda no início." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 grid gap-6 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "group flex items-center justify-between rounded-2xl border border-primary/15 bg-primary p-7 text-primary-foreground transition-opacity hover:opacity-90", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary-foreground/70", children: "Resposta em horas" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-2xl", children: "WhatsApp" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-primary-foreground/85", children: "+55 47 99161-9082" })
        ] }),
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-6 w-6 transition-transform group-hover:translate-x-1" })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: SITE.instagram, target: "_blank", rel: "noopener noreferrer", className: "group flex items-center justify-between rounded-2xl border border-primary/15 bg-card p-7 transition-colors hover:bg-primary hover:text-primary-foreground", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70 group-hover:text-primary-foreground/70", children: "Bastidores e projetos" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-2xl text-primary group-hover:text-primary-foreground", children: "Instagram" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-foreground/70 group-hover:text-primary-foreground/85", children: [
            "@",
            SITE.instagramHandle
          ] })
        ] }),
        /* @__PURE__ */ jsx(Instagram, { className: "h-6 w-6 text-primary group-hover:text-primary-foreground" })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: SITE.youtube, target: "_blank", rel: "noopener noreferrer", className: "group flex items-center justify-between rounded-2xl border border-primary/15 bg-card p-7 transition-colors hover:bg-primary hover:text-primary-foreground", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70 group-hover:text-primary-foreground/70", children: "Vídeos de projetos" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-2xl text-primary group-hover:text-primary-foreground", children: "YouTube" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-foreground/70 group-hover:text-primary-foreground/85", children: "@archiodiniprojetos" })
        ] }),
        /* @__PURE__ */ jsx(Youtube, { className: "h-6 w-6 text-primary group-hover:text-primary-foreground" })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: SITE.facebook, target: "_blank", rel: "noopener noreferrer", className: "group flex items-center justify-between rounded-2xl border border-primary/15 bg-card p-7 transition-colors hover:bg-primary hover:text-primary-foreground", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70 group-hover:text-primary-foreground/70", children: "Página oficial" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-2xl text-primary group-hover:text-primary-foreground", children: "Facebook" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-foreground/70 group-hover:text-primary-foreground/85", children: SITE.name })
        ] }),
        /* @__PURE__ */ jsx(Facebook, { className: "h-6 w-6 text-primary group-hover:text-primary-foreground" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 grid gap-6 rounded-2xl border border-primary/15 bg-card p-7 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx(MapPin, { className: "mt-1 h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70", children: "Base" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-foreground/85", children: "Blumenau, SC — atendimento remoto para todo o mundo" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx(Clock, { className: "mt-1 h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70", children: "Horário" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-foreground/85", children: "Segunda a sexta · 9h às 18h" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ContatoPage as component
};
