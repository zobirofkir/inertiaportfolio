import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const HeaderComponent = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className={`w-full px-6 py-4 shadow-md transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <h1 className='text-2xl font-bold tracking-wide'>ZOBIR</h1>

        {/* Navigation */}
        <nav>
          <ul className='flex gap-6 text-lg'>
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
              <li key={index} className='cursor-pointer transition-colors duration-300 hover:text-green-400'>
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className='p-2 rounded-full transition-all duration-300 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
        >
          {darkMode ? <Sun className='w-6 h-6 text-yellow-400' /> : <Moon className='w-6 h-6 text-gray-700' />}
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
