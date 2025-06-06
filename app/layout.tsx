import type { Metadata } from 'next';
import { marcellus, ibmPlexSans } from '@/assets/fonts';
import './globals.scss';
import Footer from '@/components/Footer';
import Navbar, { ScheduleButton } from '@/components/Navbar';
import { PAGES_METADATA } from '@/metadata';
import Analytics from '@/components/Analytics';

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
    <html lang="pt-PT">
      <body className={`${marcellus.variable} ${ibmPlexSans.variable}`}>
        <Navbar />
        {children}
        <ScheduleButton />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
