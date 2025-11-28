import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Sparkles() {
  const points = useRef<THREE.Points>(null);
  const particleCount = 80;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 50;
      pos[i + 1] = (Math.random() - 0.5) * 50;
      pos[i + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  const velocities = useMemo(() => {
    const vel = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      vel[i] = (Math.random() - 0.5) * 0.05;
      vel[i + 1] = (Math.random() - 0.5) * 0.05;
      vel[i + 2] = (Math.random() - 0.5) * 0.05;
    }
    return vel;
  }, []);

  useFrame(() => {
    if (!points.current) return;

    const posArray = (points.current.geometry.attributes.position.array as Float32Array);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] += velocities[i];
      posArray[i + 1] += velocities[i + 1];
      posArray[i + 2] += velocities[i + 2];

      // Wrap around boundaries
      if (posArray[i] > 25) posArray[i] = -25;
      if (posArray[i] < -25) posArray[i] = 25;
      if (posArray[i + 1] > 25) posArray[i + 1] = -25;
      if (posArray[i + 1] < -25) posArray[i + 1] = 25;
      if (posArray[i + 2] > 25) posArray[i + 2] = -25;
      if (posArray[i + 2] < -25) posArray[i + 2] = 25;
    }

    (points.current.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#00d9ff"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d9ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#a855f7" />
        <Sparkles />
      </Canvas>
    </div>
  );
}
