import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
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
      iconBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7668751288",
      link: "tel:+917668751288",
      iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mathura, Uttar Pradesh, India",
      link: "https://maps.google.com/?q=Mathura,Uttar+Pradesh,India",
      iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/6 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[110px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left */}
          <div className="space-y-10">
            <div>
              <span className="section-badge">
                <MessageSquare className="w-3 h-3" /> Get in Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-5">
                Let's Work <span className="text-gradient">Together.</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                I'm currently open to new opportunities and collaborations. Have a project in mind? Let's turn your idea into reality.
              </p>
            </div>

            {/* Contact cards */}
            <div className="grid gap-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-border/50 backdrop-blur-xl hover:border-primary/25 hover:shadow-lg hover:shadow-primary/8 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.iconBg} transition-transform duration-300 group-hover:scale-110 shrink-0`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-0.5">{item.title}</h4>
                    <p className="text-sm font-medium text-foreground truncate">{item.value}</p>
                  </div>
                  <ArrowRight className="ml-auto w-4 h-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative">
            <Card className="relative overflow-hidden rounded-2xl border border-border/50 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl shadow-xl shadow-black/5">
              <div className="p-8 md:p-10">
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="h-11 rounded-xl bg-background/50 border-border/50 focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-muted-foreground/30"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="h-11 rounded-xl bg-background/50 border-border/50 focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-muted-foreground/30"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration"
                      className="h-11 rounded-xl bg-background/50 border-border/50 focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-muted-foreground/30"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="min-h-[140px] rounded-xl bg-background/50 border-border/50 focus:border-primary/40 focus:ring-2 focus:ring-primary/10 resize-none transition-all placeholder:text-muted-foreground/30"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full h-12 cursor-pointer bg-primary hover:bg-primary/90 text-white font-semibold text-sm rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {contactMutation.isPending ? "Sending..." : <><Send className="mr-2 w-4 h-4" /> Send Message</>}
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
