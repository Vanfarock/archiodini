import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, PORTFOLIO_FILTERS } from "@/lib/portfolio";
import { SITE, absUrl } from "@/lib/site";

export const Route = createFileRoute("/portfolio/")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: `Portfólio de Projetos de Interiores | ${SITE.name}` },
      {
        name: "description",
        content:
          "Conheça projetos residenciais e comerciais de interiores assinados por Luana Chiodini — atendimento remoto para todo o mundo.",
      },
      { property: "og:title", content: "Portfólio de Projetos de Interiores" },
      {
        property: "og:description",
        content: "Projetos residenciais e comerciais de Luana Chiodini.",
      },
      { property: "og:url", content: absUrl("/portfolio") },
    ],
    links: [{ rel: "canonical", href: absUrl("/portfolio") }],
  }),
});

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof PORTFOLIO_FILTERS)[number]["value"]>("todos");
  const items = useMemo(
    () => (filter === "todos" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
      <header className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-luxe text-primary/70">Portfólio</p>
          <h1 className="mt-4 font-display text-5xl leading-tight text-primary sm:text-6xl">
            Projetos residenciais e comerciais.
          </h1>
          <p className="mt-5 text-base text-foreground/75">
            Uma seleção de ambientes recentes, em diferentes cidades do Brasil.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {PORTFOLIO_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-luxe transition-colors ${
                filter === f.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-primary/20 text-foreground/70 hover:border-primary/50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </header>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Link
            key={p.slug}
            to="/portfolio/$slug"
            params={{ slug: p.slug }}
            className="group relative block overflow-hidden rounded-2xl"
          >
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} — ${p.city}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-display text-xl leading-tight">{p.title}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-luxe">
                Ver mais imagens <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
            <div className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-[10px] uppercase tracking-luxe text-primary backdrop-blur-sm">
              {p.category === "residencial" ? "Residencial" : "Comercial"}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
