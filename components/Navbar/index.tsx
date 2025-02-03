'use client';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import AppLink from '@/components/Link';

const navItems = [
  { href: '/sobre', label: 'Sobre' },
  { href: '/serviços', label: 'Serviços' },
  { href: '/contactos', label: 'Contactos' },
  { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 z-50 w-full sm:left-4 sm:right-4 sm:top-4 sm:w-auto"
      ref={navRef}
    >
      <div className="relative h-full bg-teal-950 bg-opacity-40 shadow-lg backdrop-blur-[20px] sm:rounded-full">
        <div className="mx-auto pl-3 pr-2">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/lotus.png"
                  alt="CP"
                  width={30}
                  height={30}
                  className="object-cover"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-md px-3 py-2 text-[1rem] text-xs tracking-widest text-white ${
                      pathname === item.href ? 'text-white' : 'hover:text-white'
                    } transition-colors duration-300`}
                  >
                    {item.label}
                  </Link>
                ))}
                <AppLink
                  icon="message-circle-more"
                  variant="danger"
                  label="Agendar"
                  onClick={() => {}}
                  className="ml-1 text-xs"
                />
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-2 md:hidden"
          >
            <div className="border-1 rounded-lg border-teal-950 bg-teal-950 bg-opacity-40 shadow-lg backdrop-blur-[20px]">
              <div className="space-y-1 px-2 py-4 sm:px-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-md px-3 py-3 text-right text-sm tracking-widest text-white ${
                      pathname === item.href
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    } transition-colors duration-300`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
