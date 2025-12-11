"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  MeshDistortMaterial,
  Float,
  Stars,
} from "@react-three/drei";
import * as THREE from "three";

export default function HeroScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.2;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.05;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 3, 3]} intensity={0.8} />

      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          {/* turunin segment biar ga brutal */}
          <sphereGeometry args={[1.8, 32, 32]} />
          <MeshDistortMaterial
            color="#dd95fc"
            distort={0.35}
            speed={1.2}
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>
      </Float>

      <group ref={groupRef} position={[0, 0, 0]}>
        <mesh position={[3, 1, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#ffb7b2" transparent opacity={0.8} />
        </mesh>

        <mesh position={[-2.5, -1.5, 1.5]}>
          <tetrahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#e2f0cb" transparent opacity={0.8} />
        </mesh>

        <mesh position={[0, 2.5, -1]}>
          {/* turunin segment */}
          <torusGeometry args={[0.3, 0.1, 8, 16]} />
          <meshStandardMaterial color="#c7ceea" transparent opacity={0.8} />
        </mesh>
      </group>

      <Stars radius={80} depth={30} count={300} factor={3} fade speed={0.5} />
    </>
  );
}
