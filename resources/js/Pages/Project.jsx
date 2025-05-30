import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/Layouts/Layout";
import { Head, Link } from "@inertiajs/react";
import projectSound from '../Sounds/projectsound.mp3';
import useSound from "use-sound";

const Project = ({ projects: initialProjects }) => {
    const [pageTitle] = useState("Projects Portfolio | Zobir Ofkir");
    const [pageDescription] = useState("Explore my portfolio of web development projects. View my latest work in React, Laravel, and other modern technologies.");
    const [projects, setProjects] = useState(initialProjects.data);
    const [currentPage, setCurrentPage] = useState(initialProjects.current_page);
    const [lastPage, setLastPage] = useState(initialProjects.last_page);
    const [play] = useSound(projectSound);

    const handleFlip = (id) => {
        play();
        setProjects((prevProjects) =>
            prevProjects.map((project) =>
                project.id === id ? { ...project, isFlipped: !project.isFlipped } : project
            )
        );
    };

    const nextPage = () => {
        if (currentPage < lastPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        fetch(`/projects?page=${currentPage}`)
            .then((response) => response.json())
            .then((data) => {
                setProjects(data.data);
                setLastPage(data.last_page);
            });
    }, [currentPage]);

    return (
        <Layout>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content="web development projects, portfolio, Zobir Ofkir, React projects, Laravel projects, web design portfolio" />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <link rel="canonical" href={window.location.href} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "headline": pageTitle,
                        "description": pageDescription,
                        "author": {
                            "@type": "Person",
                            "name": "Zobir Ofkir"
                        }
                    })}
                </script>
            </Head>
            <div className="bg-transparent dark:bg-transparent text-gray-900 dark:text-white relative overflow-hidden flex justify-center items-center mt-10">
                <div className="relative z-10 container mx-auto px-6 py-16">
                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        My Projects
                    </motion.h1>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {projects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    className="relative w-full h-64 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl cursor-pointer"
                                    onClick={() => handleFlip(project.id)}
                                    animate={{ rotateY: project.isFlipped ? 180 : 0 }}
                                    transition={{ duration: 0.6 }}
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <motion.div
                                        className="absolute inset-0 w-full h-full"
                                        style={{ backfaceVisibility: "hidden" }}
                                    >
                                        <motion.img
                                            src={`storage/${project.image}`}
                                            alt={`${project.title} - Project by Zobir Ofkir`}
                                            className="w-full h-full object-cover rounded-lg"
                                            style={{ transform: project.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-lg"
                                        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                                    >
                                        <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                                        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description.slice(0, 30)} ...</p>
                                        <Link
                                            href={`/project/${project.slug}`}
                                            rel="noopener noreferrer"
                                            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-md text-lg font-medium shadow-lg hover:scale-105 transition-transform duration-300"
                                        >
                                            View Project
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-md text-lg font-medium shadow-lg hover:scale-105 transition-transform duration-300 mr-4"
                        >
                            Previous
                        </button>
                        <button
                            onClick={nextPage}
                            disabled={currentPage === lastPage}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-md text-lg font-medium shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Project;
