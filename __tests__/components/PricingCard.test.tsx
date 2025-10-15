import React from 'react';
import { render, screen } from '@testing-library/react';
import PricingCard from '@/components/Cards/PricingCard';

describe('PricingCard Component', () => {
  const mockProps = {
    title: 'Test Service',
    price: '€100',
    services: ['Service 1', 'Service 2', 'Service 3'],
  };

  it('renders with correct title and price', () => {
    render(<PricingCard {...mockProps} />);

    expect(screen.getByText('Test Service')).toBeInTheDocument();
    expect(screen.getByText('€100')).toBeInTheDocument();
  });

  it('renders all services in a list', () => {
    render(<PricingCard {...mockProps} />);

    expect(screen.getByText('Service 1')).toBeInTheDocument();
    expect(screen.getByText('Service 2')).toBeInTheDocument();
    expect(screen.getByText('Service 3')).toBeInTheDocument();
  });

  it('renders checkmark icons for each service', () => {
    render(<PricingCard {...mockProps} />);

    const checkmarks = document.querySelectorAll('svg');
    expect(checkmarks).toHaveLength(3); // One for each service
  });

  it('renders subtitle when provided', () => {
    render(<PricingCard {...mockProps} subtitle="Premium Package" />);

    expect(screen.getByText('Premium Package')).toBeInTheDocument();
  });

  it('does not render subtitle when not provided', () => {
    render(<PricingCard {...mockProps} />);

    expect(screen.queryByText('Premium Package')).not.toBeInTheDocument();
  });

  it('renders note when provided', () => {
    const note = 'This is a <strong>special note</strong> with HTML.';
    render(<PricingCard {...mockProps} note={note} />);

    // Check that HTML elements are rendered
    expect(document.querySelector('strong')).toBeInTheDocument();
    expect(document.querySelector('strong')).toHaveTextContent('special note');
  });

  it('does not render note section when not provided', () => {
    render(<PricingCard {...mockProps} />);

    const noteDiv = document.querySelector('.mt-2.text-xs.text-gray-500');
    expect(noteDiv).not.toBeInTheDocument();
  });

  it('renders correct button text for "Saúde Integrativa" title', () => {
    render(<PricingCard {...mockProps} title="Saúde Integrativa" />);

    expect(screen.getByText('Consultar')).toBeInTheDocument();
  });

  it('renders correct button text for other titles', () => {
    render(<PricingCard {...mockProps} title="Other Service" />);

    expect(screen.getByText('Agendar')).toBeInTheDocument();
  });

  it('renders WhatsApp link with correct href', () => {
    render(<PricingCard {...mockProps} />);

    const link = screen.getByText('Agendar').closest('a');
    expect(link).toHaveAttribute('href', 'https://wa.me/+351928259010');
  });


  it('handles empty services array', () => {
    render(<PricingCard {...mockProps} services={[]} />);

    const servicesList = document.querySelector('ul');
    expect(servicesList).toBeInTheDocument();
    expect(servicesList?.children).toHaveLength(0);
  });

  it('handles single service', () => {
    render(<PricingCard {...mockProps} services={['Single Service']} />);

    expect(screen.getByText('Single Service')).toBeInTheDocument();
    const checkmarks = document.querySelectorAll('svg');
    expect(checkmarks).toHaveLength(1);
  });
});
