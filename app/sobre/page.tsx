'use client';

import Hero from '@/components/Hero';
import Link from '@/components/Link';
import Page from '@/components/Page';
import Section from '@/components/Section';
import {
  containerVariant,
  fadeInSlideInVariant,
  fadeInSlideLeftVariant,
} from '@/motion/variants';
import { motion } from 'motion/react';
import Image from 'next/image';

function About() {
  return (
    <Page>
      <Page.Title
        src="https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/small-white-ceramic-mortar-with-eucalyptus-leaves-AANHPA2.jpg"
        title="Sobre"
      />
      {/* About 1 */}
      <Section>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          <motion.div
            variants={containerVariant}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="flex-1"
          >
            <Section.Title
              title="Uma eterna aprendiz da vida e do Ser-Humano"
              subtitle="Sobre mim"
              animation="left"
            />
            <motion.p
              variants={fadeInSlideLeftVariant}
              className="mt-8 text-justify"
            >
              Bem-vindo(a). <br />O meu nome é <b>Catarina Paixão</b> — e não
              sei se por influência do nome, mas trago em mim uma enorme
              capacidade de me apaixonar pelas mais variadas expressões da vida.
              Considero-me uma eterna aprendiz da existência e do Ser Humano na
              sua vastidão e profundidade. Adoro metáforas e analogias desde que
              me lembro, e das mais diversas formas procuro entendimento.
              <br />
              Iniciei a minha actividade profissional nas urgências hospitalares
              e extra-hospitalares, passando também pela actuação em serviços
              prisionais, e ainda percorri o primeiro ano de especialização em
              Anestesiologia. As minhas experiências profissionais ensinaram-me
              muito sobre os limites do ser- humano, os seus pontos de rutura,
              mas também sobre as suas capacidades de superação, destacando a
              importância da conexão entre a consciência e o corpo, e a
              interação entre este e as emoções/reações, para navegar cenários
              desafiantes e processos de cura.
              <br />
              Percorri os anos na{' '}
              <b>Faculdade de Medicina da Universidade de Lisboa</b> com cada
              vez mais encanto e fascínio pela máquina complexa e arquitetada
              que é o nosso corpo, e pelo mistério maior da mente e da
              consciência. A saúde mental sempre ocupou um lugar especial no meu
              coração. Com a consciência crescente de que somos mais do que o
              corpo que habitamos, a dificuldade em escolher uma especialidade
              médica surgiu, precisamente, do desejo de não deixar nenhuma parte
              do “Ser” para trás.
              <br />
              Iniciei a minha atividade profissional nas{' '}
              <b>urgências hospitalares e extra-hospitalares</b>, trabalhei em{' '}
              <b>serviços prisionais</b>, e percorri ainda o primeiro ano da
              especialização em <b>Anestesiologia</b>. Estas experiências
              ensinaram-me muito, na prática, sobre os limites do ser humano,
              sobre os seus pontos de ruptura — mas também sobre a sua
              capacidade de superação. Aprofundei a compreensão da ligação entre
              corpo, mente e emoções, e de como essa interação é crucial para
              navegar cenários desafiantes e moldar os processos de cura e
              transformação.
            </motion.p>
          </motion.div>
          <div className="order-2 flex-1 md:order-1">
            <motion.div
              variants={fadeInSlideInVariant}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-md shadow-lg"
            >
              <Image
                src="/img/sobre_1.jpg"
                alt="Sobre Mim - Catarina Paixão"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Section>
      {/* About 2 */}
      <Section>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          <div className="order-2 flex-1 md:order-1">
            <motion.div
              variants={fadeInSlideInVariant}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-md shadow-lg"
            >
              <Image
                src="/img/sobre_2.jpg"
                alt="Sobre Mim - Catarina Paixão"
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
            className="order-1 flex-1 md:order-2"
          >
            <Section.Title
              title="Entre a ciência e o sagrado, está a medicina que eu abraço"
              subtitle="Sobre mim"
              animation="left"
            />
            <motion.p
              variants={fadeInSlideLeftVariant}
              className="mt-8 text-justify"
            >
              Ao longo desse caminho, fui sentindo o impulso de ir mais além do
              modelo convencional. Dediquei-me ao estudo da{' '}
              <strong>Psicologia Analítica de Carl Jung</strong>, integrando
              vários cursos e grupos de supervisão clínica. Em paralelo, a minha
              própria jornada de cura levou-me à exploração auto-didata de
              outras linguagens do cuidado e do autoconhecimento:{' '}
              <strong>
                Nutrição, Medicina Tradicional Chinesa, Yoga, Meditação,
                Astrologia, Human Design, Teologia
              </strong>{' '}
              entre outros — práticas e sistemas que, de forma intuitiva, me
              ajudaram a reconectar com a minha saúde e a minha espiritualidade.
              <br />
              Percebi então que, para verdadeiramente cuidar, precisava integrar
              tudo aquilo que havia aprendido —{' '}
              <strong>dentro e fora da medicina tradicional</strong> — e
              ancorar-me na força do sagrado que tudo permeia.
              <br />
              Essa consciência conduziu-me à{' '}
              <strong>Pós-graduação em Medicina Funcional Integrativa</strong>,
              onde encontrei e adaptei um modelo que procura respeitar a
              totalidade do ser.
              <br />
              Hoje, o meu trabalho reflete esse percurso:{' '}
              <strong>
                como médica, sou fruto da minha formação, mas também dos meus
                interesses pessoais e das minhas lições de vida.
              </strong>{' '}
              Trago comigo tanto o conhecimento científico como a sabedoria
              aprendida nas entrelinhas da vida. Coloco toda a minha{' '}
              <strong>paixão e conhecimento</strong> ao serviço dos que me
              procuram — e sigo em constante descoberta sobre o Ser Humano e{' '}
              <em>o Mistério que nos habita</em>.
            </motion.p>
            <div className="mt-8 flex justify-end">
              <Link href="/servicos" label="Ver serviços" variant="outline" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Hero */}
      <Hero
        className="bg-[var(--color-background-alt)]"
        title="“É nosso dever recordar sempre que a medicina não é apenas uma ciência, mas é também
a arte de deixar nossa individualidade interagir com a individualidade do paciente.”"
        content="Albert Schweitzer"
      />
    </Page>
  );
}

export default About;
