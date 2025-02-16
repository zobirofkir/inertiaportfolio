import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

const ShowProject = ({ project }) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imagePath = project.image.startsWith('/storage/')
                    ? project.image
                    : `/storage/${project.image}`

  return (
    <Layout>
      <Head title={project.title} />
      <div className="h-screen">
        <motion.div
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden transform transition-all hover:shadow-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Project Image */}
          <motion.div
            className="relative h-64 overflow-hidden"
            variants={itemVariants}
          >
            <img
              src={imagePath}
              alt={project.title}
              className="w-full h-full object-cover transform transition-all hover:scale-105"
            />
          </motion.div>

          {/* Project Details */}
          <div className="p-8">
            <motion.h1
              className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              {project.title}
            </motion.h1>

            {/* Project Description */}
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {project.description}
            </motion.p>

            {/* Call to Action */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              variants={containerVariants}
            >
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Project
              </motion.a>
              <motion.a
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-lg font-semibold rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Projects
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ShowProject;
