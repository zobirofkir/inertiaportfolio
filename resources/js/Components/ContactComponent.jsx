import React from 'react';

const ContactComponent = () => {
  return (
    <div className="flex items-center justify-center bg-white dark:bg-transparent p-6">
      <div className="w-full mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">

          {/* Left Side - Image */}
          <div className="md:w-1/3 flex items-center justify-center p-8">
            <img
              src="https://zobirofkir.com/logo192.png"
              alt="Your Name"
              className="rounded-full w-48 h-48 object-cover border-4 border-white dark:border-gray-700 shadow-lg"
            />
          </div>

          {/* Right Side - Info */}
          <div className="md:w-2/3 p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Your Name</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Your professional title or short bio goes here. Highlight your skills, experience, and what makes you unique.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-300 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">your.email@example.com</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-300 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">+123 456 7890</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-300 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">City, Country</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
