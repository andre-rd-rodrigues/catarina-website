import ServiceCard from '@/components/Cards/ServiceCard';
import Hero from '@/components/Hero';
import Link from '@/components/Link';
import Section from '@/components/Section';

export default function Home() {
  return (
    <>
      <Hero
        subtitle="About Medral"
        title="The Best Thing You Can Do to Your Health. Lorem ipsum dolor sit amet, consec tetur adipiscing elit."
        content="Suspendisse rhoncus neque elementum malesuada gravida. Donec gravida enim est, non tincidunt magna pellentesque ac. Duis posuere tellus non ex porttitor, eget pretium ipsum iaculis. Praesent consequat felis at mollis consequat."
        actionButton={<Link href="/" label="Agendar" />}
      />

      <Section>
        <div className="flex gap-4">
          <ServiceCard
            number="01."
            title="Lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            action={
              <Link
                href="/"
                label="Agendar"
                variant="accent"
                icon="arrow-right"
                unstyled
                iconPrefix={false}
              />
            }
          />
          <ServiceCard
            number="01."
            title="Lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            action={
              <Link
                href="/"
                label="Agendar"
                variant="accent"
                icon="arrow-right"
                unstyled
                iconPrefix={false}
              />
            }
          />
          <ServiceCard
            number="01."
            title="Lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            action={
              <Link
                href="/"
                label="Agendar"
                variant="accent"
                icon="arrow-right"
                unstyled
                iconPrefix={false}
              />
            }
          />
        </div>
      </Section>
    </>
  );
}
