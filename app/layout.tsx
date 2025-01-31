import type { Metadata } from 'next';
import { marcellus, ibmPlexSans } from '@/assets/fonts';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marcellus.variable} ${ibmPlexSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
