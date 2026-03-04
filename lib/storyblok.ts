import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import StoryblokPage from '@/components/storyblok/StoryblokPage';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: StoryblokPage,
  },
  apiOptions: {
    region: 'eu',
  },
});
