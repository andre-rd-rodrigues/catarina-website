'use client';

import PostCard from '@/components/Cards/PostCard';
import { containerVariant, fadeInSlideInVariant } from '@/motion/variants';
import { motion } from 'motion/react';
import type { PostCardData } from '@/lib/storyblok-api';

interface BlogPostsGridProps {
  posts: PostCardData[];
}

export default function BlogPostsGrid({ posts }: BlogPostsGridProps) {
  return (
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
  );
}
