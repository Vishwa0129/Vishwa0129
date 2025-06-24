import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  theme: string;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className={`py-12 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold">Manda VishwaTeja</h2>
            </div>
            <p className={`max-w-md ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Full Stack Developer passionate about creating innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 mb-8 md:mb-0">
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <li><a href="#about" className="hover:text-blue-500 transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors flex items-center">
                    <Github size={16} className="mr-2" /> GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors flex items-center">
                    <Linkedin size={16} className="mr-2" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:vishwateja0129@gmail.com" className="hover:text-blue-500 transition-colors flex items-center">
                    <Mail size={16} className="mr-2" /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-700 text-center">
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            &copy; {new Date().getFullYear()} Manda VishwaTeja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;