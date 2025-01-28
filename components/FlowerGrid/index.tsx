'use client';

import React from 'react';
import Image from 'next/image';

interface FlowerGridProps {
  images: string[]; // Array of 4 image URLs
}

const FlowerGrid: React.FC<FlowerGridProps> = ({ images }) => {
  if (images.length !== 2) {
    console.error('FlowerGrid component requires exactly 2 images');
    return null;
  }

  return (
    <div className="mx-auto grid w-full max-w-lg grid-cols-2 grid-rows-2 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-square w-full overflow-hidden"
          style={{
            clipPath: [
              'path("M0,50% Q50%,0 100%,50% Q50%,100% 0,50%")', // Top-left
              'path("M50%,0 Q100%,50% 50%,100% Q0,50% 50%,0")', // Top-right
              /*  'path("M50%,100% Q100%,50% 50%,0 Q0,50% 50%,100%")', // Bottom-left
              'path("M100%,50% Q50%,100% 0,50% Q50%,0 100%,50%")', // Bottom-right */
            ][index],
          }}
        >
          <Image
            src={image}
            alt={`Flower petal ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default FlowerGrid;
