import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { TypingEffect } from './TypingEffect';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

export const Hero: React.FC = () => {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 500); // Delay before typing starts
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="flex items-center justify-center min-h-screen">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-100">
          Hi, I'm <span className="text-teal-400">{PERSONAL_INFO.name}</span>
        </h1>
        <div className="text-2xl md:text-4xl font-semibold mb-8 text-slate-300 h-12 md:h-14">
          <TypingEffect text={PERSONAL_INFO.title} start={startTyping} />
        </div>
        <div className="flex justify-center items-center gap-6">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            <GithubIcon className="w-8 h-8" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            <LinkedinIcon className="w-8 h-8" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email"
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            <MailIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};