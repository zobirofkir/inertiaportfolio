import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

const ShowProject = ({ project }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imagePath = project.image.startsWith('/storage/')
    ? project.image
    : `/storage/${project.image}`;

  return (
    <Layout>
      <Head title={project.title} />
      <div className="min-h-screen flex items-center justify-center ">
        <motion.div
          className="max-w-6xl w-full mx-4 bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transform transition-all hover:shadow-3xl bg-gradient-to-r from-purple-900 to-indigo-900 py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Project Image */}
          <motion.div
            className="relative h-96 overflow-hidden"
            variants={itemVariants}
          >
            <img
              src={imagePath}
              alt={project.title}
              className="w-full h-full object-cover transform transition-all hover:scale-110"
            />
          </motion.div>

          {/* Project Details */}
          <div className="p-8 space-y-8">
            <motion.h1
              className="text-6xl font-bold text-white"
              variants={itemVariants}
            >
              {project.title}
            </motion.h1>

            {/* Project Description */}
            <motion.p
              className="text-xl text-gray-200 leading-relaxed"
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
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Project
              </motion.a>
              <motion.a
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-lg font-semibold rounded-full text-white bg-transparent hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
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
