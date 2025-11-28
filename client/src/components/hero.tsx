import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Download, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import { Suspense } from "react";

function Hero3DElement() {
  return (
    <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={2} color="#a855f7" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#ec4899" />
      
      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <Sphere args={[1, 64, 64]} scale={2} position={[1.5, 0, 0]}>
            <MeshDistortMaterial
              color="#7c3aed"
              attach="material"
              distort={0.4}
              speed={1.5}
              roughness={0.2}
              metalness={0.8}
              emissive="#4c1d95"
              emissiveIntensity={0.2}
              wireframe={false}
            />
          </Sphere>
        </Float>
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0 opacity-60 md:opacity-100">
         <Hero3DElement />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-white tracking-widest uppercase">Available for Hire</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] mb-6">
              Chetan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Sharma</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white font-medium mb-4">
              Full Stack Developer & Design Engineer
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Turning complex problems into elegant, pixel-perfect solutions. 
              Specializing in MERN stack and creating immersive web experiences.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Mathura, UP, India
              </div>
            </div>

            <div className="flex flex-wrap gap-5">
              <Button size="lg" className="h-14 rounded-full bg-white text-black hover:bg-gray-200 px-8 font-medium text-lg transition-all hover:scale-105">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button size="lg" variant="outline" className="h-14 rounded-full border-white/20 hover:bg-white/10 text-white px-8 font-medium text-lg transition-all hover:scale-105" asChild>
                <a href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-5 w-5" /> Resume
                </a>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/ChetanSharma76" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Mail, href: "mailto:chetansharma752005@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-all border border-white/10 hover:border-primary text-muted-foreground"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Photo / 3D Space */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center perspective-1000"
          >
            {/* Placeholder for Photo - User can replace the src */}
            <div className="relative w-[400px] h-[500px] rounded-[40px] overflow-hidden border-4 border-white/10 shadow-2xl shadow-primary/20 group transform transition-transform hover:rotate-y-12 duration-500 bg-card/50 backdrop-blur-sm">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              
              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white">Chetan Sharma</h3>
                <p className="text-primary font-medium">IIT Patna '26</p>
              </div>

              {/* Image Placeholder - Replace this URL with your actual photo */}
              <div className="w-full h-full bg-gray-800 flex items-center justify-center text-muted-foreground">
                 {/* User can paste their photo here */}
                 <div className="text-center p-6">
                    <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4">
                      <User className="w-10 h-10 text-white/50" />
                    </div>
                    <p>Paste Your Photo Here</p>
                    <p className="text-xs mt-2 opacity-50">(Replace div with img tag)</p>
                 </div>
              </div>
            </div>

            {/* Decorative Floating Elements behind photo */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <motion.div 
            className="w-1 h-1 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
