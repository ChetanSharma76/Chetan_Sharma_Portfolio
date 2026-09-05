import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Float,
  Stars,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/* -------------------- SPHERE -------------------- */
function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!sphereRef.current) return;

    sphereRef.current.rotation.x += delta * 0.15;
    sphereRef.current.rotation.y += delta * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <Sphere args={[1, 96, 96]} scale={2.3}>
        <MeshDistortMaterial
          color="#7c3aed"
          distort={0.35}
          speed={1}
          roughness={0.35}
          metalness={0.4}
          emissive="#5b21b6"
          emissiveIntensity={0.35}
        />
      </Sphere>
    </Float>
  );
}

/* -------------------- SCENE -------------------- */
export default function Scene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.45} />
        <directionalLight
          position={[4, 6, 4]}
          intensity={1.4}
          color="#c084fc"
        />
        <pointLight
          position={[-6, -6, -6]}
          intensity={0.8}
          color="#ec4899"
        />

        {/* Core */}
        <AnimatedSphere />

        {/* Background */}
        <Stars
          radius={80}
          depth={40}
          count={3000}
          factor={3}
          saturation={0}
          fade
          speed={0.5}
        />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.35}
        />
      </Canvas>
    </div>
  );
}
