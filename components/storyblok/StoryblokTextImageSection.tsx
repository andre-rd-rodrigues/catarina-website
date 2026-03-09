'use client';

import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { StoryblokRichText } from '@storyblok/react';
import Image from 'next/image';
import Section from '@/components/Section';
import Link from '@/components/Link';
import {
  containerVariant,
  fadeInSlideInVariant,
  fadeInSlideLeftVariant,
} from '@/motion/variants';
import { motion } from 'motion/react';
import type { TextImageSectionStoryblok } from '@/component-types-sb';

interface StoryblokTextImageSectionProps {
  blok: TextImageSectionStoryblok;
}

function getImageSrc(image: TextImageSectionStoryblok['image']): string {
  if (!image) return '/img/sobre_1.jpg';
  if (typeof image === 'string') return image;
  return image?.filename ?? '/img/sobre_1.jpg';
}

function getImageAlt(
  image: TextImageSectionStoryblok['image'],
  fallback: string,
): string {
  if (!image || typeof image === 'string') return fallback;
  return (image as { alt?: string }).alt ?? fallback;
}

export default function StoryblokTextImageSection({
  blok,
}: StoryblokTextImageSectionProps) {
  const isTextFirst = blok.layout === 'text_first';
  const imageSrc = getImageSrc(blok.image);
  const imageAlt = getImageAlt(blok.image, blok.title ?? '');

  const textBlock = (
    <motion.div
      variants={containerVariant}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      className={`flex-1 ${isTextFirst ? '' : 'order-1 md:order-2'}`}
    >
      <Section.Title
        title={blok.title}
        subtitle={blok.subtitle ?? ''}
        animation="left"
      />
      {blok.tagline && (
        <motion.p
          variants={fadeInSlideLeftVariant}
          className="font-ibm-plex-sans text-md mb-3 mt-2 font-light text-[var(--color-accent)]"
        >
          {blok.tagline}
        </motion.p>
      )}
      <motion.div
        variants={fadeInSlideLeftVariant}
        className="mt-8 text-justify text-[var(--color-primary)]"
      >
        {blok.body && (
          <StoryblokRichText
            doc={blok.body as Parameters<typeof StoryblokRichText>[0]['doc']}
          />
        )}
      </motion.div>
      {blok.cta_href && blok.cta_label && (
        <div className="mt-8 flex justify-end">
          <Link
            href={blok.cta_href}
            label={blok.cta_label}
            variant="outline"
          />
        </div>
      )}
    </motion.div>
  );

  const imageBlock = (
    <div
      className={`flex-1 ${isTextFirst ? 'order-2' : 'order-2 md:order-1'}`}
    >
      <motion.div
        variants={fadeInSlideInVariant}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className="relative aspect-[3/4] w-full overflow-hidden rounded-md shadow-lg"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  );

  const sectionContent = (
    <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
        {isTextFirst ? (
          <>
            {textBlock}
            {imageBlock}
          </>
        ) : (
          <>
            {imageBlock}
            {textBlock}
          </>
        )}
        </div>
  );

  return (
    <div
      {...storyblokEditable(blok as SbBlokData)}
      {...(blok.anchor_id ? { id: blok.anchor_id } : {})}
    >
      <Section>{sectionContent}</Section>
    </div>
  );
}
