import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts, formatDatePt } from "@/lib/blog";
import { SITE, absUrl } from "@/lib/site";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: `Blog — Arquitetura e Interiores | ${SITE.name}` },
      {
        name: "description",
        content:
          "Artigos sobre projeto de interiores online, reformas, home office, custos e processos. Escrito por Luana Chiodini, arquiteta.",
      },
      { property: "og:title", content: "Blog — Arquitetura e Interiores" },
      {
        property: "og:description",
        content: "Conteúdo para quem quer projetar com clareza e bom gosto.",
      },
      { property: "og:url", content: absUrl("/blog") },
    ],
    links: [{ rel: "canonical", href: absUrl("/blog") }],
  }),
});

function BlogIndex() {
  const posts = getAllPosts();
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
      <header className="max-w-3xl">
        <p className="text-[11px] uppercase tracking-luxe text-primary/70">Blog</p>
        <h1 className="mt-4 font-display text-5xl leading-tight text-primary sm:text-6xl">
          Aprenda sobre Arquitetura e Interiores.
        </h1>
        <p className="mt-6 text-base text-foreground/75">
          Conteúdo direto, escrito para quem está pensando em projetar, reformar ou apenas
          entender melhor como funciona um projeto de interiores.
        </p>
      </header>

      <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p.slug} className="group">
            <Link to="/blog/$slug" params={{ slug: p.slug }} className="block">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-luxe text-primary/70">
                {p.category} · {formatDatePt(p.date)} · {p.readingMinutes} min
              </p>
              <h2 className="mt-3 font-display text-2xl leading-tight text-primary">
                {p.title}
              </h2>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/75">
                {p.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-luxe text-primary">
                Ler mais <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
