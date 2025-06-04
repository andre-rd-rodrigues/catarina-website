'use client';
import FAQs from '@/components/FAQS';
import Page from '@/components/Page';
import Section from '@/components/Section';
import { CONTACTS } from '@/constants/common';
import { FAQS } from '@/constants/faqs';
import { fadeInSlideLeftVariant, motion } from '@/motion/variants';
import Link from 'next/link';
import React from 'react';

function FAQSPage() {
  return (
    <Page>
      <Page.Title
        src="https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/small-white-ceramic-mortar-with-eucalyptus-leaves-AANHPA2.jpg"
        title="FAQS"
      />
      <Section className="sm:py-12">
        <Section.Title
          title="Perguntas Frequentes"
          subtitle="FAQS"
          animation="left"
          className="mb-6"
        />
        <motion.p
          className="mb-12"
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={fadeInSlideLeftVariant}
        >
          Encontre respostas para as perguntas mais comuns sobre medicina
          integrativa e os meus serviços. Se não encontrou a resposta que
          pretendia,{' '}
          <Link
            className="text-[var(--color-danger)] hover:underline"
            href={`https://wa.me/${CONTACTS.phone}`}
          >
            fale comigo.
          </Link>
        </motion.p>
        <FAQs items={FAQS} />
      </Section>
    </Page>
  );
}

export default FAQSPage;
