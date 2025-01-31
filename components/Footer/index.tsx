import AppLink from '@/components/Link';
import { NAVBAR } from '@/constants/navbar';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => (
  <footer className="w-full bg-[var(--color-secondary)] px-6 py-12 text-white">
    <div className="mx-auto max-w-6xl">
      {/* Start */}
      <div className="flex items-center justify-between border-b border-white/20 pb-16">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-semibold">Catarina Paixão</h2>
          <p className="mt-2 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus.
          </p>
        </div>
        <div className="flex gap-9">
          {NAVBAR.map(({ name, href }, index) => (
            <Link key={index} href={href} className="text-sm">
              {name}
            </Link>
          ))}
        </div>
      </div>
      {/* Middle */}
      <div className="mx-auto flex justify-between gap-8 border-b border-white/20 py-16">
        {/* Address */}
        <div>
          <h3 className="mb-3 text-lg font-medium">Endereço</h3>
          <Link
            href="https://maps.app.goo.gl/jj8BWbek52QBGqw97"
            className="flex items-center gap-3 font-light text-gray-400 duration-200 hover:text-white"
            target="_blank"
          >
            <MapPin size={18} />
            5116 Dietrich Mill, North Emmet
            <br />
            Dakota USA 45862
          </Link>
        </div>
        {/* Contacts */}
        <div>
          <h3 className="mb-3 text-lg font-medium">Contactos</h3>
          <Link
            target="_blank"
            href="tel:+351961234582"
            className="flex items-center gap-3 font-light text-gray-400 duration-200 hover:text-white"
          >
            <Phone size={18} /> +351 961234582
          </Link>
          {/* <br className="my-3" /> */}
          <Link
            target="_blank"
            href="mailto: catarina@mails.com"
            className="mt-2 flex items-center gap-3 font-light text-gray-400 duration-200 hover:text-white"
          >
            <Mail size={18} /> catarina@mails.com
          </Link>
        </div>
        {/* CTA Section */}
        <div>
          <h3 className="text-lg font-medium">Let&apos;s talk about health!</h3>
          <p className="mb-4 mt-2 max-w-80 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
            amet cursus orci.
          </p>
          <div className="inline-block">
            <AppLink
              href="/"
              label="Agendar"
              variant="danger"
              icon="message-circle-more"
            />
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="mt-8 flex flex-col items-center justify-between text-gray-400 md:flex-row">
        <p className="text-sm text-gray-300">
          Copyright © 2025{' '}
          <Link
            href="https://www.andrerodrigo.com"
            target="_blank"
            className="hover:text-white"
          >
            André Rodrigo
          </Link>
        </p>
        <div className="mt-4 flex gap-4 text-sm md:mt-0">
          <Link href="/" className="duration-200 hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/" className="duration-200 hover:text-white">
            Terms & Services
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
