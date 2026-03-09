import BlogPostClient from '@/components/BlogPostClient';
import { getStory } from '@/lib/storyblok-api';
import { notFound } from 'next/navigation';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const data = await getStory(`blog/${slug}`);

  if (!data?.story) {
    notFound();
  }

  return <BlogPostClient initialStory={data.story} />;
}
