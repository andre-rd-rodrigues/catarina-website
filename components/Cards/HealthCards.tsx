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
      <motion.div
        variants={fadeInSlideInVariant}
        className="relative mb-5 h-20 w-20 text-4xl text-green-700"
      >
        {image}
      </motion.div>
      <motion.h3
        variants={fadeInSlideInVariant}
        className="text-lg font-semibold text-gray-800"
      >
        {title}
      </motion.h3>
      <motion.p variants={fadeInSlideInVariant} className="text-gray-600">
        {description}
      </motion.p>
    </motion.div>
  );
};

const healthCardsData = [
  {
    image: <Image src="/img/leaf.png" alt="Leaf Icon" objectFit="cover" fill />,
    title: 'Viver com Saúde é Viver Plenamente',
    description:
      'Pequenos gestos criam grandes transformações no seu bem-estar.',
  },
  {
    image: (
      <Image src="/img/circle.png" alt="Circle Icon" objectFit="cover" fill />
    ),
    title: 'O Natural é o Caminho para o Equilíbrio',
    description:
      'A natureza tem tudo o que o seu corpo precisa para se renovar.',
  },
  {
    image: (
      <Image src="/img/plant.png" alt="Plant Icon" objectFit="cover" fill />
    ),
    title: 'Cuide de Si, Todos os Dias',
    description:
      'Cada escolha é um passo para uma vida mais saudável e consciente.',
  },
];

const HealthCards: FC = () => {
  return (
    <motion.div
      variants={containerVariant}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center space-y-12 md:flex-row md:space-x-12 md:space-y-0"
    >
      {healthCardsData.map((card, index) => (
        <>
          {index > 0 && (
            <div className="hidden h-44 w-[1px] bg-gray-300 md:block" />
          )}
          <Card
            key={index}
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
