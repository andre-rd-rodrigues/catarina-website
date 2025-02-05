'use client';

import Hero from '@/components/Hero';
import Page from '@/components/Page';
import {
  fadeInSlideLeftVariant,
  containerVariant,
  fadeInSlideInVariant,
} from '@/motion/variants';
import Section from '@/components/Section';
import { motion } from 'motion/react';
import React from 'react';
import SplitLeaf from '@/components/SplitLeaf';
import InfoCard from '@/components/Cards/InfoCard';
import { ABOUT_VALUES } from '@/constants/about';
import { IconName } from 'lucide-react/dynamic';

function About() {
  return (
    <Page>
      <Page.Title
        src="https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/small-white-ceramic-mortar-with-eucalyptus-leaves-AANHPA2.jpg"
        title="Sobre"
      />
      {/* About 1 */}
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </motion.p>
          </motion.div>
          <div className="order-2 flex-1 md:order-1">
            <SplitLeaf
              images={[
                'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/young-woman-in-the-jacuzzi-of-a-spa-DZY55NA-800x800.jpg',
                'https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/young-couple-relaxing-on-the-tepidarium-bed-in-the-KSPPWQB-683x1024.jpg',
              ]}
            />
          </div>
        </div>
      </Section>
      {/* About 2 */}
      <Section>
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="order-2 flex-1 md:order-1">
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
            className="order-1 flex-1 md:order-2"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </motion.p>
          </motion.div>
        </div>
      </Section>

      {/* Hero */}
      <Hero
        subtitle="Sentir é sentir"
        title="The Best Thing You Can Do to Your Health. Lorem ipsum dolor sit amet, consec tetur adipiscing elit."
        content="Suspendisse rhoncus neque elementum malesuada gravida. Donec gravida enim est, non tincidunt magna pellentesque ac. Duis posuere tellus non ex porttitor, eget pretium ipsum iaculis. Praesent consequat felis at mollis consequat."
      />

      {/* Values */}
      <Section className="bg-[var(--color-background-alt)]">
        <Section.Title
          title="Missão Terapêutica"
          subtitle="Valores"
          animation="left"
        />
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="mt-12 flex flex-wrap justify-between gap-5 md:flex-nowrap"
        >
          {ABOUT_VALUES.map(({ icon, title, description }) => (
            <motion.span variants={fadeInSlideInVariant} key={title} className='w-full'>
              <InfoCard
                key={title}
                icon={icon as IconName}
                title={title}
                description={description}
              />
            </motion.span>
          ))}
        </motion.div>
      </Section>
    </Page>
  );
}

export default About;
