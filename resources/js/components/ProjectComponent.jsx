import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@inertiajs/react";
import useSound from "use-sound";
import projectSound from "../sounds/projectsound.mp3";

const ProjectComponent = ({ projects, setProjects }) => {
  const [play] = useSound(projectSound);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const handleFlip = (id) => {
    play();
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id ? { ...project, isFlipped: !project.isFlipped } : project
      )
    );
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const nextPage = () => {
    if (currentPage < Math.ceil(projects.length / projectsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-transparent dark:bg-transparent text-gray-900 dark:text-white py-16">
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              className="relative w-full h-80 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-2xl cursor-pointer transform transition-transform hover:rotate-2 hover:scale-105"
              onClick={() => handleFlip(project.id)}
              animate={{ rotateY: project.isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg flex items-center justify-center"
                style={{ backfaceVisibility: "hidden", background: "#fff" }}
              >
                <img
                  src={`storage/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                  style={{ transform: project.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <h2 className="text-2xl font-semibold mb-3 text-center">{project.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">{project.description.slice(0, 50)} ...</p>
                <Link
                  href={`/project/${project.slug}`}
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-md text-lg font-medium shadow-lg hover:scale-105 transition-transform duration-300"
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
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-md text-lg font-medium shadow-lg hover:scale-105 transition-transform duration-300 mr-4 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(projects.length / projectsPerPage)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-md text-lg font-medium shadow-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectComponent;
