import BlogPageContent from '@/components/BlogPageContent';
import { CMS_MESSAGES } from '@/constants/messages';
import Page from '@/components/Page';
import Section from '@/components/Section';
import {
  getStory,
  extractBlogStoryContent,
} from '@/lib/storyblok-api';

export default async function BlogPage() {
  let storyContent = null;

  if (process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN) {
    try {
      const data = await getStory('blog');
      storyContent = extractBlogStoryContent(data?.story?.content ?? null);
    } catch {
      return (
        <Page>
          <Section className="flex min-h-[50vh] items-center justify-center">
            <p className="text-center text-gray-600">
              {CMS_MESSAGES.contentNotFound}
            </p>
          </Section>
        </Page>
      );
    }
  }

  return <BlogPageContent storyContent={storyContent} />;
}
