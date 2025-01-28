import React from 'react';

interface HeroProps {
  subtitle: string;
  title: string;
  content: React.ReactNode;
  actionButton?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  subtitle,
  title,
  content,
  actionButton,
}) => {
  return (
    <section className="flex flex-col items-center text-center">
      <p className="text-md mb-3 max-w-2xl font-medium uppercase tracking-wider text-[var(--color-accent)]">
        {subtitle}
      </p>
      <h3 className="mb-5 max-w-4xl text-4xl leading-tight text-[var(--color-primary)]">
        {title}
      </h3>
      <p className="text-md mx-auto mb-7 max-w-2xl text-[var(--color-text)]">
        {content}
      </p>
      {actionButton && actionButton}
    </section>
  );
};

export default Hero;
