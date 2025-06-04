import React from 'react';
import Section from '../Section';
import SplitLeafImage from '../SplitLeaf';
import {
  containerVariant,
  fadeInSlideLeftVariant,
  motion,
} from '@/motion/variants';
import { FAQS } from '@/constants/faqs';
import FAQs from '@/components/FAQS';
import { CONTACTS } from '@/constants/common';
import Link from 'next/link';
import AppLink from '@/components/Link';

function FaqsPreview() {
  return (
    <Section>
      <div className="flex flex-col gap-8 md:flex-row md:gap-12">
        <div className="flex-1">
          <SplitLeafImage
            images={['/img/homepage_3.jpg', '/img/meditacao.jpg']}
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
          <motion.p className="mb-8" variants={fadeInSlideLeftVariant}>
            Encontre respostas para as perguntas mais comuns acerca dos meus
            serviços. Se não encontrar a que procura,{' '}
            <Link
              href={`https://wa.me/${CONTACTS.phone}`}
              className="relative inline-block text-[var(--color-danger)] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[var(--color-danger)] after:transition-all after:duration-300 hover:after:w-full"
            >
              fale comigo.
            </Link>
          </motion.p>
          <FAQs items={FAQS.slice(0, 4)} />
          <div className="mt-5 flex justify-end">
            <AppLink href="/faqs" variant="outline" label="Ver mais" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

export default FaqsPreview;
