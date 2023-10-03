'use client';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import { Cases } from './components/Cases/Cases';
import { Hero } from './components/Hero/Hero';

interface Props {
  searchParams: {
    country: string;
    city: string;
  };
}

export default function Home({ searchParams }: Props) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const { city } = searchParams;

  return (
    <main>
      <Hero city={city} />
      <Cases />
    </main>
  );
}
