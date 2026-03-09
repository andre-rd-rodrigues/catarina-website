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
      data-testid="page-title"
      {...storyblokEditable(blok as SbBlokData)}
      className="relative flex h-64 w-full items-center justify-center bg-cover bg-center px-5 sm:px-28 md:justify-start"
      style={{
        background: `url(${imageSrc}) center/cover no-repeat`,
      }}
    >
      <div
        key={`${blok._uid}-overlay`}
        className="absolute inset-0 bg-emerald-950/45 backdrop-blur-sm"
      />

      <div key={`${blok._uid}-content`} className="relative z-10 text-white">
        <h1 key={`${blok._uid}-title`} className="mt-5 text-4xl md:text-5xl">
          {blok.title}
        </h1>
        {blok.subtitle && (
          <p
            key={`${blok._uid}-subtitle`}
            className="mt-3 text-sm text-white/50 opacity-90 md:text-base"
          >
            {blok.subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default StoryblokPageHeader;
