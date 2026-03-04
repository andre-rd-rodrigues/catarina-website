import { getStory } from '@/lib/storyblok-api';
import { StoryblokStory } from '@storyblok/react/rsc';

/**
 * Example CMS page that fetches content from Storyblok.
 * Create a "home" story in your Storyblok space to see it rendered here.
 * Requires NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN in .env
 */
export default async function CmsPage() {
  if (!process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN) {
    return (
      <div className="mx-auto max-w-4xl p-8 text-center">
        <h1 className="mb-4 text-2xl font-bold">Storyblok CMS</h1>
        <p className="text-gray-600">
          Add NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN to your .env file.
          Get your token from{' '}
          <a
            href="https://app.storyblok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] underline"
          >
            app.storyblok.com
          </a>
        </p>
      </div>
    );
  }

  try {
    const data = await getStory('home');

    if (!data?.story) {
      return (
        <div className="mx-auto max-w-4xl p-8 text-center">
          <h1 className="mb-4 text-2xl font-bold">Storyblok CMS</h1>
          <p className="text-gray-600">
            No story found. Create a &quot;home&quot; story in your Storyblok
            space.
          </p>
        </div>
      );
    }

    return (
      <div className="page">
        <StoryblokStory story={data.story} />
      </div>
    );
  } catch {
    return (
      <div className="mx-auto max-w-4xl p-8 text-center">
        <h1 className="mb-4 text-2xl font-bold">Storyblok CMS</h1>
        <p className="text-gray-600">
          Failed to fetch story. Check your access token and that a
          &quot;home&quot; story exists in your Storyblok space.
        </p>
      </div>
    );
  }
}
