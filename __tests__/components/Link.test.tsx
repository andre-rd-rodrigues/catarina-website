import React from 'react';
import { render, screen } from '@testing-library/react';
import Link from '@/components/Link';

describe('Link Component', () => {
  it('renders with label', () => {
    render(<Link href="/test-link" label="Test Link" />);
    expect(screen.getByText('Test Link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test-link');
  });

  it('renders as a link element', () => {
    render(<Link href="/test-link" label="Test Link" />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
  });

  it('forwards additional props', () => {
    render(
      <Link
        href="/test-link"
        label="Link with Props"
        target="_blank"
        className="custom-class"
      />,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveClass('custom-class');
  });

  it('handles different variants', () => {
    const { container } = render(
      <Link href="/test-link" label="Test Link" variant="danger" />,
    );
    const link = container.querySelector('a');
    expect(link).toBeInTheDocument();
  });
});
