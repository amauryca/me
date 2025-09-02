import { useState } from "react";
import TypewriterText from "./TypewriterText";

interface TerminalCommandProps {
  command: string;
  output?: string | React.ReactNode;
  delay?: number;
  className?: string;
}

const TerminalCommand = ({ command, output, delay = 0, className = "" }: TerminalCommandProps) => {
  const [showOutput, setShowOutput] = useState(false);

  return (
    <div className={`font-mono text-sm ${className}`}>
      <div className="flex items-center gap-2">
        <span className="text-primary terminal-glow">amaury@portfolio:~$</span>
        <TypewriterText 
          text={command}
          delay={delay}
          speed={30}
          onComplete={() => setShowOutput(true)}
          className="text-foreground"
        />
      </div>
      
      {showOutput && output && (
        <div className="mt-1 pl-6 text-muted-foreground animate-fade-in">
          {typeof output === 'string' ? (
            <TypewriterText 
              text={output}
              speed={20}
              className="text-primary/80"
            />
          ) : (
            output
          )}
        </div>
      )}
    </div>
  );
};

export default TerminalCommand;