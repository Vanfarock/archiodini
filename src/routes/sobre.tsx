import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import luana from "@/assets/luana-retrato.png";
import { WHATSAPP_URL, SITE, absUrl } from "@/lib/site";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
  head: () => ({
    meta: [
      { title: "Sobre Luana Chiodini — Arquiteta de Interiores | Archiodini" },
      {
        name: "description",
        content:
          "Conheça Luana Chiodini, arquiteta de interiores baseada em Blumenau (SC) com atendimento 100% remoto para todo o mundo.",
      },
      { property: "og:title", content: "Sobre Luana Chiodini — Arquiteta de Interiores" },
      {
        property: "og:description",
        content: `Trajetória, método de trabalho e propósito por trás da ${SITE.name}.`,
      },
      { property: "og:url", content: absUrl("/sobre") },
    ],
    links: [{ rel: "canonical", href: absUrl("/sobre") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Luana Chiodini",
          jobTitle: "Arquiteta de Interiores",
          worksFor: { "@type": "Organization", name: SITE.name },
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
        <div className="relative md:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="clip-arch h-full w-full">
              <img
                src={luana}
                alt="Luana Chiodini, arquiteta de interiores"
                className="h-full w-full object-cover object-[center_10%]"
              />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -right-4 size-28 rounded-full bg-primary/15 -z-index-1"
          />
        </div>

        <div className="md:col-span-7">
          <p className="text-[11px] uppercase tracking-luxe text-primary/70">Sobre</p>
          <h1 className="mt-4 font-display text-5xl leading-tight text-primary sm:text-6xl">
            Luana Chiodini
          </h1>
          <p className="mt-3 text-sm uppercase tracking-luxe text-muted-foreground">
            Arquiteta de Interiores · Blumenau, SC
          </p>

          <div className="prose-archiodini mt-10 max-w-xl">
            <p>
              Me chamo Luana Chiodini, arquiteta apaixonada por criar ambientes que contam
              histórias. Desde os primeiros projetos, os clientes comentavam como se sentiam
              ouvidos, como se eu traduzisse o gosto deles para dentro do lar e saísse direto dos
              sonhos deles! Foi assim que comecei e continuo até hoje: com o objetivo de traduzir
              sua personalidade para o seu ambiente, sempre de uma forma que funcione dentro da sua
              rotina.
            </p>
            <p>
              Atendo de forma online para todo o Brasil e mundo afora também. Esse modelo me
              permite estar perto de você que mora em outro estado, ou até mesmo que mora fora do
              Brasil, mas quer uma arquiteta brasileira! Isso tudo sem abrir mão de nenhuma etapa
              técnica e com você por dentro de todas decisões importantes da sua casa.
            </p>

            <h2>Como eu trabalho</h2>
            <p>
              Cada projeto começa com um questionário que fazemos para você responder no conforto da
              sua casa (sobre o que você quer para os espaços do lar, como funciona sua rotina,
              desejos e frustrações hoje). Depois fazemos algumas opções de disposição de mobiliário
              dentro do espaço que você tem. Após isso, começamos com referências, paleta de cores e
              de materiais e imagens realistas 3D, ajustando até estar 100% alinhado com a sua
              identidade. A entrega final é um pdf digital completo, pronto para qualquer equipe de
              obra executar na sua cidade.
            </p>

            <h2>Onde já atendi</h2>
            <p>
              Blumenau, Indaial, Gaspar, Pomerode, Navegantes, Curitiba, São Paulo, Rio de Janeiro,
              Belo Horizonte, Uberlândia e outras cidades.
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
