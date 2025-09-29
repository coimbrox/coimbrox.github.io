import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Coimbrox Panda Theme",
    description: "An elegant dark theme for Visual Studio Code with neon and modern touches. Features carefully tuned pastel colors, vibrant highlights, and high readability.",
    technologies: ["VS Code Extension", "JSON", "Design"],
    links: {
      live: "https://marketplace.visualstudio.com/items?itemName=gabrielcoimbra.coimbrox-panda-theme",
      github: "#"
    },
    category: "Development Tools"
  },
  {
    title: "Progress 4GL Formatter",
    description: "A code formatter extension for Progress 4GL (OpenEdge ABL) in Visual Studio Code. Automatically applies consistent style and improves code quality.",
    technologies: ["VS Code Extension", "TypeScript", "Progress 4GL"],
    links: {
      live: "https://marketplace.visualstudio.com/items?itemName=gabrielcoimbra.progress-4gl-formatter",
      github: "#"
    },
    category: "Development Tools"
  },
  {
    title: "CoimLetter",
    description: "A word game similar to Letreco (Brazilian Wordle), currently in testing phase. Built with modern web technologies.",
    technologies: ["React", "TypeScript", "Game Development"],
    links: {
      live: "https://coimletter.netlify.app/",
      github: "#"
    },
    category: "Web Application"
  },
  {
    title: "Auction Management System",
    description: "Fullstack development and mobile app for SE7I's Auction Management and Preparation System. Complete solution for auction operations.",
    technologies: ["Fullstack", "Mobile App", "System Design"],
    links: {
      live: "https://www.se7i.com.br/pdf/Para_Site_-_Apresentacao_Sistema_de_Leilao_SE7I.pdf",
      github: "#"
    },
    category: "Enterprise Solution"
  },
  {
    title: "Level Affiliates Portal",
    description: "Developed the frontend of the application using Angular, based on custom design layouts for affiliate management.",
    technologies: ["Angular", "TypeScript", "Frontend"],
    links: {
      live: "https://levelafiliados.com.br/",
      github: "#"
    },
    category: "Web Application"
  },
  {
    title: "Marcopolo Internal Automations",
    description: "Developed various automations and programs for Marcopolo using Python, VBA, Qlik Sense, Power Apps, and Power Automate for process optimization.",
    technologies: ["Python", "VBA", "Qlik Sense", "Power Platform", "RPA"],
    links: {
      live: "#",
      github: "#"
    },
    category: "Business Intelligence"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning Business Intelligence, Development Tools, and Web Applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="tech-card group h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge variant="outline" className="mb-3 border-primary/20">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-primary group-hover:text-secondary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs bg-muted/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-2 pt-2">
                    {project.links.live !== "#" && (
                      <Button 
                        size="sm" 
                        className="flex-1"
                        asChild
                      >
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live
                        </a>
                      </Button>
                    )}
                    {project.links.github !== "#" && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                      >
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/coimbrox" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};