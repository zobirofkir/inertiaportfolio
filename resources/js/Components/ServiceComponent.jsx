import React, { useState, useEffect } from 'react';

const ServiceComponent = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Frontend Development', info: 'Building responsive and interactive UIs.', isSpinning: false, image: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
    { id: 2, name: 'Backend Development', info: 'Creating robust server-side applications.', isSpinning: false, image: 'https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png' },
    { id: 3, name: 'UI/UX Design', info: 'Designing user-friendly and engaging experiences.', isSpinning: false, image: 'https://www.cdnlogo.com/logos/n/80/next-js.svg' },
    { id: 4, name: 'SEO Optimization', info: 'Enhancing website visibility and performance.', isSpinning: false, image: 'https://cdn.freebiesupply.com/logos/large/2x/docker-logo-png-transparent.png' },
  ]);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const handleCubeClick = (id) => {
    setServices(services.map(service =>
      service.id === id ? { ...service, isSpinning: !service.isSpinning } : service
    ));
  };

  return (
    <div className={`flex flex-col items-center justify-center bg-white dark:bg-transparent p-6`}>
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mb-10">
        My Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 min-w-full">
        {services.map((service) => (
          <div
            key={service.id}
            className={`relative w-48 h-48 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transform transition-transform duration-500 cursor-pointer`}
            onClick={() => handleCubeClick(service.id)}
            style={{ transformStyle: 'preserve-3d', transform: service.isSpinning ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4" style={{ backfaceVisibility: 'hidden' }}>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                {service.name}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {service.info}
              </p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-2xl" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
              <img src={service.image} alt={service.name} className="w-full h-full object-cover rounded-2xl" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                {service.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceComponent;
