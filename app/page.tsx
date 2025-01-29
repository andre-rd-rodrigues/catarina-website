import ServiceCard from '@/components/Cards/ServiceCard';
import Hero from '@/components/Hero';
import Link from '@/components/Link';
import Page from '@/components/Page';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';

export default function Home() {
  return (
    <Page>
      <Hero
        subtitle="About Medral"
        title="The Best Thing You Can Do to Your Health. Lorem ipsum dolor sit amet, consec tetur adipiscing elit."
        content="Suspendisse rhoncus neque elementum malesuada gravida. Donec gravida enim est, non tincidunt magna pellentesque ac. Duis posuere tellus non ex porttitor, eget pretium ipsum iaculis. Praesent consequat felis at mollis consequat."
        actionButton={<Link href="/" label="Agendar" />}
      />

      <Section>
        <SectionTitle title="Lorem ipsum dolor sit amet" subtitle="Lorem" />
      </Section>
    </Page>
  );
}
