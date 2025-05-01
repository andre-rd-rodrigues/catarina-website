'use client';
import ContactForm from '@/components/ContactForm';
import Page from '@/components/Page';
import Section from '@/components/Section';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import {
  motion,
  containerVariant,
  fadeInSlideInVariant,
} from '@/motion/variants';
import { CONTACTS } from '@/constants/common';

function Contacts() {
  return (
    <Page>
      <Page.Title
        src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Contactos"
      />

      <Section>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-between gap-0 md:flex-nowrap md:gap-10"
        >
          {/* Contactos */}
          <motion.div variants={fadeInSlideInVariant} className="w-full">
            <Section.Title
              subtitle="contactos"
              title="Estou aqui para ajudar."
              animation="left"
            />
            <p className="mt-3">
              Vamos juntos trilhar este caminho rumo a uma vida mais saudável e
              harmoniosa.
            </p>
            <div className="py-10">
              {/* Container up to ~1140px wide (max-w-5xl) */}
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                {/* Left Column: Main Office & Email */}
                <div className="space-y-6">
                  <div>
                    <h4 className=" mb-2 text-lg">Consultórios</h4>
                    <p>{CONTACTS.address}</p>
                  </div>
                  <div>
                    <h4 className=" mb-2 text-lg">Email</h4>
                    <Link href={`mailto:${CONTACTS.email}`} target="_blank">
                      <p className="text-[var(--color-accent)] duration-300 hover:text-[var(--color-secondary)]">
                        {CONTACTS.email}
                      </p>
                    </Link>
                  </div>
                </div>
                {/* Right Column: Phone & Follow Us */}
                <div className="space-y-6">
                  <div>
                    <h4 className=" mb-2 text-lg">Telemóvel</h4>
                    <Link href={`tel:${CONTACTS.phone}`} target="_blank">
                      <p className="text-[var(--color-accent)] duration-300 hover:text-[var(--color-secondary)]">
                        {CONTACTS.phone}
                      </p>
                    </Link>
                  </div>
                  <div>
                    <h4 className=" mb-2 text-lg">Redes Sociais</h4>
                    <div className="mt-2 flex items-center space-x-4">
                      <a
                        href="#"
                        aria-label="Instagram"
                        className="text-[var(--color-accent)] duration-300 hover:text-[var(--color-secondary)]"
                      >
                        <Instagram size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Formulário de contacto */}
          <motion.div
            variants={fadeInSlideInVariant}
            className="w-full rounded-md border p-9 shadow-md"
          >
            <ContactForm />
          </motion.div>
        </motion.div>
      </Section>
    </Page>
  );
}

export default Contacts;
