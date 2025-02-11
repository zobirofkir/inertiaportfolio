import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectComponent = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "A web application for managing tasks.",
      link: "https://project1.com",
      image: "https://via.placeholder.com/400x200",
      isFlipped: false,
    },
    {
      id: 2,
      title: "Project 2",
      description: "An e-commerce platform with advanced filtering.",
      link: "https://project2.com",
      image: "https://via.placeholder.com/400x200",
      isFlipped: false,
    },
    {
      id: 3,
      title: "Project 3",
      description: "A portfolio website for a creative agency.",
      link: "https://project3.com",
      image: "https://via.placeholder.com/400x200",
      isFlipped: false,
    },
  ]);

  const handleFlip = (id) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id ? { ...project, isFlipped: !project.isFlipped } : project
      )
    );
  };

  return (
    <div className="bg-transparent dark:bg-transparent text-gray-900 dark:text-white relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Projects
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
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
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                  style={{ transform: project.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-lg"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-md text-lg font-medium shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  View Project
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
