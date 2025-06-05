import { WEBSITE_DOMAIN_URL } from '@/constants/common';
import { Metadata } from 'next';
import { headers } from 'next/headers';

export const getMetadata = async (
  options: Metadata & { src?: string },
): Promise<Metadata> => {
  const headersList = await headers();
  const pathname = headersList.get('x-invoke-path') || '';

  return {
    title: options.title,
    description: options.description,
    icons: [
      {
        url: 'https://i.postimg.cc/CdHMYWcB/favicon-16x16.png',
        sizes: '16x16',
        rel: 'icon',
      },
      {
        url: 'https://i.postimg.cc/BjtJTt4H/favicon-32x32.png',
        sizes: '32x32',
        rel: 'icon',
      },
      {
        url: 'https://i.postimg.cc/tYqqg2cr/apple-touch-icon.png',
        sizes: '180x180',
        rel: 'apple-touch-icon',
      },
      {
        url: 'https://i.postimg.cc/2V0zLnRC/android-chrome-192x192.png',
        sizes: '192x192',
        rel: 'icon',
      },
      {
        url: 'https://i.postimg.cc/v4jb3MZj/android-chrome-512x512.png',
        sizes: '512x512',
        rel: 'icon',
      },
      { url: '/img/favicon/favicon.ico', rel: 'shortcut icon' },
    ],
    alternates: {
      canonical: `${WEBSITE_DOMAIN_URL}/${pathname}`,
    },
    openGraph: {
      title: options.title!,
      description: options.description!,
      type: 'website',
      images: [
        {
          url: 'https://i.postimg.cc/Ln8SShqw/opengraph-image.png',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};
