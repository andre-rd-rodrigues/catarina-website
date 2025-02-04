'use client';
import React, { useState } from 'react';
import Button from '../Button';

interface ContactFormProps {
  onSubmit?: (data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ firstName, lastName, email, phone, message });
    }
    // Otherwise, handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full shadow-sm">
      {/* Grid container: two columns on medium+ screens, single column on small */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* First Name */}
        <div className="flex flex-col">
          <label htmlFor="firstName" className="font-marcellus mb-1 text-lg">
            Primeiro Nome <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Joana"
            className="border-0 border-b border-gray-300 bg-transparent py-1 font-light text-[var(--color-text)] focus:border-green-700 focus:outline-none"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label htmlFor="lastName" className="font-marcellus mb-1 text-lg">
            Sobrenome <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Rodrigues"
            className="border-0 border-b border-gray-300 bg-transparent py-1 font-light text-[var(--color-text)] focus:border-green-700 focus:outline-none"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            placeholder="exemplo@mail.com"
            className="border-0 border-b border-gray-300 bg-transparent py-1 font-light text-[var(--color-text)] focus:border-green-700 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="font-marcellus mb-1 text-lg">
            Telemóvel
          </label>
          <input
            id="phone"
            type="text"
            placeholder="Número de telefone"
            className="border-0 border-b border-gray-300 bg-transparent py-1 font-light text-[var(--color-text)] focus:border-green-700 focus:outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Message (Spans two columns on medium+ screens) */}
        <div className="col-span-1 flex flex-col md:col-span-2">
          <label htmlFor="message" className="font-marcellus mb-1 text-lg">
            Mensagem <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder="Escreva aqui a sua mensagem..."
            className="border-0 border-b border-gray-300 bg-transparent py-1 font-light text-[var(--color-text)] focus:border-green-700 focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-3 flex justify-center">
        <Button
          label="Submeter"
          onClick={handleSubmit}
          variant="accent"
          type="submit"
        />
      </div>
    </form>
  );
};

export default ContactForm;
