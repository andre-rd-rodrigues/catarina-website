import NextLink from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

export type PostCardProps = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  href?: string;
};

const PostCard: React.FC<PostCardProps> = ({
  title,
  excerpt,
  date,
  category,
  image,
  href,
}) => {
  const content = (
    <>
      <div className=" shrink-0 p-3 pb-0">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-6 pt-4">
        <div className="flex items-center gap-1.5 text-xs font-normal uppercase tracking-wide text-[var(--color-accent)]">
          <span>{category}</span>
          <span aria-hidden>•</span>
          <time>{date}</time>
        </div>
        <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-[var(--color-primary)]">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 min-h-0 flex-1 text-sm text-gray-600">
          {excerpt}
        </p>
        <div className="mt-4 flex shrink-0 justify-end">
          <span
            className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--color-border-primary)] bg-white text-gray-600 shadow-sm transition-all duration-300 group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)]"
            aria-hidden
          >
            <ArrowRightIcon size={18} strokeWidth={2} />
          </span>
        </div>
      </div>
    </>
  );

  const className =
    'group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[var(--color-border-primary)] bg-white shadow-md transition-all duration-300 hover:shadow-lg';

  if (href) {
    return (
      <NextLink href={href} className={className}>
        {content}
      </NextLink>
    );
  }

  return <article className={className}>{content}</article>;
};

export default PostCard;
