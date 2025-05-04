import React from 'react';
import { CONTACTS } from '@/constants/common';
import AppLink from '@/components/Link';

interface PricingCardProps {
  title: string;
  subtitle?: string;
  price: string;
  services: string[];
  note?: string;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  subtitle,
  price,
  services,
  note,
  className = '',
}) => {
  return (
    <div
      className={`flex h-full flex-col rounded-md border border-gray-300 bg-white p-4 w-full sm:max-w-[320px] shadow-sm ${className}`}
    >
      <div>
        <h2 className="mb-1 text-center text-lg">{title}</h2>
        {subtitle && (
          <p className="text-center text-sm font-semibold uppercase tracking-[2px] text-[var(--color-accent)]">
            {subtitle}
          </p>
        )}
        <div className="mb-3 mt-5 text-center text-lg text-[var(--color-danger)]">
          {price}
        </div>
        <ul className="mb-3 space-y-2 text-sm text-gray-800">
          {services.map((service, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-accent)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{service}</span>
            </li>
          ))}
        </ul>
        {note && (
          <>
            <div className="my-7 h-[1px] w-full bg-[var(--color-accent)] opacity-25"></div>
            <div className="mt-2 text-xs text-gray-500">{note}</div>
          </>
        )}
      </div>
      <div className="mt-auto flex justify-center pt-6">
        <AppLink
          icon="message-circle-more"
          variant="danger"
          label="Agendar"
          href={`https://wa.me/${CONTACTS.phone}`}
          className="ml-1 text-xs"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default PricingCard; 