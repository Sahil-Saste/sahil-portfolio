import React from 'react';
import { Section } from './Section';
import { SKILLS_DATA } from '../constants';

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS_DATA.map((category) => (
          <div key={category.title} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-bold text-teal-400 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="bg-slate-700 text-slate-300 text-sm font-medium px-3 py-1.5 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
