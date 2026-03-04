import PostCard from '@/components/Cards/PostCard';
import { CMS_MESSAGES } from '@/constants/messages';
import Section from '@/components/Section';
import { getArticles } from '@/lib/storyblok-api';
import { containerVariant, fadeInSlideInVariant } from '@/motion/variants';
import { motion } from 'motion/react';

export default async function BlogSection() {
  let posts: Awaited<ReturnType<typeof getArticles>> = [];

  if (process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN) {
    try {
      posts = await getArticles();
    } catch {
      // Keep empty
    }
  }

  return (
    <Section id="blog" className="bg-[var(--color-background-alt)]">
      <Section.Title
        subtitle="Blog"
        title="Novidades e reflexões"
        className="text-center"
        animation="left"
      />
      {posts.length > 0 ? (
        <motion.div
          variants={containerVariant}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
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
  );
}
