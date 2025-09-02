import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

interface TerminalHistory {
  command: string;
  output: string | React.ReactNode;
  timestamp: Date;
}

const InteractiveTerminal = () => {
  const [history, setHistory] = useState<TerminalHistory[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [currentDirectory, setCurrentDirectory] = useState("/home/amaury");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const fileSystem = {
    "/home/amaury": ["projects/", "skills/", "experience/", "education/", "contact.txt", "about.txt"],
    "/home/amaury/projects": ["openedmind.org", "portfolio.js", "README.md"],
    "/home/amaury/skills": ["programming.json", "languages.txt", "tools.cfg"],
    "/home/amaury/experience": ["summer-camp.log", "target.log", "volunteer.md"],
    "/home/amaury/education": ["sarasota-high.edu", "awards.list", "gpa.stat"]
  };

  const helpCommands = [
    "help - Show available commands",
    "ls - List directory contents", 
    "cd <directory> - Change directory",
    "cat <file> - Display file contents",
    "pwd - Show current directory",
    "whoami - Display user information",
    "clear - Clear terminal screen",
    "projects - Show recent projects",
    "skills - Display technical skills",
    "contact - Show contact information",
    "tree - Show directory structure"
  ];

  useEffect(() => {
    // Initial welcome message
    setHistory([{
      command: "",
      output: (
        <div className="text-primary terminal-glow">
          <div className="mb-2">Welcome to Amaury's Interactive Portfolio Terminal v2.1.0</div>
          <div className="text-muted-foreground text-sm mb-2">
            Type 'help' to see available commands or explore the file system with 'ls' and 'cd'
          </div>
          <div className="text-xs text-primary/60">
            Last login: {new Date().toLocaleString()} from portfolio.lovable.dev
          </div>
        </div>
      ),
      timestamp: new Date()
    }]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (input: string) => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const [command, ...args] = trimmedInput.split(" ");
    let output: string | React.ReactNode = "";

    switch (command.toLowerCase()) {
      case "help":
        output = (
          <div className="space-y-1">
            {helpCommands.map((cmd, i) => (
              <div key={i} className="text-primary/80 text-sm">• {cmd}</div>
            ))}
          </div>
        );
        break;

      case "ls":
        const targetDir = args[0] ? args[0] : currentDirectory;
        const contents = fileSystem[targetDir as keyof typeof fileSystem];
        if (contents) {
          output = (
            <div className="grid grid-cols-2 gap-2">
              {contents.map((item, i) => (
                <div key={i} className={`text-sm ${item.endsWith('/') ? 'text-accent' : 'text-foreground'}`}>
                  {item.endsWith('/') ? '📁 ' : '📄 '}{item}
                </div>
              ))}
            </div>
          );
        } else {
          output = `ls: cannot access '${targetDir}': No such file or directory`;
        }
        break;

      case "cd":
        if (!args[0]) {
          setCurrentDirectory("/home/amaury");
          output = "";
        } else if (args[0] === "..") {
          const pathParts = currentDirectory.split("/").filter(p => p);
          pathParts.pop();
          const newPath = "/" + pathParts.join("/");
          setCurrentDirectory(newPath || "/home/amaury");
          output = "";
        } else {
          const newPath = args[0].startsWith("/") ? args[0] : `${currentDirectory}/${args[0]}`;
          if (fileSystem[newPath as keyof typeof fileSystem]) {
            setCurrentDirectory(newPath);
            output = "";
          } else {
            output = `cd: ${args[0]}: No such file or directory`;
          }
        }
        break;

      case "pwd":
        output = currentDirectory;
        break;

      case "whoami":
        output = (
          <div className="space-y-2">
            <div className="text-primary terminal-glow font-semibold">AMAURY CASTILLO-ACEVEDO</div>
            <div className="text-sm space-y-1">
              <div>🎓 High School Student & Developer</div>
              <div>🧠 AI Enthusiast & Mental Health Advocate</div>
              <div>🏆 Regional Science Fair Winner 2025</div>
              <div>📍 Sarasota, Florida</div>
            </div>
          </div>
        );
        break;

      case "cat":
        if (!args[0]) {
          output = "cat: missing file operand";
        } else {
          switch (args[0]) {
            case "about.txt":
              output = "Personally developed an AI system for mental health support. Passionate about using technology to make a positive impact on people's lives.";
              break;
            case "contact.txt":
              output = (
                <div className="space-y-1 text-sm">
                  <div>📧 amaurycacevedo@gmail.com</div>
                  <div>📞 +1 941-320-9859</div>
                  <div>🌐 Currently viewing portfolio</div>
                </div>
              );
              break;
            default:
              output = `cat: ${args[0]}: No such file or directory`;
          }
        }
        break;

      case "projects":
        output = (
          <div className="space-y-3">
            <div className="terminal-border bg-card/10 p-3 rounded-sm">
              <div className="text-primary terminal-glow font-semibold">OPENEDMIND.ORG</div>
              <div className="text-sm text-muted-foreground mt-1">
                AI-powered mental health support system using facial recognition, voice analysis, and NLP
              </div>
              <div className="text-xs text-accent mt-1">Technologies: AI/ML, Computer Vision, Real-time Processing</div>
            </div>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-primary font-semibold mb-2">Programming:</div>
              <div className="space-y-1">
                <div>• TypeScript (90%)</div>
                <div>• JavaScript (95%)</div>
                <div>• Python (85%)</div>
                <div>• HTML & CSS (90%)</div>
              </div>
            </div>
            <div>
              <div className="text-primary font-semibold mb-2">Tools & Others:</div>
              <div className="space-y-1">
                <div>• React (88%)</div>
                <div>• DaVinci Resolve (75%)</div>
                <div>• Photoshop (70%)</div>
                <div>• English & Spanish</div>
              </div>
            </div>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-2">
            <div className="text-primary terminal-glow">CONTACT INFORMATION</div>
            <div className="space-y-1 text-sm">
              <div>📧 Email: amaurycacevedo@gmail.com</div>
              <div>📞 Phone: +1 941-320-9859</div>
              <div>🏫 School: Sarasota High School</div>
              <div>📍 Location: Sarasota County, Florida</div>
            </div>
          </div>
        );
        break;

      case "tree":
        output = (
          <div className="font-mono text-xs space-y-1">
            <div>📁 /home/amaury</div>
            <div>├── 📁 projects/</div>
            <div>│   ├── 📄 openedmind.org</div>
            <div>│   ├── 📄 portfolio.js</div>
            <div>│   └── 📄 README.md</div>
            <div>├── 📁 skills/</div>
            <div>├── 📁 experience/</div>
            <div>├── 📁 education/</div>
            <div>├── 📄 contact.txt</div>
            <div>└── 📄 about.txt</div>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        return;

      case "exit":
      case "logout":
        output = "Thanks for exploring! Portfolio session maintained.";
        break;

      default:
        output = `Command '${command}' not found. Type 'help' for available commands.`;
    }

    const newEntry: TerminalHistory = {
      command: trimmedInput,
      output,
      timestamp: new Date()
    };

    setHistory(prev => [...prev, newEntry]);
    setCommandHistory(prev => [...prev, trimmedInput]);
    setCurrentInput("");
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(currentInput);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput("");
      }
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <Card className="terminal-border bg-card/20 backdrop-blur-sm animate-terminal-boot">
      <div 
        ref={terminalRef}
        className="h-96 overflow-y-auto p-4 font-mono text-sm cursor-text"
        onClick={handleTerminalClick}
      >
        <div className="space-y-2">
          {history.map((entry, index) => (
            <div key={index} className="space-y-1">
              {entry.command && (
                <div className="flex items-center gap-2">
                  <span className="text-primary terminal-glow">amaury@portfolio</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-accent">{currentDirectory}</span>
                  <span className="text-primary">$</span>
                  <span className="text-foreground">{entry.command}</span>
                </div>
              )}
              {entry.output && (
                <div className="pl-4 text-muted-foreground">
                  {entry.output}
                </div>
              )}
            </div>
          ))}
          
          <div className="flex items-center gap-2">
            <span className="text-primary terminal-glow">amaury@portfolio</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-accent">{currentDirectory}</span>
            <span className="text-primary">$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-foreground caret-primary"
              autoFocus
              spellCheck={false}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InteractiveTerminal;