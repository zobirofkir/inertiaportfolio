import React, { useState } from 'react';

const SubscribeComponent = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full bg-transparent rounded-md p-6">
      <div
        className="relative flex flex-col items-center max-w-4xl mx-auto p-6 sm:p-10 gap-4 rounded-xl transform transition-transform duration-300 ease-in-out"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-center">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300">
          Stay up-to-date with the latest updates and news directly in your inbox.
        </p>
        <form className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full max-w-md">
          <input
            type="email"
            placeholder="Your Email"
            className="px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-72 text-gray-900 dark:text-white"
          />
          <button
            type="submit"
            className="px-8 py-3 w-full sm:w-auto bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white rounded-lg shadow-md transform hover:scale-105 transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeComponent;
