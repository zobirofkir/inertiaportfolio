import React from 'react';

const AboutComponent = () => {
  return (
    <section className="flex flex-col items-center py-12 bg-gray-50 dark:bg-transparent">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-6">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Hi, I'm Zobir Ofkir, a passionate web developer. I specialize in building modern web applications using technologies like React.js, Laravel, and Next.js.
          I enjoy solving complex problems and continuously improving my skills.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          I believe in clean code, efficient workflows, and always delivering high-quality projects. When I'm not coding, I love exploring new technologies and working on personal projects.
        </p>
      </div>
    </section>
  );
}

export default AboutComponent;
