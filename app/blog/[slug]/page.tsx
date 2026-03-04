import Link from '@/components/Link';
import Page from '@/components/Page';
import Section from '@/components/Section';
import { getArticleBySlug } from '@/lib/storyblok-api';
import { StoryblokServerRichText } from '@storyblok/react/rsc';
import { notFound } from 'next/navigation';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getArticleBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Page>
      <Page.Title
        src={post.image}
        title={post.title}
        subtitle={`${post.category} · ${post.date}`}
      />
      <Section>
        <article className="mx-auto max-w-3xl">
          <div className="text-[var(--color-primary)]">
            {post.body ? (
              <StoryblokServerRichText
                doc={
                  post.body as Parameters<
                    typeof StoryblokServerRichText
                  >[0]['doc']
                }
              />
            ) : (
              <p className="text-justify leading-relaxed">{post.summary}</p>
            )}
          </div>
          <div className="mt-12 border-t border-[var(--color-border-primary)] pt-8">
            <Link href="/blog" label="Voltar ao blog" variant="outline" />
          </div>
        </article>
      </Section>
    </Page>
  );
}
