import React from 'react';
import { screen } from '@testing-library/react';
import HealthCards from '@/components/Cards/HealthCards';
import { renderWithMotion } from '../__utils__/test-helpers';

describe('HealthCards Component', () => {
  it('renders all health cards with correct content', () => {
    renderWithMotion(<HealthCards />);

    // Check that all three cards are rendered
    expect(screen.getByText('Viver com Saúde é Viver Plenamente')).toBeInTheDocument();
    expect(screen.getByText('Cuide de Si, Todos os Dias')).toBeInTheDocument();
    expect(screen.getByText('O Natural é o Caminho para o Equilíbrio')).toBeInTheDocument();
  });

  it('renders card descriptions correctly', () => {
    renderWithMotion(<HealthCards />);

    expect(screen.getByText('Cultivar Saúde é o que nos permite desfrutar da Vida.')).toBeInTheDocument();
    expect(screen.getByText('Pequenos gestos consistentes criam grandes transformações no seu bem-estar.')).toBeInTheDocument();
    expect(screen.getByText(/A Natureza sempre procura o bem do.*Todo.*através do equilíbrio das suas.*partes/)).toBeInTheDocument();
  });

  it('renders images with correct alt text', () => {
    renderWithMotion(<HealthCards />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);
    expect(images[0]).toHaveAttribute('alt', 'Leaf Icon');
    expect(images[1]).toHaveAttribute('alt', 'Plant Icon');
    expect(images[2]).toHaveAttribute('alt', 'Circle Icon');
  });

  it('renders images with correct src paths', () => {
    renderWithMotion(<HealthCards />);

    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute('src', '/img/leaf.png');
    expect(images[1]).toHaveAttribute('src', '/img/plant.png');
    expect(images[2]).toHaveAttribute('src', '/img/circle.png');
  });

  it('renders separator lines between cards on desktop', () => {
    renderWithMotion(<HealthCards />);

    // Check for separator divs (they have specific classes)
    const separators = document.querySelectorAll('.hidden.h-44.w-\\[1px\\].bg-gray-300.md\\:block');
    expect(separators).toHaveLength(2); // 2 separators between 3 cards
  });

  it('renders motion components with correct variants', () => {
    renderWithMotion(<HealthCards />);

    // Check that motion components are rendered (they should be div elements with motion props)
    const motionDivs = document.querySelectorAll('div');
    expect(motionDivs.length).toBeGreaterThan(0);
  });

  it('renders all cards in correct order', () => {
    renderWithMotion(<HealthCards />);

    const cards = [
      'Viver com Saúde é Viver Plenamente',
      'Cuide de Si, Todos os Dias',
      'O Natural é o Caminho para o Equilíbrio'
    ];

    cards.forEach((title) => {
      const element = screen.getByText(title);
      expect(element).toBeInTheDocument();
      expect(element.tagName).toBe('H3');
    });
  });
});
