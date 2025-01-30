import ServiceCard from "@/components/Cards/ServiceCard";
import Hero from "@/components/Hero";
import Link from "@/components/Link";
import Page from "@/components/Page";
import Section from "@/components/Section";
import SplitLeaf from "@/components/SplitLeaf";

export default function Home() {
  return (
    <Page>
      {/* Sobre mim */}
      <Section>
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="flex-1">
            <Section.Title
              title="Paixão é sinónimo de cuidar"
              subtitle="Sobre mim"
            />
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              natus illo voluptate laborum, itaque ullam atque repellendus
              praesentium quo officiis, sapiente optio perferendis similique
              deserunt cum vel dolores facilis expedita debitis ab modi. Illum
              sequi optio, nam, repellendus reiciendis, quae dolor corrupti
              porro voluptatem quaerat iure quis quibusdam expedita quidem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              natus illo voluptate laborum, itaque ullam atque repellendus
              praesentium quo officiis, sapiente optio perferendis similique
              deserunt cum vel dolores facilis expedita debitis ab modi. Illum
              sequi optio, nam, repellendus reiciendis, quae dolor corrupti
              porro voluptatem quaerat iure quis quibusdam expedita quidem.
            </p>
          </div>
          <div className="flex-1">
            <SplitLeaf
              images={[
                "https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/young-woman-in-the-jacuzzi-of-a-spa-DZY55NA-800x800.jpg",
                "https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/young-couple-relaxing-on-the-tepidarium-bed-in-the-KSPPWQB-683x1024.jpg",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Serviços */}
      <Section className="bg-[var(--color-background-alt)]">
        <Section.Title
          subtitle="Serviços"
          title="Cuidar é mais do que uma profissão"
          className="text-center"
        />
        <div className="flex gap-8 mt-16">
          <ServiceCard
            number="02."
            title="Lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus illo voluptate laborum, itaque ullam atque repellendus praesentium quo officiis, sapiente optio perferendis."
            action={
              <Link
                href="/"
                label="Saber mais"
                variant="none"
                icon="arrow-right"
                iconPrefix={false}
                unstyled
              />
            }
          />
          <ServiceCard
            number="02."
            title="Lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus illo voluptate laborum, itaque ullam atque repellendus praesentium quo officiis, sapiente optio perferendis."
            action={
              <Link
                href="/"
                label="Saber mais"
                variant="none"
                icon="arrow-right"
                iconPrefix={false}
                unstyled
              />
            }
          />
          <ServiceCard
            number="03."
            title="Lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus illo voluptate laborum, itaque ullam atque repellendus praesentium quo officiis, sapiente optio perferendis."
            action={
              <Link
                href="/"
                label="Saber mais"
                variant="none"
                icon="arrow-right"
                iconPrefix={false}
                unstyled
              />
            }
          />
        </div>
      </Section>

      {/* Promoção de serviços */}
      <Hero
        subtitle="Sentir é sentir"
        title="The Best Thing You Can Do to Your Health. Lorem ipsum dolor sit amet, consec tetur adipiscing elit."
        content="Suspendisse rhoncus neque elementum malesuada gravida. Donec gravida enim est, non tincidunt magna pellentesque ac. Duis posuere tellus non ex porttitor, eget pretium ipsum iaculis. Praesent consequat felis at mollis consequat."
        actionButton={<Link href="/" label="Saber mais" variant="outline" />}
      />

      {/* Áreas de atuação */}
      <Section className="bg-[var(--color-secondary)]">
        <Section.Title
          subtitle="sentir apoio"
          title="
Avoid Sickness, the Natural Way"
          color="text-white"
        />
      </Section>
    </Page>
  );
}
