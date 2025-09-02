import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  delay?: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  liveUrl, 
  githubUrl,
  delay = 0 
}: ProjectCardProps) => {
  return (
    <Card 
      className="terminal-border bg-card/20 backdrop-blur-sm p-6 hover:bg-card/30 transition-all duration-300 animate-terminal-boot group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-primary terminal-glow group-hover:animate-glow-pulse">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-primary/10 border border-primary/30 rounded-sm text-xs text-primary terminal-glow"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 pt-2">
          {liveUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="terminal-border hover:bg-primary/20 hover:text-primary"
              onClick={() => window.open(liveUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button 
              variant="ghost" 
              size="sm"
              className="hover:bg-primary/20 hover:text-primary"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              <Github className="w-4 h-4 mr-1" />
              Code
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;