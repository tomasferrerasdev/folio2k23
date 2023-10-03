import Image from 'next/image';
import { FC } from 'react';
import { NavProps } from '../interfaces/interfaces';
import { NavTime } from './navTime';

export const Nav: FC<NavProps> = ({ city }) => {
  return (
    <nav className="px-[16px] md:px-[50px] flex items-center justify-between absolute z-10 w-full">
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
