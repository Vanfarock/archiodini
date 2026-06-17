import { marked } from "marked";
import { parse as parseYaml } from "yaml";
import cozinha from "@/assets/projeto-cozinha.png";

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
  tags?: string[];
  faq?: BlogFAQ[];
}

const covers: Record<string, string> = {
  cozinha,
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

  return {
    slug,
    title,
    excerpt: metadata.excerpt ?? plainText.slice(0, 160),
    category: metadata.category ?? "Blog",
    date,
    updatedAt: metadata.updatedAt ?? date,
    readingMinutes: metadata.readingMinutes ?? estimateReadingMinutes(plainText),
    cover: covers[metadata.cover ?? "cozinha"] ?? cozinha,
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
