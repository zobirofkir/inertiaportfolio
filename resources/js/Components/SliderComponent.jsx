import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

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
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg',
    description: 'Description for Project 2',
  },
  {
    id: 3,
    title: 'Project 3',
    image: 'https://via.placeholder.com/800x600',
    description: 'Description for Project 3',
  },
  {
    id: 4,
    title: 'Project 4',
    image: 'https://via.placeholder.com/800x600',
    description: 'Description for Project 4',
  },
  {
    id: 5,
    title: 'Project 5',
    image: 'https://via.placeholder.com/800x600',
    description: 'Description for Project 5',
  },
];

const SliderComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full py-16 bg-transparent dark:bg-transparent"
    >
      <div className="w-full mx-auto px-4">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={1}
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
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-full h-[500px] sm:h-[600px]"
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
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {portfolioItems.map((item) => (
            <SwiperSlide
              key={item.id}
              className="w-full h-full flex items-center justify-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center rounded-lg transition-transform duration-500 hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${item.image})`,
                }}
              ></div>

              {/* Content Overlay */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 flex flex-col items-center justify-center text-center p-6 sm:p-8"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-200">
                  {item.description}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default SliderComponent;
