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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptates ad asperiores eum labore natus autem sint. Cupiditate,
          saepe aspernatur. Sunt dolore officiis placeat molestias, veritatis
          minus pariatur quia nobis delectus, rerum veniam voluptates nam,
          maiores tempora architecto maxime. A vero ex expedita aliquid libero
          alias porro autem nemo voluptate.
        </p>
      </Section>
    </>
  );
}
