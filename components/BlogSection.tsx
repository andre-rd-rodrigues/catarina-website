'use client';

import { useEffect, useState } from 'react';
import { CMS_MESSAGES } from '@/constants/messages';
import Section from '@/components/Section';
import Link from '@/components/Link';
import { getArticles, type PostCardData } from '@/lib/storyblok-api';
import BlogPostsGrid from './BlogPostsGrid';

export default function BlogSection() {
  const [posts, setPosts] = useState<PostCardData[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN) {
      setLoaded(true);
      return;
    }

    getArticles('draft', 3)
      .then(setPosts)
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  if (!loaded) return null;

  return (
    <Section id="blog" className="bg-[var(--color-background-alt)]">
      <Section.Title
        subtitle="Blog"
        title="Novidades e reflexões"
        className="text-center"
        animation="left"
      />
      {posts.length > 0 ? (
        <BlogPostsGrid posts={posts} />
      ) : (
        <div className="mt-16 rounded-lg border border-dashed border-[var(--color-border-primary)] bg-white/50 px-8 py-12 text-center">
          <p className="text-lg font-light text-gray-600">
            {CMS_MESSAGES.noBlogPosts}
          </p>
        </div>
      )}
      <div className="mt-12 flex justify-center">
        <Link href="/blog" label="Ver artigos" variant="outline" />
      </div>
    </Section>
  );
}
