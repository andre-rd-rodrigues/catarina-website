import Page from '@/components/Page';
import Section from '@/components/Section';
import React from 'react';

function PrivacyPolicy() {
  return (
    <Page>
      <Page.Title
        src="https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/small-white-ceramic-mortar-with-eucalyptus-leaves-AANHPA2.jpg"
        title="FAQS"
      />
      <Section>
        <Section.Title
          title="Política de Privacidade"
          subtitle="Legislação"
          animation="left"
          className="mb-6"
        />

        <p>
          Esta Política de Privacidade descreve como são tratadas as informações
          dos visitantes neste website. Valorizamos a sua privacidade e adotamos
          práticas que respeitam os seus dados.
        </p>

        <h2 className="mt-6">1. Dados que Recolhemos</h2>
        <p className="mb-4">
          Este website não recolhe dados pessoais identificáveis dos visitantes.
          Não pedimos nome, e-mail ou qualquer outra informação pessoal através
          do site.
        </p>

        <h2 className="mt-6">2. Ferramenta de Análise Utilizada</h2>
        <p className="mb-4">
          Utilizamos o serviço{' '}
          <strong>Insights (https://getinsights.io)</strong> para obter
          estatísticas anónimas sobre o uso do site, como número de visitantes,
          páginas visualizadas e tempo de navegação.
        </p>
        <p className="mb-4">
          O Insights não utiliza cookies e não recolhe nem armazena dados
          pessoais identificáveis. Toda a informação recolhida é completamente
          anónima e serve apenas para fins estatísticos e de melhoria contínua
          do site.
        </p>

        <h2 className="mt-6">3. Partilha de Dados</h2>
        <p className="mb-4">
          Não partilhamos qualquer tipo de dado com terceiros. Todos os dados
          anónimos recolhidos através do Insights permanecem privados e são
          utilizados exclusivamente para análise interna.
        </p>

        <h2 className="mt-6">4. Direitos do Utilizador</h2>
        <p className="mb-4">
          Como não recolhemos nem armazenamos dados pessoais, não há necessidade
          de solicitar acesso, alteração ou remoção de dados, uma vez que esses
          dados não existem.
        </p>

        <h2 className="mt-6">5. Alterações a Esta Política</h2>
        <p className="mb-4">
          Poderemos atualizar esta política ocasionalmente para refletir
          mudanças nos nossos serviços ou no cumprimento legal. A versão mais
          recente estará sempre disponível nesta página.
        </p>

        <h2 className="mt-6">6. Contacto</h2>
        <p className="mb-4">
          Se tiver alguma dúvida sobre esta Política de Privacidade, pode entrar
          em contacto através do e-mail disponível na página de contacto do
          website.
        </p>

        <p className="mt-6">
          <em>Última atualização: 2 de maio de 2025</em>
        </p>
      </Section>
    </Page>
  );
}

export default PrivacyPolicy;
