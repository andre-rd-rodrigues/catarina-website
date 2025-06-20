'use client';
import React from 'react';
import {
  fadeInSlideLeftVariant,
  containerVariant,
  motion,
  fadeInSlideInVariant,
} from '@/motion/variants';
import clsx from 'clsx';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
  color?: string;
  animation?: 'left' | 'top';
};

const SectionTitle = ({
  title,
  subtitle,
  className,
  color,
  animation,
}: SectionTitleProps) => {
  const renderAnimation =
    animation === 'left' ? fadeInSlideLeftVariant : fadeInSlideInVariant;

  return (
    <motion.div
      variants={containerVariant}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      className={className}
    >
      {subtitle && (
        <motion.h2
          variants={renderAnimation}
          className={clsx(
            'font-ibm-plex-sans mb-3 text-sm font-light uppercase tracking-[5px]',
            color ? color : 'text-[var(--color-accent)]',
          )}
        >
          {subtitle}
        </motion.h2>
      )}
      <motion.h3
        variants={renderAnimation}
        className={clsx(
          'text-3xl',
          color ? color : 'text-[var(--color-primary)]',
        )}
      >
        {title}
      </motion.h3>
    </motion.div>
  );
};

export default SectionTitle;
