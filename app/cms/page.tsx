import { CMS_MESSAGES } from '@/constants/messages';
import { getStory } from '@/lib/storyblok-api';
import { StoryblokStory } from '@storyblok/react/rsc';

export default async function CmsPage() {
  if (!process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN) {
    return (
      <div className="mx-auto max-w-4xl p-8 text-center">
        <h1 className="mb-4 text-2xl font-bold">CMS</h1>
        <p className="text-gray-600">
          {CMS_MESSAGES.missingToken}{' '}
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
          <h1 className="mb-4 text-2xl font-bold">CMS</h1>
          <p className="text-gray-600">{CMS_MESSAGES.contentNotFound}</p>
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
        <h1 className="mb-4 text-2xl font-bold">CMS</h1>
        <p className="text-gray-600">{CMS_MESSAGES.fetchFailed}</p>
      </div>
    );
  }
}
