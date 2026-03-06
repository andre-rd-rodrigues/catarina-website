import React from 'react';
import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { PageHeaderStoryblok } from '@/component-types-sb';

interface StoryblokPageHeaderProps {
  blok: PageHeaderStoryblok;
}

const StoryblokPageHeader: React.FC<StoryblokPageHeaderProps> = ({ blok }) => {
  const imageSrc = blok.image?.filename ?? '';
  return (
    <div
      {...storyblokEditable(blok as SbBlokData)}
      key={blok._uid}
      className="relative flex h-64 w-full items-center justify-center bg-cover bg-center px-5 sm:px-28 md:justify-start"
      style={{
        background: `url(${imageSrc}) center/cover no-repeat`,
      }}
    >
      <div className="absolute inset-0 bg-emerald-950/45 backdrop-blur-sm" />

      <div className="relative z-10 text-white">
        <h1 className="mt-5 text-4xl md:text-5xl">{blok.title}</h1>
        {blok.subtitle && (
          <p className="mt-3 text-sm text-white/50 opacity-90 md:text-base">
            {blok.subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default StoryblokPageHeader;
