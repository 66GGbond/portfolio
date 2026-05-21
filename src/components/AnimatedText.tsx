import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedCharProps {
  char: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

function AnimatedChar({ char, index, total, scrollYProgress }: AnimatedCharProps) {
  const center = index / total;
  const start = center - 0.3;
  const end = center + 0.3;
  const opacity = useTransform(scrollYProgress, [Math.max(0, start), center, Math.min(1, end)], [0.12, 1, 1]);

  if (char === ' ') {
    return <motion.span style={{ opacity }}>{' '}</motion.span>;
  }
  return (
    <motion.span style={{ opacity, display: 'inline' }}>
      {char}
    </motion.span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.15'],
  });

  return (
    <p ref={ref} className={className} style={{ ...style, whiteSpace: 'normal', wordBreak: 'break-word' }}>
      {text.split('').map((char, i) => (
        <AnimatedChar
          key={i}
          char={char}
          index={i}
          total={text.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}
