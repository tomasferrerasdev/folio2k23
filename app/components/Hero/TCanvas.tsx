'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { FC, Suspense, useEffect, useState } from 'react';

import * as THREE from 'three';
import { Background } from './Background';

function ZoomIn() {
  const vec = new THREE.Vector3(0, 0, 1);
  return useFrame(({ camera }) => camera.position.lerp(vec, 1));
}

export const TCanvas: FC = () => {
  const [dpr, setDpr] = useState<number>(1);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDpr(window.devicePixelRatio);
    }
  }, []);
  return (
    <Canvas dpr={dpr}>
      <Suspense fallback={null}>
        <Background />
      </Suspense>
      <ZoomIn />
    </Canvas>
  );
};
