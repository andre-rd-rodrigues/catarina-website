import type { ISbStoryData } from '@storyblok/react/rsc';

/**
 * Mock story for the "sobre" (about) page - mirrors the CMS structure
 * so tests can verify the AboutClientPage renders CMS content correctly.
 */
export const mockAboutStory: ISbStoryData = {
  name: 'Sobre',
  content: {
    _uid: 'about-page',
    component: 'page',
    body: [
      {
        _uid: 'header-1',
        component: 'page header',
        title: 'Sobre',
        image: {
          id: 1,
          filename:
            'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/small-white-ceramic-mortar-with-eucalyptus-leaves-AANHPA2.jpg',
          alt: null,
          name: '',
          focus: null,
          source: null,
          title: null,
          copyright: null,
        },
      },
      {
        _uid: 'section-1',
        component: 'text image section',
        layout: 'text_first',
        title: 'Uma eterna aprendiz da vida e do Ser-Humano',
        subtitle: 'Sobre mim',
        body: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              content: [
                { type: 'text', text: 'Bem-vindo(a). ' },
                { type: 'text', text: 'O meu nome é ' },
                { type: 'text', text: 'Catarina Paixão', marks: [{ type: 'bold' }] },
                { type: 'text', text: ' — e não sei se por influência do nome, mas trago em mim uma enorme capacidade de me apaixonar pelas mais variadas expressões da vida. Considero-me uma eterna aprendiz da existência e do Ser Humano na sua vastidão e profundidade. Adoro metáforas e analogias desde que me lembro, e das mais diversas formas procuro entendimento.' },
              ],
            },
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Percorri os anos na Faculdade de Medicina da Universidade de Lisboa com cada vez mais encanto e fascínio pela máquina complexa e arquitetada que é o nosso corpo, e pelo mistério maior da mente e da consciência. A saúde mental sempre ocupou um lugar especial no meu coração. Com a consciência crescente de que somos mais do que o corpo que habitamos, a dificuldade em escolher uma especialidade médica surgiu, precisamente, do desejo de não deixar nenhuma parte do "Ser" para trás.',
                },
              ],
            },
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Iniciei a minha atividade profissional nas urgências hospitalares e extra-hospitalares, trabalhei em serviços prisionais, e percorri ainda o primeiro ano da especialização em Anestesiologia. Estas experiências ensinaram-me muito, na prática, sobre os limites do ser humano, sobre os seus pontos de ruptura — mas também sobre a sua capacidade de superação. Aprofundei a compreensão da ligação entre corpo, mente e emoções, e de como essa interação é crucial para navegar cenários desafiantes e moldar os processos de cura e transformação.',
                },
              ],
            },
          ],
        },
        image: {
          id: 2,
          filename: '/img/sobre_1.jpg',
          alt: 'Sobre Mim - Catarina Paixão',
          name: '',
          focus: null,
          source: null,
          title: null,
          copyright: null,
        },
        image_alt: 'Sobre Mim - Catarina Paixão',
      },
      {
        _uid: 'section-2',
        component: 'text image section',
        layout: 'image_first',
        title: 'Entre a ciência e o sagrado, está a medicina que eu abraço',
        subtitle: 'Sobre mim',
        body: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Ao longo desse caminho, fui sentindo o impulso de ir mais além do modelo convencional. Dediquei-me ao estudo da Psicologia Analítica de Carl Jung, integrando vários cursos e grupos de supervisão clínica. Em paralelo, a minha própria jornada de cura levou-me à exploração auto-didata de outras linguagens do cuidado e do autoconhecimento: Nutrição, Medicina Tradicional Chinesa, Yoga, Meditação, Astrologia, Human Design, Teologia entre outras — práticas e sistemas que, de forma intuitiva, me ajudaram a reconectar com a minha saúde e a minha espiritualidade.',
                },
              ],
            },
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Percebi então que, para verdadeiramente cuidar, precisava integrar tudo aquilo que havia aprendido — dentro e fora da medicina tradicional — e ancorar-me na força do sagrado que tudo permeia.',
                },
              ],
            },
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Essa consciência conduziu-me à Pós-graduação em Medicina Funcional Integrativa, onde encontrei e adaptei um modelo que procura respeitar a totalidade do ser.',
                },
              ],
            },
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Hoje, o meu trabalho reflete esse percurso: como médica, sou fruto da minha formação, mas também dos meus interesses pessoais e das minhas lições de vida. Trago comigo tanto o conhecimento científico como a sabedoria aprendida nas entrelinhas da vida. Coloco toda a minha paixão e conhecimento ao serviço dos que me procuram — e sigo em constante descoberta sobre o Ser Humano e o Mistério que nos habita.',
                },
              ],
            },
          ],
        },
        image: {
          id: 3,
          filename: '/img/sobre_2.jpg',
          alt: 'Sobre Mim - Catarina Paixão',
          name: '',
          focus: null,
          source: null,
          title: null,
          copyright: null,
        },
        image_alt: 'Sobre Mim - Catarina Paixão',
        cta_href: '/servicos',
        cta_label: 'Ver serviços',
      },
      {
        _uid: 'hero-1',
        component: 'hero',
        title:
          '"É nosso dever recordar sempre que a medicina não é apenas uma ciência, mas é também\na arte de deixar nossa individualidade interagir com a individualidade do paciente."',
        content: 'Albert Schweitzer',
        class_name: 'bg-[var(--color-background-alt)]',
      },
    ],
  },
  slug: 'sobre',
  full_slug: 'sobre',
} as unknown as ISbStoryData;
