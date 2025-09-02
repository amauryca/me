import { useState, useEffect } from "react";

interface SkillBarProps {
  skill: string;
  level: number;
  delay?: number;
}

const SkillBar = ({ skill, level, delay = 0 }: SkillBarProps) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(level);
    }, delay);

    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="mb-3 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <span className="text-sm text-primary terminal-glow">{level}%</span>
      </div>
      <div className="h-2 bg-secondary/30 rounded-sm terminal-border overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000 ease-out relative"
          style={{ width: `${animatedLevel}%` }}
        >
          <div className="absolute inset-0 bg-primary/30 animate-glow-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;