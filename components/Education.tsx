import React from 'react';
import { Section } from './Section';
import { EDUCATION_DATA } from '../constants';

export const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {EDUCATION_DATA.map((item, index) => (
          <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <div className="flex flex-col sm:flex-row justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-slate-100">{item.degree}</h3>
                <p className="text-slate-300">{item.institute}</p>
                <p className="text-slate-400 mt-1">GPA: {item.gpa}</p>
              </div>
              <p className="text-sm text-slate-400 whitespace-nowrap mt-2 sm:mt-0">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
