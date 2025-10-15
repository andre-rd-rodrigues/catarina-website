import React from 'react';
import { screen } from '@testing-library/react';
import InfoCard from '@/components/Cards/InfoCard';
import { renderWithMotion } from '../__utils__/test-helpers';

describe('InfoCard Component', () => {
  const mockProps = {
    icon: 'heart' as const,
    title: 'Test Title',
    description: 'Test description for the info card component.',
  };

  it('renders with correct title and description', () => {
    renderWithMotion(<InfoCard {...mockProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(
      screen.getByText('Test description for the info card component.'),
    ).toBeInTheDocument();
  });

  it('renders icon with correct attributes', () => {
    renderWithMotion(<InfoCard {...mockProps} />);

    const icon = screen.getByTestId('heart');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('data-icon', 'heart');
  });

  it('handles different icon types', () => {
    const { rerender } = renderWithMotion(
      <InfoCard {...mockProps} icon="star" />,
    );
    expect(screen.getByTestId('star')).toBeInTheDocument();

    rerender(<InfoCard {...mockProps} icon="shield" />);
    expect(screen.getByTestId('shield')).toBeInTheDocument();
  });

  it('handles long descriptions', () => {
    const longDescription =
      'This is a very long description that should still be rendered correctly by the InfoCard component. It contains multiple sentences and should wrap properly within the card layout.';

    renderWithMotion(<InfoCard {...mockProps} description={longDescription} />);

    expect(screen.getByText(longDescription)).toBeInTheDocument();
  });

  it('handles empty description', () => {
    renderWithMotion(<InfoCard {...mockProps} description="" />);

    // Check that the description paragraph exists but is empty
    const descriptionElement = document.querySelector(
      'p.mt-4.text-sm.text-gray-600',
    );
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent('');
  });

  it('renders with different title lengths', () => {
    const shortTitle = 'Short';
    const longTitle =
      'This is a very long title that should still be rendered correctly';

    const { rerender } = renderWithMotion(
      <InfoCard {...mockProps} title={shortTitle} />,
    );
    expect(screen.getByText(shortTitle)).toBeInTheDocument();

    rerender(<InfoCard {...mockProps} title={longTitle} />);
    expect(screen.getByText(longTitle)).toBeInTheDocument();
  });
});
