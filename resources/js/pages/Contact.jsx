import { motion } from "framer-motion";
import Layout from '@/layouts/Layout';
import { useForm } from '@inertiajs/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SeoHead from '@/components/SeoHead';

const Contact = ({ seo, structuredData }) => {

    const { data, setData, post, errors } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('contact.store'), {
            data,
            onSuccess: () => {
                setData({ name: '', email: '', subject: '', message: '' });
                toast.success('Message sent successfully!', {
                    style: {
                        top: '80px',
                    }
                });

            },
            onError: () => toast.error('Failed to send message. Please try again!')
        });
    };

  return (
    <Layout>
      <SeoHead seo={seo} structuredData={structuredData} />

      <div className="flex justify-center items-center min-h-screen md:mt-0 mt-20">
        <div className="container mx-auto p-6">
            <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Form */}
            <motion.div
                className="bg-white dark:bg-transparent p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl md:text-5xl text-center font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600">
                Get in Touch
                </h2>
                <form onSubmit={handleSubmit} aria-label="Contact form">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            aria-required="true"
                            placeholder="Your full name"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-2" role="alert">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            aria-required="true"
                            placeholder="your.email@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-2" role="alert">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">Message</label>
                        <textarea
                            id="message"
                            className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
                            rows="4"
                            value={data.message}
                            onChange={(e) => setData('message', e.target.value)}
                            aria-required="true"
                            placeholder="How can I help you?"
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-2" role="alert">{errors.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg"
                    >
                        Send Message
                    </button>
                </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
                className="mt-8 bg-gray-100 dark:bg-transparent p-6 rounded-lg shadow-lg text-center flex flex-col justify-center items-center gap-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                itemScope
                itemType="https://schema.org/Person"
            >
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mb-4">Contact Information</h2>
                <address className="not-italic">
                    <p className="text-gray-600 dark:text-gray-300 md:text-2xl text-xl font-bold mt-2" itemProp="address">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Imouzzer Kandar Ain Soltane
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 md:text-2xl text-xl font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email: <a href="mailto:contact@zobirofkir.com" itemProp="email" className="hover:underline">contact@zobirofkir.com</a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 md:text-2xl text-xl font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Phone: <a href="tel:+212619920942" itemProp="telephone" className="hover:underline">+212 619920942</a>
                    </p>
                </address>
            </motion.div>

            </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </Layout>
  );
};

export default Contact;
