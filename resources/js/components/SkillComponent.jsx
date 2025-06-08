import { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import useSound from 'use-sound';
import clickSound from '../sounds/skillsound.mp3';
import '../../css/SkillComponent.css';

const SkillComponent = ({ skills }) => {
  const [play] = useSound(clickSound);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [randomEmojis, setRandomEmojis] = useState([]);

  useEffect(() => {
    const emojis = ['🌟', '🎉', '🔥', '💡', '🚀', '✨', '🎨', '📌', '🧩', '🎈'];
    const randomEmojis = Array.from({ length: 10 }, () => emojis[Math.floor(Math.random() * emojis.length)]);
    setRandomEmojis(randomEmojis);
  }, []);

  const handleFlip = (e) => {
    play();
    setCurrentPage(e.data);
  };

  const handleOpenBook = () => {
    setIsBookOpen(true);
  };

  const handleCloseBook = () => {
    setIsBookOpen(false);
    setCurrentPage(0);
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
          className={`book-container ${isBookOpen ? 'open' : ''}`}
          startPage={currentPage}
        >
          {/* Dark-themed Cover */}
          <div className="cover bg-gray-800 rounded-xl text-white flex flex-col justify-center items-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/dark-leather.png)' }}></div>
            <h1 className="text-4xl font-bold mb-4 z-10">📚 ZOBIR OFKIR</h1>
            <p className="text-lg z-10">Hello I'm Zobir Ofkir And This Is My Skills !</p>
            {/* Random Bonus Emojis */}
            <div className="absolute inset-0 flex flex-wrap justify-center items-center opacity-50">
              {randomEmojis.map((emoji, index) => (
                <span
                  key={index}
                  className="text-2xl m-1"
                  style={{
                    position: 'absolute',
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                >
                  {emoji}
                </span>
              ))}
            </div>
            {/* Text on the right side */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 text-sm text-white">
              <p>Flip to explore my skills</p>
            </div>
            {/* Text on the left side */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm text-white">
              <p>Click to Open</p>
            </div>
          </div>

          {/* Skill Pages */}
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`p-6 rounded-lg shadow-lg flex flex-col items-center text-center dark:bg-transparent bg-gray-300 relative`}
            >
              <img
                src={`storage/${skill.image}`}
                alt={skill.title}
                className="w-16 h-16 mb-4"
              />

              <h2 className="md:text-3xl text-xl font-bold text-black dark:text-white">
                {skill.title} {skill.emoji}
              </h2>

              <p
                className="text-gray-600 mt-2 md:text-2xl text-md text-black dark:text-white font-bold"
                dangerouslySetInnerHTML={{ __html: skill.description.replace(/\n/g, '<br />') }}
            ></p>
            </div>
          ))}

          {/* Back Cover */}
          <div className="cover bg-gray-800 rounded-xl text-black dark:text-white flex flex-col justify-center items-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/dark-leather.png)' }}></div>
            <h1 className="text-4xl font-bold text-white mb-4 z-10">📚 ZOBIR OFKIR</h1>
            <p className="text-lg z-10 text-white">Thanks for exploring my skills!</p>
            {/* Close Book Button */}
            {isBookOpen && (
              <button
                onClick={handleCloseBook}
                className="absolute bottom-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
              >
                Close Book
              </button>
            )}
            {/* Text on the left side */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm text-white">
              <p>Hope you enjoyed the journey</p>
            </div>
            {/* Text on the right side */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 text-sm text-white">
              <p>Let's build something amazing!</p>
            </div>
          </div>
        </HTMLFlipBook>
      </div>
    </section>
  );
};

export default SkillComponent;
