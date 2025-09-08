import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-16 md:py-24 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 relative inline-block">
          {title}
          <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-teal-400 rounded"></span>
        </h2>
      </div>
      {children}
    </section>
  );
};
