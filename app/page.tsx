'use client';
import ServiceCard from '@/components/Cards/ServiceCard';
import FAQs from '@/components/FAQS';
import Hero from '@/components/Hero';
import Link from '@/components/Link';
import Page from '@/components/Page';
import Section from '@/components/Section';
import SplitLeaf from '@/components/SplitLeaf';
import Testimonials from '@/components/Testimonials';
import { HOMEPAGE_CHOOSE_US_SECTION } from '@/constants/homepage';
import {
  containerVariant,
  fadeInSlideInVariant,
  fadeInSlideLeftVariant,
  motion,
} from '@/motion/variants';

export default function Home() {
  return (
    <Page>
      {/* Sobre mim */}
      <Section>
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <motion.div
            variants={containerVariant}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="flex-1"
          >
            <Section.Title
              title="Paixão é sinónimo de cuidar"
              subtitle="Sobre mim"
              animation="left"
            />
            <motion.p variants={fadeInSlideLeftVariant} className="mt-8">
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
            </motion.p>
          </motion.div>
          <div className="flex-1">
            <SplitLeaf
              images={[
                'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/young-woman-in-the-jacuzzi-of-a-spa-DZY55NA-800x800.jpg',
                'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/young-couple-relaxing-on-the-tepidarium-bed-in-the-KSPPWQB-683x1024.jpg',
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
          animation="left"
        />
        <motion.div
          variants={containerVariant}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="mt-16 flex gap-5"
        >
          <motion.span variants={fadeInSlideInVariant}>
            <ServiceCard
              number="01."
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
          </motion.span>
          <motion.span variants={fadeInSlideInVariant}>
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
          </motion.span>
          <motion.span variants={fadeInSlideInVariant}>
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
          </motion.span>
        </motion.div>
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
        <motion.div
          variants={containerVariant}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="relative mb-10 rounded-md bg-[url('https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/man-pouring-tea-during-tea-ceremony-at-home-NSQZ9AE.jpg')] bg-cover bg-center p-20"
        >
          <div className="absolute inset-0 rounded-md bg-emerald-950/45"></div>
          <div className="relative z-10">
            <Section.Title
              subtitle="sentir apoio"
              title="Avoid Sickness, the Natural Way"
              color="text-white"
              className="mb-20"
              animation="left"
            />
            <motion.div
              variants={containerVariant}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-12 md:grid-cols-2"
            >
              {HOMEPAGE_CHOOSE_US_SECTION.map(
                ({ title, description }, index) => (
                  <motion.div
                    variants={fadeInSlideInVariant}
                    key={index}
                    className="flex-1 border-b border-gray-600 pb-10"
                  >
                    <h5 className="mb-4 text-xl text-white">{title}</h5>
                    <p className="text-gray-300">{description}</p>
                  </motion.div>
                ),
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <Testimonials />
      </Section>

      {/* FAQS */}
      <Section>
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="flex-1">
            <SplitLeaf
              images={[
                'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/young-woman-in-the-jacuzzi-of-a-spa-DZY55NA-800x800.jpg',
                'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/young-couple-relaxing-on-the-tepidarium-bed-in-the-KSPPWQB-683x1024.jpg',
              ]}
            />
          </div>
          <motion.div
            variants={containerVariant}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="flex-1"
          >
            <Section.Title
              title="Perguntas Frequentes"
              subtitle="FAQS"
              animation="left"
              className="mb-6"
            />
            <p className="mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium atque dolorem iste illum mollitia voluptatibus eaque
              dolorum, autem ducimus ea.
            </p>
            <FAQs
              items={[
                {
                  question: 'Is there a guarantee for the results?',
                  answer:
                    'Donec bibendum arcu in suscipit lobortis. In malesuada, nunc eu tempus suscipit, purus diam feugiat dui, eu convallis dolor neque vitae elit. In at imperdiet mauris. Vivamus non dui gravida, congue odio quis, lacinia justo. Pellentesque ultrices orci ac lectus sagittis.',
                },
                {
                  question: 'Is there a guarantee for the results?',
                  answer:
                    'Donec bibendum arcu in suscipit lobortis. In malesuada, nunc eu tempus suscipit, purus diam feugiat dui, eu convallis dolor neque vitae elit. In at imperdiet mauris. Vivamus non dui gravida, congue odio quis, lacinia justo. Pellentesque ultrices orci ac lectus sagittis.',
                },
                {
                  question: 'Is there a guarantee for the results?',
                  answer:
                    'Donec bibendum arcu in suscipit lobortis. In malesuada, nunc eu tempus suscipit, purus diam feugiat dui, eu convallis dolor neque vitae elit. In at imperdiet mauris. Vivamus non dui gravida, congue odio quis, lacinia justo. Pellentesque ultrices orci ac lectus sagittis.',
                },
              ]}
            />
          </motion.div>
        </div>
      </Section>
    </Page>
  );
}
