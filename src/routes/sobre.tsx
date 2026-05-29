import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import luana from "@/assets/luana-retrato.png";
import { WHATSAPP_URL, SITE } from "@/lib/site";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
  head: () => ({
    meta: [
      { title: "Sobre Luana Chiodini — Arquiteta de Interiores | Archiodini" },
      {
        name: "description",
        content:
          "Conheça Luana Chiodini, arquiteta e designer de interiores baseada em Blumenau (SC) com atendimento 100% remoto para todo o Brasil.",
      },
      { property: "og:title", content: "Sobre Luana Chiodini — Arquiteta de Interiores" },
      {
        property: "og:description",
        content: "Trajetória, método de trabalho e propósito por trás da Archiodini Projetos.",
      },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Luana Chiodini",
          jobTitle: "Arquiteta e Designer de Interiores",
          worksFor: { "@type": "Organization", name: "Archiodini Projetos" },
          address: {
            "@type": "PostalAddress",
            addressLocality: SITE.city,
            addressRegion: SITE.region,
            addressCountry: SITE.country,
          },
          sameAs: [SITE.instagram, SITE.facebook, SITE.youtube],
        }),
      },
    ],
  }),
});

function SobrePage() {
  return (
    <article className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
      <div className="grid gap-14 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <div className="aspect-[4/5] w-full bg-primary/10">
            <div className="clip-arch h-full w-full">
              <img
                src={luana}
                alt="Luana Chiodini, arquiteta e designer de interiores"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <p className="text-[11px] uppercase tracking-luxe text-primary/70">Sobre</p>
          <h1 className="mt-4 font-display text-5xl leading-tight text-primary sm:text-6xl">
            Luana Chiodini
          </h1>
          <p className="mt-3 text-sm uppercase tracking-luxe text-muted-foreground">
            Arquiteta e Designer de Interiores · Blumenau, SC
          </p>

          <div className="prose-archiodini mt-10 max-w-xl">
            <p>
              Sou Luana Chiodini, arquiteta apaixonada por criar ambientes que contam histórias.
              Desde os primeiros projetos, percebi que o meu trabalho não é decorar — é traduzir em
              forma, luz e textura o jeito como cada cliente quer viver.
            </p>
            <p>
              Atendo <strong>100% de forma remota</strong> para todo o Brasil — de São Paulo a
              Florianópolis, de Brasília ao interior do país. Esse modelo me permite estar perto de
              quem normalmente não teria acesso a um projeto detalhado, sem abrir mão de nenhuma
              etapa técnica.
            </p>

            <h2>Como eu trabalho</h2>
            <p>
              Cada projeto começa com uma conversa longa — sobre rotina, gostos, frustrações e
              orçamento. Depois venho com referências, paleta de materiais e render 3D, ajustando
              até estar 100% alinhado com a sua identidade. A entrega final é um pacote digital
              completo, pronto para qualquer equipe de obra executar na sua cidade.
            </p>

            <h2>Onde já atendi</h2>
            <p>
              Blumenau, Florianópolis, Joinville, Curitiba, São Paulo, Rio de Janeiro, Brasília,
              Belo Horizonte e várias cidades do interior. Onde tem internet, tem projeto.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[12px] uppercase tracking-luxe text-primary-foreground hover:opacity-90"
            >
              Conversar comigo <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-[12px] uppercase tracking-luxe text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Ver portfólio
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
