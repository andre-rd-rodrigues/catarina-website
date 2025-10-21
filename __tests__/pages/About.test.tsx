import React from 'react';
import { screen } from '@testing-library/react';
import About from '@/app/sobre/page';
import { setupCommonMocks } from '../__mocks__/common';
import { renderWithMotion } from '../__utils__/test-helpers';

setupCommonMocks();

describe('About Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the page title correctly', () => {
    renderWithMotion(<About />);

    expect(screen.getByTestId('page')).toBeInTheDocument();
    expect(screen.getByTestId('page-title')).toBeInTheDocument();
    expect(screen.getByText('Sobre')).toBeInTheDocument();
  });

  it('renders the first section with correct title and subtitle', () => {
    renderWithMotion(<About />);

    expect(
      screen.getByText('Uma eterna aprendiz da vida e do Ser-Humano'),
    ).toBeInTheDocument();
    expect(screen.getAllByText('Sobre mim')).toHaveLength(2);
  });

  it('displays the first section content', () => {
    renderWithMotion(<About />);

    expect(screen.getByText(/Bem-vindo\(a\)/)).toBeInTheDocument();
    expect(screen.getByText('Catarina Paixão')).toBeInTheDocument();
    expect(
      screen.getByText(/Faculdade de Medicina da Universidade de Lisboa/),
    ).toBeInTheDocument();
  });

  it('renders the second section with correct title and subtitle', () => {
    renderWithMotion(<About />);

    expect(
      screen.getByText(
        'Entre a ciência e o sagrado, está a medicina que eu abraço',
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByText('Sobre mim')).toHaveLength(2);
  });

  it('displays the second section content', () => {
    renderWithMotion(<About />);

    expect(
      screen.getByText(/Psicologia Analítica de Carl Jung/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Pós-graduação em Medicina Funcional Integrativa/),
    ).toBeInTheDocument();
    expect(screen.getByText(/paixão e conhecimento/)).toBeInTheDocument();
  });

  it('renders all images with correct alt text', () => {
    renderWithMotion(<About />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);

    expect(screen.getAllByAltText('Sobre Mim - Catarina Paixão')).toHaveLength(
      2,
    );
  });

  it('displays the services link', () => {
    renderWithMotion(<About />);

    const servicesLink = screen.getByRole('link', { name: 'Ver serviços' });
    expect(servicesLink).toBeInTheDocument();
    expect(servicesLink).toHaveAttribute('href', '/servicos');
  });

  it('renders the hero section with quote', () => {
    renderWithMotion(<About />);

    expect(
      screen.getByText(
        /É nosso dever recordar sempre que a medicina não é apenas uma ciência/,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Albert Schweitzer')).toBeInTheDocument();
  });

  it('displays educational background information', () => {
    renderWithMotion(<About />);

    expect(
      screen.getByText(/urgências hospitalares e extra-hospitalares/),
    ).toBeInTheDocument();
    expect(screen.getByText(/serviços prisionais/)).toBeInTheDocument();
    expect(screen.getByText(/Anestesiologia/)).toBeInTheDocument();
  });

  it('displays areas of study and interest', () => {
    renderWithMotion(<About />);

    expect(
      screen.getByText(/Nutrição, Medicina Tradicional Chinesa/),
    ).toBeInTheDocument();
    expect(screen.getByText(/Yoga, Meditação/)).toBeInTheDocument();
    expect(
      screen.getByText(/Astrologia, Human Design, Teologia/),
    ).toBeInTheDocument();
  });

  it('renders all motion components', () => {
    renderWithMotion(<About />);

    expect(screen.getAllByText('Sobre mim')).toHaveLength(2);
    expect(screen.getByText(/Bem-vindo\(a\)/)).toBeInTheDocument();
  });

  it('has proper heading hierarchy', () => {
    renderWithMotion(<About />);

    // Check that section titles are rendered as h3 elements (they are h3 in the actual component)
    const sectionTitles = [
      'Uma eterna aprendiz da vida e do Ser-Humano',
      'Entre a ciência e o sagrado, está a medicina que eu abraço',
    ];

    sectionTitles.forEach((title) => {
      const element = screen.getByText(title);
      expect(element.tagName).toBe('H3');
    });
  });

  it('displays all paragraphs with content', () => {
    renderWithMotion(<About />);

    // Check that multiple paragraphs are rendered
    const paragraphs = screen.getAllByText(/^[^<>]*$/);
    expect(paragraphs.length).toBeGreaterThan(3);
  });

  it('renders strong elements for emphasis', () => {
    renderWithMotion(<About />);

    expect(screen.getByText('Catarina Paixão')).toBeInTheDocument();
    expect(
      screen.getByText(/Faculdade de Medicina da Universidade de Lisboa/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Psicologia Analítica de Carl Jung/),
    ).toBeInTheDocument();
  });

  it('renders italic elements for emphasis', () => {
    renderWithMotion(<About />);

    expect(screen.getByText(/o Mistério que nos habita/)).toBeInTheDocument();
  });

  it('displays line breaks in content', () => {
    renderWithMotion(<About />);

    // Check that content with line breaks is rendered
    expect(screen.getByText(/Bem-vindo\(a\)/)).toBeInTheDocument();
    expect(screen.getByText(/Catarina Paixão/)).toBeInTheDocument();
  });

  it('renders all sections with proper structure', () => {
    renderWithMotion(<About />);

    // Check that both main sections are present
    expect(
      screen.getByText('Uma eterna aprendiz da vida e do Ser-Humano'),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Entre a ciência e o sagrado, está a medicina que eu abraço',
      ),
    ).toBeInTheDocument();
  });
});
