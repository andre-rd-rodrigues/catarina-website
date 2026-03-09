import {
  storyblokEditable,
  StoryblokServerComponent,
  type ISbStoryData,
  type SbBlokData,
} from '@storyblok/react/rsc';

interface StoryblokPageProps {
  story: ISbStoryData;
  children: React.ReactNode;
}

export default function StoryblokPage({ story, children }: StoryblokPageProps) {
  const body = story.content?.body;
  const bodyBlocks = Array.isArray(body) ? body : [];

  return (
    <main
      data-testid="page"
      {...storyblokEditable(story.content)}
    >
      {bodyBlocks.map((nestedBlok: SbBlokData) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      {children}
    </main>
  );
}
