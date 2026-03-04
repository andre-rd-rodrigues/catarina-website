import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import PostCard from '@/components/Cards/PostCard';

interface StoryblokPostBlok {
  _uid: string;
  component: 'post';
  title?: string;
  summary?: string;
  excerpt?: string;
  date?: string;
  category?: string;
  image?: string | { filename?: string };
  slug?: string;
}

interface StoryblokPostProps {
  blok: StoryblokPostBlok;
}

function getImageUrl(
  image: string | { filename?: string } | undefined,
): string {
  if (!image) return '/img/homepage_1.jpg';
  if (typeof image === 'string') return image;
  return (image as { filename?: string }).filename ?? '/img/homepage_1.jpg';
}

/**
 * Renders a Storyblok Post blok as a PostCard.
 * Expects fields: title, summary, date, category, image, slug
 */
export default function StoryblokPost({ blok }: StoryblokPostProps) {
  const href = blok.slug ? `/blog/${blok.slug}` : undefined;

  return (
    <div {...storyblokEditable(blok as SbBlokData)}>
      <PostCard
        title={blok.title ?? ''}
        summary={blok.summary ?? blok.excerpt ?? ''}
        date={blok.date ?? ''}
        category={blok.category ?? ''}
        image={getImageUrl(blok.image)}
        href={href}
      />
    </div>
  );
}
