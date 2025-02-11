import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { containerVariant, fadeInSlideInVariant } from '@/motion/variants';

interface CardProps {
  image: React.ReactNode;
  title: string;
  description: string;
}

const Card: FC<CardProps> = ({ image, title, description }) => {
  return (
    <motion.div className="flex max-w-xs flex-col items-center space-y-2 text-center">
      <motion.div variants={fadeInSlideInVariant} className="relative mb-5 h-20 w-20 text-4xl text-green-700">
        {image}
      </motion.div>
      <motion.h3 variants={fadeInSlideInVariant} className="text-lg font-semibold text-gray-800">{title}</motion.h3>
      <motion.p variants={fadeInSlideInVariant} className="text-gray-600">{description}</motion.p>
    </motion.div>
  );
};

const healthCardsData = [
  {
    image: <Image src="/img/leaf.png" alt="Leaf Icon" objectFit="cover" fill />,
    title: 'Live healthily, live well.',
    description: 'Lorem ipsum sit amet.',
  },
  {
    image: (
      <Image src="/img/circle.png" alt="Circle Icon" objectFit="cover" fill />
    ),
    title: 'Go natural, be healthy.',
    description: 'Donec finibus eros.',
  },
  {
    image: (
      <Image src="/img/plant.png" alt="Plant Icon" objectFit="cover" fill />
    ),
    title: 'Healthy choices for you.',
    description: 'Integer convallis velit.',
  },
];

const HealthCards: FC = () => {
  return (
    <motion.div 
      variants={containerVariant} 
      whileInView="visible" 
      initial="hidden" 
      viewport={{ once: true }} 
      className="flex flex-col items-center justify-center space-y-12 md:flex-row md:space-y-0 md:space-x-12"
    >
      {healthCardsData.map((card, index) => (
        <>
          {index > 0 && <div className="hidden h-44 w-[1px] bg-gray-300 md:block" />}
          <Card
            key={card.title}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        </>
      ))}
    </motion.div>
  );
};

export default HealthCards;
