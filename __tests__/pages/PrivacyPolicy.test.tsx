import React from 'react';
import { screen } from '@testing-library/react';
import PrivacyPolicy from '@/app/politica-de-privacidade/page';
import { setupCommonMocks } from '../__mocks__/common';
import { renderWithMotion } from '../__utils__/test-helpers';

setupCommonMocks();

describe('Privacy Policy Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the page title correctly', () => {
    renderWithMotion(<PrivacyPolicy />);

    expect(screen.getByTestId('page')).toBeInTheDocument();
    expect(screen.getByTestId('page-title')).toBeInTheDocument();
    expect(screen.getAllByText('Política de Privacidade')).toHaveLength(2);
  });

  it('renders the main section with correct title and subtitle', () => {
    renderWithMotion(<PrivacyPolicy />);

    expect(screen.getAllByText('Política de Privacidade')).toHaveLength(2);
    expect(screen.getByText('Legislação')).toBeInTheDocument();
  });

  it('displays the introductory text', () => {
    renderWithMotion(<PrivacyPolicy />);

    expect(
      screen.getByText(
        /Esta Política de Privacidade descreve como são tratadas as informações/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Valorizamos a sua privacidade e adotamos/),
    ).toBeInTheDocument();
  });

  it('renders all section headings', () => {
    renderWithMotion(<PrivacyPolicy />);

    expect(screen.getByText('1. Dados que Recolhemos')).toBeInTheDocument();
    expect(
      screen.getByText('2. Ferramenta de Análise Utilizada'),
    ).toBeInTheDocument();
    expect(screen.getByText('3. Partilha de Dados')).toBeInTheDocument();
    expect(screen.getByText('4. Direitos do Utilizador')).toBeInTheDocument();
    expect(
      screen.getByText('5. Alterações a Esta Política'),
    ).toBeInTheDocument();
    expect(screen.getByText('6. Contacto')).toBeInTheDocument();
  });

  it('displays content about data collection', () => {
    renderWithMotion(<PrivacyPolicy />);

    expect(
      screen.getByText(
        /Este website não recolhe dados pessoais identificáveis/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Não pedimos nome, e-mail ou qualquer outra informação/),
    ).toBeInTheDocument();
  });

  it('displays content about analysis tools', () => {
    renderWithMotion(<PrivacyPolicy />);

    expect(
      screen.getByText(/Este website utiliza ferramentas de análise/),
    ).toBeInTheDocument();
    expect(screen.getByText('Google Search Console')).toBeInTheDocument();
    expect(screen.getByText('Hotjar')).toBeInTheDocument();
  });

  it('displays content about data sharing', () => {
    renderWithMotion(<PrivacyPolicy />);

    expect(
      screen.getByText(/Não partilhamos qualquer tipo de dado com terceiros/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Todos os dados anónimos recolhidos permanecem privados/,
      ),
    ).toBeInTheDocument();
  });

  it('displays content about user rights', () => {
    renderWithMotion(<PrivacyPolicy />);

    expect(
      screen.getByText(/Como não recolhemos nem armazenamos dados pessoais/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/não há necessidade de solicitar acesso, alteração/),
    ).toBeInTheDocument();
  });

  it('displays content about policy changes', () => {
    renderWithMotion(<PrivacyPolicy />);

    expect(
      screen.getByText(/Poderemos atualizar esta política ocasionalmente/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/A versão mais recente estará sempre disponível/),
    ).toBeInTheDocument();
  });

  it('displays contact information', () => {
    renderWithMotion(<PrivacyPolicy />);

    expect(
      screen.getByText(
        /Se tiver alguma dúvida sobre esta Política de Privacidade/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/pode entrar em contacto através do e-mail/),
    ).toBeInTheDocument();
  });

  it('displays last update date', () => {
    renderWithMotion(<PrivacyPolicy />);

    expect(
      screen.getByText(/Última atualização: 2 de maio de 2025/),
    ).toBeInTheDocument();
  });

  it('renders all motion components', () => {
    renderWithMotion(<PrivacyPolicy />);

    expect(screen.getByText('Legislação')).toBeInTheDocument();
    expect(
      screen.getByText(
        /Esta Política de Privacidade descreve como são tratadas as informações/,
      ),
    ).toBeInTheDocument();
  });

  it('has proper heading hierarchy', () => {
    renderWithMotion(<PrivacyPolicy />);

    // Check that section headings are rendered as h2 elements
    const sectionHeadings = [
      '1. Dados que Recolhemos',
      '2. Ferramenta de Análise Utilizada',
      '3. Partilha de Dados',
      '4. Direitos do Utilizador',
      '5. Alterações a Esta Política',
      '6. Contacto',
    ];

    sectionHeadings.forEach((heading) => {
      const element = screen.getByText(heading);
      expect(element.tagName).toBe('H2');
    });
  });

  it('displays all paragraphs with content', () => {
    renderWithMotion(<PrivacyPolicy />);

    // Check that multiple paragraphs are rendered
    const paragraphs = screen.getAllByText(/^[^<>]*$/);
    expect(paragraphs.length).toBeGreaterThan(5);
  });

  it('renders strong elements for emphasis', () => {
    renderWithMotion(<PrivacyPolicy />);

    expect(screen.getByText('Google Search Console')).toBeInTheDocument();
    expect(screen.getByText('Hotjar')).toBeInTheDocument();
  });

  it('renders italic elements for last update', () => {
    renderWithMotion(<PrivacyPolicy />);

    const lastUpdate = screen.getByText(/Última atualização:/);
    expect(lastUpdate.tagName).toBe('EM');
  });
});
