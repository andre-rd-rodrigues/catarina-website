import { TESTIMONIALS } from '@/constants/testimonials';
import Testimonial from './Testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { containerVariant, motion } from '@/motion/variants';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials: React.FC = () => {
  return (
    <motion.span
      variants={containerVariant}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
    >
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        modules={[Autoplay, Pagination]}
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Testimonial {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.span>
  );
};

export default Testimonials;
