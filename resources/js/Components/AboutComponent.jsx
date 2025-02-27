import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const AboutComponent = () => {
  const fullText1 = "👋 Hi, I'm Zobir Ofkir, a passionate and innovative web developer with a knack for crafting modern, scalable, and user-friendly web applications. I specialize in cutting-edge technologies like React.js, Laravel, and Next.js, and I thrive on solving complex problems with elegant solutions. 💻✨";
  const fullText2 = "🚀 I’m a firm believer in clean code, efficient workflows, and delivering high-quality projects that exceed expectations. When I’m not coding, you’ll find me exploring the latest tech trends, contributing to open-source projects, or working on exciting personal projects that push the boundaries of what’s possible. 🌟";

  const [isBookOpen, setIsBookOpen] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const pageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const papers = [
    { id: 1, language: 'en', text: fullText1, translatedText: "👋 Salut, je suis Zobir Ofkir, un développeur web passionné et innovant, spécialisé dans la création d'applications web modernes, évolutives et conviviales. Je maîtrise des technologies de pointe comme React.js, Laravel et Next.js, et j'excelle dans la résolution de problèmes complexes avec des solutions élégantes. 💻✨" },
    { id: 2, language: 'ar', text: fullText2, translatedText: "🚀 أنا أؤمن بشدة بكتابة كود نظيف، وسير عمل فعال، وتقديم مشاريع عالية الجودة تتجاوز التوقعات. عندما لا أكون أكتب كود، ستجدني أستكشف أحدث الاتجاهات التكنولوجية، أو أساهم في مشاريع مفتوحة المصدر، أو أعمل على مشاريع شخصية مثيرة تُحّد من الممكن. 🌟" }
  ];

  const handlePaperClick = (paper) => {
    setSelectedPaper(paper);
  };

  return (
    <motion.section
      className="flex flex-col items-center py-20 fade-in overflow-hidden dark:bg-transparent"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      {/* 3D Book Container */}
      <div className="relative container w-full px-4 sm:px-8 py-12">
        {/* Back Layer (Shadow) */}
        <div className="absolute inset-0 bg-gray-400 dark:bg-gray-800 rounded-lg transform rotate-2 translate-y-4 translate-x-4"></div>

        {/* Middle Layer (Shadow) */}
        <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 rounded-lg transform rotate-1 translate-y-2 translate-x-2"></div>

        {/* Front Layer (Book Page) */}
        <div className="relative bg-[#fffef7] dark:bg-[#2d2d2d] rounded-lg shadow-lg border-2 border-[#e0d8c0] dark:border-[#444444] p-6 sm:p-8 transform rotate-0">
          {/* Decorative top and bottom borders */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#e0d8c0] to-[#d4c9a8] dark:from-[#444444] dark:to-[#333333]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#d4c9a8] to-[#e0d8c0] dark:from-[#333333] dark:to-[#444444]"></div>

          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>

          {/* About text with read more functionality */}
          <motion.p
            className="text-lg text-[#4a3f35] dark:text-[#e0e0e0] font-serif mb-6 leading-relaxed"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            {showMore1 ? fullText1 : `${fullText1.substring(0, 100)}...`}
            <span
              onClick={() => setShowMore1(!showMore1)}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 cursor-pointer"
            >
              {showMore1 ? " Show less" : " Read more"}
            </span>
          </motion.p>

          <motion.p
            className="text-lg text-[#4a3f35] dark:text-[#e0e0e0] font-serif leading-relaxed"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            {showMore2 ? fullText2 : `${fullText2.substring(0, 100)}...`}
            <span
              onClick={() => setShowMore2(!showMore2)}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 cursor-pointer"
            >
              {showMore2 ? " Show less" : " Read more"}
            </span>
          </motion.p>

          {/* Book Interaction */}
          <div className="mt-8">
            <button
              onClick={() => setIsBookOpen(!isBookOpen)}
              className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg transition duration-300 hover:brightness-110"
            >
              {isBookOpen ? 'Close' : 'Open'}
            </button>

            {/* Book Opening Effect */}
            <AnimatePresence>
              {isBookOpen && (
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, rotateY: -90, x: -50 }}
                  animate={{ opacity: 1, rotateY: 0, x: 0 }}
                  exit={{ opacity: 0, rotateY: -90, x: -50 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{
                    transformOrigin: 'left center',
                    perspective: '1000px',
                  }}
                >
                  {papers.map((paper) => (
                    <motion.div
                      key={paper.id}
                      onClick={() => handlePaperClick(paper)}
                      className="cursor-pointer p-2 mb-2 bg-gray-100 dark:bg-[#444444] rounded-lg hover:bg-gray-200 dark:hover:bg-[#555555] transition duration-300 flex justify-center gap-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 font-semibold text-center">{paper.language.toUpperCase()}</span>:
                      <p className="text-[#4a3f35] dark:text-[#e0e0e0]">
                        {paper.text.substring(0, 50)}...
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {selectedPaper && (
              <motion.div
                className="mt-4 p-4 bg-gray-100 dark:bg-[#444444] rounded-lg flex flex-col justify-center items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 font-semibold ">Translated Text ({selectedPaper.language.toUpperCase()}):</h3>
                <p className='text-[#4a3f35] dark:text-[#e0e0e0] text-md text-center'>{selectedPaper.translatedText}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutComponent;
