import { motion } from "framer-motion";
import { Users, Mic, Clock, Lightbulb } from "lucide-react";

export function SoftSkills() {
  const skills = [
    {
      title: "Leadership",
      desc: "Led campus events and social initiatives as NSS volunteer.",
      icon: Users
    },
    {
      title: "Communication",
      desc: "Effective collaboration in remote teams and mentorship roles.",
      icon: Mic
    },
    {
      title: "Time Management",
      desc: "Balanced rigorous academics with competitive programming streaks.",
      icon: Clock
    },
    {
      title: "Problem Solving",
      desc: "Analytical approach honed through 500+ algorithmic problems.",
      icon: Lightbulb
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Soft <span className="text-gradient">Skills</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Beyond code, I bring essential interpersonal and management skills to every project. 
              My experience in community service and leadership roles has shaped me into a 
              well-rounded professional.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/50 border border-border p-6 rounded-xl hover:bg-accent/5 transition-colors shadow-sm"
              >
                <skill.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
