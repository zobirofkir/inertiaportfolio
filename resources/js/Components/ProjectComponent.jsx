import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A web application for managing tasks.',
    link: 'https://project1.com',
    image: 'https://via.placeholder.com/400x200', // Replace with your image URL
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'An e-commerce platform with advanced filtering.',
    link: 'https://project2.com',
    image: 'https://via.placeholder.com/400x200', // Replace with your image URL
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'A portfolio website for a creative agency.',
    link: 'https://project3.com',
    image: 'https://via.placeholder.com/400x200', // Replace with your image URL
  },
];

const ProjectComponent = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);

    // Add multiple small cubes
    const cubes = [];
    const cubeCount = 50; // Number of cubes
    for (let i = 0; i < cubeCount; i++) {
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5); // Smaller cubes
      const material = new THREE.MeshBasicMaterial({
        color: Math.random() * 0xffffff,
        wireframe: true,
      });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      cube.rotation.set(Math.random(), Math.random(), Math.random());
      scene.add(cube);
      cubes.push(cube);
    }

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cubes.forEach((cube) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      });
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent dark:bg-transparent text-gray-900 dark:text-white relative overflow-hidden">
      {/* Three.js container */}
      <div ref={mountRef} className="absolute top-0 left-0 w-full h-full z-0"></div>

      {/* Projects list */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-transparent p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
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
