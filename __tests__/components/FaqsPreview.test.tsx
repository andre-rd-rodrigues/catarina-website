import React from 'react';
import { render, screen } from '@testing-library/react';
import FaqsPreview from '@/components/FAQS/FaqsPreview';

describe('FaqsPreview Component', () => {
  it('renders the main title and subtitle', () => {
    render(<FaqsPreview />);

    expect(screen.getByText('Perguntas Frequentes')).toBeInTheDocument();
    expect(screen.getByText('FAQS')).toBeInTheDocument();
  });

  it('renders the description text with WhatsApp link', () => {
    render(<FaqsPreview />);

    expect(
      screen.getByText(/Encontre respostas para as perguntas mais comuns/),
    ).toBeInTheDocument();
    expect(screen.getByText('fale comigo.')).toBeInTheDocument();

    const whatsappLink = screen.getByText('fale comigo.');
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/+351928259010');
  });

  it('renders the SplitLeaf component with correct images', () => {
    render(<FaqsPreview />);

    // Check that images are rendered (mocked as regular img elements)
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute('src', '/img/homepage_3.jpg');
    expect(images[1]).toHaveAttribute('src', '/img/meditacao.jpg');
  });

  it('renders FAQs component with first 4 items', () => {
    render(<FaqsPreview />);

    // Should show first 4 FAQ items from the mocked constants
    expect(screen.getByText('O que é a medicina funcional integrativa e como me pode ajudar?')).toBeInTheDocument();
    expect(screen.getByText('A medicina funcional integrativa é baseada em evidência científica?')).toBeInTheDocument();
    expect(screen.getByText('Quanto tempo demora até ver resultados?')).toBeInTheDocument();
    expect(screen.getByText('Como funciona a primeira consulta de Medicina Funcional Integrativa?')).toBeInTheDocument();

    // Should not show the 5th item
    expect(screen.queryByText('O que posso esperar das sessões de Terapia Junguiana?')).not.toBeInTheDocument();
  });

  it('renders the "Ver mais" link', () => {
    render(<FaqsPreview />);

    const verMaisLink = screen.getByText('Ver mais');
    expect(verMaisLink).toBeInTheDocument();
    expect(verMaisLink).toHaveAttribute('href', '/faqs');
  });

  it('renders within a Section component', () => {
    render(<FaqsPreview />);

    // The Section component should wrap everything
    const section = screen.getByText('Perguntas Frequentes').closest('section');
    expect(section).toBeInTheDocument();
  });
});
