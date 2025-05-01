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
            <motion.p variants={fadeInSlideLeftVariant} className="mt-8">
              Bem-vindo(a). O meu nome é Catarina Paixão, e não sei se por
              influência do nome, carrego em mim uma enorme capacidade de me
              apaixonar pelas mais aleatórias e variadas coisas. Considero-me
              uma eterna aprendiz da vida e do Ser-Humano na sua Infinitude.
              Percorri os anos na Faculdade de Medicina na Universidade de
              Lisboa com cada vez com mais encanto e fascínio pela máquina
              complexa e arquitetada que é o nosso corpo. Pelo mistério maior
              que é a mente e a consciência humana, todas as áreas relacionadas
              com a saúde mental, sempre tiveram um lugar de destaque no meu
              coração. Completei a faculdade, com cada vez mais consciência que
              somos mais que este corpo onde habitamos, e com uma dificuldade
              crescente em escolher onde me especializar, por não querer deixar
              nenhuma parte do “Ser” para trás.
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
                src="https://images.unsplash.com/photo-1535553507350-349399fb7b72?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1598&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              title="Motivada pelo meu próprio sofrimento e desconforto"
              subtitle="Sobre mim"
              animation="left"
            />
            <motion.p variants={fadeInSlideLeftVariant} className="mt-8">
              No decorrer destes anos, dediquei-me também ao estudo dos
              fundamentos da Psicologia Analítica de Carl.G.Jung, integrando
              vários cursos e um grupo de supervisão, continuando a lapidar o
              meu entendimento sobre a Psique Humana, até aos dias de hoje. Mas
              foi através da minha experiência pessoal, que se desenvolveu a
              compreensão da necessidade da complementaridade de várias áreas,
              para resgatar a minha Saúde. Motivada pelo meu próprio sofrimento
              e desconforto, não encontrando soluções nem respostas que me
              satisfizessem ou ajudassem plenamente dentro do que já tinha
              aprendido, fui autodidata nas mais diversas áreas, explorando
              conceitos dentro da Medicina Tradicional Chinesa e Ayurvédica,
              práticas de Yoga e Meditação, estudo de Astrologia e Human Design,
              entre outros. Para perceber como tudo se integra, tive de resgatar
              a minha espiritualidade e ganhar consciência do sagrado que tudo
              permeia. Pouco depois, iniciei a minha Pós-graduação em Medicina
              Funcional Integrativa. Como médica sou fruto da minha formação,
              mas também dos meus interesses pessoais e das minhas lições de
              vida. Coloco toda a minha paixão e toda a bagagem de conhecimento
              (médico e “extra-médico”) que carrego, ao serviço dos meus
              pacientes, permanecendo sempre em busca de aprender mais sobre o
              Ser-Humano e o Mistério da Existência.
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
        content="Carl Jung"
      />
    </Page>
  );
}

export default About;
