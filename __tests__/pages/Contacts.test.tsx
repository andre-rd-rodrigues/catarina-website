import React from 'react';
import { screen } from '@testing-library/react';
import Contacts from '@/app/contactos/page';
import { setupCommonMocks } from '../__mocks__/common';
import { renderWithMotion } from '../__utils__/test-helpers';
import { CONTACTS } from '@/constants/common';

setupCommonMocks();

describe('Contacts Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the page title correctly', () => {
    renderWithMotion(<Contacts />);

    expect(screen.getByTestId('page')).toBeInTheDocument();
    expect(screen.getByTestId('page-title')).toBeInTheDocument();
    expect(screen.getByText('Contactos')).toBeInTheDocument();
  });

  it('renders the main section with correct title and subtitle', () => {
    renderWithMotion(<Contacts />);

    expect(screen.getByText('contactos')).toBeInTheDocument();
    expect(screen.getByText('Estou aqui para ajudar.')).toBeInTheDocument();
    expect(screen.getByText('Vamos juntos?')).toBeInTheDocument();
  });

  it('displays contact information correctly', () => {
    renderWithMotion(<Contacts />);

    expect(screen.getByText('Atendimento Presencial:')).toBeInTheDocument();
    expect(screen.getByText(CONTACTS.address)).toBeInTheDocument();
    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText(CONTACTS.email)).toBeInTheDocument();
    expect(screen.getByText('Telemóvel:')).toBeInTheDocument();
    expect(screen.getByText('+351 928259010')).toBeInTheDocument();
    expect(screen.getByText('Redes Sociais:')).toBeInTheDocument();
  });

  it('renders contact links with correct href attributes', () => {
    renderWithMotion(<Contacts />);

    const emailLink = screen.getByRole('link', { name: CONTACTS.email });
    expect(emailLink).toHaveAttribute('href', `mailto:${CONTACTS.email}`);
    expect(emailLink).toHaveAttribute('target', '_blank');

    const phoneLink = screen.getByRole('link', { name: '+351 928259010' });
    expect(phoneLink).toHaveAttribute(
      'href',
      `https://wa.me/${CONTACTS.phone}`,
    );
    expect(phoneLink).toHaveAttribute('target', '_blank');

    const instagramLink = screen.getByRole('link', { name: 'Instagram' });
    expect(instagramLink).toHaveAttribute('href', CONTACTS.instagram);
    expect(instagramLink).toHaveAttribute('target', '_blank');
    expect(instagramLink).toHaveAttribute('aria-label', 'Instagram');
  });

  it('renders the Instagram icon', () => {
    renderWithMotion(<Contacts />);

    const instagramIcon = screen
      .getByRole('link', { name: 'Instagram' })
      .querySelector('svg');
    expect(instagramIcon).toBeInTheDocument();
    expect(instagramIcon).toHaveAttribute('data-icon', 'Instagram');
  });

  it('renders the profile image', () => {
    renderWithMotion(<Contacts />);

    const profileImage = screen.getByAltText('Sobre Mim - Catarina Paixão');
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src', '/img/profile.jpg');
  });

  it('renders the contact form section', () => {
    renderWithMotion(<Contacts />);

    expect(screen.getByText('Formulário:')).toBeInTheDocument();
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });

  it('applies correct CSS classes to main elements', () => {
    renderWithMotion(<Contacts />);

    const pageElement = screen.getByTestId('page');
    expect(pageElement).toHaveClass('min-h-0');

    const motionDivs = screen.getAllByRole('generic');
    expect(
      motionDivs.some((div) =>
        div.className.includes(
          'flex flex-wrap justify-between gap-0 md:flex-nowrap md:gap-10',
        ),
      ),
    ).toBe(true);

    expect(
      motionDivs.some((div) =>
        div.className.includes(
          'relative aspect-[1/1] w-full overflow-hidden rounded-md shadow-lg',
        ),
      ),
    ).toBe(true);
  });

  it('renders all motion components with correct variants', () => {
    renderWithMotion(<Contacts />);

    expect(screen.getByText('Estou aqui para ajudar.')).toBeInTheDocument();
    expect(screen.getByText('Formulário:')).toBeInTheDocument();
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });

  it('displays contact information in a grid layout', () => {
    renderWithMotion(<Contacts />);

    const gridContainer = screen
      .getByText('Atendimento Presencial:')
      .closest('.mx-auto');
    expect(gridContainer).toHaveClass(
      'mx-auto',
      'max-w-5xl',
      'grid',
      'grid-cols-1',
      'gap-8',
      'md:grid-cols-2',
    );
  });

  it('renders all required headings with correct hierarchy', () => {
    renderWithMotion(<Contacts />);

    expect(screen.getByText('Contactos')).toBeInTheDocument();
    expect(screen.getByText('Estou aqui para ajudar.')).toBeInTheDocument();
    expect(screen.getByText('Formulário:')).toBeInTheDocument();
    expect(screen.getByText('Atendimento Presencial:')).toBeInTheDocument();
    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText('Telemóvel:')).toBeInTheDocument();
    expect(screen.getByText('Redes Sociais:')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    renderWithMotion(<Contacts />);

    const instagramLink = screen.getByRole('link', { name: 'Instagram' });
    expect(instagramLink).toHaveAttribute('aria-label', 'Instagram');
    const profileImage = screen.getByAltText('Sobre Mim - Catarina Paixão');
    expect(profileImage).toBeInTheDocument();
  });
});
