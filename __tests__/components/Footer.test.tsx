import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';
import { CONTACTS } from '@/constants/common';
import { FOOTER_NAVBAR } from '@/constants/navbar';
import {
  findNavLink,
  findFooterBottomLink,
  expectExternalLinksToOpenInNewTab,
  expectElementToHaveClasses,
} from '../__utils__/test-helpers';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  describe('Header Section', () => {
    it('renders the logo with correct attributes', () => {
      const logo = screen.getByAltText('Catarina Paixão Logo');
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute('src', '/logo.png');
      expect(logo).toHaveAttribute('width', '40');
      expect(logo).toHaveAttribute('height', '40');
    });

    it('renders the company name', () => {
      expect(screen.getByText('Catarina Paixão')).toBeInTheDocument();
    });

    it('renders the quote from Hipócrates', () => {
      expect(
        screen.getByText(/Onde quer que a Arte da Medicina seja amada/),
      ).toBeInTheDocument();
      expect(screen.getByText(/Hipocrátes/)).toBeInTheDocument();
    });

    it('renders all navigation links', () => {
      FOOTER_NAVBAR.forEach(({ name, href }) => {
        const navLink = findNavLink(name);
        expect(navLink).toBeInTheDocument();
        expect(navLink).toHaveAttribute('href', href);
      });
    });
  });

  describe('Contact Information Section', () => {
    it('renders the address section with correct title', () => {
      expect(screen.getByText('Atendimento Presencial:')).toBeInTheDocument();
    });

    it('renders the address with MapPin icon', () => {
      // The address text is split by <br /> so we need to check for parts
      expect(
        screen.getByText(/Lisboa, Carcavelos e Região Autónoma da Madeira/),
      ).toBeInTheDocument();
      expect(screen.getByText(/Portugal/)).toBeInTheDocument();
    });

    it('renders the contacts section with correct title', () => {
      expect(screen.getByText('Contactos:')).toBeInTheDocument();
    });

    it('renders phone number with correct link and icon', () => {
      const phoneLink = screen.getByRole('link', { name: /\+351 928259010/ });
      expect(phoneLink).toBeInTheDocument();
      expect(phoneLink).toHaveAttribute(
        'href',
        `https://wa.me/${CONTACTS.phone}`,
      );
      expect(phoneLink).toHaveAttribute('target', '_blank');
    });

    it('renders email with correct link and icon', () => {
      const emailLink = screen.getByRole('link', { name: CONTACTS.email });
      expect(emailLink).toBeInTheDocument();
      expect(emailLink).toHaveAttribute('href', `mailto:${CONTACTS.email}`);
      expect(emailLink).toHaveAttribute('target', '_blank');
    });
  });

  describe('Call to Action Section', () => {
    it('renders the CTA title', () => {
      expect(screen.getByText('Comece a sua jornada.')).toBeInTheDocument();
    });

    it('renders the CTA description', () => {
      expect(
        screen.getByText(
          /Vamos juntos trilhar este caminho rumo a uma vida mais saudável e harmoniosa/,
        ),
      ).toBeInTheDocument();
    });

    it('renders the appointment button with correct attributes', () => {
      const appointmentButton = screen.getByRole('link', { name: 'Agendar' });
      expect(appointmentButton).toBeInTheDocument();
      expect(appointmentButton).toHaveAttribute(
        'href',
        `https://wa.me/${CONTACTS.phone}`,
      );
      expect(appointmentButton).toHaveAttribute('target', '_blank');
      expect(appointmentButton).toHaveAttribute('data-variant', 'danger');
      expect(appointmentButton).toHaveAttribute(
        'data-icon',
        'message-circle-more',
      );
    });
  });

  describe('Footer Bottom Section', () => {
    it('renders copyright information', () => {
      expect(screen.getByText(/Copyright © 2025/)).toBeInTheDocument();
    });

    it('renders developer link with correct attributes', () => {
      const developerLink = screen.getByRole('link', { name: 'André Rodrigo' });
      expect(developerLink).toBeInTheDocument();
      expect(developerLink).toHaveAttribute(
        'href',
        'https://www.andrerodrigo.com',
      );
      expect(developerLink).toHaveAttribute('target', '_blank');
    });

    it('renders privacy policy link', () => {
      const footerLink = findFooterBottomLink('Política de Privacidade');
      expect(footerLink).toBeInTheDocument();
      expect(footerLink).toHaveAttribute('href', '/politica-de-privacidade');
    });

    it('renders terms and conditions link', () => {
      const termsLink = screen.getByRole('link', {
        name: 'Termos e Condições',
      });
      expect(termsLink).toBeInTheDocument();
      expect(termsLink).toHaveAttribute('href', '/termos');
    });

    it('renders complaints book link with correct attributes', () => {
      const complaintsLink = screen.getByRole('link', {
        name: 'Livro de Reclamações',
      });
      expect(complaintsLink).toBeInTheDocument();
      expect(complaintsLink).toHaveAttribute(
        'href',
        'https://www.livroreclamacoes.pt/Inicio/',
      );
      expect(complaintsLink).toHaveAttribute('target', '_blank');
    });
  });

  describe('Styling and Layout', () => {
    it('applies correct CSS classes to the footer element', () => {
      const footer = screen.getByRole('contentinfo');
      expectElementToHaveClasses(footer, [
        'bg-[var(--color-secondary)]',
        'px-6',
        'py-12',
        'text-white',
      ]);
    });

    it('applies correct CSS classes to navigation links', () => {
      const firstNavLink = screen.getByRole('link', { name: 'Home' });
      expectElementToHaveClasses(firstNavLink, [
        'text-sm',
        'font-normal',
        'text-gray-300',
        'duration-200',
        'hover:text-white',
      ]);
    });

    it('applies correct CSS classes to contact links', () => {
      const phoneLink = screen.getByRole('link', { name: /\+351 928259010/ });
      expectElementToHaveClasses(phoneLink, [
        'flex',
        'items-center',
        'gap-3',
        'text-sm',
        'font-light',
        'text-gray-300',
        'duration-200',
        'hover:text-white',
      ]);
    });
  });

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      expect(
        screen.getByRole('heading', { level: 2, name: 'Catarina Paixão' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', {
          level: 3,
          name: 'Atendimento Presencial:',
        }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', { level: 3, name: 'Contactos:' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', {
          level: 3,
          name: 'Comece a sua jornada.',
        }),
      ).toBeInTheDocument();
    });

    it('has proper alt text for images', () => {
      const logo = screen.getByAltText('Catarina Paixão Logo');
      expect(logo).toBeInTheDocument();
    });
  });

  describe('External Links', () => {
    it('opens external links in new tabs', () => {
      expectExternalLinksToOpenInNewTab([
        'André Rodrigo',
        'Livro de Reclamações',
        /\+351 928259010/,
        CONTACTS.email,
        'Agendar',
      ]);
    });
  });
});
