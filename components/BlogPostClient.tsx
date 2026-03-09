'use client';

import { useStoryblokState, StoryblokRichText } from '@storyblok/react';
import type { ISbStoryData } from '@storyblok/react/rsc';
import type { PageHeaderStoryblok } from '@/component-types-sb';
import Section from '@/components/Section';
import StoryblokPage from '@/components/storyblok/StoryblokPage';
import StoryblokPageHeader from '@/components/storyblok/StoryblokPageHeader';
import { formatDate } from '@/lib/common.utils';

type RichTextDoc = React.ComponentProps<typeof StoryblokRichText>['doc'];

/** Tailwind classes for the blog post body (StoryblokRichText container). */
const postBodyClassName = [
  // Base text color
  'text-[var(--color-primary)]',
  // Links: accent color, lighter on hover, underline
  '[&_a]:text-[var(--color-accent)] [&_a:hover]:text-[var(--color-accent-light)] [&_a]:underline [&_a]:underline-offset-2',
  // Heading 2: section titles
  '[&_h2]:font-marcellus [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-[var(--color-primary)]',
  // Heading 3: subsections
  '[&_h3]:font-marcellus [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:text-[var(--color-primary)]',
  // Heading 4: minor headings
  '[&_h4]:font-marcellus [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:mt-4 [&_h4]:mb-2 [&_h4]:text-[var(--color-primary)]',
  // Images: rounded corners
  '[&_img]:rounded-xl',
].join(' ');

export default function BlogPostClient({
  initialStory,
}: {
  initialStory: ISbStoryData;
}) {
  const story = useStoryblokState(initialStory) ?? initialStory;
  if (!story?.content) return null;

  const post = story.content as Record<string, unknown>;
  const dateFormatted = formatDate(
    String(
      post.date ?? (story as { published_at?: string }).published_at ?? '',
    ),
  );
  const categoryLabel = String(post.category ?? '')
    .replace(/^./, (c) => c.toUpperCase());
 
  const headerBlok: PageHeaderStoryblok = {
    ...post,
    subtitle: `${categoryLabel} · ${dateFormatted}`,
    title: String(post.title ?? ''),
    image: (post.image ?? { filename: '' }) as PageHeaderStoryblok['image'],
    _uid: (post._uid as string) ?? String(story.id),
    component: 'page header',
  };

  return (
    <StoryblokPage story={story}>
      <StoryblokPageHeader blok={headerBlok} />
      <Section>
        <article className="mx-auto max-w-3xl">
          <div className={postBodyClassName}>
            <StoryblokRichText doc={post.body as RichTextDoc} />
          </div>
        </article>
      </Section>
    </StoryblokPage>
  );
}
