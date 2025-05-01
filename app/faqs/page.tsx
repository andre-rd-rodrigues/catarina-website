import FAQs from '@/components/FAQS';
import Page from '@/components/Page';
import Section from '@/components/Section';
import { FAQS } from '@/constants/faqs';
import React from 'react';

function FAQSPage() {
  return (
    <Page>
      <Page.Title
        src="https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/small-white-ceramic-mortar-with-eucalyptus-leaves-AANHPA2.jpg"
        title="FAQS"
      />
      <Section>
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
      </Section>
    </Page>
  );
}

export default FAQSPage;