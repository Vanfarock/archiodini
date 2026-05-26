export interface Testimonial {
  quote: string;
  name: string;
  city: string;
  project: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Nossa Lu, ficou tudo maravilhoso!!! O closet em especial superou todas as expectativas. Sério, está lindo demais.",
    name: "Bruna Cassia Vockes",
    city: "Cliente residencial",
    project: "Quarto, closet e banheiros",
  },
  {
    quote:
      "Um acompanhamento impecável! Desde as medidas à entrega dos documentos. Não poderíamos ter escolhido outra pessoa para fazer parte dessa etapa tão importante. Aguardando ansiosa todos os próximos projetos!",
    name: "Júlia P. de Brito",
    city: "Cliente residencial",
    project: "Projeto completo de interiores",
  },
  {
    quote:
      "Imagina Lu, nós que agradecemos a atenção e o carinho de sempre! Todos os ambientes ficaram maravilhosos, únicos e exatamente do jeito que queríamos. Vamos lhe indicar sempre.",
    name: "Família atendida em obra",
    city: "Cliente residencial",
    project: "Reforma residencial completa",
  },
];
