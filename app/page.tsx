import Hero from '@/components/Hero';
import Link from '@/components/Link';

export default function Home() {
  return (
    <div className="">
      <Hero
        subtitle="About Medral"
        title="The Best Thing You Can Do to Your Health. Lorem ipsum dolor sit amet, consec tetur adipiscing elit."
        content="Suspendisse rhoncus neque elementum malesuada gravida. Donec gravida enim est, non tincidunt magna pellentesque ac. Duis posuere tellus non ex porttitor, eget pretium ipsum iaculis. Praesent consequat felis at mollis consequat."
        actionButton={<Link href="/" label="Agendar" />}
      />
    </div>
  );
}
