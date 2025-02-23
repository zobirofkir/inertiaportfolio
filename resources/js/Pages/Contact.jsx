import { motion } from "framer-motion";
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

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
      <Head title="Contact" />

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
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300">Name</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300">Message</label>
                        <textarea
                            className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
                            rows="4"
                            value={data.message}
                            onChange={(e) => setData('message', e.target.value)}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
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
                className="mt-8 bg-gray-100 dark:bg-transparent p-6 rounded-lg shadow-lg text-center flex flex-col justify-center items-center gap-10 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-gray-600 dark:text-gray-300 md:text-2xl text-xl font-bold mt-2 ">123 Street, City, Country</p>
                <p className="text-gray-600 dark:text-gray-300 md:text-2xl text-xl font-bold">Email: contact@example.com</p>
                <p className="text-gray-600 dark:text-gray-300 md:text-2xl text-xl font-bold">Phone: +123 456 7890</p>
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
