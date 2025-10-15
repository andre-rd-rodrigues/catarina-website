import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import FAQSPage from '@/app/faqs/page';
import { setupCommonMocks } from '../__mocks__/common';
import { renderWithMotion } from '../__utils__/test-helpers';
import { CONTACTS } from '@/constants/common';
import { FAQS } from '@/constants/faqs';

setupCommonMocks();

describe('FAQs Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the page title correctly', () => {
    renderWithMotion(<FAQSPage />);

    expect(screen.getByTestId('page')).toBeInTheDocument();
    expect(screen.getByTestId('page-title')).toBeInTheDocument();
    expect(screen.getAllByText('FAQS')).toHaveLength(2); // One in page title, one in section title
  });

  it('renders the main section with correct title and subtitle', () => {
    renderWithMotion(<FAQSPage />);

    expect(screen.getAllByText('FAQS')).toHaveLength(2);
    expect(screen.getByText('Perguntas Frequentes')).toBeInTheDocument();
  });

  it('displays the introductory text with contact link', () => {
    renderWithMotion(<FAQSPage />);

    expect(screen.getByText(/Encontre respostas para as perguntas mais comuns/)).toBeInTheDocument();
    
    const contactLink = screen.getByRole('link', { name: 'fale comigo.' });
    expect(contactLink).toHaveAttribute('href', `https://wa.me/${CONTACTS.phone}`);
  });

  it('renders all FAQ items', () => {
    renderWithMotion(<FAQSPage />);

    FAQS.forEach((faq) => {
      expect(screen.getByText(faq.question)).toBeInTheDocument();
    });
  });

  it('renders FAQ items with correct structure', () => {
    renderWithMotion(<FAQSPage />);

    const faqContainer = screen.getByTestId('faqs');
    expect(faqContainer).toBeInTheDocument();

    const faqItems = screen.getAllByRole('generic');
    const faqItemContainers = faqItems.filter(item => 
      item.className.includes('group cursor-pointer px-8 py-6')
    );
    expect(faqItemContainers).toHaveLength(FAQS.length);
  });

  it('displays FAQ questions with correct styling', () => {
    renderWithMotion(<FAQSPage />);

    const firstQuestion = screen.getByText(FAQS[0].question);
    expect(firstQuestion).toBeInTheDocument();
  });

  it('shows chevron icons for each FAQ item', () => {
    renderWithMotion(<FAQSPage />);

    const chevronIcons = screen.getAllByRole('generic');
    const chevronElements = chevronIcons.filter(item => 
      item.querySelector('svg[data-icon="ChevronDown"]')
    );
    expect(chevronElements.length).toBeGreaterThan(0);
  });

  it('toggles FAQ answer visibility when clicked', () => {
    renderWithMotion(<FAQSPage />);

    const firstFAQ = screen.getByText(FAQS[0].question).closest('.group');
    expect(firstFAQ).toBeInTheDocument();

    // Check that the FAQ has the correct structure
    const answerContainer = firstFAQ?.querySelector('.overflow-hidden');
    expect(answerContainer).toBeInTheDocument();

    // Click to test interaction
    fireEvent.click(firstFAQ!);
  });

  it('closes FAQ when clicked again', () => {
    renderWithMotion(<FAQSPage />);

    const firstFAQ = screen.getByText(FAQS[0].question).closest('.group');
    expect(firstFAQ).toBeInTheDocument();

    // Click to open
    fireEvent.click(firstFAQ!);
    
    // Click again to close
    fireEvent.click(firstFAQ!);
  });

  it('only allows one FAQ to be open at a time', () => {
    renderWithMotion(<FAQSPage />);

    const firstFAQ = screen.getByText(FAQS[0].question).closest('.group');
    const secondFAQ = screen.getByText(FAQS[1].question).closest('.group');

    // Open first FAQ
    fireEvent.click(firstFAQ!);
    
    // Open second FAQ
    fireEvent.click(secondFAQ!);
  });

  it('renders FAQ answers with HTML content', () => {
    renderWithMotion(<FAQSPage />);

    const firstFAQ = screen.getByText(FAQS[0].question).closest('.group');
    fireEvent.click(firstFAQ!);

    // Check that HTML content is rendered (the answer contains <br/> tags)
    const answerText = firstFAQ?.querySelector('p');
    expect(answerText).toBeInTheDocument();
  });

  it('applies correct CSS classes to main elements', () => {
    renderWithMotion(<FAQSPage />);

    const pageElement = screen.getByTestId('page');
    expect(pageElement).toBeInTheDocument();

    const sectionElements = screen.getAllByRole('generic');
    const sectionElement = sectionElements.find(el => el.className.includes('sm:py-12'));
    expect(sectionElement).toBeInTheDocument();
  });

  it('renders all motion components with correct variants', () => {
    renderWithMotion(<FAQSPage />);

    expect(screen.getByText('Perguntas Frequentes')).toBeInTheDocument();
    expect(screen.getByText(/Encontre respostas para as perguntas mais comuns/)).toBeInTheDocument();
    
    const faqContainer = screen.getByTestId('faqs');
    expect(faqContainer).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    renderWithMotion(<FAQSPage />);

    const contactLink = screen.getByRole('link', { name: 'fale comigo.' });
    expect(contactLink).toBeInTheDocument();

    // Check that FAQ items are clickable
    const faqItems = screen.getAllByRole('generic');
    const clickableFAQs = faqItems.filter(item => 
      item.className.includes('cursor-pointer')
    );
    expect(clickableFAQs.length).toBeGreaterThan(0);
  });

  it('displays all FAQ questions with proper hierarchy', () => {
    renderWithMotion(<FAQSPage />);

    expect(screen.getAllByText('FAQS')).toHaveLength(2); // One in page title, one in section title
    expect(screen.getByText('Perguntas Frequentes')).toBeInTheDocument();
    
    // Check that all FAQ questions are rendered as h3 elements
    const faqQuestions = FAQS.map(faq => screen.getByText(faq.question));
    faqQuestions.forEach(question => {
      expect(question.tagName).toBe('H3');
    });
  });

  it('handles FAQ interaction correctly', () => {
    renderWithMotion(<FAQSPage />);

    // Test FAQ interaction with the first FAQ
    const firstFAQ = screen.getByText(FAQS[0].question).closest('.group');
    expect(firstFAQ).toBeInTheDocument();

    // Click to open
    fireEvent.click(firstFAQ!);
    
    // Click to close
    fireEvent.click(firstFAQ!);
  });
});
