import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress, Float } from "@react-three/drei";
import { Suspense } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, School } from "lucide-react";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

interface AcademicCardProps {
  title: string;
  institution: string;
  year: string;
  score: string;
  details: string;
  position: [number, number, number];
  delay: number;
}

function AcademicCard3D({ title, institution, year, score, details, position, delay }: AcademicCardProps) {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
      <Html transform position={position} distanceFactor={1.5}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay, duration: 0.6 }}
          className="w-[350px]"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-card border border-border p-6 rounded-2xl shadow-xl backdrop-blur-xl h-full">
              <div className="absolute -top-6 left-6 w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-foreground">{title}</h3>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">{year}</Badge>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm">
                  <School className="w-4 h-4" />
                  {institution}
                </div>

                <div className="bg-background/50 rounded-lg p-3 mb-4 border border-border">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Performance</div>
                  <div className="text-lg font-bold text-accent">{score}</div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {details}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Html>
    </Float>
  );
}

export function Academics() {
  const academics = [
    {
      title: "B.Tech in EEE",
      institution: "Indian Institute of Technology (IIT) Patna",
      year: "2022 - 2026",
      score: "CPI: 8.58",
      details: "Currently pursuing Bachelor of Technology. Hold 6th position in the department.",
      position: [-2.2, 0, 0]
    },
    {
      title: "Senior Secondary (12th)",
      institution: "M.P.S.M. Grace Convent Sr. Sec. School",
      year: "2022",
      score: "94.2%",
      details: "CBSE Board. Secured admission into IIT by qualifying JEE Mains & Advanced.",
      position: [0, 0.2, 0]
    },
    {
      title: "Secondary (10th)",
      institution: "M.P.S.M. Grace Convent Sr. Sec. School",
      year: "2020",
      score: "96.4%",
      details: "CBSE Board. Consistently maintained academic excellence.",
      position: [2.2, 0, 0]
    }
  ];

  return (
    <section id="academics" className="py-32 relative overflow-hidden">
       <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Academic <span className="text-gradient">Journey</span></h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <div className="lg:hidden flex flex-col gap-8 mt-10">
           {academics.map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.2 }}
             >
                <Card className="bg-card/50 border-border p-6 backdrop-blur-sm relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full" />
                   <div className="relative z-10">
                     <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                     <p className="text-primary text-sm mb-4">{item.institution}</p>
                     <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-muted-foreground">{item.year}</span>
                        <span className="font-bold text-accent">{item.score}</span>
                     </div>
                     <p className="text-sm text-muted-foreground">{item.details}</p>
                   </div>
                </Card>
             </motion.div>
           ))}
        </div>

        <div className="hidden lg:block h-[500px] w-full">
          <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={<Loader />}>
              <group position={[0, 0, 0]}>
                {academics.map((item, index) => (
                  // @ts-ignore
                  <AcademicCard3D 
                    key={index}
                    {...item}
                    position={item.position as [number, number, number]}
                    delay={index * 0.2}
                  />
                ))}
              </group>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
}
