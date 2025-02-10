import React from 'react';

const ProjectComponent = () => {
    const projects = [
        {
          id: 1,
          title: 'Project 1',
          description: 'A web application for managing tasks.',
          link: 'https://project1.com',
          image: 'https://via.placeholder.com/400x200',
        },
        {
          id: 2,
          title: 'Project 2',
          description: 'An e-commerce platform with advanced filtering.',
          link: 'https://project2.com',
          image: 'https://via.placeholder.com/400x200',
        },
        {
          id: 3,
          title: 'Project 3',
          description: 'A portfolio website for a creative agency.',
          link: 'https://project3.com',
          image: 'https://via.placeholder.com/400x200',
        },
    ];

  return (
    <div className="min-h-screen bg-transparent dark:bg-transparent text-gray-900 dark:text-white relative overflow-hidden">
      {/* Projects list */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-transparent p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-t-lg mb-6 transition-all duration-200 ease-in-out transform hover:scale-105"
              />
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-md text-lg font-medium shadow-lg hover:from-blue-600 hover:to-purple-700 transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
