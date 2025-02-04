'use client';

import Page from '@/components/Page';
import { fadeInSlideInVariant } from '@/motion/variants';
import Section from '@/components/Section';
import { SERVICES } from '@/constants/services';
import { containerVariant } from '@/motion/variants';
import { motion } from 'motion/react';
import React from 'react';
import ServiceCard from '@/components/Cards/ServiceCard';
import { HOMEPAGE_CHOOSE_US_SECTION } from '@/constants/homepage';
import Testimonials from '@/components/Testimonials';
import FAQs from '@/components/FAQS';
import SplitLeaf from '@/components/SplitLeaf';
import { FAQS } from '@/constants/faqs';
function Services() {
  return (
    <Page>
      <Page.Title
        src="https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/small-white-ceramic-mortar-with-eucalyptus-leaves-AANHPA2.jpg"
        title="Serviços"
      />
      {/* Especialidades */}
      <Section>
        <Section.Title
          subtitle="Especialidades"
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
          {SERVICES.map(({ number, title, description }) => (
            <motion.span variants={fadeInSlideInVariant} key={number}>
              <ServiceCard
                subtitle={number}
                title={title}
                description={description}
              />
            </motion.span>
          ))}
        </motion.div>
      </Section>

      {/* Pacotes de serviços */}
      <Section className="bg-[var(--color-background-alt)]">
        <Section.Title
          subtitle="Precário"
          title="Pacotes de serviços"
          className="text-center"
          animation="left"
        />
      </Section>

      {/* Promoção de serviços */}
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
              title="Avoid Sickness, the Natural Way"
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

        {/* Testimonials */}
        <Testimonials />
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium atque dolorem iste illum mollitia voluptatibus eaque
              dolorum, autem ducimus ea.
            </p>
            <FAQs items={FAQS} />
          </motion.div>
        </div>
      </Section>
    </Page>
  );
}

export default Services;
