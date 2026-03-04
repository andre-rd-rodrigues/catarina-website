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
