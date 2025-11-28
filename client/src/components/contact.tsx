import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Let's Work <br/><span className="text-gradient">Together</span></h2>
            <p className="text-muted-foreground text-lg mb-12">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Email</h4>
                  <a href="mailto:chetansharma752005@gmail.com" className="text-lg font-medium hover:text-primary transition-colors text-foreground">chetansharma752005@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Phone</h4>
                  <p className="text-lg font-medium text-foreground">+91 7668751288</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Location</h4>
                  <p className="text-lg font-medium text-foreground">Mathura, UP, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-card/50 border-border backdrop-blur-md">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Name</label>
                      <Input placeholder="John Doe" className="bg-background/50 border-border focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <Input placeholder="john@example.com" type="email" className="bg-background/50 border-border focus:border-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input placeholder="Project collaboration" className="bg-background/50 border-border focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea placeholder="Tell me about your project..." className="min-h-[150px] bg-background/50 border-border focus:border-primary" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
