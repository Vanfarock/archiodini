import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl px-5 py-32 text-center", children: [
  /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl text-primary", children: "Artigo não encontrado" }),
  /* @__PURE__ */ jsx(Link, { to: "/blog", className: "mt-6 inline-block text-primary underline", children: "Voltar para o blog" })
] });
export {
  SplitNotFoundComponent as notFoundComponent
};
