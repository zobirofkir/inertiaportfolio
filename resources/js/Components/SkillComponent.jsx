import { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import useSound from 'use-sound';
import clickSound from '../Sounds/skillsound.mp3';

const SkillComponent = ({ skills }) => {
  const [play] = useSound(clickSound);
  const [isBookOpen, setIsBookOpen] = useState(false);

  // Define array of colors
  const bgColors = [
    'bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300',
    'bg-gradient-to-r from-green-500 via-green-400 to-green-300',
    'bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300',
    'bg-gradient-to-r from-red-500 via-red-400 to-red-400',
    'bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300',
  ];

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
      <div className="flex justify-center items-center max-h-full rounded-xl relative">
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
          {skills.map((skill, index) => {
            const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];

            return (
              <div
                key={skill.id}
                className={`p-6 rounded-lg shadow-lg flex flex-col items-center text-center ${randomColor} relative`}
              >
                {/* Decorative text on the left side */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 md:text-xl text-md text-white">
                  <p>Page {index + 1}</p>
                </div>
                {/* Decorative text on the right side */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 md:text-xl text-md text-white">
                  <p>Zobir Ofkir</p>
                </div>

                <img
                  src={`storage/${skill.image}`}
                  alt={skill.title}
                  className="w-16 h-16 mb-4"
                />

                <h2 className="md:text-3xl text-xl font-bold text-white">
                  {skill.title} {skill.emoji}
                </h2>

                <p className="text-gray-600 mt-2 md:text-2xl text-md text-white font-bold">{skill.description}</p>
              </div>
            );
          })}

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
