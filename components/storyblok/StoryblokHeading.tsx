import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import Page from '@/components/Page';

interface StoryblokHeadingBlok {
  _uid: string;
  component: 'heading';
  heading?: string;
  subtitle?: string;
  image?: string;
}

interface StoryblokHeadingProps {
  blok: StoryblokHeadingBlok;
}

/**
 * Renders a Storyblok Heading blok as Page.Title.
 * Expects fields: heading, subtitle (optional), image (optional)
 */
export default function StoryblokHeading({ blok }: StoryblokHeadingProps) {
  const src =
    blok.image ||
    'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/small-white-ceramic-mortar-with-eucalyptus-leaves-AANHPA2.jpg';

  return (
    <div {...storyblokEditable(blok as SbBlokData)}>
      <Page.Title
        src={
          typeof src === 'string'
            ? src
            : (src as { filename?: string })?.filename ?? ''
        }
        title={blok.heading ?? ''}
        subtitle={blok.subtitle}
      />
    </div>
  );
}
