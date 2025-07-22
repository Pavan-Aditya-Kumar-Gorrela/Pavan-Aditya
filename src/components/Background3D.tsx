import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#3B82F6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
        transparent
        opacity={0.1}
      />
    </Sphere>
  );
};

const FloatingConcepts: React.FC = () => {
  const concepts = ['Neural Network', 'Deep Learning', 'Machine Learning', 'AI', 'Data Science'];
  
  return (
    <>
      {concepts.map((concept, i) => (
        <FloatingText key={concept} text={concept} position={[
          Math.cos(i * 1.2) * 3,
          Math.sin(i * 1.5) * 2,
          Math.sin(i * 0.8) * 1
        ]} />
      ))}
    </>
  );
};

const FloatingText: React.FC<{ text: string; position: [number, number, number] }> = ({ text, position }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[2, 0.5]} />
      <meshBasicMaterial color="#8B5CF6" transparent opacity={0.05} />
    </mesh>
  );
};

const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
        <FloatingConcepts />
      </Canvas>
    </div>
  );
};

export default Background3D;