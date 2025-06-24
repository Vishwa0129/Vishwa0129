import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

interface ProjectsProps {
  theme: string;
}

const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Web', 'AI/ML', 'Mobile', 'Tools'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Featured Projects
        </h2>
        <p className={`text-lg mb-12 text-center max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          A collection of my recent work showcasing my skills and expertise
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
                activeFilter === category
                  ? theme === 'dark'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-600 text-white'
                  : theme === 'dark'
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`rounded-xl overflow-hidden group transition-transform hover:scale-105 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-white shadow-lg'
              }`}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-70 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <a 
                    href={project.viewProjects} 
                    target="_blank"
                    className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium flex items-center"
                  >
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.year}
                  </span>
                </div>
                <p className={`mb-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className={`text-xs px-3 py-1 rounded-full ${
                        theme === 'dark' 
                          ? 'bg-gray-600 text-gray-200' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`p-8 rounded-lg text-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-white shadow-lg'}`}>
            <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Clean Code</h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Writing maintainable and efficient code following best practices
            </p>
          </div>
          <div className={`p-8 rounded-lg text-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-white shadow-lg'}`}>
            <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Modern Tech</h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Using cutting-edge technologies and frameworks for optimal performance
            </p>
          </div>
          <div className={`p-8 rounded-lg text-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-white shadow-lg'}`}>
            <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>User Experience</h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Creating intuitive and engaging interfaces for better user interaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;