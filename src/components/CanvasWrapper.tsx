'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment } from '@react-three/drei';
import HeroScene from './HeroScene';

export default function CanvasWrapper() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none">
            <Canvas shadows dpr={[1, 2]}>
                <Suspense fallback={null}>
                    <HeroScene />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
}
