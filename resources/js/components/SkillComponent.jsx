import { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import useSound from 'use-sound';
import clickSound from '../sounds/skillsound.mp3';
import '../../css/SkillComponent.css';

const SkillComponent = ({ skills }) => {
  const [play] = useSound(clickSound);
  const [currentPage, setCurrentPage] = useState(0);
  const [randomEmojis, setRandomEmojis] = useState([]);

  useEffect(() => {
    const emojis = ['🌟', '🎉', '🔥', '💡', '🚀', '✨', '🎨', '📌', '🧩', '🎈'];
    const randomEmojis = Array.from({ length: 8 }, () => emojis[Math.floor(Math.random() * emojis.length)]);
    setRandomEmojis(randomEmojis);
  }, []);

  const handleFlip = (e) => {
    play();
    setCurrentPage(e.data);
  };

  return (
    <section className="skills-section">
      <div className='flex flex-col justify-center items-center text-center px-4 py-8 relative z-10'>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-10 drop-shadow-lg">
          My Skills
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md">
          Hello, I'm Zobir Ofkir, a Web Developer. Explore my skills in this interactive book.
        </p>
      </div>
      
      <div className="flex justify-center items-center relative z-10">
        <HTMLFlipBook
          width={350}
          height={500}
          size="stretch"
          minWidth={280}
          maxWidth={400}
          minHeight={400}
          maxHeight={600}
          maxShadowOpacity={0.8}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={handleFlip}
          className="book-container"
          startPage={0}
          drawShadow={true}
          flippingTime={800}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          {/* Front Cover */}
          <div className="cover">
            <div className="book-spine"></div>
            <div className="flex flex-col justify-center items-center h-full p-6 relative z-20">
              <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                  📚 ZOBIR OFKIR
                </h1>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
                <p className="text-lg text-white/90 font-medium">
                  Skills Portfolio
                </p>
                <p className="text-sm text-white/70 mt-4">
                  Click to explore my technical expertise
                </p>
              </div>
              
              {/* Floating Emojis */}
              <div className="absolute inset-0 pointer-events-none">
                {randomEmojis.map((emoji, index) => (
                  <span
                    key={index}
                    className="floating-emoji absolute text-2xl opacity-60"
                    style={{
                      top: `${Math.random() * 70 + 15}%`,
                      left: `${Math.random() * 70 + 15}%`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Page indicator */}
            <div className="page-indicator">
              Page {currentPage + 1} of {skills.length + 2}
            </div>
          </div>

          {/* Skill Pages */}
          {skills.map((skill, index) => (
            <div key={skill.id} className="skill-page p-6">
              <div className="flex flex-col items-center text-center h-full justify-center space-y-6">
                <div className="skill-icon-container">
                  <img
                    src={`storage/${skill.image}`}
                    alt={skill.title}
                    className="skill-icon w-20 h-20 object-contain"
                  />
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
                    {skill.title} 
                    <span className="text-2xl">{skill.emoji}</span>
                  </h2>

                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>

                  <div
                    className="text-gray-700 text-base md:text-lg leading-relaxed max-w-sm mx-auto"
                    dangerouslySetInnerHTML={{ 
                      __html: skill.description.replace(/\n/g, '<br />') 
                    }}
                  />
                </div>

                {/* Skill level indicator */}
                <div className="flex items-center space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i < 4 ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Page indicator */}
              <div className="page-indicator">
                Page {index + 2} of {skills.length + 2}
              </div>
            </div>
          ))}

          {/* Back Cover */}
          <div className="cover">
            <div className="book-spine"></div>
            <div className="flex flex-col justify-center items-center h-full p-6 relative z-20">
              <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                  🎯 Thank You!
                </h1>
                <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
                <p className="text-lg text-white/90 font-medium">
                  Ready to collaborate?
                </p>
                <p className="text-sm text-white/70 mt-4">
                  Let's build something amazing together!
                </p>
                
                <div className="mt-6 space-y-2">
                  <p className="text-white/80 text-sm">📧 contact@zobirofkir.com</p>
                  <p className="text-white/80 text-sm">🌐 zobirofkir.com</p>
                </div>
              </div>
            </div>
            
            {/* Page indicator */}
            <div className="page-indicator">
              Page {skills.length + 2} of {skills.length + 2}
            </div>
          </div>
        </HTMLFlipBook>
      </div>
    </section>
  );
};

export default SkillComponent;