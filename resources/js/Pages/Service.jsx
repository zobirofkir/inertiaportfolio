import { motion } from "framer-motion";
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const Service = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Frontend Development', info: 'Building responsive and interactive UIs.', isSpinning: false, image: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
    { id: 2, name: 'Backend Development', info: 'Creating robust server-side applications.', isSpinning: false, image: 'https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png' },
    { id: 3, name: 'UI/UX Design', info: 'Designing user-friendly and engaging experiences.', isSpinning: false, image: 'https://www.cdnlogo.com/logos/n/80/next-js.svg' },
    { id: 4, name: 'SEO Optimization', info: 'Enhancing website visibility and performance.', isSpinning: false, image: 'https://cdn.freebiesupply.com/logos/large/2x/docker-logo-png-transparent.png' },
    { id: 5, name: 'Frontend Development', info: 'Building responsive and interactive UIs.', isSpinning: false, image: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
    { id: 6, name: 'Backend Development', info: 'Creating robust server-side applications.', isSpinning: false, image: 'https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png' },
    { id: 7, name: 'UI/UX Design', info: 'Designing user-friendly and engaging experiences.', isSpinning: false, image: 'https://www.cdnlogo.com/logos/n/80/next-js.svg' },
    { id: 8, name: 'SEO Optimization', info: 'Enhancing website visibility and performance.', isSpinning: false, image: 'https://cdn.freebiesupply.com/logos/large/2x/docker-logo-png-transparent.png' },
  ]);

  const handleCubeClick = (id) => {
    setServices(services.map(service =>
      service.id === id ? { ...service, isSpinning: !service.isSpinning } : service
    ));
  };

  return (
    <Layout>
      <Head title='Services'/>
      <div className="flex flex-col items-center justify-center bg-white dark:bg-transparent p-4 md:p-6">
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
                  {service.name}
                </h2>
                <p className="text-sm md:text-md text-gray-600 dark:text-gray-400 text-center">
                  {service.info}
                </p>
              </motion.div>
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-2xl"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <img src={service.image} alt={service.name} className="w-16 h-16 md:w-full md:h-full object-contain rounded-2xl" />
                <h2 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white text-center mt-2">
                  {service.name}
                </h2>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Service;
