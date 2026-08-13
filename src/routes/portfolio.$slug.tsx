import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Fragment, useEffect, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { getProject, getProjectImages } from "@/lib/portfolio";
import { WHATSAPP_URL, SITE, absUrl } from "@/lib/site";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

/** Turns **destaque** into bold primary-colored text. */
function highlightText(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-primary">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const project = loaderData?.project;
    if (!project) {
      return { meta: [{ title: `Projeto não encontrado | ${SITE.name}` }] };
    }
    const pageUrl = absUrl(`/portfolio/${params.slug}`);
    const description = `Projeto ${project.title} — ${
      project.category === "residencial" ? "residencial" : "comercial"
    } de interiores por ${SITE.founder}.`;
    return {
      meta: [
        { title: `${project.title} | Portfólio | ${SITE.name}` },
        { name: "description", content: description },
        { property: "og:title", content: project.title },
        { property: "og:description", content: description },
        { property: "og:url", content: pageUrl },
        { property: "og:image", content: absUrl(project.image) },
      ],
      links: [{ rel: "canonical", href: pageUrl }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-32 text-center">
      <h1 className="font-display text-4xl text-primary">Projeto não encontrado</h1>
      <Link to="/portfolio" className="mt-6 inline-block text-primary underline">
        Voltar ao portfólio
      </Link>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const images = getProjectImages(project);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const open = activeIndex !== null;

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, images.length]);

  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
      <Link
        to="/portfolio"
        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe text-primary/70 hover:text-primary"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Voltar ao portfólio
      </Link>

      <header className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-luxe text-primary/70">
            {project.category === "residencial" ? "Residencial" : "Comercial"}
            {project.room ? ` · ${project.room}` : ""}
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-primary sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-[12px] uppercase tracking-luxe text-primary-foreground transition-opacity hover:opacity-90"
        >
          Quero orçar meu projeto também <ArrowUpRight className="h-4 w-4" />
        </a>
      </header>

      <p className="mt-10 text-sm text-foreground/60">
        Toque em uma foto para ver em tamanho maior, sem cortes.
      </p>

      {project.galleryLayout === "side-tall" && images.length >= 5 ? (
        <>
          {/* 4 horizontals stacked left + 1 tall vertical right */}
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 md:items-stretch">
            <div className="flex flex-col gap-5">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={`${project.slug}-${i}`}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className="group block w-full overflow-hidden rounded-2xl bg-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <img
                    src={images[i]}
                    alt={`${project.title} — vista ${i + 1}`}
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setActiveIndex(4)}
              className="group relative block min-h-[280px] w-full overflow-hidden rounded-2xl bg-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 md:min-h-0"
            >
              <img
                src={images[4]}
                alt={`${project.title} — vista 5`}
                loading="eager"
                decoding="async"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.015] md:absolute md:inset-0 md:h-full md:object-cover md:object-center"
              />
            </button>
          </div>
          {images.length > 5 && (
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {images.slice(5).map((src, offset) => {
                const i = offset + 5;
                return (
                  <button
                    key={`${project.slug}-${i}`}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className="group block w-full overflow-hidden rounded-2xl bg-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  >
                    <img
                      src={src}
                      alt={`${project.title} — vista ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.015]"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <button
              key={`${project.slug}-${i}`}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="group block w-full overflow-hidden rounded-2xl bg-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <img
                src={src}
                alt={`${project.title} — vista ${i + 1}`}
                loading={i < 3 ? "eager" : "lazy"}
                decoding="async"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.015]"
              />
            </button>
          ))}
        </div>
      )}

      {project.story && project.story.length > 0 && (
        <div className="mt-14 grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-foreground/75 sm:text-[17px]">
            {project.story.map((paragraph, i) => (
              <p key={i}>{highlightText(paragraph)}</p>
            ))}
          </div>
          <div className="flex flex-col gap-5 md:sticky md:top-24">
            {(project.storyImages?.length ? project.storyImages : [project.image]).map(
              (src, i) => (
                <div key={`story-aside-${i}`} className="overflow-hidden rounded-2xl bg-card">
                  <img
                    src={src}
                    alt={`${project.title} — detalhe ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      )}

      <div className="mt-14 flex justify-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[12px] uppercase tracking-luxe text-primary-foreground transition-opacity hover:opacity-90"
        >
          Quero orçar meu projeto também <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <Dialog
        open={open}
        onOpenChange={(next) => {
          if (!next) setActiveIndex(null);
        }}
      >
        <DialogContent
          className="max-h-[95vh] w-[min(96vw,1100px)] max-w-none border-0 bg-transparent p-0 shadow-none sm:rounded-2xl [&>button]:hidden"
        >
          <DialogTitle className="sr-only">
            {project.title} — foto {(activeIndex ?? 0) + 1} de {images.length}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Visualização ampliada da foto do projeto, sem cortes.
          </DialogDescription>

          <div className="relative flex items-center justify-center">
            {activeIndex !== null && (
              <img
                src={images[activeIndex]}
                alt={`${project.title} — vista ${activeIndex + 1}`}
                className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain"
              />
            )}

            <DialogClose className="absolute right-2 top-2 rounded-full bg-background/90 p-2 text-primary shadow-sm backdrop-blur-sm hover:bg-background">
              <X className="h-4 w-4" />
              <span className="sr-only">Fechar</span>
            </DialogClose>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length))
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 text-primary shadow-sm backdrop-blur-sm hover:bg-background"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((i) => (i === null ? 0 : (i + 1) % images.length))
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 text-primary shadow-sm backdrop-blur-sm hover:bg-background"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {activeIndex !== null && (
            <p className="mt-3 text-center text-[11px] uppercase tracking-luxe text-primary-foreground/90">
              {activeIndex + 1} / {images.length}
            </p>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
