import { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import HeaderComponent from '@/Components/HeaderComponent';
import FooterComponent from '@/Components/FooterComponent';

/**
 * Star Component
 * @returns {JSX.Element}
 */
const Star = () => {
  const style = {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    width: `${Math.random() * 3}px`,
    height: `${Math.random() * 3}px`,
    animationDelay: `${Math.random() * 2}s`,
  };

  return <div className="star absolute bg-white rounded-full animate-twinkle" style={style}></div>;
};

/**
 * Fog Component
 * @returns {JSX.Element}
 */
const Fog = () => {
  const style = {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    width: `${Math.random() * 200 + 100}px`,
    height: `${Math.random() * 200 + 100}px`,
    opacity: `${Math.random() * 0.5 + 0.2}`,
    animationDuration: `${Math.random() * 10 + 5}s`,
  };

  return <div className="fog absolute bg-gray-300 rounded-full animate-float" style={style}></div>;
};

const Layout = ({ children, title }) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <>
      <Head title={title} />
      <div className={`relative w-full min-h-screen transition-all duration-500 ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
        {darkMode ? (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 100 }).map((_, index) => (
              <Star key={index} />
            ))}
          </div>
        ) : (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, index) => (
              <Fog key={index} />
            ))}
          </div>
        )}

        <HeaderComponent darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="container mx-auto p-4 relative z-10 transition-all duration-500">
          {children}
        </main>
        <FooterComponent />
      </div>
    </>
  );
};

export default Layout;
