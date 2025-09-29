import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin, 
  Github, 
  Send,
  MessageCircle 
} from "lucide-react";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how I can help transform your business with intelligent solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="tech-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  Let's Talk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and ways to leverage technology for business growth. Whether you need Business Intelligence solutions, 
                  process automation, or full-stack development, let's connect!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <a 
                      href="mailto:coimbrawebs@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      coimbrawebs@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">+55 (54) 99170-7996</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Caxias do Sul, Rio Grande do Sul, Brazil</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="tech-card">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  <Button 
                    variant="outline" 
                    className="justify-start gap-3 h-12"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/coimbrawebs/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-blue-600" />
                      LinkedIn Profile
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="justify-start gap-3 h-12"
                    asChild
                  >
                    <a href="https://github.com/coimbrox" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      GitHub Profile
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="justify-start gap-3 h-12"
                    asChild
                  >
                    <a href="mailto:coimbrawebs@gmail.com">
                      <Mail className="h-5 w-5 text-red-500" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="tech-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Send className="h-6 w-6 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="bg-background border-border"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="bg-background border-border"
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?" 
                    className="bg-background border-border"
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or how I can help..."
                    className="bg-background border-border min-h-[120px]"
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};