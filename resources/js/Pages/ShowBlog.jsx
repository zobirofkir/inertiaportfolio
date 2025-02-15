import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import { useState } from "react";

const ShowBlog = ({ blog, tags }) => {
  const post = {
    title: blog.data.title,
    description: blog.data.description,
    content: blog.data.content,
    image: blog.data.image,
    url: "https://laravel.com/docs/inertia",
  };

  const images = blog.data.images || [];

  const [comments, setComments] = useState([
    { id: 1, name: "John Doe", comment: "This is a fantastic blog post! Very informative and well-written.", date: "2023-10-01" },
    { id: 2, name: "Jane Smith", comment: "I learned so much from this. Thanks for sharing!", date: "2023-10-02" },
  ]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    const comment = {
      id: comments.length + 1,
      name: username || "Anonymous",
      email: email || "anonymous@anonymous",
      comment: newComment,
      date: new Date().toISOString().split("T")[0],
    };
    setComments([...comments, comment]);
    setNewComment("");
  };

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
                className="w-full h-full object-cover"
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
          className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed flex flex-col items-center max-w- mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

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

        {/* Comment Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Comments
          </h2>

            {/* Comment Input Section */}
            <div className="mb-8">
                <input
                    type="text"
                    className="w-full p-2 rounded-lg shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white mb-4"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    className="w-full p-2 rounded-lg shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white mb-4"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    className="w-full p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    rows="4"
                    placeholder="Leave a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    onClick={handleAddComment}
                >
                    Post Comment
                </button>
            </div>
            
          {/* Display Comments */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <motion.div
                key={comment.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {comment.name}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {comment.date}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {comment.comment}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default ShowBlog;
