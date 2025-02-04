import type { Metadata } from 'next';
import { marcellus, ibmPlexSans } from '@/assets/fonts';
import './globals.scss';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { PAGES_METADATA } from '@/metadata';

export const metadata: Metadata = {
  title: PAGES_METADATA.HOME.title,
  description: PAGES_METADATA.HOME.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marcellus.variable} ${ibmPlexSans.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
