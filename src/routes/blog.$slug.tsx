import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import luana from "@/assets/luana-retrato.png";
import { getPost, formatDatePt, type BlogFAQ } from "@/lib/blog";
import { WHATSAPP_URL, SITE, absUrl } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    if (!post) {
      return { meta: [{ title: `Artigo não encontrado | ${SITE.name}` }] };
    }
    const articleUrl = absUrl(`/blog/${params.slug}`);
    const scripts = [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.updatedAt,
          image: absUrl(post.cover),
          keywords: post.tags.join(", "),
          mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
          author: {
            "@type": "Person",
            name: SITE.founder,
            jobTitle: "Arquiteta de Interiores",
          },
          publisher: {
            "@type": "Organization",
            name: SITE.name,
            url: SITE.url,
          },
        }),
      },
      ...(post.faq.length
        ? [
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
          ]
        : []),
    ];

    const meta = [
      { title: `${post.title} | ${SITE.name}` },
      { name: "description", content: post.excerpt },
      { property: "og:title", content: post.title },
      { property: "og:description", content: post.excerpt },
      { property: "og:url", content: articleUrl },
      { property: "og:type", content: "article" },
      { property: "og:image", content: absUrl(post.cover) },
      { name: "twitter:image", content: absUrl(post.cover) },
      { name: "article:published_time", content: post.date },
      { name: "article:modified_time", content: post.updatedAt },
      { name: "author", content: SITE.founder },
    ];

    if (post.tags.length > 0) {
      meta.push({ name: "keywords", content: post.tags.join(", ") });
    }

    return {
      meta,
      links: [{ rel: "canonical", href: articleUrl }],
      scripts,
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
    <article className="mx-auto max-w-[52rem] px-5 py-14 sm:px-8 md:py-20">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe text-primary/70 hover:text-primary"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Voltar para o blog
      </Link>

      <header className="mt-6">
        <p className="text-[11px] uppercase tracking-luxe text-primary/70">
          {post.category} · {formatDatePt(post.date)} · {post.readingMinutes} min de leitura
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-primary sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">{post.excerpt}</p>
        {post.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-primary/20 px-3 py-1 text-[11px] uppercase tracking-luxe text-primary/80"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </header>

      <div className="mt-8 aspect-[16/10] overflow-hidden rounded-2xl">
        <img
          src={post.cover}
          alt={post.title}
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      <div className="prose-archiodini mt-8" dangerouslySetInnerHTML={{ __html: post.body }} />

      {post.faq.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-3xl text-primary">Perguntas frequentes</h2>
          <dl className="mt-5 divide-y divide-primary/15 border-y border-primary/15">
            {post.faq.map((f: BlogFAQ) => (
              <div key={f.q} className="py-4">
                <dt className="font-display text-xl text-primary">{f.q}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-foreground/80">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <aside className="mt-12 flex items-center gap-5 rounded-2xl border border-primary/15 bg-card p-6">
        <span className="block h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-primary/15">
          <img
            src={luana}
            alt={SITE.founder}
            className="h-full w-full object-cover object-[60%_28%]"
          />
        </span>
        <div>
          <p className="font-display text-xl text-primary">{SITE.founder}</p>
          <p className="text-sm text-muted-foreground">
            Arquiteta de Interiores · Atendimento 100% remoto para todo o mundo
          </p>
        </div>
      </aside>

      <div className="mt-10 rounded-2xl bg-primary p-8 text-center text-primary-foreground">
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
