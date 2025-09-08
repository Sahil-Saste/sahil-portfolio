import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-6 text-center text-slate-400">
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
