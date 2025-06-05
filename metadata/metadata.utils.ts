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
    alternates: {
      canonical: `${WEBSITE_DOMAIN_URL}/${pathname}`,
    },
    openGraph: {
      title: options.title!,
      description: options.description!,
      type: 'website',
      images: [
        {
          url: 'https://i.postimg.cc/m2QgQHTL/opengraph-image.png',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};
