import { createFileRoute } from "@tanstack/react-router";
import { Home, Hammer, Headphones, Check, ArrowRight } from "lucide-react";
import { WHATSAPP_URL, SITE, absUrl } from "@/lib/site";

type ServiceItem = string | { text: string; starred?: boolean };

const SERVICES = [
  {
    icon: Home,
    title: "Projeto completo de interiores",
    desc: "Do questionário à entrega final, tudo que você precisa para executar seu lar com segurança.",
    inclusos: [
      "Questionário e levantamento de medidas remoto",
      "Estudo de Layout (disposição de mobiliários)",
      "Imagens Realistas de todos os ambientes",
      "Projeto Executivo de marcenaria, marmoraria, estofaria, vidraçaria, pintura e papel de parede, revestimentos, etc",
      "Relação de Louças e Metais (tabela de compras)",
      "Projeto de Obra: Orientações para o pedreiro, eletricista, gesseiro e pintor",
      "Especificação e sugestão de materiais",
      "Caderno técnico de detalhes de projeto",
    ] satisfies ServiceItem[],
    obs: "Fazemos até 3 opções de pacotes de projeto para você contratar somente o que você precisa e faz sentido para sua realidade hoje! Se quiser saber mais e tiver alguma dúvida, me chama.",
  },
  {
    icon: Hammer,
    title: "Projeto de reforma",
    desc: "Para quem quer integrar ambientes, mudar layout ou reformar com orientação técnica completa.",
    inclusos: [
      "Análise técnica do espaço atual",
      "Planta Baixa Layout: opções de disposição de mobiliários",
      "Especificação e sugestão de revestimentos",
      "Projeto Luminotécnico",
      "Projeto Elétrico (novos pontos de tomada ou de luz)",
      "Projeto de Gesso",
      "Projeto de Paginação de Piso",
      "Projeto de obra (demolir e construir paredes, para integrar ou separar ambientes)",
    ] satisfies ServiceItem[],
  },
  {
    icon: Headphones,
    title: "Assessoria remota",
    desc: "Apoio técnico pontual para orçamentos, materiais e dúvidas durante a execução do seu projeto.",
    inclusos: [
      "Ajuda para fazer orçamentos (marcenaria, marmoraria, etc)",
      "Análise técnica dos orçamentos recebidos",
      "Recomendação técnica de escolha de materiais e fornecedores",
      "Assessoria das suas dúvidas por mensagem",
      "Assessoria de dúvidas dos fornecedores na execução do projeto",
      "Ajuda na escolha da iluminação e decoração que combina melhor no seu lar",
    ] satisfies ServiceItem[],
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
          "Projeto completo de interiores, projeto de reforma e assessoria remota. Atendimento online para todo o Brasil e exterior.",
      },
      { property: "og:title", content: "Serviços de Arquitetura de Interiores Online" },
      {
        property: "og:description",
        content: `Como podemos ajudar você? Conheça os serviços da ${SITE.name}.`,
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

function serviceItemText(item: ServiceItem): string {
  return typeof item === "string" ? item : item.text;
}

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
                  {s.inclusos.map((it) => {
                    const starred = typeof it !== "string" && it.starred;
                    return (
                      <li
                        key={serviceItemText(it)}
                        className="flex items-start gap-3 text-[15px] text-foreground/85"
                      >
                        {starred ? (
                          <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">
                            *
                          </span>
                        ) : (
                          <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        )}
                        <span>{serviceItemText(it)}</span>
                      </li>
                    );
                  })}
                </ul>
                {"obs" in s && s.obs ? (
                  <p className="mt-6 rounded-2xl border border-primary/15 bg-primary/5 px-5 py-4 text-[15px] leading-relaxed text-foreground/80">
                    {s.obs}
                  </p>
                ) : null}
              </div>
            </section>
          );
        })}
      </div>
    </article>
  );
}
