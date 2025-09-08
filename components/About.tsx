import React from 'react';
import { Section } from './Section';
import { PERSONAL_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto">
        <div className="text-slate-400 text-lg text-center space-y-4">
          <p>
            {PERSONAL_INFO.bio}
          </p>
          <p>
            I have a strong foundation in Python, TensorFlow, and Scikit-learn, and I enjoy working on the entire development lifecycle, from conceptualization and design to implementation and deployment of AI-powered solutions.
          </p>
        </div>
      </div>
    </Section>
  );
};