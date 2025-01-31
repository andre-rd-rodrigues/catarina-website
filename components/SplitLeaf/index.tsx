'use client';

import Image from 'next/image';
import React from 'react';
import {
  containerVariant,
  fadeInSlideInVariant,
  motion,
} from '@/motion/variants';

type SplitLeafImageProps = {
  images: [string, string]; // Expect exactly two image URLs
};

const SplitLeafImage: React.FC<SplitLeafImageProps> = ({ images }) => {
  if (images.length !== 2) {
    console.error('SplitLeafImage component requires exactly 2 images');
    return null;
  }

  return (
    <motion.div
      variants={containerVariant}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      className="mx-auto mt-10 flex w-full max-w-3xl gap-4"
    >
      <motion.div
        variants={fadeInSlideInVariant}
        className="relative aspect-[3/4] w-1/2 -translate-y-8 overflow-hidden rounded-[5px_200px_5px_200px] shadow-lg"
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
