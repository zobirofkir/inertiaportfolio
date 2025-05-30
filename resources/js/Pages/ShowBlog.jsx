import React, { useState, useEffect } from 'react';
import Layout from "@/Layouts/Layout";
import { motion } from "framer-motion";
import { Head, useForm } from '@inertiajs/react';

const ShowBlog = ({ blog, tags }) => {
  const [pageTitle, setPageTitle] = useState("");
  const [pageDescription, setPageDescription] = useState("");
  if (!blog || !blog.data) {
    return <p>Blog not found.</p>;
  }

  const post = {
    title: blog.data.title || "Untitled",
    description: blog.data.description || "",
    content: blog.data.content || "",
    image: blog.data.image || "",
  };
  
  useEffect(() => {
    setPageTitle(`${post.title} | Zobir Ofkir's Blog`);
    setPageDescription(post.description.substring(0, 160));
  }, [post.title, post.description]);

  const images = blog.data.images || [];

  const { data, setData, post: submit, processing, errors } = useForm({
    name: '',
    email: '',
    content: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(`/blog/${blog.data.id}/comment`, {
      data: {
        ...data,
        blog_id: blog.data.id,
      },
      preserveScroll: true,
      onSuccess: () => setData({ name: '', email: '', content: '' }),
    });
  };

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${post.title}, blog, article, web development, Zobir Ofkir${tags ? ', ' + tags.join(', ') : ''}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        {post.image && <meta property="og:image" content={post.image} />}
        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": pageDescription,
            "image": post.image,
            "datePublished": blog.data.created_at,
            "dateModified": blog.data.updated_at,
            "author": {
              "@type": "Person",
              "name": "Zobir Ofkir"
            },
            "publisher": {
              "@type": "Person",
              "name": "Zobir Ofkir"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": window.location.href
            }
          })}
        </script>
      </Head>

      <motion.div className="relative h-96 w-full overflow-hidden rounded-md mt-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {post.image && (
          <motion.img src={post.image} alt={`${post.title} - Blog post by Zobir Ofkir`} className="w-full h-full object-cover" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} />
        )}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1 className="text-5xl md:text-6xl font-bold text-white text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
            {post.title}
          </motion.h1>
        </div>
      </motion.div>

      <motion.div className="py-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <motion.div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
          <div className="prose prose-lg dark:prose-invert " dangerouslySetInnerHTML={{ __html: post.content }} />
        </motion.div>

        <motion.p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-center mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
          {post.description}
        </motion.p>

        <motion.div className="mt-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Image Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div key={index} className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <motion.img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-64 object-cover rounded-2xl" whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mt-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Comments</h2>
          <form onSubmit={handleSubmit} className="mb-8">
            <input type="text" className="w-full p-3 rounded-xl shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white mb-4" placeholder="Username" value={data.name} onChange={(e) => setData('name', e.target.value)} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            <input type="email" className="w-full p-3 rounded-xl shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white mb-4" placeholder="Email" value={data.email} onChange={(e) => setData('email', e.target.value)} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <textarea className="w-full p-4 rounded-xl shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white" rows="4" placeholder="Leave a comment..." value={data.content} onChange={(e) => setData('content', e.target.value)} />
            {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
            <button type="submit" className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300" disabled={processing}>
              {processing ? 'Posting...' : 'Post Comment'}
            </button>
          </form>
        </motion.div>

        <motion.div className="mt-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Comments</h2>
            {blog.data.comments && blog.data.comments.map((comment, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md mb-4">
                <p className="text-gray-900 dark:text-white font-semibold">{comment.name}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{comment.email}</p>
                <p className="text-gray-700 dark:text-gray-200 mt-2">{comment.content}</p>
                </div>
            ))}
        </motion.div>

      </motion.div>
    </Layout>
  );
};

export default ShowBlog;
