import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Send, ArrowRight, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

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
      border: "group-hover:border-blue-500/20"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7668751288",
      link: "tel:+917668751288",
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "group-hover:border-green-500/20"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mathura, Uttar Pradesh, India",
      link: "https://maps.google.com/?q=Mathura,Uttar+Pradesh,India",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "group-hover:border-purple-500/20"
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      
      {/* --- BACKGROUND DECOR (Cleaner & More Subtle) --- */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-50 dark:opacity-20" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none opacity-50 dark:opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE: Context & Links */}
          <div className="space-y-10">
            {/* Header */}
            <div>
              <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-widest text-[10px]">
                <MessageSquare className="w-3 h-3 mr-1 inline-block" />
                Get in Touch
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Let's Work <span className="text-primary">Together.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                I'm currently open to new opportunities and collaborations. Have a project in mind? Let's turn your idea into reality.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    flex items-center gap-5 p-4 rounded-xl
                    bg-card/50 border border-border/40 backdrop-blur-sm
                    hover:bg-card hover:shadow-sm hover:-translate-y-0.5
                    transition-all duration-300 group
                    ${item.border}
                  `}
                >
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center 
                    ${item.bg} ${item.color} 
                    transition-transform duration-300 group-hover:scale-105
                  `}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/70 mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                  <ArrowRight className="ml-auto w-4 h-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Modern Glass Form */}
          <div className="relative">
            <Card className="
              relative overflow-hidden
              border border-border/40 
              bg-background/40 backdrop-blur-md
              shadow-xl shadow-black/5
            ">
              <div className="p-8 md:p-10">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="
                          h-11 bg-background/50 border-border/50
                          focus:bg-background focus:border-primary/50 focus:ring-2 focus:ring-primary/10 
                          transition-all duration-300 rounded-lg placeholder:text-muted-foreground/40
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
                          h-11 bg-background/50 border-border/50
                          focus:bg-background focus:border-primary/50 focus:ring-2 focus:ring-primary/10 
                          transition-all duration-300 rounded-lg placeholder:text-muted-foreground/40
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
                        h-11 bg-background/50 border-border/50
                        focus:bg-background focus:border-primary/50 focus:ring-2 focus:ring-primary/10 
                        transition-all duration-300 rounded-lg placeholder:text-muted-foreground/40
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
                        min-h-[150px] bg-background/50 border-border/50
                        focus:bg-background focus:border-primary/50 focus:ring-2 focus:ring-primary/10 
                        resize-none transition-all duration-300 rounded-lg placeholder:text-muted-foreground/40
                      "
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="
                      w-full h-12 mt-2 cursor-pointer
                      bg-primary hover:bg-primary/90 text-primary-foreground 
                      font-medium text-sm rounded-lg
                      shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5
                      transition-all duration-300
                    "
                  >
                    {contactMutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}