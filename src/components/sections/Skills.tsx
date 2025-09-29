import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Database, 
  Code, 
  BarChart3, 
  Bot, 
  Cloud, 
  Wrench 
} from "lucide-react";

const skillCategories = [
  {
    title: "Business Intelligence",
    icon: BarChart3,
    color: "text-tech-blue",
    skills: [
      { name: "QlikSense", level: 90 },
      { name: "Qlik Sense", level: 85 },
      { name: "SQL", level: 90 },
      { name: "Data Analysis", level: 95 },
      { name: "Dashboard Development", level: 90 }
    ]
  },
  {
    title: "Programming Languages",
    icon: Code,
    color: "text-tech-purple",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "VBA", level: 80 },
      { name: "SQL", level: 90 }
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: Database,
    color: "text-tech-green",
    skills: [
      { name: "Angular", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "AdonisJS", level: 75 },
      { name: "Express", level: 80 },
      { name: "Flutter", level: 70 }
    ]
  },
  {
    title: "Automation & RPA",
    icon: Bot,
    color: "text-tech-orange",
    skills: [
      { name: "UiPath", level: 85 },
      { name: "Python Automation", level: 90 },
      { name: "Power Automate", level: 80 },
      { name: "Process Optimization", level: 85 }
    ]
  },
  {
    title: "Cloud & Platforms",
    icon: Cloud,
    color: "text-primary",
    skills: [
      { name: "Power Platform", level: 85 },
      { name: "Power Apps", level: 80 },
      { name: "Azure", level: 70 },
      { name: "Git", level: 85 }
    ]
  },
  {
    title: "Tools & Methodologies",
    icon: Wrench,
    color: "text-secondary",
    skills: [
      { name: "Agile/Scrum", level: 90 },
      { name: "Data Visualization", level: 90 },
      { name: "REST APIs", level: 85 },
      { name: "System Integration", level: 80 }
    ]
  }
];

const certifications = [
  "MBA in Big Data & Competitive Intelligence",
  "Systems Analysis and Development",
  "Google Developer Group Co-Founder",
  "Robotics Research Scholar"
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across Business Intelligence, Development, and Automation
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="tech-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <Card className="tech-card">
            <CardHeader>
              <CardTitle className="text-center text-2xl hero-text">
                Education & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="justify-center py-3 text-center border-primary/20 hover:bg-primary/10 transition-colors"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-muted-foreground">
                  Continuously learning and staying updated with the latest technologies and methodologies 
                  in Business Intelligence, Data Science, and Software Development.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};