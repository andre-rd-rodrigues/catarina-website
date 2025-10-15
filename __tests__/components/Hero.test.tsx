import React from 'react';
import { render, screen } from '@testing-library/react';
import { MotionConfig } from 'motion/react';
import Hero from '@/components/Hero';
import { expectElementToHaveClasses } from '../__utils__/test-helpers';

// Mock Section component
jest.mock('@/components/Section', () => {
  return function MockSection({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return <section className={className}>{children}</section>;
  };
});

describe('Hero Component', () => {
  const defaultProps = {
    title: 'Test Title',
    content: 'Test content description',
  };

  describe('Basic Rendering', () => {
    it('renders with required props', () => {
      render(
        <MotionConfig transition={{ duration: 0 }}>
          <Hero {...defaultProps} />
        </MotionConfig>,
      );

      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test content description')).toBeInTheDocument();
    });

    it('renders with all props', () => {
      const actionButton = <button>Click me</button>;
      render(
        <MotionConfig transition={{ duration: 0 }}>
          <Hero
            {...defaultProps}
            subtitle="Test Subtitle"
            actionButton={actionButton}
            className="custom-class"
          />
        </MotionConfig>,
      );

      expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test content description')).toBeInTheDocument();
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });
  });

  describe('Conditional Rendering', () => {
    it('does not render subtitle when not provided', () => {
      render(
        <MotionConfig transition={{ duration: 0 }}>
          <Hero {...defaultProps} />
        </MotionConfig>,
      );

      expect(screen.queryByText('Test Subtitle')).not.toBeInTheDocument();
    });

    it('renders subtitle when provided', () => {
      render(
        <MotionConfig transition={{ duration: 0 }}>
          <Hero {...defaultProps} subtitle="Test Subtitle" />
        </MotionConfig>,
      );

      expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    });

    it('does not render action button when not provided', () => {
      render(
        <MotionConfig transition={{ duration: 0 }}>
          <Hero {...defaultProps} />
        </MotionConfig>,
      );

      expect(screen.queryByText('Click me')).not.toBeInTheDocument();
    });

    it('renders action button when provided', () => {
      const actionButton = <button>Click me</button>;
      render(
        <MotionConfig transition={{ duration: 0 }}>
          <Hero {...defaultProps} actionButton={actionButton} />
        </MotionConfig>,
      );

      expect(screen.getByText('Click me')).toBeInTheDocument();
    });
  });

  describe('Styling and Classes', () => {
    it('applies correct CSS classes to container', () => {
      const { container } = render(
        <MotionConfig transition={{ duration: 0 }}>
          <Hero {...defaultProps} />
        </MotionConfig>,
      );

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
      const { container } = render(
        <MotionConfig transition={{ duration: 0 }}>
          <Hero {...defaultProps} className="custom-class" />
        </MotionConfig>,
      );

      const section = container.querySelector('section');
      expect(section).toHaveClass('custom-class');
    });

    it('applies correct classes to subtitle', () => {
      render(
        <MotionConfig transition={{ duration: 0 }}>
          <Hero {...defaultProps} subtitle="Test Subtitle" />
        </MotionConfig>,
      );

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
      render(
        <MotionConfig transition={{ duration: 0 }}>
          <Hero {...defaultProps} />
        </MotionConfig>,
      );

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
      render(
        <MotionConfig transition={{ duration: 0 }}>
          <Hero {...defaultProps} />
        </MotionConfig>,
      );

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
      render(
        <MotionConfig transition={{ duration: 0 }}>
          <Hero {...defaultProps} content="String content" />
        </MotionConfig>,
      );

      expect(screen.getByText('String content')).toBeInTheDocument();
    });

    it('renders JSX content', () => {
      const jsxContent = (
        <>
          <span>JSX span</span>
          <strong>JSX strong</strong>
        </>
      );
      render(
        <MotionConfig transition={{ duration: 0 }}>
          <Hero {...defaultProps} content={jsxContent} />
        </MotionConfig>,
      );

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
      render(
        <MotionConfig transition={{ duration: 0 }}>
          <Hero {...defaultProps} actionButton={complexButton} />
        </MotionConfig>,
      );

      expect(screen.getByText('Primary Action')).toBeInTheDocument();
      expect(screen.getByText('Secondary text')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper heading structure', () => {
      render(
        <MotionConfig transition={{ duration: 0 }}>
          <Hero {...defaultProps} subtitle="Test Subtitle" />
        </MotionConfig>,
      );

      const subtitle = screen.getByText('Test Subtitle');
      const title = screen.getByText('Test Title');

      expect(subtitle.tagName).toBe('P');
      expect(title.tagName).toBe('H3');
    });

    it('maintains semantic structure', () => {
      const { container } = render(
        <MotionConfig transition={{ duration: 0 }}>
          <Hero {...defaultProps} />
        </MotionConfig>,
      );

      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });
  });
});
