import { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import useSound from 'use-sound';
import clickSound from '../Sounds/skillsound.mp3';

const skills = [
    {
      id: 1,
      name: 'React',
      image: 'https://cdn-icons-png.flaticon.com/512/1183/1183672.png',
      description: 'React is a declarative, component-based JavaScript library for building modern, scalable user interfaces. It enables developers to create reusable UI components, manage application state efficiently with hooks or state management libraries like Redux, and optimize performance through its virtual DOM. React continues to dominate front-end development in 2025, with advancements in server-side rendering (Next.js) and concurrent rendering for smoother user experiences.',
      emoji: '⚛️',
      color: 'bg-blue-50'
    },
    {
      id: 2,
      name: 'Tailwind CSS',
      image: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
      description: 'Tailwind CSS is a highly customizable, utility-first CSS framework that streamlines the process of building responsive and modern user interfaces. By providing low-level utility classes, Tailwind allows developers to style components directly in their markup, reducing the need for custom CSS. In 2025, Tailwind has become even more powerful with features like Just-In-Time (JIT) compilation, dynamic theming, and seamless integration with popular frameworks like React and Vue.',
      emoji: '🎨',
      color: 'bg-teal-50'
    },
    {
      id: 3,
      name: 'Framer Motion',
      image: 'https://cdn-icons-png.flaticon.com/512/2119/2119033.png',
      description: 'Framer Motion is a robust motion library for React that simplifies the creation of complex animations and interactive UI components. With its intuitive API, developers can easily add gestures, drag-and-drop functionality, and smooth transitions to their applications. By 2025, Framer Motion has become the go-to solution for creating immersive, high-performance animations in web applications, supporting advanced features like 3D transformations and physics-based animations.',
      emoji: '🚀',
      color: 'bg-purple-50'
    },
    {
      id: 4,
      name: 'TypeScript',
      image: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
      description: 'TypeScript is a strongly typed superset of JavaScript that enhances developer productivity and code quality by adding optional static typing. It compiles to plain JavaScript and is widely used in large-scale applications to catch errors during development. In 2025, TypeScript has solidified its position as the standard for JavaScript development, with improved tooling, better integration with frameworks like React and Angular, and advanced type inference capabilities.',
      emoji: '📘',
      color: 'bg-indigo-50'
    },
    {
      id: 5,
      name: 'Node.js',
      image: 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
      description: 'Node.js is a powerful JavaScript runtime built on Chrome’s V8 engine, enabling developers to build scalable, high-performance server-side applications. It uses an event-driven, non-blocking I/O model, making it ideal for real-time applications and microservices. By 2025, Node.js has evolved with improved support for ES modules, enhanced performance optimizations, and seamless integration with modern DevOps tools, solidifying its place in the backend development ecosystem.',
      emoji: '🖥️',
      color: 'bg-green-50'
    },
    {
      id: 6,
      name: 'GraphQL',
      image: 'https://cdn-icons-png.flaticon.com/512/6124/6124995.png',
      description: 'GraphQL is a flexible and efficient query language for APIs, designed to provide clients with exactly the data they need. Unlike REST, GraphQL allows clients to request specific fields and nested data in a single query, reducing over-fetching and under-fetching of data. In 2025, GraphQL has become the standard for API development, with widespread adoption in modern applications, advanced tooling like Apollo and Relay, and support for real-time subscriptions and serverless architectures.',
      emoji: '🔗',
      color: 'bg-pink-50'
    },
];


const SkillComponent = () => {
  const [play] = useSound(clickSound);
  const [isBookOpen, setIsBookOpen] = useState(false);

  const handleFlip = () => {
    play();
    setIsBookOpen(true);
  };

  return (
    <section>
        <div className='flex flex-col justify-center items-center text-center px-4 py-8'>
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mb-6 md:mb-10">
                My Skills
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
                Hello, I'm Zobir Ofkir, a Web Developer. You can explore my skills in the book below.
            </p>
        </div>
        <div className="flex justify-center items-center max-h-full bg-gray-100 dark:bg-gray-900 rounded-xl relative">
            {/* FlipBook Component */}
            <HTMLFlipBook
            width={350}
            height={500}
            size="stretch"
            minWidth={300}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1000}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={handleFlip}
            className="book-container z-0"
            >
            {/* Dark-themed Cover */}
            <div className="cover bg-gray-800 rounded-xl text-white flex flex-col justify-center items-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/dark-leather.png)' }}></div>
                <h1 className="text-4xl font-bold mb-4 z-10">📚 ZOBIR OFKIR</h1>
                <p className="text-lg z-10">Hello I'm Zobir Ofkir And This Is My Skills !</p>
                {/* Text on the right side */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 text-sm text-gray-400">
                <p>Flip to explore my skills</p>
                </div>
                {/* Text on the left side */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm text-gray-400">
                <p>Click to Open</p>
                </div>
            </div>

            {/* Skill Pages */}
            {skills.map((skill) => (
                <div key={skill.id} className={`p-6 ${skill.color} rounded-lg shadow-lg flex flex-col items-center text-center`}>
                <img src={skill.image} alt={skill.name} className="w-16 h-16 mb-4" />
                <h2 className="text-xl font-bold text-gray-900">{skill.name} {skill.emoji}</h2>
                <p className="text-gray-600 mt-2">{skill.description}</p>
                </div>
            ))}

            {/* Back Cover */}
            <div className="cover bg-gray-800 rounded-xl text-white flex flex-col justify-center items-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/dark-leather.png)' }}></div>
                <h1 className="text-4xl font-bold mb-4 z-10">📚 ZOBIR OFKIR</h1>
                <p className="text-lg z-10">Thanks for exploring my skills!</p>
                {/* Text on the left side */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm text-gray-400">
                <p>Hope you enjoyed the journey</p>
                </div>
                {/* Text on the right side */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 text-sm text-gray-400">
                <p>Let's build something amazing!</p>
                </div>
            </div>
            </HTMLFlipBook>
        </div>
    </section>
  );
};

export default SkillComponent;
