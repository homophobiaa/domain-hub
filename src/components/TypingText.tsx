import { useEffect, useState } from 'react';

interface Props {
  text: string;
  /** ms per character */
  speed?: number;
  /** delay before starting */
  delay?: number;
}

export function TypingText({ text, speed = 35, delay = 200 }: Props) {
  const [shown, setShown] = useState('');

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !text) {
      setShown(text);
      return;
    }
    setShown('');
    let i = 0;
    let id: number | null = null;
    const startTimer = window.setTimeout(() => {
      const step = () => {
        i += 1;
        setShown(text.slice(0, i));
        if (i < text.length) id = window.setTimeout(step, speed);
      };
      step();
    }, delay);
    return () => {
      window.clearTimeout(startTimer);
      if (id) window.clearTimeout(id);
    };
  }, [text, speed, delay]);

  return (
    <>
      {shown}
      <span className="caret" aria-hidden />
    </>
  );
}
