import React from 'react';
import { screen } from '@testing-library/react';
import TermsAndConditions from '@/app/termos/page';
import { setupCommonMocks } from '../__mocks__/common';
import { renderWithMotion } from '../__utils__/test-helpers';

setupCommonMocks();

describe('Terms and Conditions Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the page title correctly', () => {
    renderWithMotion(<TermsAndConditions />);

    expect(screen.getByTestId('page')).toBeInTheDocument();
    expect(screen.getByTestId('page-title')).toBeInTheDocument();
    expect(screen.getAllByText('Termos e Condições')).toHaveLength(2);
  });

  it('renders the main section with correct title and subtitle', () => {
    renderWithMotion(<TermsAndConditions />);

    expect(screen.getAllByText('Termos e Condições')).toHaveLength(2);
    expect(screen.getByText('Legislação')).toBeInTheDocument();
  });

  it('displays the introductory text', () => {
    renderWithMotion(<TermsAndConditions />);

    expect(
      screen.getByText(
        /Ao aceder a este website, concorda com os seguintes termos/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Se não concordar com estes termos/),
    ).toBeInTheDocument();
  });

  it('renders all section headings', () => {
    renderWithMotion(<TermsAndConditions />);

    expect(screen.getByText('1. Uso do Website')).toBeInTheDocument();
    expect(screen.getByText('2. Propriedade Intelectual')).toBeInTheDocument();
    expect(
      screen.getByText('3. Limitação de Responsabilidade'),
    ).toBeInTheDocument();
    expect(screen.getByText('4. Ligações a Terceiros')).toBeInTheDocument();
    expect(screen.getByText('5. Análise de Utilização')).toBeInTheDocument();
    expect(screen.getByText('6. Alterações aos Termos')).toBeInTheDocument();
    expect(screen.getByText('7. Contacto')).toBeInTheDocument();
  });

  it('displays content about website usage', () => {
    renderWithMotion(<TermsAndConditions />);

    expect(
      screen.getByText(/Este website é disponibilizado para fins informativos/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /O conteúdo aqui apresentado não constitui aconselhamento/,
      ),
    ).toBeInTheDocument();
  });

  it('displays content about intellectual property', () => {
    renderWithMotion(<TermsAndConditions />);

    expect(
      screen.getByText(/Todo o conteúdo presente neste website/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/estando protegido por direitos de autor/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Não é permitido copiar, reproduzir ou distribuir/),
    ).toBeInTheDocument();
  });

  it('displays content about liability limitation', () => {
    renderWithMotion(<TermsAndConditions />);

    expect(
      screen.getByText(/Fazemos todos os esforços para manter a informação/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/não garantimos a sua exatidão ou integridade/),
    ).toBeInTheDocument();
  });

  it('displays content about third-party links', () => {
    renderWithMotion(<TermsAndConditions />);

    expect(
      screen.getByText(/Este site pode conter links para websites externos/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Não temos controlo sobre o conteúdo desses sites/),
    ).toBeInTheDocument();
  });

  it('displays content about usage analysis', () => {
    renderWithMotion(<TermsAndConditions />);

    expect(
      screen.getByText(/Este site utiliza ferramentas de análise/),
    ).toBeInTheDocument();
    expect(screen.getByText('Google Search Console')).toBeInTheDocument();
    expect(screen.getByText('Hotjar')).toBeInTheDocument();
  });

  it('displays content about terms changes', () => {
    renderWithMotion(<TermsAndConditions />);

    expect(
      screen.getByText(/Reservamo-nos o direito de atualizar estes termos/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Recomenda-se a consulta periódica desta página/),
    ).toBeInTheDocument();
  });

  it('displays contact information', () => {
    renderWithMotion(<TermsAndConditions />);

    expect(
      screen.getByText(/Para qualquer questão relacionada com estes termos/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/por favor utilize o e-mail disponibilizado/),
    ).toBeInTheDocument();
  });

  it('displays last update date', () => {
    renderWithMotion(<TermsAndConditions />);

    expect(
      screen.getByText(/Última atualização: 2 de maio de 2025/),
    ).toBeInTheDocument();
  });

  it('renders all motion components', () => {
    renderWithMotion(<TermsAndConditions />);

    expect(screen.getByText('Legislação')).toBeInTheDocument();
    expect(
      screen.getByText(
        /Ao aceder a este website, concorda com os seguintes termos/,
      ),
    ).toBeInTheDocument();
  });

  it('has proper heading hierarchy', () => {
    renderWithMotion(<TermsAndConditions />);

    // Check that section headings are rendered as h2 elements
    const sectionHeadings = [
      '1. Uso do Website',
      '2. Propriedade Intelectual',
      '3. Limitação de Responsabilidade',
      '4. Ligações a Terceiros',
      '5. Análise de Utilização',
      '6. Alterações aos Termos',
      '7. Contacto',
    ];

    sectionHeadings.forEach((heading) => {
      const element = screen.getByText(heading);
      expect(element.tagName).toBe('H2');
    });
  });

  it('displays all paragraphs with content', () => {
    renderWithMotion(<TermsAndConditions />);

    // Check that multiple paragraphs are rendered
    const paragraphs = screen.getAllByText(/^[^<>]*$/);
    expect(paragraphs.length).toBeGreaterThan(5);
  });

  it('renders strong elements for emphasis', () => {
    renderWithMotion(<TermsAndConditions />);

    expect(screen.getByText('Google Search Console')).toBeInTheDocument();
    expect(screen.getByText('Hotjar')).toBeInTheDocument();
  });

  it('renders italic elements for last update', () => {
    renderWithMotion(<TermsAndConditions />);

    const lastUpdate = screen.getByText(/Última atualização:/);
    expect(lastUpdate.tagName).toBe('EM');
  });
});
