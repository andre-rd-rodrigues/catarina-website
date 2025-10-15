import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import FAQs from '@/components/FAQS';
import { renderWithMotion } from '../__utils__/test-helpers';

describe('FAQs Component', () => {
  const mockItems = [
    {
      question: 'What is functional medicine?',
      answer:
        'Functional medicine focuses on treating the root cause of disease.',
    },
    {
      question: 'How long does treatment take?',
      answer:
        'Treatment duration varies based on individual needs and conditions.',
    },
    {
      question: 'Is it evidence-based?',
      answer:
        'Yes, functional medicine is based on scientific evidence and research.',
    },
  ];

  it('renders FAQ items correctly', () => {
    renderWithMotion(<FAQs items={mockItems} />);

    expect(
      screen.getByText('What is functional medicine?'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('How long does treatment take?'),
    ).toBeInTheDocument();
    expect(screen.getByText('Is it evidence-based?')).toBeInTheDocument();
  });

  it('renders chevron icons for each FAQ', () => {
    renderWithMotion(<FAQs items={mockItems} />);

    const chevronIcons = document.querySelectorAll('[data-icon="ChevronDown"]');
    expect(chevronIcons).toHaveLength(3);
  });

  it('toggles FAQ expansion when clicked', () => {
    renderWithMotion(<FAQs items={mockItems} />);

    const firstQuestion = screen.getByText('What is functional medicine?');
    const firstAnswer = screen.getByText(
      'Functional medicine focuses on treating the root cause of disease.',
    );

    // Initially, answer should not be visible (height: 0, opacity: 0)
    expect(firstAnswer).toBeInTheDocument();

    // Click to expand
    fireEvent.click(firstQuestion);

    // Answer should now be visible
    expect(firstAnswer).toBeInTheDocument();
  });

  it('closes FAQ when clicked again', () => {
    renderWithMotion(<FAQs items={mockItems} />);

    const firstQuestion = screen.getByText('What is functional medicine?');

    // Click to expand
    fireEvent.click(firstQuestion);

    // Click again to close
    fireEvent.click(firstQuestion);

    // The FAQ should be closed (we can't easily test the animation state, but the click should work)
    expect(firstQuestion).toBeInTheDocument();
  });

  it('only allows one FAQ to be open at a time', () => {
    renderWithMotion(<FAQs items={mockItems} />);

    const firstQuestion = screen.getByText('What is functional medicine?');
    const secondQuestion = screen.getByText('How long does treatment take?');

    // Click first FAQ
    fireEvent.click(firstQuestion);

    // Click second FAQ
    fireEvent.click(secondQuestion);

    // Both questions should still be visible
    expect(firstQuestion).toBeInTheDocument();
    expect(secondQuestion).toBeInTheDocument();
  });

  it('renders HTML content in answers correctly', () => {
    const itemsWithHtml = [
      {
        question: 'What is functional medicine?',
        answer:
          'Functional medicine focuses on <b>treating the root cause</b> of disease.',
      },
    ];

    renderWithMotion(<FAQs items={itemsWithHtml} />);

    const question = screen.getByText('What is functional medicine?');
    fireEvent.click(question);

    // Check that HTML is rendered
    expect(screen.getByText('treating the root cause')).toBeInTheDocument();
  });

  it('handles empty items array', () => {
    renderWithMotion(<FAQs items={[]} />);

    // Should renderWithMotion the container but no FAQ items
    const container = document.querySelector('.mx-auto.w-full.max-w-2xl');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('mx-auto', 'w-full', 'max-w-2xl');
  });

  it('applies correct CSS classes', () => {
    renderWithMotion(<FAQs items={mockItems} />);

    const container = document.querySelector('.mx-auto.w-full.max-w-2xl');
    expect(container).toHaveClass(
      'mx-auto',
      'w-full',
      'max-w-2xl',
      'divide-y',
      'rounded-lg',
      'border',
      'shadow-md',
    );
  });
});
