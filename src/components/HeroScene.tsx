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
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />

      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffb7b2" />
      <spotLight
        position={[-5, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        color="#c7ceea"
        castShadow
      />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <sphereGeometry args={[1.8, 64, 64]} />
          <MeshDistortMaterial
            color="#dd95fc"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.1}
            transmission={0.5}
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
          <torusGeometry args={[0.3, 0.1, 16, 32]} />
          <meshStandardMaterial color="#c7ceea" transparent opacity={0.8} />
        </mesh>
      </group>

      <Stars
        radius={100}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </>
  );
}
