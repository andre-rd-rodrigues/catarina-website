import AppLink from '@/components/Link';
import { CONTACTS } from '@/constants/common';
import { FOOTER_NAVBAR } from '@/constants/navbar';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
  <footer className="bg-[var(--color-secondary)] px-6 py-12 text-white">
    <div className="mx-auto max-w-6xl">
      {/* Start */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/20 pb-16">
        {/* Logo & Description */}
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Catarina Paixão Logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </Link>
          <h2 className="mt-3 text-2xl font-semibold">Catarina Paixão</h2>
          <p className="mt-2 text-sm text-gray-300">
            “Onde quer que a Arte da Medicina seja amada, <br />
            haverá também amor pela Humanidade!” - <i>Hipocrátes</i>
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-6 sm:mt-0 sm:gap-9">
          {FOOTER_NAVBAR.map(({ name, href }, index) => (
            <Link
              key={index}
              href={href}
              className="text-sm font-normal text-gray-300 duration-200 hover:text-white"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
      {/* Middle */}
      <div className="mx-auto flex flex-wrap justify-between gap-8 border-b border-white/20 py-16">
        {/* Address */}
        <div>
          <h3 className="mb-3 text-lg font-medium">Endereço</h3>
          <p className=" flex items-center gap-3 text-sm font-light text-gray-300">
            <MapPin size={18} />
            {CONTACTS.address}
            <br />
            Portugal
          </p>
        </div>
        {/* Contacts */}
        <div>
          <h3 className="mb-3 text-lg font-medium">Contactos</h3>
          <Link
            target="_blank"
            href={`https://wa.me/${CONTACTS.phone}`}
            className="flex items-center gap-3 text-sm font-light  text-gray-300 duration-200 hover:text-white"
          >
            <Phone size={18} /> +351 928259010
          </Link>

          <Link
            target="_blank"
            href={`mailto:${CONTACTS.email}`}
            className="mt-2 flex items-center gap-3 text-sm font-light text-gray-300 duration-200 hover:text-white"
          >
            <Mail size={18} /> {CONTACTS.email}
          </Link>
        </div>
        {/* CTA Section */}
        <div>
          <h3 className="text-lg font-medium">Comece a sua jornada.</h3>
          <p className="mb-4 mt-2 max-w-80 text-sm text-gray-300">
            Vamos juntos trilhar este caminho rumo a uma vida mais saudável e
            harmoniosa.
          </p>
          <div className="inline-block">
            <AppLink
              href={`https://wa.me/${CONTACTS.phone}`}
              target="_blank"
              label="Agendar"
              variant="danger"
              icon="message-circle-more"
            />
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="mt-8 flex flex-col items-center justify-between text-gray-300 md:flex-row">
        <p className="text-xs text-gray-300">
          Copyright © 2025{' '}
          <Link
            href="https://www.andrerodrigo.com"
            target="_blank"
            className="underline hover:text-white"
          >
            André Rodrigo
          </Link>
        </p>
        <div className="mt-4 flex gap-4 text-sm md:mt-0">
          <Link
            href="/politica-de-privacidade"
            className="text-xs font-light duration-200 hover:text-white"
          >
            Política de Privacidade
          </Link>
          <Link
            href="/termos"
            className="text-xs font-light duration-200  hover:text-white"
          >
            Termos e Condições
          </Link>
          <Link
            href="https://www.livroreclamacoes.pt/Inicio/"
            target="_blank"
            className="text-xs font-light duration-200  hover:text-white"
          >
            Livro de Reclamações
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
