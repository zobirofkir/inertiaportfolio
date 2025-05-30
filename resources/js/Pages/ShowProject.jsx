import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ShowProject = ({ project }) => {
  const [pageTitle] = useState(`${project.title} | Zobir Ofkir's Portfolio`);
  const [pageDescription] = useState(`${project.description.substring(0, 150)}...`);

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
                    : `/storage/${project.image}`

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${project.title}, web development, portfolio project, Zobir Ofkir, case study`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={project.image.startsWith('/storage/') ? `${window.location.origin}${project.image}` : `${window.location.origin}/storage/${project.image}`} />
        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.description,
            "image": project.image.startsWith('/storage/') ? `${window.location.origin}${project.image}` : `${window.location.origin}/storage/${project.image}`,
            "url": project.link,
            "author": {
              "@type": "Person",
              "name": "Zobir Ofkir"
            }
          })}
        </script>
      </Head>
      <div className="h-screen flex items-center justify-center mt-20">
        <motion.div
          className="max-w-4xl w-full mx-4 rounded-lg shadow-2xl overflow-hidden transform transition-all hover:shadow-3xl hover:rotate-1 hover:scale-105"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.02, rotate: 1 }}
          whileTap={{ scale: 0.98, rotate: -1 }}
        >
          {/* Project Image */}
          <motion.div
            className="relative h-64 overflow-hidden"
            variants={itemVariants}
          >
            <img
              src={imagePath}
              alt={`${project.title} - Project by Zobir Ofkir`}
              className="w-full h-full object-cover transform transition-all hover:scale-110"
              whileHover={{ scale: 1.1 }}
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
