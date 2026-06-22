import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { a as PROJECTS, P as PORTFOLIO_FILTERS } from "./portfolio-CJAD7YLM.js";
import { W as WHATSAPP_URL } from "./router-BdB4GxJI.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "marked";
import "yaml";
function PortfolioPage() {
  const [filter, setFilter] = useState("todos");
  const items = useMemo(() => filter === "todos" ? PROJECTS : PROJECTS.filter((p) => p.category === filter), [filter]);
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24", children: [
    /* @__PURE__ */ jsxs("header", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70", children: "Portfólio" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-5xl leading-tight text-primary sm:text-6xl", children: "Projetos residenciais e comerciais." }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-base text-foreground/75", children: "Uma seleção de ambientes recentes, em diferentes cidades do Brasil." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: PORTFOLIO_FILTERS.map((f) => /* @__PURE__ */ jsx("button", { onClick: () => setFilter(f.value), className: `rounded-full border px-4 py-2 text-[11px] uppercase tracking-luxe transition-colors ${filter === f.value ? "border-primary bg-primary text-primary-foreground" : "border-primary/20 text-foreground/70 hover:border-primary/50"}`, children: f.label }, f.value)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3", children: items.map((p) => /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "group relative block overflow-hidden rounded-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] w-full overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: p.image, alt: `${p.title} — ${p.city}`, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" }) }),
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
    ] }, p.slug)) })
  ] });
}
export {
  PortfolioPage as component
};
