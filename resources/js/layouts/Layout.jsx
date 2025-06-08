import { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import HeaderComponent from '@/components/HeaderComponent';
import FooterComponent from '@/components/FooterComponent';

/**
 * Star Component
 * @param {Object} props - The props for the Star component.
 * @param {Object} props.style - The style object containing the position and size of the star.
 * @returns {JSX.Element}
 */
const Star = ({ style }) => {
  return <div className="star absolute bg-white rounded-full animate-twinkle" style={style}></div>;
};

/**
 * Fog Component
 * @param {Object} props - The props for the Fog component.
 * @param {Object} props.style - The style object containing the position and size of the fog.
 * @returns {JSX.Element}
 */
const Fog = ({ style }) => {
  return <div className="fog absolute bg-gray-300 rounded-full animate-float" style={style}></div>;
};

const Layout = ({ children, title }) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const [stars, setStars] = useState([]);
  const [fogs, setFogs] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Generate star positions only once
      if (stars.length === 0) {
        const newStars = Array.from({ length: 100 }).map(() => ({
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 3}px`,
          height: `${Math.random() * 3}px`,
          animationDelay: `${Math.random() * 2}s`,
        }));
        setStars(newStars);
      }

      // Generate fog positions only once
      if (fogs.length === 0) {
        const newFogs = Array.from({ length: 20 }).map(() => ({
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 200 + 100}px`,
          height: `${Math.random() * 200 + 100}px`,
          opacity: `${Math.random() * 0.5 + 0.2}`,
          animationDuration: `${Math.random() * 10 + 5}s`,
        }));
        setFogs(newFogs);
      }
    }
  }, [stars, fogs]);

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
            {stars.map((star, index) => (
              <Star key={index} style={star} />
            ))}
          </div>
        ) : (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {fogs.map((fog, index) => (
              <Fog key={index} style={fog} />
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
