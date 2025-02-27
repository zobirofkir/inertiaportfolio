import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@inertiajs/react';

const HeaderComponent = ({ darkMode, setDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/abouts' },
    { name: 'Services', url: '/services' },
    { name: 'Project', url: '/projects' },
    { name: 'Blog', url: '/blogs' },
    { name: 'Contact', url: '/contacts' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 z-50 w-full px-4 sm:px-6 py-4 shadow-md transition-all duration-300 ease-in-out ${
        darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
      } ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto flex justify-between items-center relative">
        <Link href="/">
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide">ZOBIR</h1>
        </Link>

        <nav className="hidden sm:block">
          <ul className="flex gap-4 sm:gap-6 text-base sm:text-lg">
            {navItems.map((item, index) => (
              <li key={index} className="cursor-pointer transition-colors duration-300 hover:text-gray-400">
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="hidden sm:block p-2 rounded-full transition-all duration-300 ease-in-out bg-gray-200 dark:bg-black hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-gray-800" />}
          </button>
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
            className="sm:hidden p-2 rounded-full transition-all duration-300 ease-in-out bg-gray-200 dark:bg-black hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Smooth Dropdown Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden overflow-hidden"
          >
            <nav>
              <ul className="flex flex-col gap-4 text-center text-base py-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="cursor-pointer transition-colors duration-300 hover:text-gray-400"
                    onClick={toggleMobileMenu}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a href={item.url}>{item.name}</a>
                  </motion.li>
                ))}
              </ul>

              <button
                onClick={toggleDarkMode}
                aria-label="Toggle Dark Mode"
                className="block sm:hidden p-2 mt-4 rounded-full transition-all duration-300 ease-in-out bg-gray-200 dark:bg-black hover:bg-gray-300 dark:hover:bg-gray-700 mx-auto"
              >
                {darkMode ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-gray-800" />}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderComponent;
