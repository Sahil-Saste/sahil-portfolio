import React from 'react';
import { Project } from '../types';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-teal-400/50 transition-all shadow-lg group">
      {project.imageUrl && (
        <div className="overflow-hidden h-48">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors ml-4 flex-shrink-0">
                <GithubIcon className="w-6 h-6" />
            </a>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span key={tech} className="bg-teal-900/50 text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <ul className="list-disc list-inside space-y-2 text-slate-400">
          {project.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
