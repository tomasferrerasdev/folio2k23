'use client';

import { NavProps } from '@/app/interfaces/interfaces';
import { motion, useSpring } from 'framer-motion';
import Image from 'next/image';
import { FC, MouseEventHandler } from 'react';
import { About } from '../About';
import { TCanvas } from '../TCanvas';
import { Nav } from '../nav';

export const Hero: FC<NavProps> = ({ city }) => {
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const mouseMove: MouseEventHandler<HTMLElement> = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 0.25;
    const targetY = clientY - (window.innerWidth / 2) * 0.3;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  const { x, y } = mousePosition;

  return (
    <section
      className="relative w-full h-[100vh] text-white cursor-none"
      onMouseMove={mouseMove}
    >
      <Nav city={city} />
      <TCanvas />
      <motion.div
        className="h-[30vw] w-[24vw] fixed top-0 overflow-hidden pointer-events-none"
        style={{ x, y }}
      >
        <Image
          src={`/images/me.png`}
          alt="of tomas ferreras"
          width={548}
          height={720}
          className="select-none"
        />
      </motion.div>
      <About />
    </section>
  );
};
