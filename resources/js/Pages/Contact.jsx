import { motion } from "framer-motion";
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />

      <div className="container mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Form */}
          <motion.div
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600">
              Get in Touch
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300">Name</label>
                <input type="text" className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300">Message</label>
                <textarea className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white" rows="4"></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg">Send Message</button>
            </form>
          </motion.div>

          {/* Google Map */}
          <motion.div
            className="h-80 w-full rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093704!2d144.95373531531873!3d-37.81627977975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f1f3e7%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1638957590887!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          className="mt-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600">
            Contact Information
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">123 Street, City, Country</p>
          <p className="text-gray-600 dark:text-gray-300">Email: contact@example.com</p>
          <p className="text-gray-600 dark:text-gray-300">Phone: +123 456 7890</p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Contact;
