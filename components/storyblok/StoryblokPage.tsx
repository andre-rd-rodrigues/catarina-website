import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';

interface StoryblokPageProps {
  blok: {
    body?: Array<{
      _uid: string;
      component: string;
      [key: string]: unknown;
    }>;
  };
}

export default function StoryblokPage({ blok }: StoryblokPageProps) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
