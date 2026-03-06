import BlogClientPage from './BlogClientPage';
import {
  getArticles,
  getDatasourceEntries,
  getStory,
} from '@/lib/storyblok-api';
import { notFound } from 'next/navigation';

export default async function BlogPage() {
  const [storyData, articles, categories] = await Promise.all([
    getStory('blog'),
    getArticles(),
    getDatasourceEntries('categories'),
  ]);

  if (!storyData?.story) notFound();

  return (
    <BlogClientPage
      initialStory={storyData.story}
      initialArticles={articles}
      categories={categories}
    />
  );
}
