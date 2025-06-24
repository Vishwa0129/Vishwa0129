import React from 'react';
import { Briefcase, GraduationCap, Code, Brain, Cloud, Palette, Code2, ListChecks } from 'lucide-react';

interface AboutProps {
  theme: string;
}

const About: React.FC<AboutProps> = ({ theme }) => {
  const competencies = [
    { icon: <Code size={24} />, title: 'Full Stack Development' },
    { icon: <Brain size={24} />, title: 'Machine Learning' },
    { icon: <Cloud size={24} />, title: 'Cloud Computing' },
    { icon: <Palette size={24} />, title: 'UI/UX Design' },
    { icon: <Code2 size={24} />, title: 'Agile Methodologies' },
    { icon: <ListChecks size={24} />, title: 'Problem Solving' },
  ];

  return (
    <section id="about" className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold mb-16 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            A passionate full-stack developer with expertise in building modern web applications and machine learning solutions.
          </p>
          
          <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
            Background
          </h3>
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            I'm a Computer Science graduate with a strong foundation in software development and machine learning. My journey in tech started with a passion for creating innovative solutions that solve real-world problems.
          </p>
          
          <div className="mb-12">
            <h3 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
              Experience
            </h3>
            
            <div className={`border-l-4 border-blue-500 pl-6 mb-8 relative ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                <Briefcase size={16} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold">Full Stack Developer</h4>
              <p className={`text-lg mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Vision Fame • 2025 - Present</p>
              <p className="text-base">
                Led development of multiple web applications using React, Node.js, and cloud technologies.
              </p>
            </div>
            
            <div className={`border-l-4 border-blue-500 pl-6 relative ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                <Briefcase size={16} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold">Acmegrade</h4>
              <p className={`text-lg mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Web Development • 2024</p>
              <p className="text-base">
              Led the development of several full-stack applications using React, Node.js, and cloud technologies.
              </p>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
              Education
            </h3>
            
            <div className={`border-l-4 border-blue-500 pl-6 relative ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                <GraduationCap size={16} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold">B.Tech. in Computer Science</h4>
              <p className={`text-lg mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>SR University • 2022 - 2026</p>
            </div>
          </div>
          
          <div className="mb-8">
           
          </div>
        </div>
        
        <div>
          <h3 className={`text-2xl font-semibold mb-8 text-center ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {competencies.map((item, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg flex flex-col items-center text-center transition-transform hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-gray-700 text-white' 
                    : 'bg-white shadow-md text-gray-800'
                }`}
              >
                <div className={`mb-4 text-blue-500`}>
                  {item.icon}
                </div>
                <h4 className="text-lg font-medium">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;