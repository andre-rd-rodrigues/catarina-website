'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

/**
 * Minimal variants with added delay
 */
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Slight delay before the container (and its children) animates in
      delay: 0.2,
      staggerChildren: 0.2,
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const fadeInSlideInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // You could also add a per-child delay here if you like,
      // but in this example, we rely on the container's stagger/delay.
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

type SplitLeafImageProps = {
  images: [string, string]; // Exactly two images
};

const SplitLeafImage: React.FC<SplitLeafImageProps> = ({ images }) => {
  const ref = useRef<HTMLDivElement>(null);

  // 1. Hook into scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // 2. Parallax transforms
  // Adjust these values or offsets for a more/less pronounced effect
  const translateY1 = useTransform(scrollYProgress, [0, 2], [0, -70]);
  const translateY2 = useTransform(scrollYProgress, [0, 2], [0, 70]);
  if (images.length !== 2) {
    console.error('SplitLeafImage requires exactly 2 images');
    return null;
  }
  return (
    <motion.div
      ref={ref}
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Only animate on first scroll into view
      className="mx-auto mt-10 flex w-full max-w-3xl gap-4"
    >
      <motion.div
        variants={fadeInSlideInVariant}
        style={{ y: translateY1 }}
        className="relative aspect-[3/4] w-1/2 overflow-hidden rounded-[5px_200px_5px_200px] shadow-lg"
      >
        <Image
          src={images[0]}
          alt="Leaf-shaped image 1"
          className="h-full w-full object-cover"
          fill
        />
      </motion.div>

      <motion.div
        variants={fadeInSlideInVariant}
        style={{ y: translateY2 }}
        className="relative aspect-[3/4] w-1/2 overflow-hidden rounded-[200px_5px_200px_5px] shadow-lg"
      >
        <Image
          src={images[1]}
          alt="Leaf-shaped image 2"
          className="h-full w-full object-cover"
          fill
        />
      </motion.div>
    </motion.div>
  );
};

export default SplitLeafImage;
