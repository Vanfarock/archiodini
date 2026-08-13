import { marked } from "marked";
import { parse as parseYaml } from "yaml";

import cozinha from "@/assets/projeto-cozinha.png";
import living from "@/assets/portfolio-living.png";
import familia_11 from "@/assets/portfolio-apartamento-familia-11.png";
import familia_26 from "@/assets/portfolio-apartamento-familia-26.png";
import familia_27 from "@/assets/portfolio-apartamento-familia-27.png";
import japones from "@/assets/portfolio-apartamento-japones-cover.png";
import japones_varanda from "@/assets/portfolio-apartamento-japones-25.png";
import japones_quarto from "@/assets/portfolio-apartamento-japones-18.png";
import japones_mesa from "@/assets/portfolio-apartamento-japones-12.png";
import refugio from "@/assets/portfolio-cozinha2.jpg";
import refugio_sala from "@/assets/portfolio-apartamento-refugio-06.png";
import boho from "@/assets/portfolio-cozinha3.jpg";
import boho_sala from "@/assets/portfolio-apartamento-boho-01.png";
import sala_vinilico from "@/assets/portfolio-sala-cozinha-vinilico-cover.png";
import sala_vinilico_2 from "@/assets/portfolio-sala-cozinha-vinilico-01.png";
import lavabo from "@/assets/portfolio-lavabo-ipanema-cover.png";
import lavabo_2 from "@/assets/portfolio-lavabo-ipanema-01.png";
import lavabo_3 from "@/assets/portfolio-lavabo-ipanema-02.png";
import cozinha_ilha from "@/assets/portfolio-cozinha-ilha-cover.png";
import cozinha_atemporal from "@/assets/portfolio-cozinha1.jpg";
import sobrado from "@/assets/portfolio-sobrado-aconchegante-cover.png";
import sobrado_sala from "@/assets/portfolio-sobrado-aconchegante-04.png";
import quarto_bebe from "@/assets/portfolio-quarto-bebe.jpg";
import quarto_bebe_2 from "@/assets/portfolio-quarto-bebe-01.png";
import advocacia from "@/assets/portfolio-sala-advocacia.jpg";
import reuniao from "@/assets/portfolio-sala-reuniao.png";
import recepcao from "@/assets/portfolio-recepcao-cover.png";

export interface BlogFAQ {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  updatedAt: string;
  readingMinutes: number;
  cover: string;
  /** Extra project photos shown inside the article page. */
  images: string[];
  tags: string[];
  /** Array of HTML blocks (paragraphs, headings) rendered with prose-archiodini */
  body: string;
  faq: BlogFAQ[];
}

interface BlogPostFrontmatter {
  slug?: string;
  title?: string;
  excerpt?: string;
  category?: string;
  date?: string;
  updatedAt?: string;
  readingMinutes?: number;
  cover?: string;
  images?: string[];
  tags?: string[];
  faq?: BlogFAQ[];
}

/** Named photos from the portfolio, reused as blog covers and article images. */
const media: Record<string, string> = {
  cozinha,
  living,
  familia_11,
  familia_26,
  familia_27,
  japones,
  japones_varanda,
  japones_quarto,
  japones_mesa,
  refugio,
  refugio_sala,
  boho,
  boho_sala,
  sala_vinilico,
  sala_vinilico_2,
  lavabo,
  lavabo_2,
  lavabo_3,
  cozinha_ilha,
  cozinha_atemporal,
  sobrado,
  sobrado_sala,
  quarto_bebe,
  quarto_bebe_2,
  advocacia,
  reuniao,
  recepcao,
};

const postModules = import.meta.glob<string>("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const posts: BlogPost[] = Object.entries(postModules).map(([path, raw]) => {
  const { metadata, content } = parsePost(raw);
  const slug = metadata.slug ?? path.split("/").pop()?.replace(/\.md$/, "") ?? "";
  const title = metadata.title ?? titleFromSlug(slug);
  const plainText = stripMarkdown(content);
  const date = metadata.date ?? new Date().toISOString().slice(0, 10);
  const coverKey = metadata.cover ?? "cozinha";
  const imageKeys = Array.isArray(metadata.images) ? metadata.images : [];

  return {
    slug,
    title,
    excerpt: metadata.excerpt ?? plainText.slice(0, 160),
    category: metadata.category ?? "Blog",
    date,
    updatedAt: metadata.updatedAt ?? date,
    readingMinutes: metadata.readingMinutes ?? estimateReadingMinutes(plainText),
    cover: media[coverKey] ?? cozinha,
    images: imageKeys.map((key) => media[key]).filter(Boolean),
    tags: Array.isArray(metadata.tags) ? metadata.tags : [],
    body: stripDuplicateTitle(marked.parse(content, { async: false }) as string, title),
    faq: Array.isArray(metadata.faq) ? metadata.faq : [],
  };
});

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDatePt(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

function estimateReadingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function parsePost(raw: string): { metadata: BlogPostFrontmatter; content: string } {
  if (!raw.startsWith("---")) {
    return { metadata: {}, content: raw.trim() };
  }

  const closingFence = raw.indexOf("\n---", 3);
  if (closingFence === -1) {
    return { metadata: {}, content: raw.trim() };
  }

  const frontmatter = raw.slice(3, closingFence).replace(/\r/g, "");
  const metadata = parseYaml(frontmatter) as BlogPostFrontmatter | null;
  const content = raw.slice(closingFence + "\n---".length).trim();
  return { metadata: metadata ?? {}, content };
}

function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/[#>*_~-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function stripDuplicateTitle(html: string, title: string): string {
  const normalizedTitle = title.trim().toLowerCase();
  return html.replace(/^<h1[^>]*>([\s\S]*?)<\/h1>\s*/i, (match, heading: string) => {
    const text = heading.replace(/<[^>]+>/g, "").trim().toLowerCase();
    return text === normalizedTitle ? "" : match;
  });
}

function titleFromSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
