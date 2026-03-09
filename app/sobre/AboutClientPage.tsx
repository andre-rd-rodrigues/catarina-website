'use client';

import StoryblokPage from '@/components/storyblok/StoryblokPage';
import { useStoryblokState } from '@storyblok/react';
import type { ISbStoryData } from '@storyblok/react/rsc';

export default function AboutClientPage({
  initialStory,
}: {
  initialStory: ISbStoryData;
}) {
  const aboutStory = useStoryblokState(initialStory);

  if (!aboutStory) return <div>Loading...</div>;

  return <StoryblokPage story={aboutStory}>{null}</StoryblokPage>;
}
