import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A responsive web application built with React and Tailwind CSS.',
    image: 'https://img.freepik.com/photos-gratuite/voiture-luxe-garee-autoroute-phare-illumine-au-coucher-du-soleil_181624-60607.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'An e-commerce platform with a modern UI and smooth animations.',
    image: 'https://via.placeholder.com/400',
    link: '#',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'A portfolio website with 3D effects and dark mode support.',
    image: 'https://via.placeholder.com/400',
    link: '#',
  },
];

const ProjectCard = ({ project }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full h-64 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="w-full h-full relative rounded-lg shadow-lg transition-transform duration-500"
        animate={{ rotateY: flipped ? 180 : 0 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full dark:bg-gray-800 bg-white dark:text-white text-black flex flex-col items-center justify-center p-6 rounded-lg transform rotateY-180"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
          <p className="mb-4">{project.description}</p>
          <a
            href={project.link}
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            View Project
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Project = () => {
  return (
    <Layout>
      <Head title="Projects" />
      <div className="min-h-screen bg-white dark:bg-transparent text-gray-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-transparent bg-clip-text">
            Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project;
