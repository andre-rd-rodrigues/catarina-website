'use client';

import PostCard from '@/components/Cards/PostCard';
import Section from '@/components/Section';
import StoryblokPage from '@/components/storyblok/StoryblokPage';
import { CMS_MESSAGES } from '@/constants/messages';
import type { PostCardData } from '@/lib/storyblok-api';
import { containerVariant, fadeInSlideInVariant } from '@/motion/variants';
import { useStoryblokState } from '@storyblok/react';
import { ISbStoryData } from '@storyblok/react/rsc';
import { SearchIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useMemo, useState } from 'react';

export default function BlogClientPage({
  initialStory,
  initialArticles,
  categories,
}: {
  initialStory: ISbStoryData;
  initialArticles: PostCardData[];
  categories: { label: string; value: string }[];
}) {
  const blogStory = useStoryblokState(initialStory);

  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');

  const filteredArticles = useMemo(
    () =>
      initialArticles.filter((post) => {
        const matchesSearch = post.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesCategory = category ? post.category === category : true;
        return matchesSearch && matchesCategory;
      }),
    [initialArticles, searchQuery, category],
  );

  if (!blogStory) return <div>Loading...</div>;

  return (
    <StoryblokPage story={blogStory}>
      <Section className="bg-[var(--color-background-alt)]">
        <Section.Title
          subtitle="Artigos"
          title="Novidades e reflexões"
          className="text-center"
          animation="left"
        />

        <motion.div
          variants={containerVariant}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
        >
          <div className="relative flex-1">
            <SearchIcon
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400"
              aria-hidden
            />
            <input
              type="text"
              role="search"
              placeholder="Pesquisar artigos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-[var(--color-border-primary)] bg-transparent py-2.5 pl-10 pr-4 font-light text-[var(--color-primary)] placeholder:text-gray-400 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
              aria-label="Pesquisar artigos"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setCategory('')}
              className={`rounded-full px-4 py-2 text-sm font-light transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 ${
                category === ''
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'border border-[var(--color-border-primary)] bg-transparent text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
              }`}
              aria-pressed={category === ''}
              aria-label="Todas as categorias"
            >
              Todas
            </button>
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setCategory(cat.value)}
                className={`rounded-full px-4 py-2 text-sm font-light transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 ${
                  category === cat.value
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'border border-[var(--color-border-primary)] bg-transparent text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                }`}
                aria-pressed={category === cat.value}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {filteredArticles.length > 0 ? (
          <motion.div
            variants={containerVariant}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredArticles.map((post) => (
              <motion.div
                variants={fadeInSlideInVariant}
                key={post.slug}
                className="h-full"
              >
                <PostCard
                  title={post.title}
                  summary={post.summary}
                  date={post.date}
                  category={post.category}
                  image={post.image}
                  href={`/blog/${post.slug}`}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="mt-16 rounded-lg border border-dashed border-[var(--color-border-primary)] bg-white/50 px-8 py-12 text-center">
            <p className="text-lg font-light text-gray-600">
              {CMS_MESSAGES.noBlogPosts}
            </p>
          </div>
        )}
      </Section>
    </StoryblokPage>
  );
}
