import { motion } from "framer-motion";
import Layout from '@/layouts/Layout';
import React, { useState, useEffect } from 'react';
import Ad from '@/components/Ad';
import { Link } from '@inertiajs/react';
import blogSound from '../sounds/blogsound.mp3';
import useSound from "use-sound";
import SeoHead from '@/components/SeoHead';

const Blog = ({ blogs, categories, seo, structuredData }) => {
  const { data, links } = blogs;
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [play] = useSound(blogSound);
  const [currentSeo, setCurrentSeo] = useState(seo);

  useEffect(() => {
    if (category) {
      setCurrentSeo({
        ...seo,
        title: `${category} Articles | Zobir Ofkir's Blog`,
        description: `Read the latest ${category} articles, tutorials and insights by Zobir Ofkir. Expert web development content.`
      });
    } else {
      setCurrentSeo(seo);
    }
  }, [category, seo]);

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
      <SeoHead seo={currentSeo} structuredData={structuredData} />

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mb-6 md:mb-10 text-center md:mt-0 mt-20"
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
            className="w-full lg:w-3/4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {filteredPosts.map((post, index) => (
                <React.Fragment key={post.id}>
                  <Link href={`/blog/${post.slug}`} className="flex-1" onClick={play} aria-label={`Read article: ${post.title}`}>
                    <motion.article
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl p-6 flex flex-col sm:flex-row justify-between w-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      itemScope
                      itemType="https://schema.org/BlogPosting"
                    >
                      <meta itemProp="datePublished" content={new Date(post.created_at).toISOString()} />
                      <meta itemProp="author" content="Zobir Ofkir" />
                      <div className="flex-1">
                        <h2 itemProp="headline" className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mb-3 flex items-center justify-start">
                          {post.title}
                        </h2>
                        <p itemProp="description" className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 flex items-center justify-start">
                          {post.description.substring(0, 50)} ...
                        </p>
                      </div>
                      <div className="flex flex-col justify-between mt-4 sm:mt-0 sm:ml-4">
                        <p className="text-md text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 flex items-center justify-center">
                          {new Date(post.created_at).toLocaleDateString()}
                        </p>
                        <p className="text-md text-gray-500 dark:text-gray-400 flex items-center justify-center mt-2 sm:mt-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                          </svg>
                          {post.comments.length}
                        </p>
                      </div>
                    </motion.article>
                  </Link>
                  {index === 1 && (
                    <div className="w-full flex justify-center my-4">
                      <Ad adSlot="3986701317" />
                    </div>
                  )}
                </React.Fragment>
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
