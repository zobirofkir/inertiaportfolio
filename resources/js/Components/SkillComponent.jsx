import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';
import clickSound from '../Sounds/skillsound.mp3';

const skills = [
  {
    id: 1,
    name: 'React',
    image: 'https://cdn-icons-png.flaticon.com/512/1183/1183672.png',
    description: 'A JavaScript library for building user interfaces.',
  },
  {
    id: 2,
    name: 'Tailwind CSS',
    image: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
    description: 'A utility-first CSS framework for rapid UI development.',
  },
  {
    id: 3,
    name: 'Framer Motion',
    image: 'https://cdn-icons-png.flaticon.com/512/2119/2119033.png',
    description: 'A production-ready motion library for React.',
  },
  {
    id: 4,
    name: 'TypeScript',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
    description: 'A typed superset of JavaScript for better code quality.',
  },
  {
    id: 5,
    name: 'Node.js',
    image: 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
    description: 'A JavaScript runtime for building server-side applications.',
  },
  {
    id: 6,
    name: 'GraphQL',
    image: 'https://cdn-icons-png.flaticon.com/512/6124/6124995.png',
    description: 'A query language for APIs and a runtime for executing them.',
  },
];

const SkillCard = ({ skill, isSelected, onClick }) => {
  return (
    <motion.div
      className="relative cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Learn more about ${skill.name}`}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
        style={{ transformStyle: 'preserve-3d' }}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isSelected ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* Front Face */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: isSelected ? 0 : 1 }}
          transition={{ duration: 0.25 }}
        >
          <img
            src={skill.image}
            alt={skill.name}
            className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-4 object-cover"
          />
          <h3 className="text-lg md:text-xl font-bold dark:text-white text-center">
            {skill.name}
          </h3>
        </motion.div>

        {/* Back Face */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-4"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isSelected ? 1 : 0 }}
          transition={{ duration: 0.25, delay: isSelected ? 0.25 : 0 }}
        >
          <h3 className="text-lg md:text-xl font-bold dark:text-white">
            {skill.name}
          </h3>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-2">
            {skill.description}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Main Skill Component
const SkillComponent = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [play] = useSound(clickSound);

  const handleCardClick = (skill) => {
    if (selectedSkill?.id === skill.id) {
      play();
      setSelectedSkill(null);
    } else {
      play();
      setSelectedSkill(skill);
    }
  };

  return (
    <div className="bg-transparent p-4 md:p-8">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mb-6 md:mb-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        My Skills
      </motion.h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            isSelected={selectedSkill?.id === skill.id}
            onClick={() => handleCardClick(skill)}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillComponent;
