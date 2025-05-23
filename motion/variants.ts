import { motion, useScroll, useTransform } from 'motion/react';

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Homepage
const homeQuoteVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 4,
      staggerChildren: 2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const homeContainerTitleVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

//Work page
const workPageHeaderContent = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 0.2,
    },
  },
};

const fadeInVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1.2,
    },
  },
};

const fadeInSlideInVariant = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: [0.35, 0, 0, 1], // ease-smooth
    },
  },
};

const fadeInSlideLeftVariant = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.35, 0, 0, 1],
    },
  },
};

const slowRotateVariant = {
  rotate: [0, 360],
  transition: {
    duration: 8,
    ease: 'linear',
    repeat: Infinity,
  },
};

const scaleSpringVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.4,
    },
  },
};

const getAttentionVariant = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 0.6,
        ease: 'easeInOut',
        repeatDelay: 1,
      },
      rotate: {
        repeat: Infinity,
        duration: 0.6,
        ease: 'easeInOut',
        repeatDelay: 1,
      },
    },
  },
  hover: {
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const underlineSlideInVariant = {
  hidden: {
    width: '0%',
    opacity: 0.5,
    transition: {
      duration: 1,
      ease: [0.35, 0, 0, 1],
    },
  },
  visible: {
    width: '100%',
    opacity: 0.5,
    transition: {
      duration: 1,
      ease: [0.35, 0, 0, 1],
      delay: 0.3,
    },
  },
};

const blurVariant = {
  hidden: {
    opacity: 0,
    filter: 'blur(20px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0)',
    transition: {
      duration: 2,
      ease: [0.35, 0, 0.25, 1],
    },
  },
};

export {
  containerVariant,
  fadeInSlideInVariant,
  fadeInSlideLeftVariant,
  fadeInVariant,
  getAttentionVariant,
  homeQuoteVariant,
  motion,
  scaleSpringVariant,
  slowRotateVariant,
  useScroll,
  useTransform,
  workPageHeaderContent,
  underlineSlideInVariant,
  blurVariant,
  homeContainerTitleVariant,
};
