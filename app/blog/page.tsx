import BlogClientPage from './BlogClientPage';
import {
  getArticles,
  getDatasourceEntries,
  getStory,
} from '@/lib/storyblok-api';
import { notFound } from 'next/navigation';

const BLOG_PAGE_LIMIT = 25;

export default async function BlogPage() {
  const [storyData, articles, categories] = await Promise.all([
    getStory('blog'),
    getArticles(undefined, BLOG_PAGE_LIMIT),
    getDatasourceEntries('categories'),
  ]);

  if (!storyData?.story) notFound();

  return (
    <BlogClientPage
      initialStory={storyData.story}
      initialArticles={articles}
      categories={categories}
      defaultArticlesLimit={BLOG_PAGE_LIMIT}
    />
  );
}
