import { ReactNode } from 'react';

import { Metadata, getMetadata, PAGES_METADATA } from '@/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return getMetadata({
    title: PAGES_METADATA.TERMS_AND_CONDITIONS.title,
    description: PAGES_METADATA.TERMS_AND_CONDITIONS.description,
  });
}

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}
