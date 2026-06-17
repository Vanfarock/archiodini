import { createFileRoute } from "@tanstack/react-router";
import { Home, Flower, Store, ClipboardList, Check, ArrowRight } from "lucide-react";
import { WHATSAPP_URL, SITE, absUrl } from "@/lib/site";

const SERVICES = [
  {
    icon: Home,
    title: "Projeto de Interiores Residencial",
    desc: "Ambientes pensados para refletir seu estilo e tornar sua rotina mais leve.",
    inclusos: [
      "Briefing e levantamento de necessidades",
      "Estudo de layout e ergonomia",
      "Projeto de marcenaria sob medida",
      "Especificação de revestimentos, pinturas e acabamentos",
      "Render 3D dos ambientes",
      "Lista de compras com referências de produtos",
    ],
  },
  {
    icon: Flower,
    title: "Assessoria de Decoração",
    desc: "Ajuda personalizada para escolher móveis, cores e detalhes que combinam com você.",
    inclusos: [
      "Paleta de cores e combinações de materiais",
      "Sugestão de móveis, objetos e acessórios",
      "Layout de decoração e posicionamento de peças",
      "Orientação sobre iluminação e têxteis",
      "Recomendações de fornecedores e lojas",
    ],
  },
  {
    icon: Store,
    title: "Projeto de Interiores Comercial",
    desc: "Espaços funcionais e acolhedores que fortalecem a identidade do seu negócio.",
    inclusos: [
      "Análise de fluxo e circulação de clientes",
      "Projeto alinhado à identidade da marca",
      "Especificação de mobiliário e sinalização",
      "Render 3D para validação do conceito",
      "Plantas técnicas para execução da obra",
    ],
  },
  {
    icon: ClipboardList,
    title: "Assessoria em Orçamentos",
    desc: "Menos dúvidas na hora de comprar, mais tranquilidade para investir no seu espaço.",
    inclusos: [
      "Análise crítica dos orçamentos recebidos",
      "Comparativo de itens, prazos e garantias",
      "Recomendação técnica de escolha",
      "Sugestão de fornecedores alternativos",
    ],
  },
];

export const Route = createFileRoute("/servicos")({
  component: ServicosPage,
  head: () => ({
    meta: [
      { title: "Serviços — Projetos de Arquitetura de Interiores Online | Archiodini" },
      {
        name: "description",
        content:
          "Projeto de interiores residencial e comercial, assessoria de decoração e assessoria em orçamentos. Atendimento 100% remoto para todo o mundo.",
      },
      { property: "og:title", content: "Serviços de Arquitetura de Interiores Online" },
      {
        property: "og:description",
        content:
          `Como podemos ajudar você? Conheça os serviços da ${SITE.name}.`,
      },
      { property: "og:url", content: absUrl("/servicos") },
    ],
    links: [{ rel: "canonical", href: absUrl("/servicos") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "Service",
            position: i + 1,
            name: s.title,
            description: s.desc,
            provider: { "@type": "Organization", name: SITE.name },
            areaServed: "BR",
          })),
        }),
      },
    ],
  }),
});

function ServicosPage() {
  return (
    <article className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
      <header className="max-w-3xl">
        <p className="text-[11px] uppercase tracking-luxe text-primary/70">Serviços</p>
        <h1 className="mt-4 font-display text-5xl leading-tight text-primary sm:text-6xl">
          Como podemos ajudar você?
        </h1>
        <p className="mt-6 text-base leading-relaxed text-foreground/75">
          Cada serviço é entregue digitalmente, com cronograma e contrato. Você escolhe o escopo
          que faz sentido para o seu momento.
        </p>
      </header>

      <div className="mt-16 space-y-10">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <section
              key={s.title}
              className="grid items-start gap-8 rounded-3xl border border-primary/15 bg-card p-8 md:grid-cols-12 md:p-12"
            >
              <div className="md:col-span-5">
                <Icon className="h-9 w-9 stroke-[1.25] text-primary" />
                <h2 className="mt-5 font-display text-3xl leading-tight text-primary sm:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-foreground/75">{s.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[12px] uppercase tracking-luxe text-primary-foreground hover:opacity-90"
                >
                  Quero esse serviço <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="md:col-span-7">
                <p className="text-[11px] uppercase tracking-luxe text-primary/70">
                  O que está incluso
                </p>
                <ul className="mt-5 space-y-3">
                  {s.inclusos.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[15px] text-foreground/85">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
      </div>
    </article>
  );
}
