import React from 'react';
import Section from '../Section';

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
    <Section className="flex flex-col items-center text-center">
      <p className="text-md mb-5 max-w-2xl font-medium uppercase tracking-[5px] text-[var(--color-accent)]">
        {subtitle}
      </p>
      <h3 className="mb-5 max-w-4xl text-4xl leading-tight">{title}</h3>
      <p className="text-md mx-auto mb-7 max-w-2xl text-[var(--color-text)]">
        {content}
      </p>
      {actionButton && actionButton}
    </Section>
  );
};

export default Hero;
