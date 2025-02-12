import { useEffect, useState } from 'react';

const AboutComponent = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const fullText1 = "Hi, I'm Zobir Ofkir, a passionate web developer. I specialize in building modern web applications using technologies like React.js, Laravel, and Next.js. I enjoy solving complex problems and continuously improving my skills.";
  const fullText2 = "I believe in clean code, efficient workflows, and always delivering high-quality projects. When I'm not coding, I love exploring new technologies and working on personal projects.";

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;

    const typingInterval1 = setInterval(() => {
      if (index1 < fullText1.length) {
        setText1((prevText) => prevText + fullText1.charAt(index1));
        index1++;
      } else {
        clearInterval(typingInterval1);
      }
    }, 50);

    const typingInterval2 = setTimeout(() => {
      const interval = setInterval(() => {
        if (index2 < fullText2.length) {
          setText2((prevText) => prevText + fullText2.charAt(index2));
          index2++;
        } else {
          clearInterval(interval);
        }
      }, 50);
    }, fullText1.length * 50 + 500);

    return () => {
      clearInterval(typingInterval1);
      clearInterval(typingInterval2);
    };
  }, []);

  return (
    <section className="flex flex-col items-center py-12 bg-transparent dark:bg-transparent fade-in">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 typewriter">
          {text1}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 typewriter">
          {text2}
        </p>
      </div>
    </section>
  );
};

export default AboutComponent;
