'use client';
import {
  useStoryblokState,
  storyblokEditable,
  StoryblokRichText,
  type SbBlokData,
} from '@storyblok/react';
import Page from '@/components/Page';
import Section from '@/components/Section';

type StoryData = Parameters<typeof useStoryblokState>[0];

export default function BlogPostClient({
  initialStory,
}: {
  initialStory: StoryData;
}) {
  const liveStory = useStoryblokState(initialStory);
  const story = liveStory ?? initialStory;
  if (!story?.content) return null;

  const post = story.content as Record<string, unknown>;

  return (
    <Page {...storyblokEditable(post as SbBlokData)}>
      <Page.Title
        src={
          typeof post.image === 'object' &&
          post.image &&
          'filename' in post.image
            ? (post.image as { filename: string }).filename
            : typeof post.image === 'string'
            ? post.image
            : ''
        }
        title={String(post.title ?? '')}
        subtitle={`${String(post.category ?? '')} · ${String(post.date ?? '')}`}
      />

      <Section>
        <article className="mx-auto max-w-3xl">
          <div className="text-[var(--color-primary)]">
            <StoryblokRichText
              doc={post.body as Parameters<typeof StoryblokRichText>[0]['doc']}
            />
          </div>
        </article>
      </Section>
    </Page>
  );
}
