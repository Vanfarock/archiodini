import { jsxs, jsx } from "react/jsx-runtime";
import { S as SERVICES, W as WHATSAPP_URL } from "./router-BdB4GxJI.js";
import { ArrowRight, Check } from "lucide-react";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
import "marked";
import "yaml";
function ServicosPage() {
  return /* @__PURE__ */ jsxs("article", { className: "mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24", children: [
    /* @__PURE__ */ jsxs("header", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70", children: "Serviços" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-5xl leading-tight text-primary sm:text-6xl", children: "Como podemos ajudar você?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-relaxed text-foreground/75", children: "Cada serviço é entregue digitalmente, com cronograma e contrato. Você escolhe o escopo que faz sentido para o seu momento." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 space-y-10", children: SERVICES.map((s) => {
      const Icon = s.icon;
      return /* @__PURE__ */ jsxs("section", { className: "grid items-start gap-8 rounded-3xl border border-primary/15 bg-card p-8 md:grid-cols-12 md:p-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
          /* @__PURE__ */ jsx(Icon, { className: "h-9 w-9 stroke-[1.25] text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-5 font-display text-3xl leading-tight text-primary sm:text-4xl", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-[15px] leading-relaxed text-foreground/75", children: s.desc }),
          /* @__PURE__ */ jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[12px] uppercase tracking-luxe text-primary-foreground hover:opacity-90", children: [
            "Quero esse serviço ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
          /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-primary/70", children: "O que está incluso" }),
          /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-3", children: s.inclusos.map((it) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-[15px] text-foreground/85", children: [
            /* @__PURE__ */ jsx(Check, { className: "mt-1 h-4 w-4 shrink-0 text-primary" }),
            /* @__PURE__ */ jsx("span", { children: it })
          ] }, it)) })
        ] })
      ] }, s.title);
    }) })
  ] });
}
export {
  ServicosPage as component
};
