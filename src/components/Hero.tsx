import React, { useEffect, useState } from 'react';
import { ArrowDown, FileDown } from 'lucide-react';

const typingText = [
  { text: "Cloud Technologies", color: "orange" },
  { text: "UI/UX Enthusiast", color: "pink" },
  { text: "Full Stack Developer", color: "green" },
  { text: "Node.js Developer", color: "indigo" }
];

interface HeroProps {
  theme: string;
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    let typingTimeout: number | undefined;
    const currentString = typingText[textIndex].text;

    if (!isDeleting && charIndex < currentString.length) {
      typingTimeout = setTimeout(() => {
        setCurrentText(currentString.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (isDeleting && charIndex > 0) {
      typingTimeout = setTimeout(() => {
        setCurrentText(currentString.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (!isDeleting && charIndex === currentString.length) {
      typingTimeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % typingText.length);
    }
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, textIndex]);

  const getTextColor = (color: string) => {
    const colorMap = {
      purple: theme === 'dark' ? 'text-purple-400' : 'text-purple-600',
      pink: theme === 'dark' ? 'text-pink-400' : 'text-pink-600',
      green: theme === 'dark' ? 'text-green-400' : 'text-green-600',
      indigo: theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600',
      teal: theme === 'dark' ? 'text-teal-400' : 'text-teal-600',
      orange: theme === 'dark' ? 'text-orange-400' : 'text-orange-600',
      blue: theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`min-h-screen flex items-center relative pt-20 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-white'}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -left-24 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-24 right-24 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-600 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Manda VishwaTeja
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <span className={getTextColor(typingText[textIndex].color)}>{currentText}</span>
              <span className="border-r-2 border-blue-500 animate-pulse ml-1"></span>
            </h2>
            <p className="text-lg mb-10 max-w-2xl opacity-0 animate-fadeInUp" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              Passionate about creating elegant solutions to complex problems through clean, efficient code and intuitive user experiences.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 animate-fadeInUp" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <a 
                href="resume.pdf" 
                download="resume.pdf"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center hover:bg-blue-700 transition-colors group"
              >
                Download Resume
                <FileDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
              </a>
              <a 
                href="#about" 
                onClick={scrollToAbout}
                className={`px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-colors group ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Know More About Me
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
              </a>
            </div>
          </div>
          <div className="md:w-1/3 opacity-0 animate-fadeInRight" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${theme === 'dark' ? 'border-blue-500' : 'border-blue-600'} mx-auto`}>
              <img 
                src="profile-image.jpg" 
                alt="Manda VishwaTeja" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;