import sala_reuniao from "@/assets/portfolio-sala-reuniao.png";
import cozinha_1 from "@/assets/portfolio-cozinha1.jpg";
import cozinha_2 from "@/assets/portfolio-cozinha2.jpg";
import cozinha_3 from "@/assets/portfolio-cozinha3.jpg";
import cozinha_4 from "@/assets/portfolio-cozinha4.png";
import living from "@/assets/portfolio-living.png";
import quarto_bebe from "@/assets/portfolio-quarto-bebe.jpg";
import sala_advocacia from "@/assets/portfolio-sala-advocacia.jpg";
import recepcao from "@/assets/portfolio-recepcao.jpg";
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
    slug: "living",
    title: "Sala de Estar",
    category: "residencial",
    room: "Sala de Estar",
    city: "",
    image: living,
  },
  {
    slug: "sala-advocacia",
    title: "Advocacia",
    category: "comercial",
    room: "Escritório",
    city: "",
    image: sala_advocacia,
  },
  {
    slug: "quarto-bebe",
    title: "Quarto de Bebê",
    category: "residencial",
    room: "Quarto",
    city: "",
    image: quarto_bebe,
  },
  {
    slug: "cozinha1",
    title: "Cozinha",
    category: "residencial",
    room: "Cozinha",
    city: "",
    image: cozinha_1,
  },
  {
    slug: "cozinha2",
    title: "Cozinha",
    category: "residencial",
    room: "Cozinha",
    city: "",
    image: cozinha_2,
  },
  {
    slug: "cozinha3",
    title: "Cozinha",
    category: "residencial",
    room: "Cozinha",
    city: "",
    image: cozinha_3,
  },
  {
    slug: "cozinha4",
    title: "Cozinha",
    category: "residencial",
    room: "Cozinha",
    city: "",
    image: cozinha_4,
  },

  {
    slug: "recepcao",
    title: "Recepção",
    category: "comercial",
    room: "Recepção",
    city: "",
    image: recepcao,
  },
  {
    slug: "sala-reuniao",
    title: "Sala de Reunião",
    category: "comercial",
    room: "Sala de Reunião",
    city: "",
    image: sala_reuniao,
  },
];

export const PORTFOLIO_FILTERS = [
  { value: "todos", label: "Todos" },
  { value: "residencial", label: "Residenciais" },
  { value: "comercial", label: "Comerciais" },
] as const;
