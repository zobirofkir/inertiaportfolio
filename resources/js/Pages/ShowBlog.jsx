import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";

const ShowBlog = ({ blog, tags }) => {
  const post = {
    title: blog.data.title,
    description: blog.data.description,
    content: blog.data.content,
    image: blog.data.image,
    url: "https://laravel.com/docs/inertia",
  };

  const images = blog.data.images || [];

  return (
    <Layout>
      <Head title={post.title} />

      {/* Blog Post Container */}
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Post Image with 3D Effect */}
        {post.image && (
          <motion.div
            className="relative group overflow-hidden rounded-lg shadow-2xl"
            whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-white text-4xl font-bold text-center">
                {post.title}
              </h2>
            </motion.div>
          </motion.div>
        )}

        {/* Post Title */}
        <motion.h1
          className="text-5xl font-extrabold mt-12 mb-6 text-gray-900 dark:text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {post.title}
        </motion.h1>

        {/* Post Description */}
        <motion.p
          className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {post.description}
        </motion.p>

        {/* Post Content */}
        <motion.div
          className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed flex flex-col items-end max-w- mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Key Features Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tags.map((tag, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                  #{tag}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Gallery Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Image Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-2xl"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white text-xl font-bold">
                    {blog.data.title}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call-to-Action Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Join thousands of developers building modern web applications with Laravel and Inertia.js.
          </p>
          <motion.a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span>Start Learning Now</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default ShowBlog;
