import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

const ShowBlog = () => {
  const post = {
    title: "Mastering Laravel with Inertia.js",
    description:
      "Learn how to build modern web applications using Laravel and Inertia.js with React. Discover best practices, tips, and tricks to streamline your development process.",
    image: "https://via.placeholder.com/800x400", // Replace with a real image URL
    url: "https://laravel.com/docs/inertia",
  };

  // Example list of images for the gallery
  const images = [
    "https://via.placeholder.com/800x400",
    "https://via.placeholder.com/800x401",
    "https://via.placeholder.com/800x402",
    "https://via.placeholder.com/800x403",
    "https://via.placeholder.com/800x404",
    "https://via.placeholder.com/800x405",
  ];

  return (
    <Layout>
      <Head title={post.title} />

      {/* Blog Post Container */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Post Image with 3D Effect */}
        {post.image && (
          <div className="relative group overflow-hidden rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:-translate-y-2">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-white text-4xl font-bold text-center">
                {post.title}
              </h2>
            </div>
          </div>
        )}

        {/* Post Title */}
        <h1 className="text-5xl font-extrabold mt-12 mb-6 text-gray-900 dark:text-white text-center">
          {post.title}
        </h1>

        {/* Post Description */}
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-center max-w-2xl mx-auto">
          {post.description}
        </p>

        {/* External URL Link */}
        {post.url && (
          <div className="flex justify-center">
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Visit External Website</span>
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
            </a>
          </div>
        )}

        {/* Key Features Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Seamless integration with Laravel and React",
              "Server-side rendering (SSR) support",
              "Built-in state management",
              "Optimized for performance",
              "Easy-to-use API",
              "Comprehensive documentation",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Explore how this feature can enhance your development workflow.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Image Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:-translate-y-2"
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-xl font-bold">
                    Image {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Join thousands of developers building modern web applications with Laravel and Inertia.js.
          </p>
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default ShowBlog;
