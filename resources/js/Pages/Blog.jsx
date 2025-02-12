import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import { useState } from 'react'

const Blog = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const categories = ['Tech', 'Design', 'Development', 'Marketing']

  const posts = [
    { id: 1, title: 'The Future of Web Development', category: 'Tech', createdAt: '2025-01-12' },
    { id: 2, title: 'UI/UX Design Trends 2025', category: 'Design', createdAt: '2025-01-10' },
    { id: 3, title: 'Marketing Strategies for Startups', category: 'Marketing', createdAt: '2025-02-01' },
    { id: 4, title: 'The Importance of React in Modern Web Apps', category: 'Tech', createdAt: '2025-01-28' }
  ]

  const filteredPosts = posts.filter(post => {
    return (
      (post.title.toLowerCase().includes(search.toLowerCase())) &&
      (category ? post.category === category : true)
    )
  })

  return (
    <Layout>
      <Head title="Blog" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:w-1/4 w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
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
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Sort By Created Date */}
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sort by Date</option>
              <option value="asc">Oldest to Newest</option>
              <option value="desc">Newest to Oldest</option>
            </select>
          </div>

          {/* Right Side - Posts */}
          <div className="lg:w-3/4 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl p-6">
                  <h3 className="text-lg font-semibold dark:text-white mb-3">{post.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Category: {post.category}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Posted on: {post.createdAt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
