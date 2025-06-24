import React, { useState } from 'react';

interface SkillsProps {
  theme: string;
}

type SkillCategory = {
  title: string;
  skills: string[];
};

const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState('Frontend Development');
  
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express',]
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL']
    },
    {
      title: 'DevOps & Cloud',
      skills: ['AWS', ]
    },
    {
      title: 'UI/UX Design',
      skills: ['Figma', 'Adobe XD', 'Responsive Design', ]
    },
    {
      title: 'Security',
      skills: ['OAuth', 'JWT', 'HTTPS', ]
    },
    {
      title: 'Version Control',
      skills: ['Git', 'GitHub', 'GitLab', ]
    }
  ];

  return (
    <section id="skills" className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Skills & Expertise
        </h2>
        <p className={`text-lg mb-12 text-center max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          A comprehensive set of technical skills and tools I use to build modern applications
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skillCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(category.title)}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
                activeCategory === category.title
                  ? theme === 'dark'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-600 text-white'
                  : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className={`transition-opacity duration-300 ${activeCategory === category.title ? 'block opacity-100' : 'hidden opacity-0'}`}
            >
              <h3 className={`text-2xl font-semibold mb-8 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-lg transition-transform hover:scale-105 ${
                      theme === 'dark' 
                        ? 'bg-gray-800 text-white' 
                        : 'bg-gray-50 text-gray-800'
                    }`}
                  >
                    <h4 className="text-lg font-medium">{skill}</h4>
                    <div className="w-full h-2 bg-gray-300 rounded-full mt-2 overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 rounded-full" 
                        style={{ width: `${Math.random() * 40 + 60}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;