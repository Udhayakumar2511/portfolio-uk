import React from 'react';
import { Project } from '../../types';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-white bg-cyan-600 rounded-full">
          {project.category}
        </div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 text-xs bg-gray-100 rounded-md">
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-cyan-600 font-medium hover:text-cyan-700 transition-colors"
        >
          View Project <ArrowRight className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;