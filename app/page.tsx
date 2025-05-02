'use client';
import HealthCards from '@/components/Cards/HealthCards';
import ServiceCard from '@/components/Cards/ServiceCard';
import FAQs from '@/components/FAQS';
import GlowEffect from '@/components/GlowEffect';
import Hero from '@/components/Hero';
import Link from '@/components/Link';
import Page from '@/components/Page';
import Section from '@/components/Section';
import SplitLeaf from '@/components/SplitLeaf';
import { FAQS } from '@/constants/faqs';
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
import { useState, useEffect } from 'react';

export default function Home() {
  const [showQuote, setShowQuote] = useState(true);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowQuote(false);
      setTimeout(() => {
        setShowTitle(true);
      }, 1000);
    }, 5000);

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
                className="relative mx-auto mb-5 h-36 w-36"
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
      {/* Sobre mim */}
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
              title="Paixão é sinónimo de cuidar"
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
            </motion.p>
          </motion.div>
          <div className="flex-1">
            <SplitLeaf
              images={[
                'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/young-woman-in-the-jacuzzi-of-a-spa-DZY55NA-800x800.jpg',
                'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/young-couple-relaxing-on-the-tepidarium-bed-in-the-KSPPWQB-683x1024.jpg',
              ]}
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
          className="mt-16 flex flex-wrap gap-5 md:flex-nowrap"
        >
          {HOMEPAGE_SERVICES.map(({ number, title, description, href }) => (
            <motion.span variants={fadeInSlideInVariant} key={number}>
              <NextLink href={href}>
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
        subtitle="Sentir é sentir"
        title={`"Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana." - Carl Jung`}
        content="Este pode ser o início de uma jornada transformadora para a sua saúde e bem-estar. A Medicina Integrativa oferece um olhar atento e cuidadoso sobre o seu corpo e mente, combinando ciência e terapias complementares para encontrar o equilíbrio que merece. Vamos juntos trilhar este caminho rumo a uma vida mais saudável e harmoniosa."
        actionButton={
          <Link href="/servicos" label="Saber mais" variant="outline" />
        }
      />
      <Section className="-mt-12">
        <HealthCards />
      </Section>

      {/* Áreas de atuação */}
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
      <Section>
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="flex-1">
            <SplitLeaf
              images={[
                'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/young-woman-in-the-jacuzzi-of-a-spa-DZY55NA-800x800.jpg',
                'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/young-couple-relaxing-on-the-tepidarium-bed-in-the-KSPPWQB-683x1024.jpg',
              ]}
            />
          </div>
          <motion.div
            variants={containerVariant}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="flex-1"
          >
            <Section.Title
              title="Perguntas Frequentes"
              subtitle="FAQS"
              animation="left"
              className="mb-6"
            />
            <p className="mb-8">
              Quando se trata da nossa saúde, queremos ter a certeza de que
              estamos a fazer as melhores escolhas e, por isso, é natural que
              muitas perguntas surjam. Para o ajudar, aqui estão algumas das
              questões mais comuns:
            </p>
            <FAQs items={FAQS} />
          </motion.div>
        </div>
      </Section>
    </Page>
  );
}
