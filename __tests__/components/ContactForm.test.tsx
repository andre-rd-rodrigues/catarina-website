import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '@/components/ContactForm';
import { expectElementToHaveClasses } from '../__utils__/test-helpers';
import { ValidationErrorProps } from '@formspree/react';

// Mock @formspree/react
jest.mock('@formspree/react', () => ({
  useForm: jest.fn(),
  ValidationError: ({
    prefix,
    field,
    errors,
  }: ValidationErrorProps<{
    firstName: string;
    email: string;
    phone: string;
    message: string;
  }>) => {
    const errorArray = Array.isArray(errors) ? errors : [];
    const fieldErrors = errorArray.filter(
      (error: { field: string; message: string }) => error.field === field,
    );
    return fieldErrors?.length > 0 ? (
      <div data-testid={`${field}-error`} className="mt-1 text-sm text-red-500">
        {prefix}: {fieldErrors[0].message}
      </div>
    ) : null;
  },
}));

describe('ContactForm Component', () => {
  const mockHandleSubmit = jest.fn();
  const mockUseForm = jest.mocked(
    jest.requireActual('@formspree/react').useForm,
  );

  beforeEach(() => {
    jest.clearAllMocks();
    // Default mock implementation
    mockUseForm.mockReturnValue([
      {
        succeeded: false,
        submitting: false,
        errors: [],
      },
      mockHandleSubmit,
    ]);
  });

  describe('Form Rendering', () => {
    it('renders the form with all required fields', () => {
      const { container } = render(<ContactForm />);

      expect(container.querySelector('form')).toBeInTheDocument();
      expect(screen.getByLabelText(/Nome \*/)).toBeInTheDocument();
      expect(screen.getByLabelText(/Email \*/)).toBeInTheDocument();
      expect(screen.getByLabelText(/Telemóvel/)).toBeInTheDocument();
      expect(screen.getByLabelText(/Mensagem \*/)).toBeInTheDocument();
    });

    it('renders form with correct structure and classes', () => {
      const { container } = render(<ContactForm />);

      const form = container.querySelector('form');
      expectElementToHaveClasses(form!, ['mx-auto', 'w-full']);

      const grid = form!.querySelector('.grid');
      expectElementToHaveClasses(grid! as HTMLElement, [
        'grid',
        'grid-cols-1',
        'gap-6',
        'md:grid-cols-2',
      ]);
    });

    it('renders all input fields with correct attributes', () => {
      render(<ContactForm />);

      const firstNameInput = screen.getByLabelText(/Nome \*/);
      expect(firstNameInput).toHaveAttribute('type', 'text');
      expect(firstNameInput).toHaveAttribute('name', 'firstName');
      expect(firstNameInput).toHaveAttribute('id', 'firstName');
      expect(firstNameInput).toHaveAttribute('required');
      expect(firstNameInput).toHaveAttribute(
        'placeholder',
        'Escreva o seu nome aqui...',
      );

      const emailInput = screen.getByLabelText(/Email \*/);
      expect(emailInput).toHaveAttribute('type', 'email');
      expect(emailInput).toHaveAttribute('name', 'email');
      expect(emailInput).toHaveAttribute('id', 'email');
      expect(emailInput).toHaveAttribute('required');
      expect(emailInput).toHaveAttribute('placeholder', 'exemplo@mail.com');

      const phoneInput = screen.getByLabelText(/Telemóvel/);
      expect(phoneInput).toHaveAttribute('type', 'text');
      expect(phoneInput).toHaveAttribute('name', 'phone');
      expect(phoneInput).toHaveAttribute('id', 'phone');
      expect(phoneInput).not.toHaveAttribute('required');
      expect(phoneInput).toHaveAttribute('placeholder', 'Número de telemóvel');

      const messageInput = screen.getByLabelText(/Mensagem \*/);
      expect(messageInput).toHaveAttribute('name', 'message');
      expect(messageInput).toHaveAttribute('id', 'message');
      expect(messageInput).toHaveAttribute('required');
      expect(messageInput).toHaveAttribute('rows', '2');
      expect(messageInput).toHaveAttribute(
        'placeholder',
        'Escreva aqui a sua mensagem...',
      );
    });

    it('renders submit button with correct properties', () => {
      render(<ContactForm />);

      const submitButton = screen.getByRole('button', { name: 'Submeter' });
      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toHaveAttribute('type', 'submit');
      expect(submitButton).not.toBeDisabled();
    });
  });

  describe('Form Labels and Accessibility', () => {
    it('renders labels with required indicators', () => {
      render(<ContactForm />);

      const requiredFields = [
        { label: 'Nome', hasRequired: true },
        { label: 'Email', hasRequired: true },
        { label: 'Telemóvel', hasRequired: false },
        { label: 'Mensagem', hasRequired: true },
      ];

      requiredFields.forEach(({ label, hasRequired }) => {
        const labelElement = screen.getByText(new RegExp(`${label}.*`));
        expect(labelElement).toBeInTheDocument();

        if (hasRequired) {
          const requiredSpan = labelElement.querySelector('.text-red-500');
          expect(requiredSpan).toBeInTheDocument();
          expect(requiredSpan).toHaveTextContent('*');
        } else {
          const requiredSpan = labelElement.querySelector('.text-red-500');
          expect(requiredSpan).not.toBeInTheDocument();
        }
      });
    });

    it('has proper label associations', () => {
      render(<ContactForm />);

      const firstNameInput = screen.getByLabelText(/Nome \*/);
      const emailInput = screen.getByLabelText(/Email \*/);
      const phoneInput = screen.getByLabelText(/Telemóvel/);
      const messageInput = screen.getByLabelText(/Mensagem \*/);

      expect(firstNameInput).toHaveAttribute('id', 'firstName');
      expect(emailInput).toHaveAttribute('id', 'email');
      expect(phoneInput).toHaveAttribute('id', 'phone');
      expect(messageInput).toHaveAttribute('id', 'message');
    });
  });

  describe('Form Styling', () => {
    it('applies correct CSS classes to input fields', () => {
      render(<ContactForm />);

      const inputs = screen.getAllByRole('textbox');
      const textarea = screen.getByRole('textbox', { name: /Mensagem/ });

      const expectedClasses = [
        'border-0',
        'border-b',
        'border-gray-300',
        'bg-transparent',
        'py-1',
        'font-light',
        'text-[var(--color-text)]',
        'focus:border-green-700',
        'focus:outline-none',
      ];

      [...inputs, textarea].forEach((input) => {
        expectElementToHaveClasses(input, expectedClasses);
      });
    });

    it('applies correct CSS classes to labels', () => {
      render(<ContactForm />);

      const labels = screen.getAllByText(/Nome|Email|Telemóvel|Mensagem/);
      labels.forEach((label) => {
        expectElementToHaveClasses(label, [
          'font-marcellus',
          'mb-1',
          'text-lg',
        ]);
      });
    });
  });

  describe('Form Submission States', () => {
    it('shows success message when form submission succeeds', () => {
      mockUseForm.mockReturnValue([
        {
          succeeded: true,
          submitting: false,
          errors: [],
        },
        mockHandleSubmit,
      ]);

      render(<ContactForm />);

      expect(
        screen.getByText('Obrigado pelo seu contacto!'),
      ).toBeInTheDocument();
      expect(
        screen.getByText('Em breve entrarei em contacto consigo.'),
      ).toBeInTheDocument();
      expect(screen.queryByRole('form')).not.toBeInTheDocument();
    });

    it('shows success message with correct styling', () => {
      mockUseForm.mockReturnValue([
        {
          succeeded: true,
          submitting: false,
          errors: [],
        },
        mockHandleSubmit,
      ]);

      render(<ContactForm />);

      const successContainer = screen
        .getByText('Obrigado pelo seu contacto!')
        .closest('div');
      expectElementToHaveClasses(successContainer!, [
        'flex',
        'flex-col',
        'items-center',
        'justify-center',
        'py-8',
      ]);

      const title = screen.getByText('Obrigado pelo seu contacto!');
      expectElementToHaveClasses(title, ['font-marcellus', 'mb-2', 'text-2xl']);
    });

    it('disables submit button when submitting', () => {
      mockUseForm.mockReturnValue([
        {
          succeeded: false,
          submitting: true,
          errors: [],
        },
        mockHandleSubmit,
      ]);

      render(<ContactForm />);

      const submitButton = screen.getByRole('button', { name: 'Submeter' });
      expect(submitButton).toBeDisabled();
    });

    it('enables submit button when not submitting', () => {
      mockUseForm.mockReturnValue([
        {
          succeeded: false,
          submitting: false,
          errors: [],
        },
        mockHandleSubmit,
      ]);

      render(<ContactForm />);

      const submitButton = screen.getByRole('button', { name: 'Submeter' });
      expect(submitButton).not.toBeDisabled();
    });
  });

  describe('Form Validation Errors', () => {
    it('displays validation errors for firstName field', () => {
      mockUseForm.mockReturnValue([
        {
          succeeded: false,
          submitting: false,
          errors: [{ field: 'firstName', message: 'Nome é obrigatório' }],
        },
        mockHandleSubmit,
      ]);

      render(<ContactForm />);

      const firstNameError = screen.getByTestId('firstName-error');
      expect(firstNameError).toBeInTheDocument();
      expect(firstNameError).toHaveTextContent('Nome: Nome é obrigatório');
    });

    it('displays validation errors for email field', () => {
      mockUseForm.mockReturnValue([
        {
          succeeded: false,
          submitting: false,
          errors: [{ field: 'email', message: 'Email inválido' }],
        },
        mockHandleSubmit,
      ]);

      render(<ContactForm />);

      const emailError = screen.getByTestId('email-error');
      expect(emailError).toBeInTheDocument();
      expect(emailError).toHaveTextContent('Email: Email inválido');
    });

    it('displays validation errors for phone field', () => {
      mockUseForm.mockReturnValue([
        {
          succeeded: false,
          submitting: false,
          errors: [{ field: 'phone', message: 'Número inválido' }],
        },
        mockHandleSubmit,
      ]);

      render(<ContactForm />);

      const phoneError = screen.getByTestId('phone-error');
      expect(phoneError).toBeInTheDocument();
      expect(phoneError).toHaveTextContent('Telemóvel: Número inválido');
    });

    it('displays validation errors for message field', () => {
      mockUseForm.mockReturnValue([
        {
          succeeded: false,
          submitting: false,
          errors: [{ field: 'message', message: 'Mensagem é obrigatória' }],
        },
        mockHandleSubmit,
      ]);

      render(<ContactForm />);

      const messageError = screen.getByTestId('message-error');
      expect(messageError).toBeInTheDocument();
      expect(messageError).toHaveTextContent(
        'Mensagem: Mensagem é obrigatória',
      );
    });

    it('displays multiple validation errors', () => {
      mockUseForm.mockReturnValue([
        {
          succeeded: false,
          submitting: false,
          errors: [
            { field: 'firstName', message: 'Nome é obrigatório' },
            { field: 'email', message: 'Email inválido' },
            { field: 'message', message: 'Mensagem é obrigatória' },
          ],
        },
        mockHandleSubmit,
      ]);

      render(<ContactForm />);

      expect(screen.getByTestId('firstName-error')).toBeInTheDocument();
      expect(screen.getByTestId('email-error')).toBeInTheDocument();
      expect(screen.getByTestId('message-error')).toBeInTheDocument();
    });

    it('does not display errors when there are none', () => {
      mockUseForm.mockReturnValue([
        {
          succeeded: false,
          submitting: false,
          errors: [],
        },
        mockHandleSubmit,
      ]);

      render(<ContactForm />);

      expect(screen.queryByTestId('firstName-error')).not.toBeInTheDocument();
      expect(screen.queryByTestId('email-error')).not.toBeInTheDocument();
      expect(screen.queryByTestId('phone-error')).not.toBeInTheDocument();
      expect(screen.queryByTestId('message-error')).not.toBeInTheDocument();
    });
  });

  describe('Form Interaction', () => {
    it('calls handleSubmit when form is submitted', async () => {
      const { container } = render(<ContactForm />);

      const form = container.querySelector('form');
      fireEvent.submit(form!);

      expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    });

    it('allows user to type in input fields', () => {
      render(<ContactForm />);

      const firstNameInput = screen.getByLabelText(/Nome \*/);
      const emailInput = screen.getByLabelText(/Email \*/);
      const messageInput = screen.getByLabelText(/Mensagem \*/);

      fireEvent.change(firstNameInput, { target: { value: 'João Silva' } });
      fireEvent.change(emailInput, { target: { value: 'joao@example.com' } });
      fireEvent.change(messageInput, {
        target: { value: 'Olá, gostaria de saber mais informações.' },
      });

      expect(firstNameInput).toHaveValue('João Silva');
      expect(emailInput).toHaveValue('joao@example.com');
      expect(messageInput).toHaveValue(
        'Olá, gostaria de saber mais informações.',
      );
    });

    it('allows user to type in phone field', () => {
      render(<ContactForm />);

      const phoneInput = screen.getByLabelText(/Telemóvel/);
      fireEvent.change(phoneInput, { target: { value: '912345678' } });

      expect(phoneInput).toHaveValue('912345678');
    });
  });

  describe('Grid Layout', () => {
    it('has correct grid structure for form fields', () => {
      const { container } = render(<ContactForm />);

      const form = container.querySelector('form');
      const grid = form!.querySelector('.grid');
      expect(grid).toBeInTheDocument();

      // First name should span both columns
      const firstNameContainer = screen
        .getByLabelText(/Nome \*/)
        .closest('div');
      expect(firstNameContainer).toHaveClass('col-span-1', 'md:col-span-2');

      // Email and phone should be in separate columns
      const emailContainer = screen.getByLabelText(/Email \*/).closest('div');
      const phoneContainer = screen.getByLabelText(/Telemóvel/).closest('div');
      expect(emailContainer).toHaveClass('flex', 'flex-col');
      expect(phoneContainer).toHaveClass('flex', 'flex-col');

      // Message should span both columns
      const messageContainer = screen
        .getByLabelText(/Mensagem \*/)
        .closest('div');
      expect(messageContainer).toHaveClass('col-span-1', 'md:col-span-2');
    });
  });

  describe('Environment Variables', () => {
    it('uses environment variable for form ID', () => {
      const originalEnv = process.env.NEXT_PUBLIC_FORM_ID;
      process.env.NEXT_PUBLIC_FORM_ID = 'test-form-id';

      render(<ContactForm />);

      expect(mockUseForm).toHaveBeenCalledWith('test-form-id');

      // Restore original value
      process.env.NEXT_PUBLIC_FORM_ID = originalEnv;
    });

    it('uses empty string as fallback when form ID is not set', () => {
      const originalEnv = process.env.NEXT_PUBLIC_FORM_ID;
      delete process.env.NEXT_PUBLIC_FORM_ID;

      render(<ContactForm />);

      expect(mockUseForm).toHaveBeenCalledWith('');

      // Restore original value
      process.env.NEXT_PUBLIC_FORM_ID = originalEnv;
    });
  });

  describe('Edge Cases', () => {
    it('handles empty form submission', () => {
      const { container } = render(<ContactForm />);

      const form = container.querySelector('form');
      fireEvent.submit(form!);

      expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    });

    it('handles form with only required fields filled', () => {
      const { container } = render(<ContactForm />);

      const firstNameInput = screen.getByLabelText(/Nome \*/);
      const emailInput = screen.getByLabelText(/Email \*/);
      const messageInput = screen.getByLabelText(/Mensagem \*/);

      fireEvent.change(firstNameInput, { target: { value: 'João' } });
      fireEvent.change(emailInput, { target: { value: 'joao@test.com' } });
      fireEvent.change(messageInput, { target: { value: 'Test message' } });

      const form = container.querySelector('form');
      fireEvent.submit(form!);

      expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    });

    it('handles very long input values', () => {
      render(<ContactForm />);

      const longText = 'A'.repeat(1000);
      const messageInput = screen.getByLabelText(/Mensagem \*/);

      fireEvent.change(messageInput, { target: { value: longText } });
      expect(messageInput).toHaveValue(longText);
    });
  });
});
