import { motion } from "framer-motion";
import Layout from '@/layouts/Layout';
import { useState } from 'react';
import serviceSound from '../sounds/serviceSound.mp3';
import useSound from "use-sound";
import SeoHead from '@/components/SeoHead';
import AdsenseComponent from '@/components/AdsenseComponent';

const Service = ({ services: initialServices, seo, structuredData }) => {
    const [play] = useSound(serviceSound);
    const [services, setServices] = useState(initialServices);

    const handleCubeClick = (id) => {
        play();
        setServices(services.map(service =>
            service.id === id ? { ...service, isSpinning: !service.isSpinning } : service
        ));
    };

    return (
        <Layout>
          <SeoHead seo={seo} structuredData={structuredData} />
          <div className="flex flex-col items-center justify-center bg-transparent dark:bg-transparent p-4 md:p-6 md:my-0 mt-20 min-h-screen">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mb-6 md:mb-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              My Services
            </motion.h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className="relative w-full h-44 md:w-48 md:h-48 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transform transition-transform duration-500 cursor-pointer"
                  onClick={() => handleCubeClick(service.id)}
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: service.isSpinning ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center p-4"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <h2 className="text-md md:text-lg font-semibold text-gray-900 dark:text-white text-center">
                      {service.title}
                    </h2>
                    <p className="text-sm md:text-md text-gray-600 dark:text-gray-400 text-center">
                      {service.description}
                    </p>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-2xl"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <img src={`storage/${service.image}`} alt={`${service.title} - Web Development Service by Zobir Ofkir`} className="w-16 h-16 md:w-full md:h-full object-contain rounded-2xl" />
                    <h2 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white text-center mt-2">
                      {service.title}
                    </h2>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <div className="container mx-auto my-8">
              <AdsenseComponent adSlot="5793725415" adFormat="auto" fullWidthResponsive={true} />
            </div>
          </div>
        </Layout>
      );
};

export default Service;
