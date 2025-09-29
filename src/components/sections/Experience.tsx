import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Instructor",
    company: "Flexxo",
    location: "Remote",
    period: "November 2024 - Present",
    description: "Delivering SQL and Python training focused on data analysis, empowering professionals to work with data manipulation, extraction, and visualization.",
    technologies: ["SQL", "Python", "Data Analysis", "Training"],
    current: true
  },
  {
    title: "System Analyst",
    company: "Círculo Saúde",
    location: "Brazil",
    period: "March 2024 - Present",
    description: "Supporting and developing solutions for TOTVS DATASUL ERP, including business intelligence dashboards and reports for strategic decision-making. Responsible for automation tasks using Python, as well as data integration and analysis.",
    technologies: ["QlikSense", "SQL", "Python", "Progress 4GL", "TOTVS DATASUL", "Data Integration", "Automation"],
    current: true
  },
  {
    title: "Process Analyst",
    company: "Marcopolo S.A",
    location: "Brazil",
    period: "November 2023 - March 2024",
    description: "Led business intelligence initiatives, implementing data analysis and process automation solutions. Developed dashboards, reports, system integrations, and contributed to Flutter app development.",
    technologies: ["Python", "VBA", "QlikSense", "SQL", "RPA", "Qlik Sense", "Flutter"],
    current: false
  },
  {
    title: "Co-Founder",
    company: "Google Developer Group Caxias do Sul",
    location: "Caxias do Sul, RS",
    period: "January 2023 - Present",
    description: "Empowering the local community to explore, learn, and innovate through technology. Creating an inclusive space for developers and creatives to collaborate.",
    technologies: ["Community Building", "Event Management", "Technology Education"],
    current: true
  },
  {
    title: "Robotics Research Scholar",
    company: "IFRS Caxias do Sul",
    location: "Caxias do Sul, RS",
    period: "January 2023 - December 2023",
    description: "Conducted robotics research using LEGO Classroom EV3, Python, and Arduino. Developed a Flutter app for scoring competitions and mentored teams.",
    technologies: ["Python", "Arduino", "Flutter", "LEGO EV3", "Research"],
    current: false
  },
  {
    title: "FullStack Developer",
    company: "GC Solutions",
    location: "Brazil",
    period: "January 2022 - January 2023",
    description: "Built websites and implemented components using Angular, integrated REST APIs, created layouts. Also contributed to Flutter development projects.",
    technologies: ["Angular", "Node.js", "REST APIs", "TypeScript", "HTML/CSS", "Flutter"],
    current: false
  },
  {
    title: "Junior FullStack Developer",
    company: "TC2CODE & Solutions",
    location: "Brazil",
    period: "January 2021 - January 2023",
    description: "Built websites and implemented components using Angular, integrated REST APIs, created layouts. Also contributed to Flutter development projects.",
    technologies: ["Angular", "Node.js", "REST APIs", "TypeScript", "HTML/CSS", "Flutter"],
    current: false
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions across Business Intelligence, Automation, and Full-Stack Development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="tech-card group">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-primary flex items-center gap-2">
                      {exp.title}
                      {exp.current && (
                        <Badge variant="secondary" className="bg-accent/20 text-accent">
                          Current
                        </Badge>
                      )}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Building className="h-4 w-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="border-primary/20 hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};