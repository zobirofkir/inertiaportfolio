import { Link } from '@inertiajs/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

const HeaderComponent = ({ darkMode, setDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={`sticky top-0 z-50 w-full px-4 sm:px-6 py-4 shadow-md transition-all duration-300 ease-in-out ${
        darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/">
            <h1 className="text-xl sm:text-2xl font-bold tracking-wide">ZOBIR</h1>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden sm:block">
          <ul className="flex gap-4 sm:gap-6 text-base sm:text-lg">
            {navItems.map((item, index) => (
              <li key={index} className="cursor-pointer transition-colors duration-300 hover:text-gray-400">
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle Mobile Menu"
          className="sm:hidden p-2 rounded-full transition-all duration-300 ease-in-out bg-gray-200 dark:bg-black hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Dark Mode Switch (Sun and Moon icons) */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          className="hidden sm:block p-2 rounded-full transition-all duration-300 ease-in-out bg-gray-200 dark:bg-black hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          {darkMode ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-gray-800" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ transitionProperty: 'max-height, opacity' }}
      >
        <nav className="mt-4">
          <ul className="flex flex-col gap-4 text-base">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer transition-colors text-center duration-300 hover:text-gray-400"
                onClick={toggleMobileMenu}
              >
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="block sm:hidden p-2 rounded-full transition-all duration-300 ease-in-out bg-gray-200 dark:bg-black hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-gray-800" />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
