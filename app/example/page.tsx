'use client';
import { Canvas } from '@react-three/fiber';
import Experiences from '../components/Experience/Experiences';

export default function Home() {
  return (
    <Canvas
      flat
      style={{
        height: '100vh',
        position: 'relative',
      }}
    >
      <Experiences />
    </Canvas>
  );
}
