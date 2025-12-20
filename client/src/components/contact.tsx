import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Send, ArrowRight, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to send message");
      return result;
    },
    onSuccess: (data) => {
      toast({ title: "Message Sent!", description: data.message });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: Error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "chetansharma752005@gmail.com",
      link: "mailto:chetansharma752005@gmail.com",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7668751288",
      link: "tel:+917668751288",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mathura, Uttar Pradesh, India",
      link: "https://maps.google.com/?q=Mathura,Uttar+Pradesh",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE: Info & Context */}
          <div className="space-y-10">
            {/* Header */}
            <ScrollReveal>
              <div>
                <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-widest text-[10px]">
                  <MessageSquare className="w-3 h-3 mr-1 inline-block" />
                  Get in Touch
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Let's Work <span className="text-primary">Together.</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  I'm currently looking for new opportunities. Whether you have a project in mind or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>
            </ScrollReveal>

            {/* Interactive Contact Cards */}
            <StaggerContainer className="grid gap-5">
              {contactInfo.map((item, index) => (
                <StaggerItem key={index}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-5 p-5 rounded-2xl 
                      bg-card/40 border border-border/50 backdrop-blur-sm
                      hover:bg-card/80 hover:border-primary/20 hover:shadow-lg
                      transition-all duration-300 group
                    "
                  >
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center 
                      ${item.bg} ${item.color} 
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                    <ArrowRight className="ml-auto w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* RIGHT SIDE: The Form */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-3xl blur-2xl -z-10" />
              
              <Card className="border-border/50 bg-card/60 backdrop-blur-xl shadow-2xl">
                <CardContent className="p-8 md:p-10">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="
                            h-12 bg-secondary/30 border-transparent 
                            focus:bg-background focus:border-primary focus:ring-1 focus:ring-primary/20 
                            transition-all duration-300 rounded-xl
                          "
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">Email</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="
                            h-12 bg-secondary/30 border-transparent 
                            focus:bg-background focus:border-primary focus:ring-1 focus:ring-primary/20 
                            transition-all duration-300 rounded-xl
                          "
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Collaboration"
                        className="
                          h-12 bg-secondary/30 border-transparent 
                          focus:bg-background focus:border-primary focus:ring-1 focus:ring-primary/20 
                          transition-all duration-300 rounded-xl
                        "
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        className="
                          min-h-[160px] bg-secondary/30 border-transparent 
                          focus:bg-background focus:border-primary focus:ring-1 focus:ring-primary/20 
                          resize-none transition-all duration-300 rounded-xl
                        "
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="
                        w-full h-14 cursor-pointer text-lg font-medium rounded-xl 
                        bg-primary hover:bg-primary/90 text-primary-foreground 
                        shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] active:scale-[0.98]
                      "
                    >
                      {contactMutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}