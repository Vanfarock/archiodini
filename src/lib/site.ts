export const SITE = {
  name: "Archiodini Projetos",
  tagline: "arquitetura de interiores",
  founder: "Luana Chiodini",
  city: "Blumenau",
  region: "SC",
  country: "BR",
  email: "contato@archiodini.com.br",
  whatsappNumber: "5547991619082",
  instagram: "https://www.instagram.com/luanachiodini.arq/",
  instagramHandle: "luanachiodini.arq",
  facebook: "https://www.facebook.com/people/Archiodini-Projetos/61573096983076/?locale=pt_BR",
  youtube: "https://www.youtube.com/@archiodiniprojetos",
};

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  "Olá Luana! Vim pelo site e gostaria de conversar sobre um projeto.",
)}`;

export const NAV_LINKS = [
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Contato" },
] as const;
