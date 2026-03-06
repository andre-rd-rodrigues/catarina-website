import { getStoryblokApi } from '@/lib/storyblok';
import { formatDate } from '@/lib/common.utils';

export type StoryblokSlug =
  | 'home'
  | 'sobre'
  | 'servicos'
  | 'faqs'
  | 'blog'
  | 'contactos'
  | 'termos'
  | 'politica-de-privacidade' ;

export async function getStory(
  slug: StoryblokSlug | string,
  version: 'draft' | 'published' = 'draft',
) {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, { version });
  return data;
}

export type PostCardData = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  image: string;
};

function getImageUrl(image: unknown): string {
  if (!image) return '/img/homepage_1.jpg';
  if (typeof image === 'string') return image;
  const obj = image as { filename?: string };
  return obj?.filename ?? '/img/homepage_1.jpg';
}

/**
 * Fetches post stories from the articles folder (content_type: post).
 * Maps to PostCard format. See: https://www.storyblok.com/docs/guides/nextjs/content-modeling
 */
export async function getArticles(
  version: 'draft' | 'published' = 'draft',
): Promise<PostCardData[]> {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get('cdn/stories', {
    version,
    starts_with: 'blog',
    content_type: 'post',
    per_page: 5,
  });

  const stories = data?.stories ?? [];

  const mapped: (PostCardData & { _sortKey: string })[] = stories.map(
    (story: {
      slug: string;
      name: string;
      content?: Record<string, unknown>;
      published_at?: string;
    }) => {
      const c = story.content ?? {};
      const dateRaw = String(c.date ?? story.published_at ?? '');
      const summary =
        typeof c.summary === 'string'
          ? c.summary
          : typeof c.excerpt === 'string'
          ? c.excerpt
          : typeof c.content === 'string'
          ? c.content.slice(0, 150) + '...'
          : '';
      return {
        slug: story.slug ?? '',
        title: String(c.title ?? c.headline ?? story.name ?? ''),
        summary,
        date: formatDate(dateRaw),
        category: typeof c.category === 'string' ? c.category : '',
        image: getImageUrl(c.image),
        _sortKey: dateRaw,
      };
    },
  );
  mapped.sort(
    (a, b) => new Date(b._sortKey).getTime() - new Date(a._sortKey).getTime(),
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- _sortKey omitted from output
  return mapped.map(({ _sortKey, ...rest }) => rest);
}

export type ArticleDetail = PostCardData & {
  body?: unknown;
};

/**
 * Fetches a single post story by slug (e.g. blog/my-post-slug).
 */
export async function getArticleBySlug(
  slug: string,
  version: 'draft' | 'published' = 'draft',
): Promise<ArticleDetail | null> {
  const storyblokApi = getStoryblokApi();
  try {
    const { data } = await storyblokApi.get(`cdn/stories/blog/${slug}`, {
      version,
    });
    const story = data?.story;
    if (!story?.content) return null;

    const c = story.content as Record<string, unknown>;
    const dateRaw = String(c.date ?? story.published_at ?? '');
    const summary =
      typeof c.summary === 'string'
        ? c.summary
        : typeof c.excerpt === 'string'
        ? c.excerpt
        : '';

    return {
      slug: story.slug ?? '',
      title: String(c.title ?? c.headline ?? story.name ?? ''),
      summary,
      date: formatDate(dateRaw),
      category: typeof c.category === 'string' ? c.category : '',
      image: getImageUrl(c.image),
      body: c.body,
    };
  } catch {
    return null;
  }
}

export async function getDatasourceEntries(slug: string) {
  const storyblokApi = getStoryblokApi();

  // Procuramos pelas 'datasource_entries' filtrando pelo slug do datasource
  const { data } = await storyblokApi.get(`cdn/datasource_entries`, {
    datasource: slug,
    version: 'draft', // ou 'published'
  });

  return data.datasource_entries.map(
    (entry: { name?: string; value?: string }) => ({
      label: entry.name,
      value: entry.value,
    }),
  );
}
