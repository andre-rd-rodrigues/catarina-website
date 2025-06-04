import Page from '@/components/Page';
import Section from '@/components/Section';
import React from 'react';

function PrivacyPolicy() {
  return (
    <Page>
      <Page.Title
        src="https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/small-white-ceramic-mortar-with-eucalyptus-leaves-AANHPA2.jpg"
        title="Termos e Condições"
      />
      <Section>
        <Section.Title
          title="Termos e Condições"
          subtitle="Legislação"
          animation="left"
          className="mb-6"
        />

        <p className="mb-4">
          Ao aceder a este website, concorda com os seguintes termos e condições
          de utilização. Se não concordar com estes termos, por favor não
          utilize o site.
        </p>

        <h2 className="mt-6">1. Uso do Website</h2>
        <p className="mb-4">
          Este website é disponibilizado para fins informativos. O conteúdo aqui
          apresentado não constitui aconselhamento profissional, médico, legal
          ou de qualquer outra natureza.
        </p>

        <h2 className="mt-6">2. Propriedade Intelectual</h2>
        <p className="mb-4">
          Todo o conteúdo presente neste website — incluindo textos, imagens,
          logótipos e design — é da propriedade do titular do site ou licenciado
          para o mesmo, estando protegido por direitos de autor e outras leis de
          propriedade intelectual.
        </p>
        <p className="mb-4">
          Não é permitido copiar, reproduzir ou distribuir qualquer conteúdo sem
          autorização prévia por escrito.
        </p>

        <h2 className="mt-6">3. Limitação de Responsabilidade</h2>
        <p className="mb-4">
          Fazemos todos os esforços para manter a informação atualizada e
          precisa, mas não garantimos a sua exatidão ou integridade. Não nos
          responsabilizamos por eventuais danos resultantes do uso das
          informações aqui disponibilizadas.
        </p>

        <h2 className="mt-6">4. Ligações a Terceiros</h2>
        <p className="mb-4">
          Este site pode conter links para websites externos. Não temos controlo
          sobre o conteúdo desses sites e não assumimos qualquer
          responsabilidade pelas suas políticas ou práticas.
        </p>

        <h2 className="mt-6">5. Análise de Utilização</h2>
        <p className="mb-4">
          Este site utiliza ferramentas de análise com o objetivo de melhorar
          continuamente a experiência dos visitantes.
        </p>

        <p className="mb-4">
          Adicionalmente, utilizamos o <strong>Google Search Console</strong>{' '}
          para acompanhar o desempenho do website nos motores de busca,
          identificar problemas técnicos e otimizar o conteúdo — sem recolha de
          dados identificáveis.
        </p>

        <p className="mb-4">
          Também recorremos ao <strong>Hotjar</strong>, que nos permite analisar
          interações como cliques, scroll e navegação através de dados anónimos.
          Estes dados são usados exclusivamente para fins de melhoria do site.
        </p>

        <p className="mb-4">
          Ao utilizar este website, concorda com o uso destas ferramentas
          conforme descrito.
        </p>

        <h2 className="mt-6">6. Alterações aos Termos</h2>
        <p className="mb-4">
          Reservamo-nos o direito de atualizar estes termos a qualquer momento.
          Recomenda-se a consulta periódica desta página para estar a par de
          eventuais alterações.
        </p>

        <h2 className="mt-6">7. Contacto</h2>
        <p className="mb-4">
          Para qualquer questão relacionada com estes termos, por favor utilize
          o e-mail disponibilizado na página de contacto do site.
        </p>

        <p className="mt-6">
          <em>Última atualização: 2 de maio de 2025</em>
        </p>
      </Section>
    </Page>
  );
}

export default PrivacyPolicy;
