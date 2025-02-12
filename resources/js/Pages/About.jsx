import { motion } from "framer-motion";
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';

const About = () => {
  return (
    <Layout>
      <Head title="About Me" />
      <div className="min-h-screen bg-white dark:bg-transparent text-gray-900 dark:text-gray-100 transition-colors duration-300 flex items-center">
        <div className="container mx-auto px-4 py-12">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mb-6 md:mb-10 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Me
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Profile Image with 3D Effect */}
            <div className="flex justify-center">
              <motion.div
                className="relative w-48 h-48 md:w-64 md:h-64"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-indigo-600 rounded-full transform rotate-45 scale-95 animate-float"></div>
                <img
                  src="https://zobirofkir.com/logo192.png"
                  alt="Profile"
                  className="relative rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg dark:shadow-gray-700 transform rotate-0 hover:rotate-6 transition-transform duration-300"
                />
              </motion.div>
            </div>

            {/* About Me Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-lg leading-relaxed">
                Hi, I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">[Your Name]</span>, a passionate and creative web developer with a strong focus on building user-friendly, responsive, and visually appealing websites. I specialize in modern web technologies and love turning ideas into reality through code.
              </p>

              <p className="text-lg leading-relaxed">
                With over <span className="font-semibold">[X years]</span> of experience in the industry, I have worked on a variety of projects ranging from small business websites to complex web applications. My expertise includes <span className="font-semibold">[list your skills, e.g., React, Next.js, Tailwind CSS, Node.js, etc.]</span>.
              </p>

              <p className="text-lg leading-relaxed">
                I am always eager to learn new technologies and improve my skills to stay ahead in the ever-evolving world of web development. When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or enjoying a good cup of coffee.
              </p>

              <div className="flex md:flex-row flex-col gap-4">
                <a
                  href="/path/to/your/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap"
                >
                  Download Resume
                </a>
                <a
                  href="/contact"
                  className="px-6 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors whitespace-nowrap"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
