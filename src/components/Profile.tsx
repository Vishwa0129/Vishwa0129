import { GithubIcon, LinkedinIcon, MailIcon, FileTextIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const typingText = [
  { text: "Full Stack Developer", color: "blue" },
  { text: "Node.js Developer", color: "green" },
  { text: "Open Source Contributor", color: "purple" },
  { text: "Cloud Technologies Enthusiast", color: "orange" },
  { text: "UI/UX Enthusiast", color: "pink" }
];

const Profile = () => {
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
      blue: 'text-blue-600 dark:text-blue-400',
      green: 'text-green-600 dark:text-green-400',
      purple: 'text-purple-600 dark:text-purple-400',
      orange: 'text-orange-600 dark:text-orange-400',
      pink: 'text-pink-600 dark:text-pink-400'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:space-x-12">
          {/* Profile Image */}
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/profile-image.jpg"
                alt="Profile"
                className="relative w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-300 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white lg:text-5xl mb-4">
              Vishwa Teja
            </h1>
           
            <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I'm a third-year BTech student specializing in computer science & engineering, with a strong passion for creating innovative solutions through technology. I am committed to continuous learning and staying updated with the latest advancements in the tech industry.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap items-center mt-8 gap-4">
              <a
                href="resume.pdf"
                download="Vishwa_Teja_Resume.pdf"
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2"
              >
                <FileTextIcon className="w-5 h-5" />
                <span>Resume</span>
              </a>
              <a
                href="mailto:vishwateja0129@gmail.com"
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2"
              >
                <MailIcon className="w-5 h-5" />
                <span>Contact</span>
              </a>
              <a
                href="https://github.com/Vishwa0129"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2"
              >
                <GithubIcon className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vishwa-teja-3a78a0283/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2"
              >
                <LinkedinIcon className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">3+</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">20+</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">15+</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile; 