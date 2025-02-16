import { useState } from 'react';
import serviceSound from '../Sounds/serviceSound.mp3';
import useSound from 'use-sound';

const ServiceComponent = () => {
    const [play] = useSound(serviceSound);

    const [services, setServices] = useState([
        { id: 1, name: 'Full Stack Development', info: 'Developing complete web applications using Laravel and React.js.', isSpinning: false, image: 'https://static.thenounproject.com/png/2230389-200.png' },
        { id: 2, name: 'Custom Web Applications', info: 'Building tailored web solutions with high scalability and performance.', isSpinning: false, image: 'https://cdn-icons-png.freepik.com/256/12098/12098331.png?semt=ais_hybrid' },
        { id: 3, name: 'Admin Panel Development', info: 'Creating powerful and user-friendly admin dashboards using Filament and Laravel.', isSpinning: false, image: 'https://cdn-icons-png.flaticon.com/512/9323/9323925.png' },
        { id: 4, name: 'Website Optimization', info: 'Enhancing website speed, SEO, and performance for a seamless user experience.', isSpinning: false, image: 'https://cdn-icons-png.flaticon.com/512/1640/1640827.png' },
        { id: 5, name: 'Real-time Web Applications', info: 'Developing chat apps and real-time systems using Laravel WebSockets and React.', isSpinning: false, image: 'https://cdn-icons-png.flaticon.com/512/8727/8727856.png' },
        { id: 6, name: 'Three.js & 3D Web Development', info: 'Creating interactive 3D experiences and visualizations in Next.js.', isSpinning: false, image: 'https://cdn3d.iconscout.com/3d/premium/thumb/web-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--html-logo-technology-design-pack-business-illustrations-4496032.png?f=webp' },
        { id: 7, name: 'Payment Gateway Integration', info: 'Implementing secure payment solutions for e-commerce and online services.', isSpinning: false, image: 'https://cdn-icons-png.flaticon.com/512/4802/4802398.png' },
        { id: 8, name: 'Docker & DevOps', info: 'Setting up scalable and containerized environments for smooth deployment.', isSpinning: false, image: 'https://theagileadmin.com/wp-content/uploads/2015/10/docker-logo.png' },
    ]);

  const handleCubeClick = (id) => {
    play();
    setServices(services.map(service =>
      service.id === id ? { ...service, isSpinning: !service.isSpinning } : service
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center bg-transparent dark:bg-transparent p-4 md:p-6">
      <h1 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mb-6 md:mb-10">
        My Services
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative w-full h-44 md:w-48 md:h-48 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transform transition-transform duration-500 cursor-pointer"
            onClick={() => handleCubeClick(service.id)}
            style={{ transformStyle: 'preserve-3d', transform: service.isSpinning ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4" style={{ backfaceVisibility: 'hidden' }}>
              <h2 className="text-md md:text-lg font-semibold text-gray-900 dark:text-white text-center">
                {service.name}
              </h2>
              <p className="text-sm md:text-md text-gray-600 dark:text-gray-400 text-center">
                {service.info}
              </p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-2xl" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
              <img src={service.image} alt={service.name} className="w-16 h-16 md:w-full md:h-full object-contain rounded-2xl" />
              <h2 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white text-center mt-2">
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
