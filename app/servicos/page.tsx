'use client';

import FAQs from '@/components/FAQS';
import Page from '@/components/Page';
import PriceTable from '@/components/PriceTable';
import Section from '@/components/Section';
import SplitLeaf from '@/components/SplitLeaf';
import { FAQS } from '@/constants/faqs';
import {
  containerVariant,
  fadeInSlideInVariant,
  fadeInSlideLeftVariant,
} from '@/motion/variants';
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
            <motion.div
              variants={fadeInSlideLeftVariant}
              className="mt-8 space-y-4"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat, nulla minus? Unde fuga nihil exercitationem rerum?
                Doloremque consectetur magnam voluptates alias deserunt quam
                eveniet incidunt et quibusdam molestiae ab sapiente mollitia
                inventore obcaecati amet, aut, recusandae est at sint
                blanditiis.
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
            <motion.div
              variants={fadeInSlideLeftVariant}
              className="mt-8 space-y-4"
            >
              <span id="mapa-astral-human-design" />
              <p id="sessoes-de-terapia-saude-mental">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat, nulla minus? Unde fuga nihil exercitationem rerum?
                Doloremque consectetur magnam voluptates alias deserunt quam
                eveniet incidunt et quibusdam molestiae ab sapiente mollitia
                inventore obcaecati amet, aut, recusandae est at sint
                blanditiis.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Mapa Astral + Human Design */}
        <div className="mb-28 flex flex-col gap-8 md:flex-row md:gap-12">
          <motion.div
            variants={containerVariant}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="flex-1"
          >
            <Section.Title
              title="Mapa Astral + Human Design"
              subtitle="03."
              animation="left"
            />
            <motion.div
              variants={fadeInSlideLeftVariant}
              className="mt-8 space-y-4"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat, nulla minus? Unde fuga nihil exercitationem rerum?
                Doloremque consectetur magnam voluptates alias deserunt quam
                eveniet incidunt et quibusdam molestiae ab sapiente mollitia
                inventore obcaecati amet, aut, recusandae est at sint
                blanditiis.
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
      </Section>
      <Section className="bg-[var(--color-background-alt)]">
        <Section.Title
          title="Serviços & Packs"
          animation="left"
          subtitle="Preçário"
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
              Encontre respostas para as perguntas mais comuns sobre medicina
              integrativa e os meus serviços. Se tiver mais dúvidas, não hesite
              em contactar-me.
            </p>
            <FAQs items={FAQS} />
          </motion.div>
        </div>
      </Section>
    </Page>
  );
}

export default Services;
