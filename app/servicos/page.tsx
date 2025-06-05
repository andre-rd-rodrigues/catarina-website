'use client';

import InfoCard from '@/components/Cards/InfoCard';
import FaqsPreview from '@/components/FAQS/FaqsPreview';
import Page from '@/components/Page';
import PriceTable from '@/components/PriceTable';
import Section from '@/components/Section';
import { ABOUT_VALUES } from '@/constants/about';
import {
  containerVariant,
  fadeInSlideInVariant,
  fadeInSlideLeftVariant,
} from '@/motion/variants';
import { IconName } from 'lucide-react/dynamic';
import { motion } from 'motion/react';
import Image from 'next/image';

function Services() {
  return (
    <Page>
      <Page.Title
        src="https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Serviços"
      />
      <span id="consulta-medicina-funcional-integrativa" />

      {/* Especialidades */}
      <Section>
        {/* Consulta Medicina Funcional Integrativa */}
        <div className="mb-28 flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          <motion.div
            variants={containerVariant}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="flex-1"
          >
            <Section.Title
              title="Consulta Medicina Funcional Integrativa"
              subtitle="01."
              animation="left"
            />
            <motion.p
              className="font-ibm-plex-sans text-md mb-3 mt-2 font-light text-[var(--color-accent)]"
              variants={fadeInSlideLeftVariant}
            >
              Escutar o corpo como quem decifra um mapa vivo.
            </motion.p>
            <motion.div
              variants={fadeInSlideLeftVariant}
              className="mt-8 space-y-4"
            >
              <p>
                Uma consulta médica que vai além da doença — um convite a olhar
                para o Ser na sua totalidade.
                <br />
                Nesta consulta, o foco está em compreender as raízes dos
                desequilíbrios físicos, emocionais e/ou energéticos, tendo em
                conta a história de vida, o contexto pessoal e as diferentes
                dimensões do ser humano: corpo, mente, alma e ambiente.
                <br />
                É um processo colaborativo que nasce da parceria
                médico-paciente, baseado em ciência e investigação clínica,
                escuta e consciência. O modelo da “primeira consulta” é
                estruturado em dois tempos:
                <br />
              </p>
              <ul className="ml-5 space-y-4 font-light">
                <li>
                  <b>Primeiro encontro</b> – onde exploramos sintomas,
                  histórico, hábitos, exames e prioridades terapêuticas.
                </li>
                <li>
                  <b>Segundo encontro</b> – após análise clínica e laboratorial,
                  onde é entregue um <b>Guia Terapêutico personalizado</b>, com
                  propostas que podem incluir ajustes de estilo de vida,
                  suplementação e/ou medicação, sugestões de práticas
                  terapêuticas complementares e reflexões simbólicas associadas
                  ao quadro clínico.
                </li>
              </ul>
              <p>
                Cada plano é único — criado com embasamento científico,
                sensibilidade humana e respeito pelo tempo e individualidade de
                cada indivíduo.
              </p>
            </motion.div>
          </motion.div>
          <div className="order-2 flex-1 md:order-1">
            <motion.div
              variants={fadeInSlideInVariant}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="relative min-h-80 w-full overflow-hidden rounded-md shadow-lg"
            >
              <span id="sessoes-de-terapia-saude-mental" />
              <Image
                src="/img/servicos_mfi.jpg"
                alt="Consulta Medicina Funcional Integrativa"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Sessões de Terapia */}
        <div className="mb-28 flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          <div className="order-2 flex-1 md:order-1">
            <motion.div
              variants={fadeInSlideInVariant}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="relative min-h-80 w-full overflow-hidden rounded-md shadow-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1546387903-6d82d96ccca6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sessões de Terapia (Saúde Mental)"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            variants={containerVariant}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="order-first flex-1 md:order-last"
          >
            <Section.Title
              title="Sessões de Terapia (Saúde Mental)"
              subtitle="02."
              animation="left"
            />
            <motion.p
              className="font-ibm-plex-sans text-md mb-3 mt-2 font-light text-[var(--color-accent)]"
              variants={fadeInSlideLeftVariant}
            >
              Onde o invisível encontra palavra, forma e sentido.
            </motion.p>
            <motion.div
              variants={fadeInSlideLeftVariant}
              className="mt-8 space-y-4"
            >
              <span id="mapa-astral-human-design" />
              <p id="sessoes-de-terapia-saude-mental">
                Um espaço de escuta simbólica, transformação interior e
                reencontro com o que somos para lá das máscaras.
                <br />
                Estas sessões baseiam-se nos princípios da psicologia analítica
                de Carl Gustav Jung e são um convite para explorar o
                inconsciente, os sonhos, os padrões emocionais e as forças
                interiores que nos habitam.
                <br />
                Através do diálogo terapêutico e de ferramentas simbólicas,
                vamos iluminando os conteúdos que influenciam silenciosamente o
                nosso comportamento, as nossas escolhas e o nosso estado de
                saúde, libertando-nos das amarras que impedem o nosso
                crescimento e desenvolvimento. Cada processo é único — e as
                ferramentas utilizadas são adaptadas à linguagem interior de
                cada pessoa.
                <br />
                Esta é uma jornada profunda de autoconhecimento e transformação,
                de integração e individuação, para quem sente o chamado de se
                tornar mais inteiro e mais verdadeiro consigo mesmo.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Mapa Astral + Human Design */}
        <div className="mb-28 flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          <motion.div
            variants={containerVariant}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="flex-1"
          >
            <Section.Title
              title="Leitura terapêutica do Mapa Astral + “Human Design"
              subtitle="03."
              animation="left"
            />
            <motion.p
              className="font-ibm-plex-sans text-md mb-3 mt-2 font-light text-[var(--color-accent)]"
              variants={fadeInSlideLeftVariant}
            >
              Quando o céu é usado como espelho e bússola.
            </motion.p>
            <motion.div
              variants={fadeInSlideLeftVariant}
              className="mt-8 space-y-4"
            >
              <p>
                Uma leitura que une astrologia simbólica e Human Design como
                instrumentos de autoconhecimento e equilíbrio. <br />
                Nesta sessão, exploramos as principais dinâmicas do mapa natal e
                as características do gráfico de Human Design, com foco
                terapêutico e orientação ao equilíbrio das partes do Ser,
                permitindo ao mesmo o <b>(re)</b>conhecimento da sua própria
                Natureza.
                <br />
                Mais do que uma leitura preditiva, esta abordagem propõe uma
                reflexão pontual e sensível sobre possíveis padrões
                inconscientes, forças inatas, desafios energéticos e potenciais
                pontos de transformação pessoal.
                <br />
                Os mapas são universos simbólicos vastos, que podem ser
                revisitados ao longo de toda a vida. Por isso, a leitura é
                sempre <b>intuitiva e personalizada</b> — feita à luz das
                intenções, preocupações e perguntas que forem trazidas no
                momento, sem seguir um formato fixo.
                <br />
              </p>
            </motion.div>
          </motion.div>
          <div className="order-2 flex-1 md:order-1">
            <motion.div
              variants={fadeInSlideInVariant}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="relative min-h-80 w-full overflow-hidden rounded-md shadow-lg"
            >
              <Image
                src="/img/astral_reading.jpg"
                alt="Mapa Astral + Human Design"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Programa de acompanhamento integrativo - 3/6 meses */}
        <div className="mb-28 flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          <div className="order-2 flex-1 md:order-1">
            <motion.div
              variants={fadeInSlideInVariant}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="relative min-h-80 w-full overflow-hidden rounded-md shadow-lg"
            >
              <Image
                src="/img/sobre_3.jpg"
                alt="Programa de acompanhamento integrativo - 3/6 meses"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            variants={containerVariant}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="order-first flex-1 md:order-last"
          >
            <Section.Title
              title="Programa de acompanhamento integrativo - 3/6 meses"
              subtitle="04."
              animation="left"
            />
            <motion.p
              className="font-ibm-plex-sans text-md mb-3 mt-2 font-light text-[var(--color-accent)]"
              variants={fadeInSlideLeftVariant}
            >
              Um percurso de mão dada, passo a passo - mais presença, maior
              integração.
            </motion.p>
            <motion.div
              variants={fadeInSlideLeftVariant}
              className="mt-8 space-y-4"
            >
              <span id="mapa-astral-human-design" />
              <p id="sessoes-de-terapia-saude-mental">
                Este programa nasce da visão de que o verdadeiro equilíbrio
                emerge da escuta profunda do corpo, da alma e da história
                pessoal de cada ser. É dirigido a pessoas que procuram um
                acompanhamento profundo e continuado, integrando a avaliação
                médica funcional e o apoio terapêutico O acompanhamento inclui:
              </p>
              <ul className="ml-5 space-y-4 font-light">
                <li>
                  Uma consulta médica inicial estruturada em duas sessões, com
                  enfoque funcional e sistémico;
                </li>
                <li>
                  12/18 sessões de terapia junguiana (uma por semana), criando
                  um espaço de escuta, consciência e transformação.
                </li>
                <li>
                  Acompanhamento virtual, via whatsapp para esclarecimento de
                  dúvidas.
                </li>
                <li>
                  Uma consulta médica de seguimento para acompanhamento da
                  evolução e integração do universo explorado.
                </li>
                <li>
                  Uma leitura terapêutica do Mapa Astral + Human Design
                  (opcional)
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Principios Terapeuticos */}
      <Section className="bg-[var(--color-background-alt)]">
        <Section.Title
          title="Princípios Terapêuticos"
          subtitle="Valores"
          animation="left"
        />
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-4"
        >
          {ABOUT_VALUES.map(({ icon, title, description }) => (
            <motion.span
              variants={fadeInSlideInVariant}
              key={title}
              className="h-full"
            >
              <InfoCard
                key={title}
                icon={icon as IconName}
                title={title}
                description={description}
              />
            </motion.span>
          ))}
        </motion.div>
      </Section>

      {/* Serviços & Pacotes */}
      <Section className="bg-[var(--color-background-alt)]">
        <Section.Title
          title="Preçário"
          animation="left"
          subtitle="Serviços & Pacotes"
          className="text-center"
        />
        <motion.div
          variants={containerVariant}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="mt-10"
        >
          <PriceTable />
        </motion.div>
      </Section>

      {/* FAQS */}
      <FaqsPreview />
    </Page>
  );
}

export default Services;
