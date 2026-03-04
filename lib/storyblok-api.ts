import { getStoryblokApi } from '@/lib/storyblok';

export type StoryblokSlug =
  | 'home'
  | 'sobre'
  | 'servicos'
  | 'faqs'
  | 'blog'
  | 'contactos'
  | 'termos'
  | 'politica-de-privacidade';

export async function getStory(
  slug: StoryblokSlug,
  version: 'draft' | 'published' = 'draft',
) {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, { version });
  return data;
}

export type BlogStoryContent = {
  heading?: string;
  title?: string;
  subtitle?: string;
  image?: string;
};

/**
 * Extracts heading/title content from a blog story.
 * Checks: content.heading, content.title, or first "heading" blok in content.body
 */
export function extractBlogStoryContent(
  content:
    | {
        heading?: string;
        title?: string;
        subtitle?: string;
        image?: string | { filename?: string };
        body?: Array<{
          component?: string;
          heading?: string;
          title?: string;
          subtitle?: string;
          image?: string | { filename?: string };
        }>;
      }
    | null
    | undefined,
): BlogStoryContent {
  if (!content) return {};

  const getImage = (
    img: string | { filename?: string } | undefined,
  ): string | undefined => {
    if (!img) return undefined;
    if (typeof img === 'string') return img;
    return (img as { filename?: string }).filename;
  };

  // Direct fields on content
  if (content.heading || content.title) {
    return {
      heading: content.heading ?? content.title,
      subtitle: content.subtitle,
      image: getImage(content.image),
    };
  }

  // Traverse body for heading blok
  const body = content.body ?? [];
  const headingBlok = body.find(
    (b) =>
      b.component === 'heading' ||
      b.component === 'page_title' ||
      b.component === 'title',
  );
  if (headingBlok) {
    return {
      heading: headingBlok.heading ?? headingBlok.title ?? '',
      subtitle: headingBlok.subtitle,
      image: getImage(headingBlok.image),
    };
  }

  return {};
}
