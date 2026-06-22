const sala_reuniao = "/assets/portfolio-sala-reuniao-PQufsgr4.png";
const cozinha_1 = "/assets/portfolio-cozinha1-DZLVnXoD.jpg";
const cozinha_2 = "/assets/portfolio-cozinha2-B73AoBoU.jpg";
const cozinha_3 = "/assets/portfolio-cozinha3-dyl1qj3Q.jpg";
const cozinha_4 = "/assets/portfolio-cozinha4-CZKbaSgo.png";
const living = "/assets/portfolio-living-Cj9Qb1rp.png";
const quarto_bebe = "/assets/portfolio-quarto-bebe-Cl_mr-BO.jpg";
const sala_advocacia = "/assets/portfolio-sala-advocacia-XuE5_1Yo.jpg";
const recepcao = "/assets/portfolio-recepcao-DsLbhhMN.jpg";
const PROJECTS = [
  {
    slug: "living",
    title: "Sala de Estar",
    category: "residencial",
    room: "Sala de Estar",
    city: "",
    image: living
  },
  {
    slug: "sala-advocacia",
    title: "Advocacia",
    category: "comercial",
    room: "Escritório",
    city: "",
    image: sala_advocacia
  },
  {
    slug: "quarto-bebe",
    title: "Quarto de Bebê",
    category: "residencial",
    room: "Quarto",
    city: "",
    image: quarto_bebe
  },
  {
    slug: "cozinha1",
    title: "Cozinha",
    category: "residencial",
    room: "Cozinha",
    city: "",
    image: cozinha_1
  },
  {
    slug: "cozinha2",
    title: "Cozinha",
    category: "residencial",
    room: "Cozinha",
    city: "",
    image: cozinha_2
  },
  {
    slug: "cozinha3",
    title: "Cozinha",
    category: "residencial",
    room: "Cozinha",
    city: "",
    image: cozinha_3
  },
  {
    slug: "cozinha4",
    title: "Cozinha",
    category: "residencial",
    room: "Cozinha",
    city: "",
    image: cozinha_4
  },
  {
    slug: "recepcao",
    title: "Recepção",
    category: "comercial",
    room: "Recepção",
    city: "",
    image: recepcao
  },
  {
    slug: "sala-reuniao",
    title: "Sala de Reunião",
    category: "comercial",
    room: "Sala de Reunião",
    city: "",
    image: sala_reuniao
  }
];
const PORTFOLIO_FILTERS = [
  { value: "todos", label: "Todos" },
  { value: "residencial", label: "Residenciais" },
  { value: "comercial", label: "Comerciais" }
];
export {
  PORTFOLIO_FILTERS as P,
  PROJECTS as a
};
