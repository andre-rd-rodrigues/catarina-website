'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from '../Button';
import { CheckCircle } from 'lucide-react';

function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORM_ID || 'contact-form';
  const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <CheckCircle size={70} className="mb-4 text-[var(--color-accent)]" />
        <h2 className="font-marcellus mb-2 text-2xl">
          Obrigado pelo seu contacto!
        </h2>
        <p className="text-center">Em breve entrarei em contacto consigo.</p>
      </div>
    );
  }
  return (
    <form data-testid="contact-form" onSubmit={handleSubmit} className="mx-auto w-full">
      {/* Grid container: two columns on medium+ screens, single column on small */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* First Name */}
        <div className="col-span-1 flex flex-col md:col-span-2">
          <label htmlFor="firstName" className="font-marcellus mb-1 text-lg">
            Nome <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Escreva o seu nome aqui..."
            className="border-0 border-b border-gray-300 bg-transparent py-1 font-light text-[var(--color-text)] focus:border-green-700 focus:outline-none"
            required
          />
          <ValidationError
            prefix="Nome"
            field="firstName"
            errors={state.errors}
          />
        </div>
        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-marcellus mb-1 text-lg">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="exemplo@mail.com"
            className="border-0 border-b border-gray-300 bg-transparent py-1 font-light text-[var(--color-text)] focus:border-green-700 focus:outline-none"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="font-marcellus mb-1 text-lg">
            Telemóvel
          </label>
          <input
            id="phone"
            type="text"
            name="phone"
            placeholder="Número de telemóvel"
            className="border-0 border-b border-gray-300 bg-transparent py-1 font-light text-[var(--color-text)] focus:border-green-700 focus:outline-none"
          />
          <ValidationError
            prefix="Telemóvel"
            field="phone"
            errors={state.errors}
          />
        </div>
        {/* Message (Spans two columns on medium+ screens) */}
        <div className="col-span-1 flex flex-col md:col-span-2">
          <label htmlFor="message" className="font-marcellus mb-1 text-lg">
            Mensagem <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={2}
            placeholder="Escreva aqui a sua mensagem..."
            className="border-0 border-b border-gray-300 bg-transparent py-1 font-light text-[var(--color-text)] focus:border-green-700 focus:outline-none"
            required
          />
          <ValidationError
            prefix="Mensagem"
            field="message"
            errors={state.errors}
          />
        </div>
      </div>
      {/* Submit Button */}
      <div className="mt-7 flex justify-center">
        <Button
          label="Submeter"
          variant="accent"
          type="submit"
          disabled={state.submitting}
        />
      </div>
    </form>
  );
}

export default ContactForm;
