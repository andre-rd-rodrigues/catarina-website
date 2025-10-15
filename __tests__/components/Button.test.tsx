import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/Button';
import { expectElementToHaveClasses } from '../__utils__/test-helpers';

describe('Button Component', () => {
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<Button />);
      const button = screen.getByRole('button', { name: 'Button' });
      expect(button).toBeInTheDocument();
    });

    it('renders with custom label', () => {
      render(<Button label="Click me" />);
      const button = screen.getByRole('button', { name: 'Click me' });
      expect(button).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      render(<Button className="custom-class" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });
  });

  describe('Variants', () => {
    it('renders accent variant by default', () => {
      render(<Button label="Accent Button" />);
      const button = screen.getByRole('button');
      expectElementToHaveClasses(button, [
        'bg-[var(--color-accent)]',
        'text-white',
        'hover:bg-[var(--color-secondary)]',
      ]);
    });

    it('renders danger variant correctly', () => {
      render(<Button label="Danger Button" variant="danger" />);
      const button = screen.getByRole('button');
      expectElementToHaveClasses(button, [
        'bg-[var(--color-danger)]',
        'text-white',
        'hover:bg-[var(--color-danger)]',
      ]);
    });

    it('renders outline variant correctly', () => {
      render(<Button label="Outline Button" variant="outline" />);
      const button = screen.getByRole('button');
      expectElementToHaveClasses(button, [
        'border',
        'border-[var(--color-border-primary)]',
        'text-[var(--color-primary)]',
        'hover:bg-[var(--color-secondary)]',
        'hover:text-white',
      ]);
    });
  });

  describe('Icons', () => {
    it('renders with icon when provided', () => {
      render(<Button label="Button with Icon" icon="star" />);
      const button = screen.getByRole('button');
      const icon = button.querySelector('.material-icons');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveTextContent('star');
    });

    it('applies correct icon color for accent variant', () => {
      render(<Button label="Accent with Icon" icon="star" variant="accent" />);
      const button = screen.getByRole('button');
      const icon = button.querySelector('.material-icons');
      expect(icon).toHaveClass('text-white');
    });

    it('applies correct icon color for danger variant', () => {
      render(<Button label="Danger with Icon" icon="star" variant="danger" />);
      const button = screen.getByRole('button');
      const icon = button.querySelector('.material-icons');
      expect(icon).toHaveClass('text-white');
    });

    it('applies correct icon color for outline variant', () => {
      render(
        <Button label="Outline with Icon" icon="star" variant="outline" />,
      );
      const button = screen.getByRole('button');
      const icon = button.querySelector('.material-icons');
      expect(icon).not.toHaveClass('text-white');
    });

    it('does not render icon when not provided', () => {
      render(<Button label="No Icon" />);
      const button = screen.getByRole('button');
      const icon = button.querySelector('.material-icons');
      expect(icon).not.toBeInTheDocument();
    });
  });

  describe('Full Width', () => {
    it('applies full width class when fullWidth is true', () => {
      render(<Button label="Full Width Button" fullWidth />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('w-full');
    });

    it('does not apply full width class when fullWidth is false', () => {
      render(<Button label="Normal Width Button" fullWidth={false} />);
      const button = screen.getByRole('button');
      expect(button).not.toHaveClass('w-full');
    });
  });

  describe('Base Styling', () => {
    it('applies base button classes', () => {
      render(<Button label="Base Styling Test" />);
      const button = screen.getByRole('button');
      expectElementToHaveClasses(button, [
        'flex',
        'items-center',
        'justify-center',
        'gap-2',
        'rounded-full',
        'px-7',
        'py-3',
        'text-sm',
        'font-normal',
        'shadow-lg',
        'transition-all',
        'duration-300',
      ]);
    });
  });

  describe('Event Handling', () => {
    it('handles click events', () => {
      const handleClick = jest.fn();
      render(<Button label="Clickable Button" onClick={handleClick} />);
      const button = screen.getByRole('button');

      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('handles multiple click events', () => {
      const handleClick = jest.fn();
      render(<Button label="Multi Click Button" onClick={handleClick} />);
      const button = screen.getByRole('button');

      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(3);
    });

    it('handles disabled state', () => {
      const handleClick = jest.fn();
      render(<Button label="Disabled Button" onClick={handleClick} disabled />);
      const button = screen.getByRole('button');

      expect(button).toBeDisabled();
      fireEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has proper button role', () => {
      render(<Button label="Accessible Button" />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('supports aria-label', () => {
      render(<Button label="Button" aria-label="Custom aria label" />);
      const button = screen.getByRole('button', { name: 'Custom aria label' });
      expect(button).toBeInTheDocument();
    });

    it('supports aria-describedby', () => {
      render(
        <div>
          <Button label="Button" aria-describedby="description" />
          <div id="description">Button description</div>
        </div>,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-describedby', 'description');
    });
  });

  describe('HTML Attributes', () => {
    it('passes through HTML button attributes', () => {
      render(
        <Button
          label="Button with Attributes"
          type="submit"
          form="test-form"
          data-testid="test-button"
        />,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
      expect(button).toHaveAttribute('form', 'test-form');
      expect(button).toHaveAttribute('data-testid', 'test-button');
    });

    it('supports form submission', () => {
      const handleSubmit = jest.fn();
      render(
        <form onSubmit={handleSubmit}>
          <Button label="Submit Button" type="submit" />
        </form>,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
      // Note: Form submission testing is limited in jsdom environment
    });
  });

  describe('Combined Props', () => {
    it('renders correctly with all props combined', () => {
      render(
        <Button
          label="Complete Button"
          variant="outline"
          icon="check"
          fullWidth
          className="custom-class"
          disabled
        />,
      );
      const button = screen.getByRole('button');

      expect(button).toHaveTextContent('Complete Button');
      expect(button).toHaveClass('w-full', 'custom-class');
      expect(button).toBeDisabled();
      expect(button.querySelector('.material-icons')).toHaveTextContent(
        'check',
      );
    });
  });

  describe('Edge Cases', () => {
    it('handles empty label', () => {
      render(<Button label="" />);
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('');
    });

    it('handles undefined label (uses default)', () => {
      render(<Button label={undefined} />);
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('Button');
    });

    it('handles empty icon', () => {
      render(<Button label="Empty Icon" icon="" />);
      const button = screen.getByRole('button');
      const icon = button.querySelector('.material-icons');
      // Empty string is falsy, so no icon element should be rendered
      expect(icon).not.toBeInTheDocument();
    });

    it('handles very long label', () => {
      const longLabel =
        'This is a very long button label that should still render correctly';
      render(<Button label={longLabel} />);
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent(longLabel);
    });
  });
});
