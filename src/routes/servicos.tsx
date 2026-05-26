import { createFileRoute } from "@tanstack/react-router";
import { Pencil, Video, Hammer, ClipboardList, Check, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const SERVICES = [
  {
    icon: Pencil,
    title: "Projeto Completo de Interiores",
    desc: "O escopo mais completo. Do moodboard à prancha executiva, com tudo que sua equipe de obra precisa para executar com clareza.",
    inclusos: [
      "Briefing e levantamento remoto",
      "Estudo de layout e ergonomia",
      "Render 3D realista de cada ambiente",
      "Planta de marcenaria, elétrica e hidráulica",
      "Especificação de materiais e mobiliário com links",
      "Caderno de detalhes para a obra",
    ],
  },
  {
    icon: Video,
    title: "Consultoria Online de Decoração",
    desc: "Para quem precisa de orientação pontual sobre cores, móveis, iluminação ou disposição do que já tem.",
    inclusos: [
      "Sessão por videochamada de até 90 minutos",
      "Análise de fotos e plantas enviadas previamente",
      "Lista de recomendações por escrito",
      "Sugestões de fornecedores e produtos",
    ],
  },
  {
    icon: Hammer,
    title: "Projeto de Reforma",
    desc: "Planejamento completo de reformas residenciais com foco em funcionalidade e estética, entregue remotamente.",
    inclusos: [
      "Análise técnica do espaço atual",
      "Novo layout com fluxo otimizado",
      "Especificação de revestimentos e acabamentos",
      "Plantas executivas para a equipe de obra",
      "Suporte por mensagem durante a execução",
    ],
  },
  {
    icon: ClipboardList,
    title: "Assessoria em Orçamentos",
    desc: "Auxílio na comparação e negociação de orçamentos com fornecedores e lojas, sem você sair de casa.",
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
          "Projeto completo de interiores, consultoria online, projeto de reforma e assessoria em orçamentos. Atendimento 100% remoto para todo o Brasil.",
      },
      { property: "og:title", content: "Serviços de Arquitetura de Interiores Online" },
      {
        property: "og:description",
        content:
          "Quatro formas de cuidar do seu espaço com a Archiodini Projetos.",
      },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
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
            provider: { "@type": "Organization", name: "Archiodini Projetos" },
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
          Quatro formas de cuidar do seu espaço.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-foreground/75">
          Cada serviço é entregue digitalmente, com contrato e cronograma. Você escolhe o escopo
          ideal para o seu momento — e tem suporte humano em cada etapa.
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
