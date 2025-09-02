import { useState } from "react";
import { Card } from "@/components/ui/card";
import TypewriterText from "./TypewriterText";

interface PortfolioSectionProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const PortfolioSection = ({ title, children, delay = 0, className = "" }: PortfolioSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Card className={`terminal-border bg-card/30 backdrop-blur-sm p-6 animate-terminal-boot ${className}`} style={{ animationDelay: `${delay}ms` }}>
      <div className="mb-4">
        <TypewriterText 
          text={`> ${title.toUpperCase()}`}
          delay={delay}
          speed={30}
          className="text-lg font-bold text-primary terminal-glow"
          onComplete={() => setIsVisible(true)}
        />
        <div className="mt-2 h-px bg-gradient-to-r from-primary/60 via-primary/30 to-transparent"></div>
      </div>
      
      <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </Card>
  );
};

export default PortfolioSection;