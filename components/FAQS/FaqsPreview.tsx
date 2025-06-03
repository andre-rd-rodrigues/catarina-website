import React from 'react';
import Section from '../Section';
import SplitLeafImage from '../SplitLeaf';
import { containerVariant, motion } from '@/motion/variants';
import { FAQS } from '@/constants/faqs';
import FAQs from '@/components/FAQS';

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
          <p className="mb-8">
            Encontre respostas para as perguntas mais comuns sobre medicina
            integrativa e os meus serviços. Se tiver mais dúvidas, não hesite em
            contactar-me.
          </p>
          <FAQs items={FAQS} />
        </motion.div>
      </div>
    </Section>
  );
}

export default FaqsPreview;
