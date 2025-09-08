
import React from 'react';
import { Section } from './Section';
import { ProjectCard } from './ProjectCard';
import { PROJECTS_DATA } from '../constants';

export const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};
