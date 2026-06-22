import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { g as getAllPosts, f as formatDatePt } from "./router-BdB4GxJI.js";
import "@tanstack/react-query";
import "react";
import "marked";
import "yaml";
function BlogIndex() {
  const posts = getAllPosts();
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24", children: [
    /* @__PURE__ */ jsxs("header", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70", children: "Blog" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-5xl leading-tight text-primary sm:text-6xl", children: "Aprenda sobre Arquitetura e Interiores." }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-base text-foreground/75", children: "Conteúdo direto, escrito para quem está pensando em projetar, reformar ou apenas entender melhor como funciona um projeto de interiores." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3", children: posts.map((p) => /* @__PURE__ */ jsx("article", { className: "group", children: /* @__PURE__ */ jsxs(Link, { to: "/blog/$slug", params: {
      slug: p.slug
    }, className: "block", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden rounded-2xl bg-secondary", children: /* @__PURE__ */ jsx("img", { src: p.cover, alt: p.title, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" }) }),
      /* @__PURE__ */ jsxs("p", { className: "mt-5 text-[11px] uppercase tracking-luxe text-primary/70", children: [
        p.category,
        " · ",
        formatDatePt(p.date),
        " · ",
        p.readingMinutes,
        " min"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-2xl leading-tight text-primary", children: p.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/75", children: p.excerpt }),
      /* @__PURE__ */ jsxs("span", { className: "mt-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-luxe text-primary", children: [
        "Ler mais ",
        /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
      ] })
    ] }) }, p.slug)) })
  ] });
}
export {
  BlogIndex as component
};
