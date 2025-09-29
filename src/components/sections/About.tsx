import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Award } from "lucide-react";

export const About = () => {
  const highlights = [
    "Business Intelligence Solutions",
    "Process Automation with Python & RPA",
    "Data Analysis & Visualization",
    "Fullstack Development",
    "Agile Methodologies",
    "Team Leadership"
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming businesses through intelligent automation and data-driven solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Main Description */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a passionate technologist with expertise in <span className="text-primary font-semibold">Business Intelligence</span> and 
              <span className="text-secondary font-semibold"> Process Automation</span>. Currently working as a BI Analyst and Instructor, 
              I help organizations unlock the power of their data and streamline operations through intelligent automation.
            </p>
            
            <p className="text-lg leading-relaxed">
              With a strong background in fullstack development and data analysis, I bridge the gap between technical implementation 
              and business value, creating solutions that drive real impact.
            </p>

            {/* Key Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Caxias do Sul, Rio Grande do Sul, Brazil</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-secondary" />
                <span>MBA in Big Data & Competitive Intelligence</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-accent" />
                <span>Co-Founder at Google Developer Group Caxias do Sul</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <Card className="tech-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center hero-text">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="justify-center py-2 bg-muted hover:bg-primary/20 transition-colors"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-background/50 rounded-lg border border-border">
                <p className="text-sm text-center text-muted-foreground italic">
                  "Passionate about leveraging technology to drive business intelligence, 
                  process automation, and data-driven decision making."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};