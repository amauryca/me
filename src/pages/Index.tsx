import MatrixBackground from "@/components/MatrixBackground";
import TerminalHeader from "@/components/TerminalHeader";
import TerminalCommand from "@/components/TerminalCommand";
import PortfolioSection from "@/components/PortfolioSection";
import SkillBar from "@/components/SkillBar";
import ProjectCard from "@/components/ProjectCard";
import TypewriterText from "@/components/TypewriterText";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Award, Briefcase, GraduationCap, Heart, Github, Linkedin } from "lucide-react";

const Index = () => {
  const skills = [
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "Python", level: 85 },
    { name: "HTML & CSS", level: 90 },
    { name: "React", level: 88 },
    { name: "DaVinci Resolve", level: 75 },
    { name: "Photoshop", level: 70 }
  ];

  const projects = [
    {
      title: "OPENEDMIND.ORG",
      description: "Personally developed an AI system that detects emotions through facial expressions, voice, and text to offer real-time mental health support and interventions. Designed to be non-profit and for use by anyone who needs it, 24/7/365.",
      technologies: ["AI/ML", "Computer Vision", "NLP", "Real-time Processing", "Mental Health Tech"],
      liveUrl: "https://openedmind.org"
    }
  ];

  const workExperience = [
    {
      title: "Summer Camp Counselor",
      company: "Adventure Camp of Sarasota County",
      period: "May 2025 - August 2025",
      description: "Supervised and led engaging activities for 120+ middle school campers. Promoted safety, teamwork, and positive behavior in outdoor and indoor settings."
    },
    {
      title: "Fulfillment Expert",
      company: "Target",
      period: "School Year 2025",
      description: "Collaborated with team members to maintain inventory accuracy and ensure a smooth order fulfillment process. Executed accurate and timely fulfillment of online orders."
    }
  ];

  const awards = [
    "Regional Science Fair Winner, 2025 (1st Place in Behavioral & Human Sciences)",
    "SSEF Finalist (State Science & Engineering Fair), 2025",
    "National Honor Society Member, 2024 – Present",
    "President's Education Award, 2019, 2021, 2022",
    "AP Scholar Award from College Board",
    "FIT Merit Scholarship"
  ];

  return (
    <div className="min-h-screen bg-background matrix-bg relative overflow-hidden">
      <MatrixBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-8 space-y-8">
        <TerminalHeader />
        
        {/* Hero Section */}
        <PortfolioSection title="Initialize System" delay={500}>
          <div className="space-y-4">
            <TerminalCommand 
              command="whoami"
              output="AMAURY CASTILLO-ACEVEDO"
              delay={0}
            />
            <TerminalCommand 
              command="cat /usr/local/bin/identity.txt"
              output={
                <div className="space-y-2">
                  <TypewriterText 
                    text="Full-Stack Developer | AI Enthusiast | Mental Health Advocate"
                    delay={500}
                    className="text-primary terminal-glow text-lg"
                  />
                  <TypewriterText 
                    text="Building technology that makes a difference in people's lives."
                    delay={1500}
                    className="text-muted-foreground"
                  />
                </div>
              }
              delay={1000}
            />
            
            <div className="flex flex-wrap gap-4 mt-6">
              <Button 
                variant="outline" 
                className="terminal-border hover:bg-primary/20 hover:text-primary"
              >
                <Mail className="w-4 h-4 mr-2" />
                amaurycacevedo@gmail.com
              </Button>
              <Button 
                variant="outline"
                className="terminal-border hover:bg-primary/20 hover:text-primary"
              >
                <Phone className="w-4 h-4 mr-2" />
                +1 941-320-9859
              </Button>
            </div>
          </div>
        </PortfolioSection>

        {/* Skills Section */}
        <PortfolioSection title="Skills & Abilities" delay={1000}>
          <TerminalCommand 
            command="ls -la /skills/"
            delay={0}
            output={
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {skills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name}
                    skill={skill.name}
                    level={skill.level}
                    delay={index * 100}
                  />
                ))}
              </div>
            }
          />
          
          <div className="mt-4 p-4 terminal-border bg-card/10 rounded-sm">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary">Additional Capabilities:</span> Bilingual in English and Spanish (Read, Write, & Speak) • 
              Driven to always seek answers to problems • Strong attention to detail and time management
            </p>
          </div>
        </PortfolioSection>

        {/* Projects Section */}
        <PortfolioSection title="Featured Projects" delay={1500}>
          <TerminalCommand 
            command="git log --oneline --graph"
            delay={0}
            output={
              <div className="grid grid-cols-1 gap-6 mt-4">
                {projects.map((project, index) => (
                  <ProjectCard 
                    key={project.title}
                    {...project}
                    delay={index * 200}
                  />
                ))}
              </div>
            }
          />
        </PortfolioSection>

        {/* Experience Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PortfolioSection title="Work Experience" delay={2000}>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div key={job.title} className="space-y-2 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex items-start gap-2">
                    <Briefcase className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{job.title}</h4>
                      <p className="text-primary text-sm terminal-glow">{job.company}</p>
                      <p className="text-xs text-muted-foreground">{job.period}</p>
                      <p className="text-sm text-muted-foreground mt-2">{job.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PortfolioSection>

          <PortfolioSection title="Education & Awards" delay={2200}>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Sarasota High School</h4>
                  <p className="text-primary text-sm terminal-glow">AICE Program | 2022 – Present</p>
                  <p className="text-xs text-muted-foreground">4.75 Weighted GPA / 3.65 UW GPA • Class Rank: 61/485</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  Recognition & Awards
                </h4>
                <ul className="space-y-2">
                  {awards.map((award, index) => (
                    <li 
                      key={index}
                      className="text-sm text-muted-foreground flex items-start gap-2 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-primary text-xs">▶</span>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </PortfolioSection>
        </div>

        {/* Volunteer Experience */}
        <PortfolioSection title="Community Impact" delay={2500}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Teen Court Advocate & Youth Team Leadership Representative</h4>
                  <p className="text-primary text-sm terminal-glow">Teen Court of Sarasota | 2022 – Present</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Mentored peers and advocated for youth while learning courtroom roles and legal procedures. 
                    Gained valuable experience in public speaking, professionalism, and decision-making.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">STAR Leadership Training Program</h4>
                  <p className="text-primary text-sm terminal-glow">Lee Wetherington Boys & Club | Spring 2022</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Helped foster active citizenship through civic education. Created and Led a Mental Health 
                    Non-Profit to over 30 individuals between ages 10-17.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PortfolioSection>

        {/* Footer Terminal */}
        <div className="terminal-border bg-card/20 backdrop-blur-sm p-4 rounded-sm">
          <TerminalCommand 
            command="sudo shutdown -h now"
            output={
              <div className="flex items-center justify-center gap-6 mt-4">
                <TypewriterText 
                  text="Thanks for visiting my digital portfolio!"
                  delay={500}
                  className="text-primary terminal-glow"
                />
                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" className="hover:bg-primary/20">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:bg-primary/20">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            }
            delay={3000}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
