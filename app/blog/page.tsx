'use client';

import PostCard from '@/components/Cards/PostCard';
import Page from '@/components/Page';
import Section from '@/components/Section';
import { BLOG_POSTS } from '@/constants/blog';
import type { BlogPost } from '@/constants/blog';
import { useDebounce } from '@/hooks/useDebounce';
import { containerVariant, fadeInSlideInVariant } from '@/motion/variants';
import { SearchIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useMemo, useState } from 'react';

function normalizeForSearch(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
}

function filterAndSortPosts(
  posts: BlogPost[],
  category: string,
  search: string,
): BlogPost[] {
  const searchNorm = normalizeForSearch(search.trim());
  const result = posts.filter((post) => {
    const matchCategory = !category || post.category === category;
    const matchSearch =
      !searchNorm ||
      normalizeForSearch(post.title).includes(searchNorm) ||
      normalizeForSearch(post.excerpt).includes(searchNorm) ||
      normalizeForSearch(post.category).includes(searchNorm);
    return matchCategory && matchSearch;
  });

  return [...result].sort((a, b) => b.dateSort.localeCompare(a.dateSort));
}

const SEARCH_DEBOUNCE_MS = 300;

export default function BlogPage() {
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, SEARCH_DEBOUNCE_MS);

  const categories = useMemo(
    () => [...new Set(BLOG_POSTS.map((p) => p.category))].sort(),
    [],
  );

  const filteredPosts = useMemo(
    () => filterAndSortPosts(BLOG_POSTS, category, debouncedSearch),
    [category, debouncedSearch],
  );

  return (
    <Page>
      <Page.Title
        src="https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/small-white-ceramic-mortar-with-eucalyptus-leaves-AANHPA2.jpg"
        title="Blog"
      />

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
          className="mt-12 flex flex-col gap-4  sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
        >
          {/* Search */}
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

        <motion.div
          variants={containerVariant}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredPosts.map((post) => (
            <motion.div
              variants={fadeInSlideInVariant}
              key={post.slug}
              className="h-full"
            >
              <PostCard
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                image={post.image}
                href={`/blog/${post.slug}`}
              />
            </motion.div>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="mt-16 rounded-lg border border-dashed border-[var(--color-border-primary)] bg-white/50 px-8 py-12 text-center">
            <p className="text-lg font-light text-gray-600">
              Nenhum artigo encontrado.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Tente alterar os filtros ou a pesquisa.
            </p>
          </div>
        )}
      </Section>
    </Page>
  );
}
