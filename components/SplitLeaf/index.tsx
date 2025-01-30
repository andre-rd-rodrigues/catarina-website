"use client";

import Image from "next/image";
import React from "react";

type SplitLeafImageProps = {
  images: [string, string]; // Expect exactly two image URLs
};

const SplitLeafImage: React.FC<SplitLeafImageProps> = ({ images }) => {
  if (images.length !== 2) {
    console.error("SplitLeafImage component requires exactly 2 images");
    return null;
  }

  return (
    <div className="flex gap-4 w-full max-w-3xl mx-auto mt-10">
      <div className="relative w-1/2 aspect-[3/4] overflow-hidden shadow-lg rounded-[5px_200px_5px_200px] -translate-y-8">
        <Image
          src={images[0]}
          alt="Leaf-shaped image 1"
          className="w-full h-full object-cover"
          fill
        />
      </div>
      <div className="relative w-1/2 aspect-[3/4] overflow-hidden shadow-lg rounded-[200px_5px_200px_5px]">
        <Image
          src={images[1]}
          alt="Leaf-shaped image 2"
          className="w-full h-full object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default SplitLeafImage;
