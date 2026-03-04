'use client';

import PostCard from '@/components/Cards/PostCard';
import { CMS_MESSAGES } from '@/constants/messages';
import Page from '@/components/Page';
import Section from '@/components/Section';
import type { BlogStoryContent, PostCardData } from '@/lib/storyblok-api';
import { containerVariant, fadeInSlideInVariant } from '@/motion/variants';
import { SearchIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useMemo, useState } from 'react';

const DEFAULT_TITLE_IMAGE =
  'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/small-white-ceramic-mortar-with-eucalyptus-leaves-AANHPA2.jpg';

export type BlogPageContentProps = {
  storyContent?: BlogStoryContent | null;
  articles: PostCardData[];
};

export default function BlogPageContent({
  storyContent,
  articles,
}: BlogPageContentProps) {
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['lifestyle']; // TODO

  const heading = storyContent?.heading ?? 'Blog';
  const titleImage = storyContent?.image ?? DEFAULT_TITLE_IMAGE;
  const subtitle = storyContent?.subtitle;

  return (
    <Page>
      <Page.Title src={titleImage} title={heading} subtitle={subtitle} />

      <Section className="bg-[var(--color-background-alt)]">
        <Section.Title
          subtitle="Artigos"
          title="Novidades e reflexões"
          className="text-center"
          animation="left"
        />

        {/* Filters */}
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

          {/* Category buttons */}
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
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-light transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 ${
                  category === cat
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'border border-[var(--color-border-primary)] bg-transparent text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                }`}
                aria-pressed={category === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {articles.length > 0 ? (
          <motion.div
            variants={containerVariant}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {articles.map((post) => (
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
    </Page>
  );
}
