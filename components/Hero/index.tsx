'use client';

import React from 'react';
import Section from '../Section';
import {
  containerVariant,
  fadeInSlideInVariant,
  motion,
} from '@/motion/variants';

interface HeroProps {
  subtitle?: string;
  title: string;
  content: React.ReactNode;
  actionButton?: React.ReactNode;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  subtitle,
  title,
  content,
  actionButton,
  className,
}) => {
  return (
    <Section
      className={`flex flex-col items-center justify-center text-center ${className}`}
    >
      <motion.span
        variants={containerVariant}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        {subtitle && (
          <motion.p
            variants={fadeInSlideInVariant}
            className="text-md mb-5 font-medium uppercase tracking-[5px] text-[var(--color-accent)]"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h3
          variants={fadeInSlideInVariant}
          className="mb-5 max-w-4xl text-4xl leading-tight"
        >
          {title}
        </motion.h3>
        <motion.p
          variants={fadeInSlideInVariant}
          className="text-md mx-auto mb-7 max-w-2xl text-[var(--color-text)]"
        >
          {content}
        </motion.p>
        {actionButton && (
          <motion.div variants={fadeInSlideInVariant} className="inline-block">
            {actionButton}
          </motion.div>
        )}
      </motion.span>
    </Section>
  );
};

export default Hero;
