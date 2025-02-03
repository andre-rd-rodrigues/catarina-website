import Image from 'next/image';
import React from 'react';
import {
  containerVariant,
  fadeInSlideInVariant,
  motion,
} from '@/motion/variants';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
};

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <motion.div
      variants={containerVariant}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      className="mx-auto max-w-5xl px-6 py-12 text-center"
    >
      <motion.span variants={fadeInSlideInVariant}>
        <Image
          src="/quotes.svg"
          width={120}
          height={120}
          alt="Testimonials"
          className="mb-7 mx-auto"
        />
      </motion.span>
      <motion.blockquote
        variants={fadeInSlideInVariant}
        className="font-marcellus mb-6 text-2xl leading-relaxed text-white"
      >
        {quote}
      </motion.blockquote>
      <motion.div variants={fadeInSlideInVariant}>
        <p className="mb-1 text-xl text-gray-400">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </motion.div>
    </motion.div>
  );
};

export default Testimonial;
