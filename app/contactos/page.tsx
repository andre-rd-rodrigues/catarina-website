import ContactForm from '@/components/ContactForm';
import Page from '@/components/Page';
import Section from '@/components/Section';
import { Instagram } from 'lucide-react';
import React from 'react';

function Contacts() {
  return (
    <Page>
      <Page.Title
        src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Contactos"
      />
      <Section>
        <div className="flex flex-wrap justify-between gap-0 md:flex-nowrap md:gap-10">
          <div className="w-full">
            <Section.Title
              subtitle="Contactos"
              title="Entre em contacto"
              animation="left"
            />
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sit amet cursus orci. Nulla luctus vehicula enim quis aliquet.{' '}
            </p>
            <div className="py-10">
              {/* Container up to ~1140px wide (max-w-5xl) */}
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                {/* Left Column: Main Office & Email */}
                <div className="space-y-6">
                  <div>
                    <h4 className=" mb-2 text-lg">Consultório</h4>
                    <p className="text-[var(--color-text)]">
                      Rua da Conceição, 123 - Lisboa
                    </p>
                  </div>
                  <div>
                    <h4 className=" mb-2 text-lg">Email</h4>
                    <p className="text-[var(--color-text)]">exemplo@mail.com</p>
                  </div>
                </div>
                {/* Right Column: Phone & Follow Us */}
                <div className="space-y-6">
                  <div>
                    <h4 className=" mb-2 text-lg">Telemóvel</h4>
                    <p className="text-[var(--color-text)]">+351 912 345 678</p>
                  </div>
                  <div>
                    <h4 className=" mb-2 text-lg">Redes Sociais</h4>
                    <div className="mt-2 flex items-center space-x-4">
                      <a
                        href="#"
                        aria-label="Instagram"
                        className="text-gray-700 transition-colors duration-200 hover:text-black"
                      >
                        <Instagram size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-md border p-9">
            <ContactForm />
          </div>
        </div>
      </Section>
    </Page>
  );
}

export default Contacts;
