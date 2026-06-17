import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, Youtube, Facebook, MapPin, Clock } from "lucide-react";
import { SITE, WHATSAPP_URL, absUrl } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
  head: () => ({
    meta: [
      { title: `Contato — Fale com Luana Chiodini | ${SITE.name}` },
      {
        name: "description",
        content:
          "Fale com Luana Chiodini no WhatsApp e comece seu projeto de interiores online. Atendimento remoto para todo o mundo.",
      },
      { property: "og:title", content: `Contato — ${SITE.name}` },
      {
        property: "og:description",
        content: "Atendimento remoto para todo o mundo. Vamos conversar?",
      },
      { property: "og:url", content: absUrl("/contato") },
    ],
    links: [{ rel: "canonical", href: absUrl("/contato") }],
  }),
});

function ContatoPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
      <p className="text-[11px] uppercase tracking-luxe text-primary/70">Contato</p>
      <h1 className="mt-4 font-display text-5xl leading-tight text-primary sm:text-6xl">
        Vamos conversar sobre o seu projeto.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/75">
        A forma mais rápida de começar é pelo WhatsApp. Me conta o que você tem em mente — pode
        ser uma reforma completa, um ambiente só ou só uma ideia ainda no início.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-2xl border border-primary/15 bg-primary p-7 text-primary-foreground transition-opacity hover:opacity-90"
        >
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-primary-foreground/70">
              Resposta em horas
            </p>
            <p className="mt-2 font-display text-2xl">WhatsApp</p>
            <p className="mt-1 text-sm text-primary-foreground/85">+55 47 99161-9082</p>
          </div>
          <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
        </a>

        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-2xl border border-primary/15 bg-card p-7 transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-primary/70 group-hover:text-primary-foreground/70">
              Bastidores e projetos
            </p>
            <p className="mt-2 font-display text-2xl text-primary group-hover:text-primary-foreground">
              Instagram
            </p>
            <p className="mt-1 text-sm text-foreground/70 group-hover:text-primary-foreground/85">
              @{SITE.instagramHandle}
            </p>
          </div>
          <Instagram className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
        </a>

        <a
          href={SITE.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-2xl border border-primary/15 bg-card p-7 transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-primary/70 group-hover:text-primary-foreground/70">
              Vídeos de projetos
            </p>
            <p className="mt-2 font-display text-2xl text-primary group-hover:text-primary-foreground">
              YouTube
            </p>
            <p className="mt-1 text-sm text-foreground/70 group-hover:text-primary-foreground/85">
              @archiodiniprojetos
            </p>
          </div>
          <Youtube className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
        </a>

        <a
          href={SITE.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-2xl border border-primary/15 bg-card p-7 transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-primary/70 group-hover:text-primary-foreground/70">
              Página oficial
            </p>
            <p className="mt-2 font-display text-2xl text-primary group-hover:text-primary-foreground">
              Facebook
            </p>
            <p className="mt-1 text-sm text-foreground/70 group-hover:text-primary-foreground/85">
              {SITE.name}
            </p>
          </div>
          <Facebook className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
        </a>
      </div>

      <div className="mt-12 grid gap-6 rounded-2xl border border-primary/15 bg-card p-7 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <MapPin className="mt-1 h-5 w-5 text-primary" />
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-primary/70">Base</p>
            <p className="mt-1 text-sm text-foreground/85">
              Blumenau, SC — atendimento remoto para todo o mundo
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="mt-1 h-5 w-5 text-primary" />
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-primary/70">Horário</p>
            <p className="mt-1 text-sm text-foreground/85">Segunda a sexta · 9h às 18h</p>
          </div>
        </div>
      </div>
    </section>
  );
}
