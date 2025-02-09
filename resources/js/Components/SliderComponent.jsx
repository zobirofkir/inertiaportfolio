import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const portfolioItems = [
  {
    id: 1,
    title: 'Project 1',
    image: 'https://wallpapersmug.com/download/800x600/05bf15/galaxy-space-fantasy-art.jpg',
    description: 'Description for Project 1',
  },
  {
    id: 2,
    title: 'Project 2',
    image: 'https://via.placeholder.com/800x600',
    description: 'Description for Project 2',
  },
  {
    id: 3,
    title: 'Project 3',
    image: 'https://via.placeholder.com/800x600',
    description: 'Description for Project 3',
  },
  // Add more projects as needed
];

const SliderComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center"
    >
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full h-full"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            coverflowEffect: {
              rotate: 10,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            },
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
            coverflowEffect: {
              rotate: 15,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: true,
            },
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {portfolioItems.map((item) => (
          <SwiperSlide
            key={item.id}
            className="w-full h-full flex items-center justify-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
          >
            {/* Background Image with Opacity */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${item.image})`,
                opacity: 0.3, // Adjust opacity here
              }}
            ></div>

            {/* Content Overlay */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 flex flex-col items-center justify-center text-center p-5 max-w-3xl mx-auto"
            >
              <div className="mt-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
                  {item.title}
                </h3>
                <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </motion.div>
  );
};

export default SliderComponent;
