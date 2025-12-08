import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Download, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text, Box } from "@react-three/drei";
import { Suspense, useState, useEffect, useRef } from "react";
import * as THREE from "three";

function CodeScreen() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.05;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, -0.3, 0]}>
      <Box args={[0.5, 2, 0.2]} position={[0, -1.5, 0]} material-color="#334155" />
      <Box args={[2, 0.1, 1.5]} position={[0, -2.5, 0.5]} material-color="#334155" />
      <Box args={[4.2, 2.8, 0.2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1e293b" roughness={0.5} metalness={0.8} />
      </Box>
      <Box args={[4, 2.6, 0.05]} position={[0, 0, 0.1]}>
        <meshStandardMaterial color="#0f172a" emissive="#06b6d4" emissiveIntensity={0.05} roughness={0.2} />
      </Box>
      <group position={[-1.8, 1, 0.15]}>
        <Text
          color="#22d3ee"
          fontSize={0.15}
          anchorX="left"
          anchorY="top"
          font="https://fonts.gstatic.com/s/firacode/v21/uU9eCBsR6Z2vfE9aq3bL0f3Q.woff"
        >
          {`const Developer = {\n  name: "Chetan Sharma",\n  skills: ["React", "Node", "AWS"],\n  passion: "Building Cool Stuff",\n  hardWorker: true\n};`}
        </Text>
        <Text
          color="#94a3b8"
          fontSize={0.12}
          position={[0, -1.2, 0]}
          anchorX="left"
          anchorY="top"
        >
          {`// Ready to deploy...`}
        </Text>
      </group>
    </group>
  );
}

function Hero3DElement() {
  return (
    <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#06b6d4" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#3b82f6" />
      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <CodeScreen />
        </Float>
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

type TypewriterProps = {
  texts: string[];
  speed?: number;        // typing speed
  deleteSpeed?: number; // deleting speed
  pauseTime?: number;   // pause after word completes
};

const TypewriterText = ({
  texts,
  speed = 40,          // ✅ FAST default typing
  deleteSpeed = 30,    // ✅ FAST delete
  pauseTime = 400,     // ✅ short pause
}: TypewriterProps) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Cursor Blink
  useEffect(() => {
    const timeout2 = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timeout2);
  }, []);

  // Typing Logic
  useEffect(() => {
    // When word is fully typed → pause then start deleting
    if (subIndex === texts[index].length && !reverse) {
      setTimeout(() => setReverse(true), pauseTime);
      return;
    }

    // When word is fully deleted → move to next word
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
      {texts[index].substring(0, subIndex)}
      <span
        className={`text-primary ml-1 ${blink ? "opacity-100" : "opacity-0"}`}
      >
        |
      </span>
    </span>
  );
};

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] mb-6 text-foreground">
              Hi, I'm Chetan <br />
              <span className="text-4xl md:text-5xl block mt-2">
                <TypewriterText texts={["Software Engineer", "Developer", "Problem Solver", "Tech Enthusiast"] } />
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              A passionate Software Developer specializing in building scalable web applications and clean, efficient solutions. I love turning ideas into real, impactful products through code.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Mathura, Uttar Pradesh, India
              </div>
            </div>

            <div className="flex flex-wrap gap-5">
              <Button size="lg" className="h-14 rounded-full bg-primary cursor-pointer text-primary-foreground hover:bg-primary/90 px-8 font-medium text-lg transition-all hover:scale-105 shadow-lg shadow-primary/25">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button size="lg" variant="outline" className="h-14 rounded-full border-border hover:bg-accent/10 text-foreground px-8 font-medium text-lg transition-all hover:scale-105" asChild>
                <a href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-5 w-5" /> Resume
                </a>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/ChetanSharma76" },
                { icon: Linkedin, href: "https://linkedin.com/in/chetan-sharma-70ba70270" },
                { icon: Mail, href: "mailto:chetansharma752005@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3 rounded-full bg-background/50 hover:bg-primary hover:text-primary-foreground transition-all border border-border hover:border-primary text-muted-foreground hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <div className="relative h-[600px] w-full flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <Hero3DElement />
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="
                absolute bottom-50 
                left-1/2 -translate-x-1/2     
                sm:left-auto sm:right-5 sm:translate-x-0 
                md:right-10 
                z-10"
            >
               <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative w-[220px] h-[280px] rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20 bg-card/40 backdrop-blur-sm transform rotate-[-5deg] hover:rotate-0 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40">
                    <img 
                      src="/profile-photo-3.png" 
                      alt="Chetan Sharma" 
                      className="w-full h-full object-cover bg-gradient-to-b from-transparent to-black/10 brightness-110"
                      data-testid="img-hero-profile"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div 
            className="w-1 h-1 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
