import React, { useState } from 'react';
import {
  containerVariant,
  fadeInSlideInVariant,
  motion,
} from '@/motion/variants';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQsProps = {
  items: FAQItem[];
};

const FAQs: React.FC<FAQsProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      variants={containerVariant}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      className="mx-auto w-full max-w-2xl divide-y rounded-lg border"
    >
      {items.map((item, index) => (
        <motion.div
          variants={fadeInSlideInVariant}
          key={index}
          className="group cursor-pointer px-8 py-6"
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-[var(--color-primary)] transition-all duration-200 group-hover:text-[var(--color-danger)]">
              {item.question}
            </h3>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-[var(--color-danger)]"
            >
              <ChevronDown size={20} />
            </motion.span>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openIndex === index ? 'auto' : 0,
              opacity: openIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="my-5 text-[var(--color-text)]">{item.answer}</p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FAQs;
