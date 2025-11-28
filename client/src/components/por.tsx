import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function Por() {
  const positions = [
    {
      role: "Sub-Coordinator",
      org: "Celesta Technical Fest, IIT Patna",
      desc: "Managed logistics and operations for the annual technical festival."
    },
    {
      role: "Volunteer",
      org: "National Service Scheme (NSS)",
      desc: "Contributed 80+ hours to community service projects and social initiatives."
    },
    {
      role: "House Coordinator",
      org: "High School",
      desc: "Led student house activities and coordinated inter-house competitions."
    }
  ];

  return (
    <section className="py-24 bg-card/30 border-y border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Positions of <span className="text-gradient">Responsibility</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {positions.map((pos, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-background border border-white/10 p-8 rounded-xl h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{pos.role}</h3>
                <p className="text-accent font-medium mb-4 text-sm">{pos.org}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pos.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
