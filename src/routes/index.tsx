import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Home,
  Flower,
  Store,
  ClipboardList,
  Quote,
  Plus,
  Minus,
} from "lucide-react";

import cozinha from "@/assets/projeto-cozinha.png";
import luana from "@/assets/luana-retrato.png";
import { Arch } from "@/components/Arch";
import { PROJECTS, PORTFOLIO_FILTERS } from "@/lib/portfolio";
import { TESTIMONIALS } from "@/lib/testimonials";
import { getAllPosts, formatDatePt } from "@/lib/blog";
import { WHATSAPP_URL } from "@/lib/site";

const FAQ_ITEMS = [
  {
    q: "Como funciona um projeto de interiores online?",
    a: "Todo o processo acontece de forma remota: reunião inicial por vídeo, envio de plantas e fotos, desenvolvimento do projeto e entrega digital completa, com plantas técnicas, render 3D e lista de compras.",
  },
  {
    q: "Vocês atendem na minha cidade?",
    a: "Sim! Atendemos 100% de forma remota para todo o mundo.",
  },
  {
    q: "Quanto tempo antes devo contratar um projeto de interiores?",
    a: "O ideal é contratar o projeto no mínimo 4 meses antes da obra começar. Isso permite que você aproveite o projeto para fazer melhores escolhas de materiais e móveis, além de ter mais tempo para pensar em detalhes que podem impactar a execução da obra.",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Arquitetura de Interiores | Luana Chiodini",
      },
      {
        name: "description",
        content:
          "Luana Chiodini, arquiteta de interiores 100% remota. Projetos residenciais completos, consultoria online e assessoria em reformas para todo o Brasil. Fale agora no WhatsApp.",
      },
      {
        property: "og:title",
        content: "Arquitetura de Interiores | Luana Chiodini",
      },
      {
        property: "og:description",
        content:
          "Projetos residenciais e comerciais 100% remotos, do conceito à execução. Atendemos todo o Brasil.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: cozinha },
      { name: "twitter:image", content: cozinha },
      {
        name: "keywords",
        content:
          "arquiteta de interiores online brasil, projeto de interiores remoto, Luana Chiodini, Archiodini Projetos, arquiteta remota brasil, design de interiores online",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <Sobre />
      <Servicos />
      <Portfolio />
      <Depoimentos />
      <BlogPreview />
      <FAQ />
      <CTAFinal />
    </>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pt-12 pb-16 sm:px-8 md:grid-cols-12 md:gap-10 md:pt-20 md:pb-28">
        <div className="reveal md:col-span-6">
          <p className="text-[11px] uppercase tracking-luxe text-primary/70">
            Arquitetura · Interiores · Remoto
          </p>
          <h1 className="mt-5 font-display text-[42px] leading-[1.05] text-primary sm:text-[56px] lg:text-[68px]">
            Arquitetura de Interiores
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg">
            Projetos funcionais que traduzem a sua personalidade.
          </p>

          <div className="relative mt-10 flex flex-wrap items-center gap-5">
            <div
              className="pointer-events-none absolute top-1/2 left-0 z-0 size-[7.5rem] -translate-x-1/2 -translate-y-1/4 rounded-full bg-primary/10 sm:size-32 md:size-36"
              aria-hidden
            />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative z-10 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-[12px] uppercase tracking-luxe text-primary-foreground transition-opacity hover:opacity-90"
            >
              Quero meu projeto
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="relative z-10 text-[12px] uppercase tracking-luxe text-primary/80 underline-offset-8 hover:underline"
            >
              Ver portfólio ↓
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-2 relative md:col-span-6">
          <Arch
            className="absolute -top-10 -left-6 h-44 w-32 text-primary/15 md:-top-16 md:-left-10 md:h-56 md:w-40"
            fill="currentColor"
          />
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(60,65,40,0.35)]">
            <img
              src={cozinha}
              alt="Projeto de cozinha gourmet assinado por Luana Chiodini, com ilha de mármore, marcenaria em madeira ripada e armários verde oliva"
              width={1200}
              height={750}
              className="h-[460px] w-full object-cover sm:h-[560px]"
            />
          </div>
          <div className="absolute -bottom-6 left-6 hidden rounded-full bg-background px-5 py-3 text-[11px] uppercase tracking-luxe text-primary shadow-md ring-1 ring-primary/10 sm:block">
            Projeto residencial
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SOBRE ---------------- */

function Sobre() {
  return (
    <section id="sobre" className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 md:grid-cols-12 md:gap-16 md:py-28">
        <div className="relative md:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="clip-arch h-full w-full">
              <img
                src={luana}
                alt="Retrato de Luana Chiodini, arquiteta e designer de interiores"
                className="h-full w-full object-cover object-[center_10%]"
                loading="lazy"
              />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -right-4 size-28 rounded-full bg-primary/15 -z-index-1"
          />
        </div>

        <div className="md:col-span-7">
          <p className="text-[11px] uppercase tracking-luxe text-primary/70">Sobre a Luana</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl">
            Ambientes que contam a sua história.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-foreground/80">
            <p>
              Nossa missão é criar lares com a personalidade dos nossos clientes e por meio de
              detalhes, contar sua história dentro do projeto. Nosso objetivo é criar ambientes
              atemporais e com significado.
            </p>
            <p>
              Para nós cada espaço influencia diretamente na qualidade de vida, por isso nossos
              projetos respeitam o seu estilo e necessidades. Mais do que estética, buscamos o
              bem-estar e a praticidade para seu dia a dia.
            </p>
            <p className="pt-2">
              Atenciosamente,
              <br />
              <span className="mt-2 block font-display text-sm uppercase tracking-luxe text-primary">
                Luana Chiodini
              </span>
            </p>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            {[
              { n: "150+", l: "Projetos entregues" },
              { n: "100%", l: "Atendimento remoto" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-primary/15 bg-background p-5 text-center"
              >
                <dt className="font-display text-3xl text-primary">{s.n}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-luxe text-muted-foreground">
                  {s.l}
                </dd>
              </div>
            ))}
            <div className="flex items-center justify-center rounded-2xl border border-primary/15 bg-background p-5 text-center">
              <dd className="mt-1 text-[11px] uppercase tracking-luxe text-muted-foreground">
                De Blumenau para o mundo
              </dd>
            </div>
          </dl>

          <div className="mt-10">
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-luxe text-primary hover:opacity-80"
            >
              Nosso propósito <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVIÇOS ---------------- */

const SERVICES = [
  {
    icon: Home,
    title: "Projeto de Interiores Residencial",
    desc: "Ambientes pensados para refletir seu estilo e tornar sua rotina mais leve.",
  },
  {
    icon: Flower,
    title: "Assessoria de Decoração",
    desc: "Ajuda personalizada para escolher móveis, cores e detalhes que combinam com você.",
  },
  {
    icon: Store,
    title: "Projeto de Interiores Comercial",
    desc: "Espaços funcionais e acolhedores que fortalecem a identidade do seu negócio.",
  },
  {
    icon: ClipboardList,
    title: "Assessoria em Orçamentos",
    desc: "Menos dúvidas na hora de comprar, mais tranquilidade para investir no seu espaço.",
  },
];

function Servicos() {
  return (
    <section id="servicos" className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <header className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-luxe text-primary/70">Serviços</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl">
            Como podemos ajudar você?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Cada serviço é entregue digitalmente, com cronograma e contrato. Você escolhe o escopo
            que faz sentido para o seu momento.
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-card p-8 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-7 w-7 stroke-[1.25] text-primary transition-colors group-hover:text-primary-foreground" />
                <h3 className="mt-6 font-display text-2xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75 transition-colors group-hover:text-primary-foreground/85">
                  {s.desc}
                </p>
                <Link
                  to="/servicos"
                  className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe"
                >
                  Saiba mais <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO ---------------- */

function Portfolio() {
  const [filter, setFilter] = useState<(typeof PORTFOLIO_FILTERS)[number]["value"]>("todos");
  const items = useMemo(
    () => (filter === "todos" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="portfolio" className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-primary/70">Portfólio</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl">
              Projetos que falam por si.
            </h2>
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
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] md:grid-cols-3 md:gap-5">
          {items.map((p, i) => (
            <a
              key={p.slug}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl ${
                p.span === "wide" ? "md:col-span-2" : p.span === "tall" ? "row-span-2" : ""
              }`}
            >
              <img
                src={p.image}
                alt={`${p.title} — projeto de interiores em ${p.city}`}
                loading={i < 2 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-display text-xl leading-tight">{p.title}</p>
                <p className="mt-1 text-[11px] uppercase tracking-luxe text-primary-foreground/85">
                  {p.room} · {p.city}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-luxe">
                  Quero um projeto assim <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
              <div className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-[10px] uppercase tracking-luxe text-primary backdrop-blur-sm">
                {p.category === "residencial" ? "Residencial" : "Comercial"}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-[12px] uppercase tracking-luxe text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Ver mais projetos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DEPOIMENTOS ---------------- */

function Depoimentos() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <p className="text-[11px] uppercase tracking-luxe text-primary/70">Depoimentos</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-primary sm:text-5xl">
          Relatos de quem confiou.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className={`relative rounded-2xl border border-primary/15 p-7 ${
                i === 1 ? "bg-primary text-primary-foreground" : "bg-card"
              }`}
            >
              <Quote
                className={`h-8 w-8 ${i === 1 ? "text-primary-foreground/60" : "text-primary/40"}`}
                strokeWidth={1.5}
              />
              <blockquote className="mt-5 text-[15px] leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-8 border-t border-current/15 pt-5">
                <p className="font-display text-lg">{t.name}</p>
                <p
                  className={`mt-1 text-[11px] uppercase tracking-luxe ${
                    i === 1 ? "text-primary-foreground/75" : "text-muted-foreground"
                  }`}
                >
                  {t.project}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BLOG PREVIEW ---------------- */

function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);
  return (
    <section className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-primary/70">Conteúdo</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-primary sm:text-5xl">
              Tudo o que você precisa saber antes de decorar ou reformar.
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-[12px] uppercase tracking-luxe text-primary hover:opacity-80"
          >
            Ver todos os artigos →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
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
                  {p.category} · {formatDatePt(p.date)}
                </p>
                <h3 className="mt-3 font-display text-2xl leading-tight text-primary">{p.title}</h3>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-foreground/75">
                  {p.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-luxe text-primary">
                  Ler mais <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="text-[11px] uppercase tracking-luxe text-primary/70">FAQ</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl">
            Perguntas frequentes.
          </h2>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">
            As dúvidas mais comuns sobre projeto de interiores online. Não encontrou a sua? Me chama
            no{" "}
            <a
              href={WHATSAPP_URL}
              className="text-primary font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            .
          </p>
        </div>

        <ul className="md:col-span-7">
          {FAQ_ITEMS.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="border-b border-primary/15 py-5">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xl leading-snug text-primary">{f.q}</span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-primary" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-primary" />
                  )}
                </button>
                {isOpen && (
                  <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-foreground/80">
                    {f.a}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- CTA FINAL ---------------- */

function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <Arch
        className="absolute -left-10 -top-16 h-72 w-52 text-primary-foreground/8"
        fill="currentColor"
      />
      <Arch
        className="absolute -right-12 -bottom-20 h-72 w-52 rotate-180 text-primary-foreground/8"
        fill="currentColor"
      />
      <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 md:py-32">
        <p className="text-[11px] uppercase tracking-luxe text-primary-foreground/70">
          Vamos começar?
        </p>
        <h2 className="mt-5 font-display text-4xl leading-[1.1] sm:text-6xl">
          Pronto para transformar
          <br />o seu espaço?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-primary-foreground/85">
          Atendo 100% online para todo o mundo. Vamos conversar sobre o seu projeto?
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-background px-8 py-4 text-[12px] uppercase tracking-luxe text-primary transition-transform hover:scale-[1.02]"
        >
          Solicitar orçamento
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
