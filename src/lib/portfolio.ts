import cozinha from "@/assets/projeto-cozinha.png";
import sala from "@/assets/portfolio-sala.jpg";
import quarto from "@/assets/portfolio-quarto.jpg";
import closet from "@/assets/portfolio-closet.jpg";
import homeoffice from "@/assets/portfolio-homeoffice.jpg";
import banheiro from "@/assets/portfolio-banheiro.jpg";
import recepcao from "@/assets/portfolio-recepcao.jpg";
import cafe from "@/assets/portfolio-cafe.jpg";
import escritorio from "@/assets/portfolio-escritorio.jpg";

export type ProjectCategory = "residencial" | "comercial";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  room: string;
  city: string;
  image: string;
  span?: "tall" | "wide";
}

export const PROJECTS: Project[] = [
  {
    slug: "cozinha-gourmet",
    title: "Cozinha Gourmet com Ilha",
    category: "residencial",
    room: "Cozinha",
    city: "Blumenau, SC",
    image: cozinha,
    span: "wide",
  },
  {
    slug: "sala-estar-arcos",
    title: "Sala de Estar — Janela em Arco",
    category: "residencial",
    room: "Sala",
    city: "São Paulo, SP",
    image: sala,
    span: "tall",
  },
  {
    slug: "suite-master",
    title: "Suíte Master Serena",
    category: "residencial",
    room: "Quarto",
    city: "Florianópolis, SC",
    image: quarto,
  },
  {
    slug: "closet-marmore",
    title: "Closet com Ilha de Mármore",
    category: "residencial",
    room: "Closet",
    city: "Brasília, DF",
    image: closet,
  },
  {
    slug: "home-office-acolhedor",
    title: "Home Office Acolhedor",
    category: "residencial",
    room: "Home Office",
    city: "Curitiba, PR",
    image: homeoffice,
  },
  {
    slug: "banheiro-spa",
    title: "Banheiro Spa com Pedra Natural",
    category: "residencial",
    room: "Banheiro",
    city: "Rio de Janeiro, RJ",
    image: banheiro,
    span: "tall",
  },
  {
    slug: "recepcao-corporativa",
    title: "Recepção Corporativa em Arco",
    category: "comercial",
    room: "Recepção",
    city: "São Paulo, SP",
    image: recepcao,
    span: "wide",
  },
  {
    slug: "cafe-botanico",
    title: "Café Botânico",
    category: "comercial",
    room: "Café",
    city: "Joinville, SC",
    image: cafe,
  },
  {
    slug: "escritorio-meeting",
    title: "Sala de Reunião Executiva",
    category: "comercial",
    room: "Escritório",
    city: "Belo Horizonte, MG",
    image: escritorio,
  },
];

export const PORTFOLIO_FILTERS = [
  { value: "todos", label: "Todos" },
  { value: "residencial", label: "Residenciais" },
  { value: "comercial", label: "Comerciais" },
] as const;
