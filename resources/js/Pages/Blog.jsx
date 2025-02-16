import { motion } from "framer-motion";
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Link } from '@inertiajs/react';
import blogSound from '../Sounds/blogsound.mp3';
import useSound from "use-sound";

const Blog = ({ blogs, categories }) => {
  const { data, links } = blogs;
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [play] = useSound(blogSound);

  const filteredPosts = data.filter(post => {
    return (
      (post.title.toLowerCase().includes(search.toLowerCase())) &&
      (category ? post.category.title === category : true)
    );
  }).sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
  });

  return (
    <Layout>
      <Head title="Blog" />

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mb-6 md:mb-10 text-center mt-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Blogs
      </motion.h1>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          <motion.div
            className="lg:w-1/4 w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold dark:text-white mb-6">Filters</h2>

            {/* Search */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 mb-6 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
            />

            {/* Category Filter */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.title}>{cat.title}</option>
              ))}
            </select>

            {/* Sort By Created Date */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="desc">Newest to Oldest</option>
              <option value="asc">Oldest to Newest</option>
            </select>
          </motion.div>

          {/* Right Side - Posts */}
          <motion.div
            className="lg:w-3/4 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {filteredPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} className="flex-1" key={post.id} onClick={play}>
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl p-6 "
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mb-3">{post.title}</h3>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">{post.description.substring(0, 50)} ...</p>
                    <p className="text-md text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600">Posted on: {new Date(post.created_at).toLocaleDateString()}</p>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url || "#"}
                  className={`px-4 py-2 ${link.active ? 'bg-gray-500 text-white' : 'bg-white text-gray-700'} ${!link.url && 'cursor-not-allowed opacity-50'} border border-gray-300 rounded-lg mx-1`}
                  disabled={!link.url}
                >
                  {link.label.replace('&laquo;', '«').replace('&raquo;', '»')}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
