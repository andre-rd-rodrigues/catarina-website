import AboutClientPage from './AboutClientPage';
import { getStory } from '@/lib/storyblok-api';
import { notFound } from 'next/navigation';

export default async function AboutPage() {
  const storyData = await getStory('sobre');

  if (!storyData?.story) notFound();

  return <AboutClientPage initialStory={storyData.story} />;
}
