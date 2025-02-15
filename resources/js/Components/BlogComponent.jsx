import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BlogComponent = ({blogs, setBlogs}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const handleFlip = (id) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === id ? { ...blog, isFlipped: !blog.isFlipped } : blog
      )
    );
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const nextPage = () => {
    if (currentPage < Math.ceil(blogs.length / blogsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-transparent dark:bg-transparent text-gray-900 dark:text-white relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My blogs
        </motion.h1>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {currentBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                className="relative w-full h-64 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl cursor-pointer"
                onClick={() => handleFlip(blog.id)}
                animate={{ rotateX: blog.isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <motion.img
                    src={`storage/${blog.images[0]}`}
                    alt={blog.title}
                    className="w-full h-full object-cover rounded-lg"
                    style={{ transform: blog.isFlipped ? "rotateX(180deg)" : "rotateX(0deg)" }}
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-lg"
                  style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
                >
                  <h2 className="text-2xl font-semibold mb-3">{blog.title}</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{blog.description.slice(0, 100)}...</p>
                  <a
                    href={`/blog/${blog.slug}`}
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-md text-lg font-medium shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    View Blog
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center mt-8">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-md text-lg font-medium shadow-lg hover:scale-105 transition-transform duration-300 mr-4"
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(blogs.length / blogsPerPage)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-md text-lg font-medium shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
