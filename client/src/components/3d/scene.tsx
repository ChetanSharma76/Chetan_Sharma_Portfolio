import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2.4}>
        <MeshDistortMaterial
          color="#7c3aed" // Violet base
          attach="material"
          distort={0.5} // Strength, 0 disables distort (default: 1)
          speed={1.5} // Speed (default: 1)
          roughness={0.2}
          metalness={0.8}
          emissive="#4c1d95" // Deep purple glow
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
}

function FloatingParticles() {
  const count = 100;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ec4899" // Pink particles
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-full absolute inset-0 z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={2} color="#a855f7" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#ec4899" />
        
        <AnimatedSphere />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={true} 
          autoRotateSpeed={0.5} 
        />
      </Canvas>
    </div>
  );
}
