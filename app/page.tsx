'use client';
import HealthCards from '@/components/Cards/HealthCards';
import ServiceCard from '@/components/Cards/ServiceCard';
import FaqsPreview from '@/components/FAQS/FaqsPreview';
import GlowEffect from '@/components/GlowEffect';
import Hero from '@/components/Hero';
import Link from '@/components/Link';
import Page from '@/components/Page';
import Section from '@/components/Section';
import SplitLeaf from '@/components/SplitLeaf';
import {
  HOMEPAGE_CHOOSE_US_SECTION,
  HOMEPAGE_SERVICES,
} from '@/constants/homepage';
import {
  blurVariant,
  containerVariant,
  fadeInSlideInVariant,
  fadeInSlideLeftVariant,
  fadeInVariant,
  homeContainerTitleVariant,
  homeQuoteVariant,
  motion,
} from '@/motion/variants';
import { ArrowRightIcon } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showQuote, setShowQuote] = useState(true);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowQuote(false);
      setTimeout(() => {
        setShowTitle(true);
      }, 1000);
    }, 6000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Page>
      <GlowEffect className="" />
      {/* Title */}
      <Section className="flex h-[100vh] items-center justify-center bg-[var(--color-secondary)] text-center">
        <AnimatePresence>
          {showQuote && (
            <motion.div
              key="quote"
              variants={homeQuoteVariant}
              whileInView="visible"
              initial="hidden"
              exit="exit"
              viewport={{ once: true }}
            >
              <motion.h1
                variants={fadeInVariant}
                className="text-3xl text-white"
              >
                “Onde quer que a Arte da Medicina seja amada, haverá também amor
                pela Humanidade!”
              </motion.h1>
              <motion.p
                variants={fadeInVariant}
                className="mt-5 uppercase tracking-[5px] text-[var(--color-accent-light)]"
              >
                Hipócrates
              </motion.p>
            </motion.div>
          )}

          {/* Title */}
          {showTitle && (
            <motion.span
              key="title"
              variants={homeContainerTitleVariant}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
            >
              <motion.div
                variants={blurVariant}
                className="relative mx-auto mb-5 h-64 w-64"
              >
                <Image
                  src="/logo.png"
                  fill
                  objectFit="cover"
                  alt="Catarina Paixão Logo"
                />
              </motion.div>
              <motion.h1
                variants={fadeInSlideInVariant}
                className="text-6xl text-white"
              >
                Catarina Paixão
              </motion.h1>
              <motion.p
                variants={fadeInSlideInVariant}
                className="mt-5 uppercase tracking-[5px] text-[var(--color-accent-light)]"
              >
                Médica Funcional Integrativa
              </motion.p>
            </motion.span>
          )}
        </AnimatePresence>
        {/* Scroll down */}
        <motion.div
          variants={fadeInSlideInVariant}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="absolute -bottom-10 right-0 hidden h-72 w-12 sm:inline md:right-12"
        >
          <Image
            src="/swipe.gif"
            objectFit="cover"
            fill
            alt="scroll down"
            className="opacity-40"
          />
        </motion.div>
      </Section>
      {/* Apresentação */}
      <Section>
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <motion.div
            variants={containerVariant}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="flex-1"
          >
            <Section.Title
              title="Paixão mora-me no nome e vive no modo como cuido."
              subtitle="Apresentação"
              animation="left"
            />
            <motion.p variants={fadeInSlideLeftVariant} className="mt-8">
              Bem-vindo(a), o meu nome é Catarina Paixão. Carrego em mim uma
              enorme capacidade de me apaixonar pelas mais diversas expressões
              da vida — e desde cedo me senti profundamente atraída pelos
              mistérios da mente e do corpo humano. Após concluir a Faculdade de
              Medicina na Universidade de Lisboa, iniciei um percurso
              profissional que incluiu urgências hospitalares, serviços
              prisionais e o início da especialização em Anestesiologia. Cada
              uma dessas vivências foi me ensinando muito sobre os limites do
              ser humano e a sua imensa capacidade de superação — aprofundando a
              minha compreensão <b>prática</b> sobre a conexão entre corpo
              -mente - emoções. <br />
              Ao longo deste caminho, fui também mergulhando noutras linguagens
              do cuidado: estudei Psicologia Analítica Junguiana, Yoga e
              Meditação, Astrologia e outras práticas integrativas. A minha
              própria jornada de cura foi o que me revelou o valor de uma
              abordagem verdadeiramente holística —e o que me conduziu à
              Pós-graduação em Medicina Funcional Integrativa. <br />
              Hoje, como médica, coloco toda a minha <b>paixão</b> e
              conhecimento ao serviço de quem me procura. Mantenho-me em
              constante escuta e aprendizagem sobre o Ser Humano — e o Mistério
              profundo que é existir.
            </motion.p>
          </motion.div>
          <div className="flex-1">
            <SplitLeaf
              images={['/img/homepage_2.jpg', '/img/homepage_1.jpg']}
            />
          </div>
        </div>
      </Section>
      {/* Serviços */}
      <Section className="bg-[var(--color-background-alt)]">
        <Section.Title
          subtitle="Serviços"
          title="Cuidar é mais do que uma profissão"
          className="text-center"
          animation="left"
        />
        <motion.div
          variants={containerVariant}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {HOMEPAGE_SERVICES.map(({ number, title, description, href }) => (
            <motion.span
              variants={fadeInSlideInVariant}
              key={number}
              className="h-full"
            >
              <NextLink href={href} className="block h-full">
                <ServiceCard
                  subtitle={number}
                  title={title}
                  description={description}
                  action={
                    <div className="flex items-center gap-2 text-sm text-[var(--color-accent)]">
                      Saber mais
                      <ArrowRightIcon size={15} />
                    </div>
                  }
                />
              </NextLink>
            </motion.span>
          ))}
        </motion.div>
      </Section>

      {/* Promoção de serviços */}
      <Hero
        subtitle="Base no Sentir"
        title={`"Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana." - Carl Jung`}
        content="Este pode ser o início de uma jornada transformadora para a sua saúde e bem-estar. Ofereço um olhar atento e cuidadoso sobre si mesmo, combinando ciência e intuição para encontrarmos o equilíbrio que merece. Vamos juntos trilhar este caminho?"
        actionButton={
          <Link href="/servicos" label="Saber mais" variant="outline" />
        }
      />

      {/* Health cards */}
      <Section className="-mt-12">
        <HealthCards />
      </Section>

      {/* Serviços */}
      <Section className="bg-[var(--color-secondary)]">
        <motion.div
          variants={containerVariant}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="relative mb-10 rounded-md bg-[url('https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/man-pouring-tea-during-tea-ceremony-at-home-NSQZ9AE.jpg')] bg-cover bg-center p-10 md:p-20"
        >
          <div className="absolute inset-0 rounded-md bg-emerald-950/45"></div>
          <div className="relative z-10">
            <Section.Title
              subtitle="sentir apoio"
              title="Caminho Natural para a Saúde"
              color="text-white"
              className="mb-20"
              animation="left"
            />
            <motion.div
              variants={containerVariant}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-12 md:grid-cols-2"
            >
              {HOMEPAGE_CHOOSE_US_SECTION.map(
                ({ title, description }, index) => (
                  <motion.div
                    variants={fadeInSlideInVariant}
                    key={index}
                    className="flex-1 border-b border-gray-600 pb-10"
                  >
                    <h5 className="mb-4 text-xl text-white">{title}</h5>
                    <p className="text-gray-300">{description}</p>
                  </motion.div>
                ),
              )}
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* FAQS */}
      <FaqsPreview />
    </Page>
  );
}
