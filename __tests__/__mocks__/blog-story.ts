import type { ISbStoryData } from '@storyblok/react/rsc';
import type { PostCardData } from '@/lib/storyblok-api';

export const mockBlogStory: ISbStoryData = {
  name: 'Blog',
  content: {
    _uid: 'blog-page',
    component: 'page',
    body: [],
  },
  slug: 'blog',
  full_slug: 'blog',
} as unknown as ISbStoryData;

export const mockArticles: PostCardData[] = [
  {
    slug: 'medicina-integrativa',
    title: 'Medicina Integrativa e Bem-Estar',
    summary: 'Reflexões sobre a abordagem integrativa na medicina.',
    date: '15 Jan 2025',
    category: 'medicina',
    image: '/img/article-1.jpg',
  },
  {
    slug: 'saude-mental',
    title: 'Saúde Mental e Equilíbrio',
    summary: 'A importância do equilíbrio emocional no dia a dia.',
    date: '10 Jan 2025',
    category: 'saude-mental',
    image: '/img/article-2.jpg',
  },
  {
    slug: 'nutricao-funcional',
    title: 'Nutrição Funcional na Prática',
    summary: 'Como a nutrição pode transformar a sua saúde.',
    date: '05 Jan 2025',
    category: 'medicina',
    image: '/img/article-3.jpg',
  },
];

export const mockCategories = [
  { label: 'Medicina', value: 'medicina' },
  { label: 'Saúde Mental', value: 'saude-mental' },
];
