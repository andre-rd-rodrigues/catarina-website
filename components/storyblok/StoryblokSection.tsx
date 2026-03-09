import Section from '@/components/Section';
import type { SectionStoryblok } from '@/component-types-sb';
import {
  storyblokEditable,
  StoryblokServerComponent,
  type SbBlokData,
} from '@storyblok/react/rsc';

const backgroundClassMap = {
  transparent: '',
  background_default: 'bg-[var(--color-background)]',
  background_alt: 'bg-[var(--color-background-alt)]',
} as const;

const headingAlignClassMap = {
  left: 'mb-12',
  center: 'mb-12 text-center',
} as const;

export default function StoryblokSection({ blok }: { blok: SectionStoryblok }) {
  const backgroundColor =
    blok.background_color && blok.background_color in backgroundClassMap
      ? blok.background_color
      : 'transparent';
  const headingAlign =
    blok.heading_align && blok.heading_align in headingAlignClassMap
      ? blok.heading_align
      : 'left';

  const backgroundClass = backgroundClassMap[backgroundColor];
  const headingAlignClass = headingAlignClassMap[headingAlign];

  return (
    <div {...storyblokEditable(blok as SbBlokData)}>
      <Section
        id={blok.section_id || undefined}
        className={backgroundClass || undefined}
      >
        {blok.title && (
          <div className={headingAlignClass}>
            <Section.Title
              title={blok.title}
              subtitle={blok.subtitle ?? undefined}
              animation={blok.title_animation === 'top' ? 'top' : 'left'}
              className={headingAlign === 'center' ? 'text-center' : undefined}
            />
          </div>
        )}

        {blok.body?.map((nestedBlok) => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </Section>
    </div>
  );
}
