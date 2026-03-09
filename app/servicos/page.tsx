import ServicesClientPage from './ServicesClientPage';
import { getStory } from '@/lib/storyblok-api';
import { notFound } from 'next/navigation';

export default async function ServicesPage() {
  const storyData = await getStory('servicos');

  if (!storyData?.story) notFound();

  return <ServicesClientPage initialStory={storyData.story} />;
}
