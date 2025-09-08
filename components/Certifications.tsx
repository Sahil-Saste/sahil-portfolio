import React from 'react';
import { Section } from './Section';
import { CERTIFICATIONS_DATA } from '../constants';

export const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title="Certifications">
      <div className="space-y-4">
        {CERTIFICATIONS_DATA.map((cert, index) => (
          <div key={index} className="flex flex-col sm:flex-row justify-between items-start bg-slate-800/30 p-4 rounded-md border-l-4 border-teal-400">
            <div>
              <h3 className="font-semibold text-slate-100">{cert.title}</h3>
              <p className="text-slate-400 text-sm">{cert.issuer}</p>
            </div>
            <p className="text-sm text-slate-400 mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">{cert.date}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
