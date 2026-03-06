import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import StoryblokPage from '@/components/storyblok/StoryblokPage';
import StoryblokPageHeader from '@/components/storyblok/StoryblokPageHeader';
import StoryblokPost from '@/components/storyblok/StoryblokPost';
import StoryblokTextImageSection from '@/components/storyblok/StoryblokTextImageSection';
import StoryblokHero from '@/components/storyblok/StoryblokHero';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: StoryblokPage,
    'page header': StoryblokPageHeader,
    post: StoryblokPost,
    text_image_section: StoryblokTextImageSection,
    hero: StoryblokHero,
  },
  apiOptions: {
    region: 'eu',
  },
});
