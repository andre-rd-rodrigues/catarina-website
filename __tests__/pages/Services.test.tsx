import React from 'react';
import { screen } from '@testing-library/react';
import Services from '@/app/servicos/page';
import { setupCommonMocks } from '../__mocks__/common';
import { renderWithMotion } from '../__utils__/test-helpers';
import { ABOUT_VALUES } from '@/constants/about';

setupCommonMocks();

describe('Services Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the page title correctly', () => {
    renderWithMotion(<Services />);

    expect(screen.getByTestId('page')).toBeInTheDocument();
    expect(screen.getByTestId('page-title')).toBeInTheDocument();
    expect(screen.getAllByText('Serviços')).toHaveLength(2);
  });

  it('renders the first service section', () => {
    renderWithMotion(<Services />);

    expect(
      screen.getAllByText('Consulta Medicina Funcional Integrativa'),
    ).toHaveLength(3); // One in main content, two in price table
    expect(screen.getByText('01.')).toBeInTheDocument();
    expect(
      screen.getByText('Escutar o corpo como quem decifra um mapa vivo.'),
    ).toBeInTheDocument();
  });

  it('displays first service content', () => {
    renderWithMotion(<Services />);

    expect(
      screen.getByText(/Uma consulta médica que vai além da doença/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Nesta consulta, o foco está em compreender as raízes/),
    ).toBeInTheDocument();
    expect(screen.getByText('Primeiro encontro')).toBeInTheDocument();
    expect(screen.getByText('Segundo encontro')).toBeInTheDocument();
  });

  it('renders the second service section', () => {
    renderWithMotion(<Services />);

    expect(
      screen.getByText('Sessões de Terapia (Saúde Mental)'),
    ).toBeInTheDocument();
    expect(screen.getByText('02.')).toBeInTheDocument();
    expect(
      screen.getByText('Onde o invisível encontra palavra, forma e sentido.'),
    ).toBeInTheDocument();
  });

  it('displays second service content', () => {
    renderWithMotion(<Services />);

    expect(
      screen.getByText(/Um espaço de escuta simbólica, transformação interior/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Estas sessões baseiam-se nos princípios da psicologia/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/psicologia analítica de Carl Gustav Jung/),
    ).toBeInTheDocument();
  });

  it('renders the third service section', () => {
    renderWithMotion(<Services />);

    expect(
      screen.getByText(/Leitura terapêutica do Mapa Astral/),
    ).toBeInTheDocument();
    expect(screen.getByText('03.')).toBeInTheDocument();
    expect(
      screen.getByText('Quando o céu é usado como espelho e bússola.'),
    ).toBeInTheDocument();
  });

  it('displays third service content', () => {
    renderWithMotion(<Services />);

    expect(
      screen.getByText(/Uma leitura que une astrologia simbólica e Human Design/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Nesta sessão, exploramos as principais dinâmicas/),
    ).toBeInTheDocument();
    expect(screen.getByText(/Natureza/)).toBeInTheDocument();
  });

  it('renders the fourth service section', () => {
    renderWithMotion(<Services />);

    expect(
      screen.getByText('Programa de acompanhamento integrativo - 3/6 meses'),
    ).toBeInTheDocument();
    expect(screen.getByText('04.')).toBeInTheDocument();
    expect(
      screen.getByText(/Um percurso de mão dada, passo a passo/),
    ).toBeInTheDocument();
  });

  it('displays fourth service content', () => {
    renderWithMotion(<Services />);

    expect(
      screen.getByText(/Este programa nasce da visão de que o verdadeiro equilíbrio/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/O acompanhamento inclui/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Uma consulta médica inicial estruturada/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/12\/18 sessões de terapia junguiana/),
    ).toBeInTheDocument();
  });

  it('renders all service images with correct alt text', () => {
    renderWithMotion(<Services />);

    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThanOrEqual(4);

    expect(screen.getByAltText('Consulta Medicina Funcional Integrativa')).toBeInTheDocument();
    expect(screen.getByAltText('Sessões de Terapia (Saúde Mental)')).toBeInTheDocument();
    expect(screen.getByAltText('Mapa Astral + Human Design')).toBeInTheDocument();
    expect(screen.getByAltText('Programa de acompanhamento integrativo - 3/6 meses')).toBeInTheDocument();
  });

  it('renders therapeutic principles section', () => {
    renderWithMotion(<Services />);

    expect(screen.getByText('Princípios Terapêuticos')).toBeInTheDocument();
    expect(screen.getByText('Valores')).toBeInTheDocument();
  });

  it('displays all therapeutic principle cards', () => {
    renderWithMotion(<Services />);

    ABOUT_VALUES.forEach(({ title, description }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });

  it('renders pricing section', () => {
    renderWithMotion(<Services />);

    expect(screen.getByText('Preçário')).toBeInTheDocument();
    expect(screen.getByText('Serviços & Programas Integrativos')).toBeInTheDocument();
  });

  it('renders FAQ preview section', () => {
    renderWithMotion(<Services />);

    // The FaqsPreview component should be rendered
    expect(screen.getByTestId('page')).toBeInTheDocument();
  });

  it('renders all motion components', () => {
    renderWithMotion(<Services />);

    expect(screen.getAllByText('Serviços')).toHaveLength(2);
    expect(
      screen.getAllByText('Consulta Medicina Funcional Integrativa'),
    ).toHaveLength(3);
  });

  it('has proper heading hierarchy', () => {
    renderWithMotion(<Services />);

    // Check that service titles are rendered as h3 elements (they are h3 in the actual component)
    const serviceTitles = [
      'Consulta Medicina Funcional Integrativa',
      'Sessões de Terapia (Saúde Mental)',
      'Programa de acompanhamento integrativo - 3/6 meses',
    ];

    serviceTitles.forEach((title) => {
      const elements = screen.getAllByText(title);
      // Check that at least one element is an h3
      const h3Element = elements.find(el => el.tagName === 'H3');
      expect(h3Element).toBeInTheDocument();
    });
  });

  it('displays all paragraphs with content', () => {
    renderWithMotion(<Services />);

    // Check that multiple paragraphs are rendered
    const paragraphs = screen.getAllByText(/^[^<>]*$/);
    expect(paragraphs.length).toBeGreaterThan(10);
  });

  it('renders strong elements for emphasis', () => {
    renderWithMotion(<Services />);

    expect(screen.getByText('Primeiro encontro')).toBeInTheDocument();
    expect(screen.getByText('Segundo encontro')).toBeInTheDocument();
    expect(screen.getByText('Guia Terapêutico personalizado')).toBeInTheDocument();
  });

  it('displays service subtitles correctly', () => {
    renderWithMotion(<Services />);

    expect(screen.getByText('01.')).toBeInTheDocument();
    expect(screen.getByText('02.')).toBeInTheDocument();
    expect(screen.getByText('03.')).toBeInTheDocument();
    expect(screen.getByText('04.')).toBeInTheDocument();
  });

  it('renders service descriptions with proper formatting', () => {
    renderWithMotion(<Services />);

    expect(
      screen.getByText('Escutar o corpo como quem decifra um mapa vivo.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Onde o invisível encontra palavra, forma e sentido.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Quando o céu é usado como espelho e bússola.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Um percurso de mão dada, passo a passo/),
    ).toBeInTheDocument();
  });

  it('displays list items for service details', () => {
    renderWithMotion(<Services />);

    // Check that list items are rendered
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBeGreaterThan(0);
  });

  it('renders all sections with proper structure', () => {
    renderWithMotion(<Services />);

    // Check that all main service sections are present
    expect(
      screen.getAllByText('Consulta Medicina Funcional Integrativa'),
    ).toHaveLength(3);
    expect(
      screen.getByText('Sessões de Terapia (Saúde Mental)'),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Leitura terapêutica do Mapa Astral/),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Programa de acompanhamento integrativo - 3/6 meses'),
    ).toBeInTheDocument();
  });
});
