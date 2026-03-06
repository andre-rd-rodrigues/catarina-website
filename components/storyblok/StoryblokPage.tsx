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
  return (
    <main
      data-testid="page"
      {...storyblokEditable(story.content)}
    >
      {story.content?.body?.map((nestedBlok: SbBlokData) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      {children}
    </main>
  );
}
