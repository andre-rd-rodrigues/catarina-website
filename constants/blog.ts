export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateSort: string; // YYYY-MM-DD for sorting
  category: string;
  image: string;
  content: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'a-conexao-entre-corpo-e-mente-na-saude',
    title: 'A conexão entre corpo e mente na saúde',
    excerpt:
      'Como a medicina integrativa nos ajuda a olhar para o ser humano de forma holística e a encontrar equilíbrio.',
    date: '15 Fev 2025',
    dateSort: '2025-02-15',
    category: 'Medicina Integrativa',
    image: '/img/homepage_1.jpg',
    content: `A medicina integrativa parte de um princípio fundamental: o corpo e a mente não funcionam de forma isolada. O que sentimos emocionalmente reflete-se no nosso estado físico, e o contrário também é verdade. Stress prolongado, por exemplo, pode manifestar-se em tensão muscular, alterações digestivas ou no sono. Por outro lado, uma dor crónica pode afectar o humor e a forma como nos relacionamos.

Nesta abordagem, o objectivo é olhar para a pessoa como um todo. Em vez de tratar apenas o sintoma, procuramos entender o contexto de vida, os hábitos, a história e as emoções que podem estar na origem do desequilíbrio. É um convite a escutar o próprio corpo e a reconhecer os sinais que ele nos envia.

Encontrar equilíbrio não significa eliminar todos os desafios, mas criar recursos internos e externos que nos permitam atravessá-los com mais consciência e bem-estar.`,
  },
  {
    slug: 'ritmos-naturais-e-bem-estar',
    title: 'Ritmos naturais e bem-estar',
    excerpt:
      'Descubra como respeitar os ciclos do corpo e da natureza pode transformar a sua energia e saúde.',
    date: '28 Jan 2025',
    dateSort: '2025-01-28',
    category: 'Bem-estar',
    image: '/img/homepage_2.jpg',
    content: `Vivemos numa cultura que valoriza a produtividade constante e o ritmo acelerado. No entanto, o nosso corpo e o sistema nervoso foram desenhados para funcionar em ciclos: de actividade e repouso, de luz e escuridão, de esforço e recuperação. Ignorar estes ritmos pode levar a cansaço crónico, dificuldade em dormir e uma sensação de desalinhamento.

Respeitar os ritmos naturais passa por pequenos gestos: dormir em horários regulares, expor-se à luz natural de manhã, fazer pausas ao longo do dia e permitir momentos de verdadeiro descanso. A natureza tem os seus ciclos — as estações, a lua, o dia e a noite — e nós fazemos parte dela.

Quando alinhamos o nosso estilo de vida com estes ciclos, a energia tende a estabilizar-se, o sono melhora e a sensação de bem-estar aumenta. Não é preciso fazer tudo de uma vez; basta começar por um aspecto que faça sentido para si.`,
  },
  {
    slug: 'o-papel-da-alimentacao-na-saude-funcional',
    title: 'O papel da alimentação na saúde funcional',
    excerpt:
      'Reflexões sobre nutrição consciente e o impacto da dieta no equilíbrio físico e emocional.',
    date: '10 Jan 2025',
    dateSort: '2025-01-10',
    category: 'Nutrição',
    image: '/img/homepage_1.jpg',
    content: `A alimentação é um dos pilares da saúde funcional. Não se trata apenas de calorias ou nutrientes isolados, mas da forma como os alimentos que escolhemos influenciam a inflamação, a digestão, o humor e a energia ao longo do dia. Cada pessoa tem necessidades e sensibilidades diferentes; por isso, não existe uma dieta única que funcione para todos.

A nutrição consciente convida-nos a prestar atenção: ao que comemos, à forma como comemos e à forma como nos sentimos depois. Por vezes, certos alimentos que consideramos “saudáveis” podem não ser os mais adequados para o nosso organismo naquele momento. A medicina funcional pode ajudar a identificar padrões e a ajustar a alimentação de forma individualizada.

O objectivo não é perfeição nem restrição extrema, mas sim criar uma relação mais tranquila e informada com a comida, em benefício do equilíbrio físico e emocional.`,
  },
  {
    slug: 'mindfulness-no-dia-a-dia',
    title: 'Mindfulness no dia a dia',
    excerpt:
      'Práticas simples para trazer consciência ao momento presente e reduzir o stress.',
    date: '05 Jan 2025',
    dateSort: '2025-01-05',
    category: 'Bem-estar',
    image: '/img/homepage_2.jpg',
    content: `Mindfulness não exige horas de meditação. Basta parar alguns minutos, respirar com atenção e observar o que acontece no corpo e na mente. Com prática regular, a capacidade de estar presente aumenta e o ruído mental tende a diminuir.`,
  },
  {
    slug: 'suplementacao-e-saude-integrativa',
    title: 'Suplementação e saúde integrativa',
    excerpt:
      'Quando e como os suplementos podem complementar um estilo de vida saudável.',
    date: '20 Dez 2024',
    dateSort: '2024-12-20',
    category: 'Medicina Integrativa',
    image: '/img/homepage_1.jpg',
    content: `Os suplementos podem ser úteis em situações específicas, mas não substituem uma alimentação equilibrada, sono adequado e gestão do stress. Na abordagem integrativa, avaliamos as necessidades individuais antes de sugerir qualquer complemento.`,
  },
  {
    slug: 'sono-e-recuperacao',
    title: 'Sono e recuperação',
    excerpt:
      'A importância do descanso de qualidade para a saúde física e mental.',
    date: '12 Dez 2024',
    dateSort: '2024-12-12',
    category: 'Bem-estar',
    image: '/img/homepage_2.jpg',
    content: `O sono é um dos pilares da saúde. Durante o repouso, o corpo repara tecidos, consolida memórias e regula hormonas. Priorizar o sono não é luxo, é necessidade. Pequenos ajustes na rotina podem fazer toda a diferença.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
