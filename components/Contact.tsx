import React from 'react';
import { Section } from './Section';
import { PERSONAL_INFO } from '../constants';
import { MailIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg text-slate-400 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
          >
            <MailIcon className="w-5 h-5 mr-3" />
            <span>{PERSONAL_INFO.email}</span>
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-base font-medium rounded-md text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-5 h-5 mr-3" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
         <p className="text-slate-400 mt-8">Phone: {PERSONAL_INFO.phone}</p>
      </div>
    </Section>
  );
};
