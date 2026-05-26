import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import luana from "@/assets/luana-retrato.png";
import { getPost, formatDatePt } from "@/lib/blog";
import { WHATSAPP_URL, SITE } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    if (!post) {
      return { meta: [{ title: "Artigo não encontrado | Archiodini" }] };
    }
    return {
      meta: [
        { title: `${post.title} | Archiodini Projetos` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:url", content: `/blog/${params.slug}` },
        { property: "og:type", content: "article" },
        { property: "og:image", content: post.cover },
        { name: "twitter:image", content: post.cover },
        { name: "article:published_time", content: post.date },
        { name: "author", content: SITE.founder },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            image: post.cover,
            author: {
              "@type": "Person",
              name: SITE.founder,
              jobTitle: "Arquiteta e Designer de Interiores",
            },
            publisher: {
              "@type": "Organization",
              name: "Archiodini Projetos",
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-32 text-center">
      <h1 className="font-display text-4xl text-primary">Artigo não encontrado</h1>
      <Link to="/blog" className="mt-6 inline-block text-primary underline">
        Voltar para o blog
      </Link>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe text-primary/70 hover:text-primary"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Voltar para o blog
      </Link>

      <header className="mt-8">
        <p className="text-[11px] uppercase tracking-luxe text-primary/70">
          {post.category} · {formatDatePt(post.date)} · {post.readingMinutes} min de leitura
        </p>
        <h1 className="mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-foreground/80">{post.excerpt}</p>
      </header>

      <div className="mt-10 aspect-[16/10] overflow-hidden rounded-2xl">
        <img
          src={post.cover}
          alt={post.title}
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      <div
        className="prose-archiodini mt-12"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />

      <section className="mt-16">
        <h2 className="font-display text-3xl text-primary">Perguntas frequentes</h2>
        <dl className="mt-6 divide-y divide-primary/15 border-y border-primary/15">
          {post.faq.map((f) => (
            <div key={f.q} className="py-5">
              <dt className="font-display text-xl text-primary">{f.q}</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-foreground/80">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <aside className="mt-16 flex items-center gap-5 rounded-2xl border border-primary/15 bg-card p-6">
        <span className="block h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-primary/15">
          <img src={luana} alt={SITE.founder} className="h-full w-full object-cover" />
        </span>
        <div>
          <p className="font-display text-xl text-primary">{SITE.founder}</p>
          <p className="text-sm text-muted-foreground">
            Arquiteta e Designer de Interiores · Atendimento 100% remoto para todo o Brasil
          </p>
        </div>
      </aside>

      <div className="mt-12 rounded-2xl bg-primary p-8 text-center text-primary-foreground">
        <p className="font-display text-2xl">Gostou? Fale comigo no WhatsApp.</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-[12px] uppercase tracking-luxe text-primary hover:opacity-90"
        >
          Quero conversar sobre o meu projeto <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
