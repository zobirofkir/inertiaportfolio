import { useState } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";
import serviceSound from "../Sounds/serviceSound.mp3";

const ServiceComponent = () => {
  const [play] = useSound(serviceSound);
  const [services, setServices] = useState([
    { id: 1, name: "Full Stack Development", info: "Developing complete web applications using Laravel and React.js.", image: "https://static.thenounproject.com/png/2230389-200.png" },
    { id: 2, name: "Custom Web Applications", info: "Building tailored web solutions with high scalability and performance.", image: "https://cdn-icons-png.freepik.com/256/12098/12098331.png?semt=ais_hybrid" },
    { id: 3, name: "Admin Panel Development", info: "Creating powerful and user-friendly admin dashboards using Filament and Laravel.", image: "https://cdn-icons-png.flaticon.com/512/9323/9323925.png" },
    { id: 4, name: "Website Optimization", info: "Enhancing website speed, SEO, and performance for a seamless user experience.", image: "https://cdn-icons-png.flaticon.com/512/1640/1640827.png" },
    { id: 5, name: "Real-time Web Applications", info: "Developing chat apps and real-time systems using Laravel WebSockets and React.", image: "https://cdn-icons-png.flaticon.com/512/8727/8727856.png" },
    { id: 6, name: "Three.js & 3D Web Development", info: "Creating interactive 3D experiences and visualizations in Next.js.", image: "https://cdn3d.iconscout.com/3d/premium/thumb/web-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--html-logo-technology-design-pack-business-illustrations-4496032.png?f=webp" },
    { id: 7, name: "Payment Gateway Integration", info: "Implementing secure payment solutions for e-commerce and online services.", image: "https://cdn-icons-png.flaticon.com/512/4802/4802398.png" },
    { id: 8, name: "Docker & DevOps", info: "Setting up scalable and containerized environments for smooth deployment.", image: "https://theagileadmin.com/wp-content/uploads/2015/10/docker-logo.png" },
  ]);

  return (
    <div className="flex flex-col items-center justify-center bg-transparent dark:bg-transparent p-4 md:p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mb-6 md:mb-10">
        My Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="relative w-full p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05, rotateX: -10, rotateY: 10 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => play()}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <img src={service.image} alt={service.name} className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" />
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                {service.name}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {service.info}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceComponent;
