import { motion } from "framer-motion";
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import MyImage from '../Images/my_image.jpeg';

const About = () => {
  return (
    <Layout>
      <Head title="About Me" />
      <div className="min-h-screen mt-10 bg-transparent dark:bg-transparent text-gray-900 dark:text-gray-100 transition-colors duration-300 flex items-center">
        <div className="container mx-auto px-4 py-12">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mb-6 md:mb-12 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Me
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Profile Image with Enhanced Design */}
            <div className="flex justify-center">
              <motion.div
                className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 transform hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  src={`${MyImage}`}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 dark:to-black/40"></div>
              </motion.div>
            </div>

            {/* About Me Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Hi, I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Zobir Ofkir</span>, a passionate and creative web developer with a strong focus on building user-friendly, responsive, and visually appealing websites. I specialize in modern web technologies and love turning ideas into reality through code.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            I have worked on various projects ranging from business websites to complex applications. My expertise includes <span className="font-semibold">Laravel, React.js, Next.js, Tailwind CSS, and more.</span>
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            I am always eager to learn new technologies and improve my skills to stay ahead in the ever-evolving world of web development. When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
              {/* Buttons with Enhanced Design */}
              <div className="flex md:flex-row flex-col gap-6">
                {/* <motion.a
                  href="/path/to/your/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors whitespace-nowrap text-center shadow-lg hover:shadow-indigo-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a> */}
                <motion.a
                  href="/contact"
                  className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-xl hover:bg-indigo-600 hover:text-white transition-colors whitespace-nowrap text-center shadow-lg hover:shadow-indigo-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
