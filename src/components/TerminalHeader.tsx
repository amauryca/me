import { useState, useEffect } from "react";

const TerminalHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const bootTimer = setTimeout(() => setBootComplete(true), 1000);
    return () => {
      clearInterval(timer);
      clearTimeout(bootTimer);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="terminal-border bg-card/50 backdrop-blur-sm p-4 rounded-sm animate-terminal-boot">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-destructive animate-glow-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <div className="w-3 h-3 rounded-full bg-primary animate-glow-pulse"></div>
          </div>
          <span className="text-muted-foreground">
            {bootComplete ? "SYSTEM_READY" : "BOOTING..."}
          </span>
        </div>
        
        <div className="flex items-center gap-4 font-mono">
          <span className="text-primary terminal-glow">
            [{formatTime(currentTime)}]
          </span>
          <span className="text-muted-foreground">
            USER: AMAURY_CASTILLO
          </span>
        </div>
      </div>
      
      <div className="mt-2 h-px bg-primary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/60 animate-scan-line"></div>
      </div>
    </div>
  );
};

export default TerminalHeader;