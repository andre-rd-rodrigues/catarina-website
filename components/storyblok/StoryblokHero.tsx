'use client';

import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import Hero from '@/components/Hero';
import Link from '@/components/Link';
import type { HeroStoryblok } from '@/component-types-sb';

interface StoryblokHeroProps {
  blok: HeroStoryblok;
}

export default function StoryblokHero({ blok }: StoryblokHeroProps) {
  const actionButton =
    blok.action_href && blok.action_label ? (
      <Link href={blok.action_href} label={blok.action_label} variant="outline" />
    ) : undefined;

  return (
    <div {...storyblokEditable(blok as SbBlokData)}>
      <Hero
        title={blok.title}
        subtitle={blok.subtitle ?? undefined}
        content={blok.content}
        actionButton={actionButton}
        className={blok.class_name ?? undefined}
      />
    </div>
  );
}
