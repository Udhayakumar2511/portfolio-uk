import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { USER_NAME, USER_ROLE } from '../../data/userInfo';

const Hero: React.FC = () => {
  const [typed, setTyped] = useState('');
  const fullText = USER_ROLE;
  
  useEffect(() => {
    if (typed.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTyped(fullText.slice(0, typed.length + 1));
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [typed, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">{USER_NAME}</h1>
        <div className="h-12">
          <h2 className="text-2xl md:text-3xl text-cyan-400 mb-8">
            {typed}<span className="animate-pulse">|</span>
          </h2>
        </div>
        <p className="text-xl text-gray-300 max-w-2xl mb-8">
          Passionate about building innovative solutions using cutting-edge technologies.
          Let's collaborate to bring your ideas to life.
        </p>
        <div className="flex space-x-4">
          <a
  href="/resumae.jpg"
  download
  className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 transition-colors duration-300 rounded-md font-medium"
>
  Download Resume
</a>

          <button 
            className="px-6 py-3 border-2 border-white hover:bg-white hover:text-gray-900 transition-colors duration-300 rounded-md font-medium"
          >
            Contact Me
          </button>
        </div>
      </div>
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Hero;