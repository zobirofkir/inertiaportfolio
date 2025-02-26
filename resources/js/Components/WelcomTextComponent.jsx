import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WelcomeTextComponent = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hello, I'm Zobir Ofkir 👨‍💻 ";

  useEffect(() => {
    let index = 0;
    let typingInterval;

    const typeText = () => {
      typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setTypedText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setTypedText('');
            index = 0;
            typeText();
          }, 3000);
        }
      }, 100);
    };

    typeText();

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="mt-20 container mx-auto text-center">
      <motion.h1
        className="text-xl font-bold text-gray-900 leading-relaxed md:text-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        whileHover={{ scale: 1.1 }}
        style={{ whiteSpace: 'nowrap' }}
      >
        <motion.span
          className="md:text-3xl text-xl text-gray-500 dark:text-white"
          style={{ textShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {typedText}
        </motion.span>
        <span className="cursor">|</span>
      </motion.h1>
      <style jsx>{`
        .cursor {
          display: inline-block;
          margin-left: 0.25rem;
          animation: blink 1s steps(2, start) infinite;
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeTextComponent;
