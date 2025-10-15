import React from 'react';
import { screen } from '@testing-library/react';
import Hero from '@/components/Hero';
import { expectElementToHaveClasses, renderWithMotion } from '../__utils__/test-helpers';

describe('Hero Component', () => {
  const defaultProps = {
    title: 'Test Title',
    content: 'Test content description',
  };

  describe('Basic Rendering', () => {
    it('renders with required props', () => {
      renderWithMotion(
       
          <Hero {...defaultProps} />
    
      );

      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test content description')).toBeInTheDocument();
    });

    it('renders with all props', () => {
      const actionButton = <button>Click me</button>;
      renderWithMotion(
        <Hero
          {...defaultProps}
          subtitle="Test Subtitle"
          actionButton={actionButton}
          className="custom-class"
        />
      );

      expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test content description')).toBeInTheDocument();
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });
  });

  describe('Conditional Rendering', () => {
    it('does not render subtitle when not provided', () => {
      renderWithMotion(<Hero {...defaultProps} />);

      expect(screen.queryByText('Test Subtitle')).not.toBeInTheDocument();
    });

    it('renders subtitle when provided', () => {
      renderWithMotion(<Hero {...defaultProps} subtitle="Test Subtitle" />);

      expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    });

    it('does not render action button when not provided', () => {
      renderWithMotion(<Hero {...defaultProps} />);

      expect(screen.queryByText('Click me')).not.toBeInTheDocument();
    });

    it('renders action button when provided', () => {
      const actionButton = <button>Click me</button>;
      renderWithMotion(<Hero {...defaultProps} actionButton={actionButton} />);

      expect(screen.getByText('Click me')).toBeInTheDocument();
    });
  });

  describe('Styling and Classes', () => {
    it('applies correct CSS classes to container', () => {
      const { container } = renderWithMotion(<Hero {...defaultProps} />);

      const section = container.querySelector('section');
      expectElementToHaveClasses(section!, [
        'flex',
        'flex-col',
        'items-center',
        'justify-center',
        'text-center',
      ]);
    });

    it('applies custom className when provided', () => {
      const { container } = renderWithMotion(<Hero {...defaultProps} className="custom-class" />);

      const section = container.querySelector('section');
      expect(section).toHaveClass('custom-class');
    });

    it('applies correct classes to subtitle', () => {
      renderWithMotion(<Hero {...defaultProps} subtitle="Test Subtitle" />);

      const subtitle = screen.getByText('Test Subtitle');
      expectElementToHaveClasses(subtitle, [
        'text-md',
        'mb-5',
        'font-light',
        'uppercase',
        'tracking-[2px]',
        'text-[var(--color-accent)]',
      ]);
    });

    it('applies correct classes to title', () => {
      renderWithMotion(<Hero {...defaultProps} />);

      const title = screen.getByText('Test Title');
      expectElementToHaveClasses(title, [
        'mb-5',
        'max-w-4xl',
        'text-3xl',
        'leading-tight',
        'text-[var(--color-danger)]',
      ]);
    });

    it('applies correct classes to content', () => {
      renderWithMotion(<Hero {...defaultProps} />);

      const content = screen.getByText('Test content description');
      expectElementToHaveClasses(content, [
        'text-md',
        'mx-auto',
        'mb-7',
        'max-w-2xl',
        'text-[var(--color-text)]',
      ]);
    });
  });

  describe('Content Types', () => {
    it('renders string content', () => {
      renderWithMotion(<Hero {...defaultProps} content="String content" />);

      expect(screen.getByText('String content')).toBeInTheDocument();
    });

    it('renders JSX content', () => {
      const jsxContent = (
        <>
          <span>JSX span</span>
          <strong>JSX strong</strong>
        </>
      );
      renderWithMotion(<Hero {...defaultProps} content={jsxContent} />);

      expect(screen.getByText('JSX span')).toBeInTheDocument();
      expect(screen.getByText('JSX strong')).toBeInTheDocument();
    });

    it('renders complex action button', () => {
      const complexButton = (
        <div>
          <button>Primary Action</button>
          <span>Secondary text</span>
        </div>
      );
      renderWithMotion(<Hero {...defaultProps} actionButton={complexButton} />);

      expect(screen.getByText('Primary Action')).toBeInTheDocument();
      expect(screen.getByText('Secondary text')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper heading structure', () => {
      renderWithMotion(<Hero {...defaultProps} subtitle="Test Subtitle" />);

      const subtitle = screen.getByText('Test Subtitle');
      const title = screen.getByText('Test Title');

      expect(subtitle.tagName).toBe('P');
      expect(title.tagName).toBe('H3');
    });

    it('maintains semantic structure', () => {
      const { container } = renderWithMotion(<Hero {...defaultProps} />);

      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });
  });
});
