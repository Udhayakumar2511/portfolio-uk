import React, { useState } from 'react';
import { PROJECTS } from '../../data/userInfo';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', ...new Set(PROJECTS.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeFilter);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="My Projects" />
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === category 
                  ? 'bg-cyan-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;