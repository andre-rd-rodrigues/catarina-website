import { getServerSideSitemapIndex } from 'next-sitemap';

export async function GET() {
  return getServerSideSitemapIndex([
    'https://paixaomed.com/sobre.xml',
    'https://paixaomed.com/faqs.xml',
    'https://paixaomed.com/politica-de-privacidade.xml',
    'https://paixaomed.com/servicos.xml',
    'https://paixaomed.com/termos.xml',
  ]);
}
