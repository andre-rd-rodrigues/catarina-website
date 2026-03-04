import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import StoryblokHeading from '@/components/storyblok/StoryblokHeading';
import StoryblokPage from '@/components/storyblok/StoryblokPage';
import StoryblokPost from '@/components/storyblok/StoryblokPost';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: StoryblokPage,
    heading: StoryblokHeading,
    post: StoryblokPost,
  },
  apiOptions: {
    region: 'eu',
  },
});
