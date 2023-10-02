import Image from 'next/image';
import { FC } from 'react';
import { NavTime } from './navTime';

export interface NavProps {
  city: string;
}

export const Nav: FC<NavProps> = ({ city }) => {
  return (
    <nav className="mx-[16px] md:mx-[50px] flex items-center justify-between">
      <Image
        src={`/images/logo.svg`}
        alt="logo"
        width={61}
        height={61}
        priority
      />
      <div className="hidden md:flex">
        <NavTime city={city} />
      </div>
    </nav>
  );
};
