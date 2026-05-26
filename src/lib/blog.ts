import sala from "@/assets/portfolio-sala.jpg";
import homeoffice from "@/assets/portfolio-homeoffice.jpg";
import cozinha from "@/assets/projeto-cozinha.png";
import closet from "@/assets/portfolio-closet.jpg";
import quarto from "@/assets/portfolio-quarto.jpg";

export interface BlogFAQ {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readingMinutes: number;
  cover: string;
  /** Array of HTML blocks (paragraphs, headings) rendered with prose-archiodini */
  body: string;
  faq: BlogFAQ[];
}

const posts: BlogPost[] = [
  {
    slug: "como-funciona-projeto-de-interiores-online",
    title: "Como funciona um projeto de interiores 100% online?",
    excerpt:
      "Um passo a passo claro de como contratar e desenvolver um projeto de arquitetura de interiores totalmente remoto, com a mesma profundidade de um atendimento presencial.",
    category: "Processo",
    date: "2025-09-12",
    readingMinutes: 6,
    cover: sala,
    body: `
<p>Um projeto de interiores online segue exatamente as mesmas etapas de um projeto presencial — briefing, levantamento, estudo preliminar, anteprojeto e projeto executivo. O que muda é o meio: tudo acontece por videochamada, troca de fotos, vídeos e plantas digitais. Para quem mora longe de grandes centros ou simplesmente prefere a comodidade do home office, o modelo remoto entrega o mesmo nível técnico com mais flexibilidade.</p>

<h2>1. Conversa inicial</h2>
<p>Tudo começa com uma reunião por vídeo de 30 a 60 minutos. É o momento de entender a rotina da família, gostos, referências, orçamento e o que mais incomoda no espaço atual.</p>

<h2>2. Levantamento do espaço</h2>
<p>Você recebe um guia simples de como medir os ambientes e fotografar cada parede. Em obras já iniciadas, basta enviar a planta do arquiteto ou da construtora.</p>

<h2>3. Estudo preliminar e moodboard</h2>
<p>Apresento as primeiras ideias de layout, paleta de cores, materiais e referências visuais. É a etapa em que ajustamos o conceito até estar 100% alinhado com a sua identidade.</p>

<h2>4. Anteprojeto 3D</h2>
<p>Renderizo o ambiente em 3D realista para você visualizar cada detalhe antes de qualquer compra ou execução. Aqui caem os "não sei se vai ficar bom" — você vê exatamente como vai ficar.</p>

<h2>5. Projeto executivo e entrega</h2>
<p>Entrega digital completa: planta de layout, planta de pontos elétricos e hidráulicos, planta de marcenaria, especificação de materiais e mobiliário com links de compra, e um caderno de detalhes para a equipe de obra. Tudo em PDF de alta resolução.</p>

<h2>E a obra?</h2>
<p>O projeto é entregue pronto para ser executado por qualquer profissional de confiança na sua cidade. Eu oriento sua equipe por mensagem e videochamadas durante a execução, sempre que precisar.</p>
`,
    faq: [
      {
        q: "Preciso saber tirar medidas para contratar um projeto online?",
        a: "Não. Envio um guia ilustrado e, se preferir, fazemos uma videochamada para medir junto. Quem tem planta digital pode apenas enviá-la.",
      },
      {
        q: "Quanto tempo demora um projeto de interiores online?",
        a: "Em média, de 30 a 60 dias, dependendo do tamanho do ambiente e da quantidade de revisões.",
      },
      {
        q: "Vocês acompanham a obra presencialmente?",
        a: "O acompanhamento é remoto, por videochamadas e mensagens com a equipe que executa o projeto na sua cidade.",
      },
    ],
  },
  {
    slug: "quanto-custa-projeto-de-interiores-brasil",
    title: "Quanto custa um projeto de arquitetura de interiores no Brasil?",
    excerpt:
      "Entenda como o valor de um projeto de interiores é calculado, o que influencia o preço e por que o projeto online costuma sair mais em conta sem perder qualidade.",
    category: "Investimento",
    date: "2025-09-28",
    readingMinutes: 5,
    cover: cozinha,
    body: `
<p>O investimento em um projeto de arquitetura de interiores no Brasil varia conforme área a ser projetada, número de ambientes, nível de detalhamento e tempo dedicado. Em média, projetos online residenciais começam em torno de R$ 80 a R$ 150 por metro quadrado, podendo variar muito conforme escopo.</p>

<h2>O que está incluso no investimento</h2>
<ul>
  <li>Reuniões de briefing e revisões por videochamada</li>
  <li>Moodboard e estudo de cores e materiais</li>
  <li>Render 3D realista de cada ambiente</li>
  <li>Plantas técnicas (layout, elétrica, hidráulica, marcenaria)</li>
  <li>Lista de compras com links e fornecedores</li>
  <li>Caderno de detalhes para a equipe de obra</li>
</ul>

<h2>Por que o projeto online costuma ser mais acessível</h2>
<p>Sem deslocamento, sem horas de trânsito e com fluxo otimizado por videochamadas, o profissional consegue atender mais clientes mantendo qualidade — e repassa parte dessa eficiência no preço final.</p>

<h2>Como descobrir o valor do seu projeto</h2>
<p>Cada espaço é único. Para receber um orçamento personalizado, basta me chamar no WhatsApp com algumas fotos do ambiente e uma breve descrição do que você precisa.</p>
`,
    faq: [
      {
        q: "O projeto online é mais barato que o presencial?",
        a: "Geralmente sim, porque não há custos de deslocamento e o profissional otimiza o tempo. A qualidade técnica é a mesma.",
      },
      {
        q: "É possível parcelar o investimento?",
        a: "Sim. Trabalho com parcelamento que respeita as etapas do projeto, sempre alinhado no momento da contratação.",
      },
      {
        q: "O valor do mobiliário entra no orçamento do projeto?",
        a: "Não. O projeto entrega a especificação e os links, e você compra diretamente dos fornecedores, com liberdade total de escolha.",
      },
    ],
  },
  {
    slug: "5-erros-comuns-reforma-apartamento",
    title: "5 erros comuns ao reformar um apartamento (e como evitar)",
    excerpt:
      "Reformar sem projeto custa caro. Veja os erros que mais aparecem nas obras residenciais e as decisões simples que economizam tempo, dinheiro e arrependimento.",
    category: "Reforma",
    date: "2025-10-10",
    readingMinutes: 7,
    cover: closet,
    body: `
<p>Reformar um apartamento parece simples — até o orçamento dobrar, a marcenaria não encaixar e a tomada ficar atrás do sofá. A maior parte desses problemas vem de uma única causa: começar a obra sem projeto. Veja os cinco erros mais comuns e como evitá-los.</p>

<h2>1. Começar pela demolição</h2>
<p>Antes de derrubar uma parede, é preciso saber o que vai entrar no lugar. Layout, instalações elétricas, hidráulica e marcenaria devem estar definidos no papel.</p>

<h2>2. Comprar mobiliário antes do layout pronto</h2>
<p>O sofá perfeito não cabe em qualquer sala. Espere a definição do layout para evitar trocas e arrependimentos.</p>

<h2>3. Esquecer dos pontos elétricos</h2>
<p>Tomada no lugar errado é o arrependimento número um da reforma. O projeto elétrico precisa nascer junto com o layout — não depois.</p>

<h2>4. Subestimar a iluminação</h2>
<p>Uma única lâmpada no centro do ambiente achata o espaço. Camadas de luz (geral, tarefa e cênica) transformam qualquer ambiente.</p>

<h2>5. Não documentar a obra</h2>
<p>Sem caderno de especificações, cada profissional interpreta o pedido do seu jeito — e a conta chega na entrega. Um projeto executivo bem feito é o que mantém a obra no prazo e no orçamento.</p>
`,
    faq: [
      {
        q: "Vale a pena contratar arquiteta para reforma pequena?",
        a: "Sim. Mesmo em reformas pequenas, um projeto bem detalhado evita retrabalho e costuma se pagar em economia de materiais e mão de obra.",
      },
      {
        q: "Posso contratar só a parte de elétrica e hidráulica?",
        a: "Sim, é possível contratar etapas separadas. Avalie comigo o que faz mais sentido para o seu momento.",
      },
      {
        q: "Quanto tempo dura uma reforma residencial?",
        a: "Reformas pequenas costumam levar de 30 a 60 dias; reformas completas, de 90 a 180 dias, dependendo do escopo.",
      },
    ],
  },
  {
    slug: "home-office-bonito-e-produtivo",
    title: "Projeto de interiores para home office: como criar um espaço produtivo e bonito",
    excerpt:
      "Trabalhar de casa pede um ambiente que ajude a focar e que você tenha orgulho de mostrar nas chamadas. Veja os princípios de um home office bem projetado.",
    category: "Home Office",
    date: "2025-10-22",
    readingMinutes: 6,
    cover: homeoffice,
    body: `
<p>O home office deixou de ser um canto improvisado. Ele virou parte central da casa — e merece a mesma atenção que damos à sala ou à cozinha. Um bom projeto equilibra ergonomia, iluminação, acústica e estética.</p>

<h2>Comece pela luz natural</h2>
<p>Posicione a mesa de forma a receber luz lateral. Luz frontal cega; luz pelas costas gera reflexo na tela.</p>

<h2>Cadeira: o investimento que mais paga</h2>
<p>Antes de pensar em decoração, garanta uma cadeira ergonômica. Coluna agradece — e o foco também.</p>

<h2>Acústica importa</h2>
<p>Tapete, cortina pesada, painéis acústicos discretos e estante com livros amenizam o eco e melhoram suas chamadas.</p>

<h2>Background pensado</h2>
<p>O que aparece atrás de você nas reuniões diz muito. Uma parede texturizada, uma estante curada ou um painel de madeira ripado mudam completamente a percepção do seu trabalho.</p>

<h2>Iluminação em camadas</h2>
<p>Lâmpada geral + luminária de mesa + um ponto de luz cênica (arandela ou pendente decorativo) deixam o ambiente convidativo do começo da manhã até a última call do dia.</p>
`,
    faq: [
      {
        q: "Qual o tamanho mínimo para um home office confortável?",
        a: "A partir de 4 m² já é possível criar um home office funcional, desde que o layout e a marcenaria sejam bem pensados.",
      },
      {
        q: "Posso ter home office na sala?",
        a: "Sim. Soluções com marcenaria embutida e divisórias leves criam um canto de trabalho integrado, sem perder a estética da sala.",
      },
      {
        q: "Quais cores funcionam melhor para concentração?",
        a: "Tons neutros e terrosos, com um ou dois acentos suaves, criam o equilíbrio ideal entre foco e acolhimento.",
      },
    ],
  },
  {
    slug: "contratar-arquiteta-de-interiores-sem-sair-de-casa",
    title: "Como contratar uma arquiteta de interiores sem sair de casa",
    excerpt:
      "Da primeira mensagem ao contrato assinado, veja o passo a passo para escolher uma arquiteta de interiores de confiança no modelo 100% remoto.",
    category: "Guia",
    date: "2025-11-04",
    readingMinutes: 5,
    cover: quarto,
    body: `
<p>Contratar uma profissional remota exige os mesmos cuidados de uma contratação presencial — talvez ainda mais atenção à comunicação, já que tudo acontece à distância. Aqui vai um passo a passo simples para escolher bem.</p>

<h2>1. Veja o portfólio com calma</h2>
<p>Procure projetos parecidos com o que você sonha. Estilo combina mais que técnica isolada.</p>

<h2>2. Leia depoimentos reais</h2>
<p>Clientes felizes deixam rastros — comentários no Instagram, prints de conversa, vídeos no YouTube.</p>

<h2>3. Faça uma reunião inicial</h2>
<p>É nessa conversa que você sente se há sintonia. Bom projeto começa por boa conversa.</p>

<h2>4. Entenda o escopo e os entregáveis</h2>
<p>Peça a lista exata do que está incluído: render 3D, plantas técnicas, lista de compras, suporte durante a obra.</p>

<h2>5. Contrato e cronograma claros</h2>
<p>Tudo formalizado por contrato, com cronograma de etapas e prazos. Transparência total do início ao fim.</p>
`,
    faq: [
      {
        q: "Como pago uma arquiteta que atende remotamente?",
        a: "Por transferência ou Pix, sempre formalizado em contrato com nota fiscal. Costumo trabalhar com pagamento dividido por etapas do projeto.",
      },
      {
        q: "E se eu não gostar do resultado?",
        a: "O projeto inclui revisões. Por isso o moodboard e o 3D são tão importantes — eles garantem que você aprova cada etapa antes de avançar.",
      },
      {
        q: "Vocês atendem fora do Brasil?",
        a: "O foco hoje é em todo o território brasileiro, mas projetos para brasileiros morando fora podem ser conversados caso a caso.",
      },
    ],
  },
];

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
