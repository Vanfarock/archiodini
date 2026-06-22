import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { l as luana } from "./luana-retrato-DPp5-nbX.js";
import { R as Route, f as formatDatePt, a as SITE, W as WHATSAPP_URL } from "./router-BdB4GxJI.js";
import "@tanstack/react-query";
import "react";
import "marked";
import "yaml";
function PostPage() {
  const {
    post
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("article", { className: "mx-auto max-w-[52rem] px-5 py-14 sm:px-8 md:py-20", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe text-primary/70 hover:text-primary", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
      " Voltar para o blog"
    ] }),
    /* @__PURE__ */ jsxs("header", { className: "mt-6", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70", children: [
        post.category,
        " · ",
        formatDatePt(post.date),
        " · ",
        post.readingMinutes,
        " min de leitura"
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl leading-tight text-primary sm:text-5xl", children: post.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg leading-relaxed text-foreground/80", children: post.excerpt }),
      post.tags.length > 0 && /* @__PURE__ */ jsx("ul", { className: "mt-4 flex flex-wrap gap-2", children: post.tags.map((tag) => /* @__PURE__ */ jsx("li", { className: "rounded-full border border-primary/20 px-3 py-1 text-[11px] uppercase tracking-luxe text-primary/80", children: tag }, tag)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 aspect-[16/10] overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsx("img", { src: post.cover, alt: post.title, className: "h-full w-full object-cover", loading: "eager" }) }),
    /* @__PURE__ */ jsx("div", { className: "prose-archiodini mt-8", dangerouslySetInnerHTML: {
      __html: post.body
    } }),
    post.faq.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mt-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-primary", children: "Perguntas frequentes" }),
      /* @__PURE__ */ jsx("dl", { className: "mt-5 divide-y divide-primary/15 border-y border-primary/15", children: post.faq.map((f) => /* @__PURE__ */ jsxs("div", { className: "py-4", children: [
        /* @__PURE__ */ jsx("dt", { className: "font-display text-xl text-primary", children: f.q }),
        /* @__PURE__ */ jsx("dd", { className: "mt-2 text-[15px] leading-relaxed text-foreground/80", children: f.a })
      ] }, f.q)) })
    ] }),
    /* @__PURE__ */ jsxs("aside", { className: "mt-12 flex items-center gap-5 rounded-2xl border border-primary/15 bg-card p-6", children: [
      /* @__PURE__ */ jsx("span", { className: "block h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-primary/15", children: /* @__PURE__ */ jsx("img", { src: luana, alt: SITE.founder, className: "h-full w-full object-cover object-[60%_28%]" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-xl text-primary", children: SITE.founder }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Arquiteta de Interiores · Atendimento 100% remoto para todo o mundo" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 rounded-2xl bg-primary p-8 text-center text-primary-foreground", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-2xl", children: "Gostou? Fale comigo no WhatsApp." }),
      /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "mt-5 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-[12px] uppercase tracking-luxe text-primary hover:opacity-90", children: [
        "Quero conversar sobre o meu projeto ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] })
  ] });
}
export {
  PostPage as component
};
