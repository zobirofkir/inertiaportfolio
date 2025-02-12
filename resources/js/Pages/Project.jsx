import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A responsive web application built with React and Tailwind CSS.',
    image: 'https://via.placeholder.com/400',
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

const Project = () => {
  return (
    <Layout>
      <Head title="Projects" />
      <div className="min-h-screen bg-white dark:bg-transparent text-gray-900">
        <div className="container mx-auto px-4 py-8">
          {/* Gradient Text for Heading */}
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-transparent bg-clip-text">
            Projects
          </h1>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  {/* Gradient Text for Project Title */}
                  <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                    {project.title}
                  </h2>
                  <p className="mb-4 text-gray-700 dark:text-white">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project;
