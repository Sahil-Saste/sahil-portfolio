import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  start: boolean;
  speed?: number;
  className?: string;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({ text, start, speed = 50, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const isComplete = displayedText.length === text.length;

  useEffect(() => {
    // Reset if the text prop changes
    setDisplayedText('');
  }, [text]);

  useEffect(() => {
    if (start && !isComplete) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, text, start, speed, isComplete]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && start && <span className="animate-pulse ml-1 font-light">|</span>}
    </span>
  );
};
