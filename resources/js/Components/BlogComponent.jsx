import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BlogComponent = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "blog 1", description: "A web application for managing tasks.", link: "https://blog1.com", image: "https://static.toiimg.com/photo/80387978.cms?imgsize=174948", isFlipped: false },
    { id: 2, title: "blog 2", description: "An e-commerce platform with advanced filtering.", link: "https://blog2.com", image: "https://via.placeholder.com/400x200", isFlipped: false },
    { id: 3, title: "blog 3", description: "A portfolio website for a creative agency.", link: "https://blog3.com", image: "https://via.placeholder.com/400x200", isFlipped: false },
    { id: 4, title: "blog 4", description: "A mobile app for fitness tracking.", link: "https://blog4.com", image: "https://via.placeholder.com/400x200", isFlipped: false },
    { id: 5, title: "blog 5", description: "A social media platform for photographers.", link: "https://blog5.com", image: "https://via.placeholder.com/400x200", isFlipped: false },
    { id: 6, title: "blog 6", description: "A blog platform for tech enthusiasts.", link: "https://blog6.com", image: "https://via.placeholder.com/400x200", isFlipped: false },
    { id: 7, title: "blog 7", description: "A blog management tool for teams.", link: "https://blog7.com", image: "https://via.placeholder.com/400x200", isFlipped: false },
    { id: 8, title: "blog 8", description: "A weather app with real-time updates.", link: "https://blog8.com", image: "https://via.placeholder.com/400x200", isFlipped: false },
    { id: 9, title: "blog 9", description: "A recipe sharing platform.", link: "https://blog9.com", image: "https://via.placeholder.com/400x200", isFlipped: false },
  ]);

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
                    src={blog.image}
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
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{blog.description}</p>
                  <a
                    href={blog.link}
                    target="_blank"
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
