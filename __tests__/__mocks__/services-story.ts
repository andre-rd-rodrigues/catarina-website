import type { ISbStoryData } from '@storyblok/react/rsc';

const richText = (content: Array<{ type: string; content?: unknown[] }>) => ({
  type: 'doc',
  content,
});

const paragraph = (text: string, bold?: string) => ({
  type: 'paragraph',
  content: bold
    ? [
        { type: 'text', text: text.split(bold)[0] },
        { type: 'text', text: bold, marks: [{ type: 'bold' }] },
        { type: 'text', text: text.split(bold)[1] ?? '' },
      ]
    : [{ type: 'text', text }],
});

/**
 * Mock story for the "servicos" (services) page - mirrors the CMS structure
 * with page header + 4 text image section blocks.
 */
export const mockServicesStory: ISbStoryData = {
  name: 'Serviços',
  content: {
    _uid: 'servicos-page',
    component: 'page',
    body: [
      {
        _uid: 'servicos-header',
        component: 'page header',
        title: 'Serviços',
        image: {
          id: 1,
          filename: '/img/servicos_mfi.jpg',
          alt: null,
          name: '',
          focus: null,
          source: null,
          title: null,
          copyright: null,
        },
      },
      {
        _uid: 'service-1',
        component: 'text image section',
        layout: 'text_first',
        title: 'Consulta Medicina Funcional Integrativa',
        subtitle: '01.',
        tagline: 'Escutar o corpo como quem decifra um mapa vivo.',
        anchor_id: 'consulta-medicina-funcional-integrativa',
        body: richText([
          paragraph(
            'Uma consulta médica que vai além da doença — um convite a olhar para o Ser na sua totalidade.',
          ),
          paragraph(
            'Nesta consulta, o foco está em compreender as raízes dos desequilíbrios físicos, emocionais e/ou energéticos, tendo em conta a história de vida, o contexto pessoal e as diferentes dimensões do ser humano: corpo, mente, alma e ambiente.',
          ),
          paragraph(
            'É um processo colaborativo que nasce da parceria médico-paciente, baseado em ciência e investigação clínica, escuta e consciência. O modelo da "primeira consulta" é estruturado em dois tempos:',
          ),
          {
            type: 'bullet_list',
            content: [
              {
                type: 'list_item',
                content: [
                  {
                    type: 'paragraph',
                    content: [
                      { type: 'text', text: 'Primeiro encontro', marks: [{ type: 'bold' }] },
                      {
                        type: 'text',
                        text: ' – onde exploramos sintomas, histórico, hábitos, exames e prioridades terapêuticas.',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'list_item',
                content: [
                  {
                    type: 'paragraph',
                    content: [
                      { type: 'text', text: 'Segundo encontro', marks: [{ type: 'bold' }] },
                      {
                        type: 'text',
                        text: ' – após análise clínica e laboratorial, onde é entregue um ',
                      },
                      { type: 'text', text: 'Guia Terapêutico personalizado', marks: [{ type: 'bold' }] },
                      {
                        type: 'text',
                        text: ', com propostas que podem incluir ajustes de estilo de vida, suplementação e/ou medicação, sugestões de práticas terapêuticas complementares e reflexões simbólicas associadas ao quadro clínico.',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          paragraph(
            'Cada plano é único — criado com embasamento científico, sensibilidade humana e respeito pelo tempo e individualidade de cada indivíduo.',
          ),
        ]),
        image: {
          id: 2,
          filename: '/img/servicos_mfi.jpg',
          alt: 'Consulta Medicina Funcional Integrativa',
          name: '',
          focus: null,
          source: null,
          title: null,
          copyright: null,
        },
      },
      {
        _uid: 'service-2',
        component: 'text image section',
        layout: 'image_first',
        title: 'Sessões de Terapia (Saúde Mental)',
        subtitle: '02.',
        tagline: 'Onde o invisível encontra palavra, forma e sentido.',
        anchor_id: 'sessoes-de-terapia-saude-mental',
        body: richText([
          paragraph(
            'Um espaço de escuta simbólica, transformação interior e reencontro com o que somos para lá das máscaras.',
          ),
          paragraph(
            'Estas sessões baseiam-se nos princípios da psicologia analítica de Carl Gustav Jung e são um convite para explorar o inconsciente, os sonhos, os padrões emocionais e as forças interiores que nos habitam.',
          ),
          paragraph(
            'Através do diálogo terapêutico e de ferramentas simbólicas, vamos iluminando os conteúdos que influenciam silenciosamente o nosso comportamento, as nossas escolhas e o nosso estado de saúde, libertando-nos das amarras que impedem o nosso crescimento e desenvolvimento. Cada processo é único — e as ferramentas utilizadas são adaptadas à linguagem interior de cada pessoa.',
          ),
          paragraph(
            'Esta é uma jornada profunda de autoconhecimento e transformação, de integração e individuação, para quem sente o chamado de se tornar mais inteiro e mais verdadeiro consigo mesmo.',
          ),
        ]),
        image: {
          id: 3,
          filename:
            'https://images.unsplash.com/photo-1546387903-6d82d96ccca6?q=80&w=1471&auto=format&fit=crop',
          alt: 'Sessões de Terapia (Saúde Mental)',
          name: '',
          focus: null,
          source: null,
          title: null,
          copyright: null,
        },
      },
      {
        _uid: 'service-3',
        component: 'text image section',
        layout: 'text_first',
        title: 'Leitura terapêutica do Mapa Astral + "Human Design"',
        subtitle: '03.',
        tagline: 'Quando o céu é usado como espelho e bússola.',
        anchor_id: 'mapa-astral-human-design',
        body: richText([
          paragraph(
            'Uma leitura que une astrologia simbólica e Human Design como instrumentos de autoconhecimento e equilíbrio.',
          ),
          paragraph(
            'Nesta sessão, exploramos as principais dinâmicas do mapa natal e as características do gráfico de Human Design, com foco terapêutico e orientação ao equilíbrio das partes do Ser, permitindo ao mesmo o (re)conhecimento da sua própria Natureza.',
          ),
          paragraph(
            'Mais do que uma leitura preditiva, esta abordagem propõe uma reflexão pontual e sensível sobre possíveis padrões inconscientes, forças inatas, desafios energéticos e potenciais pontos de transformação pessoal.',
          ),
          paragraph(
            'Os mapas são universos simbólicos vastos, que podem ser revisitados ao longo de toda a vida. Por isso, a leitura é sempre intuitiva e personalizada — feita à luz das intenções, preocupações e perguntas que forem trazidas no momento, sem seguir um formato fixo.',
          ),
        ]),
        image: {
          id: 4,
          filename: '/img/astral_reading.jpg',
          alt: 'Mapa Astral + Human Design',
          name: '',
          focus: null,
          source: null,
          title: null,
          copyright: null,
        },
      },
      {
        _uid: 'service-4',
        component: 'text image section',
        layout: 'image_first',
        title: 'Programa de acompanhamento integrativo - 3/6 meses',
        subtitle: '04.',
        tagline: 'Um percurso de mão dada, passo a passo - mais presença, maior integração.',
        anchor_id: 'programa-acompanhamento',
        body: richText([
          paragraph(
            'Este programa nasce da visão de que o verdadeiro equilíbrio emerge da escuta profunda do corpo, da alma e da história pessoal de cada ser. É dirigido a pessoas que procuram um acompanhamento profundo e continuado, integrando a avaliação médica funcional e o apoio terapêutico O acompanhamento inclui:',
          ),
          {
            type: 'bullet_list',
            content: [
              {
                type: 'list_item',
                content: [
                  {
                    type: 'paragraph',
                    content: [
                      {
                        type: 'text',
                        text: 'Uma consulta médica inicial estruturada em duas sessões, com enfoque funcional e sistémico;',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'list_item',
                content: [
                  {
                    type: 'paragraph',
                    content: [
                      {
                        type: 'text',
                        text: '12/18 sessões de terapia junguiana (uma por semana), criando um espaço de escuta, consciência e transformação.',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'list_item',
                content: [
                  {
                    type: 'paragraph',
                    content: [
                      {
                        type: 'text',
                        text: 'Acompanhamento virtual, via whatsapp para esclarecimento de dúvidas.',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'list_item',
                content: [
                  {
                    type: 'paragraph',
                    content: [
                      {
                        type: 'text',
                        text: 'Uma consulta médica de seguimento para acompanhamento da evolução e integração do universo explorado.',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'list_item',
                content: [
                  {
                    type: 'paragraph',
                    content: [
                      {
                        type: 'text',
                        text: 'Uma leitura terapêutica do Mapa Astral + Human Design (opcional)',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ]),
        image: {
          id: 5,
          filename: '/img/sobre_3.jpg',
          alt: 'Programa de acompanhamento integrativo - 3/6 meses',
          name: '',
          focus: null,
          source: null,
          title: null,
          copyright: null,
        },
      },
    ],
  },
  slug: 'servicos',
  full_slug: 'servicos',
} as unknown as ISbStoryData;
