import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const HeaderComponent = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`w-full px-4 sm:px-6 py-4 shadow-md transition-all duration-300 ease-in-out ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <div className='container mx-auto flex justify-between items-center'>

        {/* Logo */}
        <h1 className='text-xl sm:text-2xl font-bold tracking-wide'>ZOBIR</h1>

        {/* Desktop Navigation */}
        <nav className="hidden sm:block">
          <ul className='flex gap-4 sm:gap-6 text-base sm:text-lg'>
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
              <li key={index} className='cursor-pointer transition-colors duration-300 hover:text-gray-400'>
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle Mobile Menu"
          className='sm:hidden p-2 rounded-full transition-all duration-300 ease-in-out bg-gray-200 dark:bg-black hover:bg-gray-300 dark:hover:bg-gray-700'
        >
          {isMobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
          className='hidden sm:block p-2 rounded-full transition-all duration-300 ease-in-out bg-gray-200 dark:bg-black hover:bg-gray-300 dark:hover:bg-gray-700'
        >
          {darkMode ? <Sun className='w-6 h-6 text-yellow-400' /> : <Moon className='w-6 h-6 text-gray-700' />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className='mt-4'>
          <ul className='flex flex-col gap-4 text-base'>
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
              <li
                key={index}
                className='cursor-pointer transition-colors duration-300 hover:text-gray-400'
                onClick={toggleMobileMenu}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Dark Mode Toggle for Mobile */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
          className='mt-4 p-2 rounded-full transition-all duration-300 ease-in-out bg-gray-200 dark:bg-black hover:bg-gray-300 dark:hover:bg-gray-700'
        >
          {darkMode ? <Sun className='w-6 h-6 text-yellow-400' /> : <Moon className='w-6 h-6 text-gray-700' />}
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
