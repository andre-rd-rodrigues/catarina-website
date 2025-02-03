import type { Metadata } from 'next';
import { marcellus, ibmPlexSans } from '@/assets/fonts';
import './globals.scss';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Dra. Catarina Paixão ⦁ Medicina Integrativa',
  description:
    'Bem-vinda(o) ao seu espaço de tranquilidade. Sou a Dra. Catarina Paixão, médica especializada em medicina integrativa. Aqui, você encontra uma abordagem individualizada que combina medicina convencional e terapias complementares, promovendo equilíbrio, saúde e bem-estar de forma holística.',
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
