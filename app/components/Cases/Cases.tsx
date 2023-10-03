import { ICase } from '@/app/interfaces/interfaces';
import { FC } from 'react';
import { Case } from './Case';
import { SideNav } from './SideNav';

const arr: ICase[] = [
  {
    imageUrl: '/images/cases/maximum.png',
    url: '/maximum',
    tech: [
      'Next.js',
      'Node.js',
      'TypeScript',
      'MaterialUI',
      'MongoDB',
      'JWT',
      'NextAuth',
      'PaypalAPI',
      'Cloudinary',
    ],
    title: 'MAXIMUM THE HORMONE SHOP',
  },
  {
    imageUrl: '/images/cases/posty.png',
    url: '/posty',
    tech: ['Next.js', 'Node.js', 'TypeScript', 'TailwindCSS'],
    title: 'TRUCKS & BIDS',
  },
];
const secArr: ICase[] = [
  {
    imageUrl: '/images/cases/drible.png',
    url: '/drible',
    tech: ['Next.js', 'Node.js', 'TypeScript', 'shadcn/ui', 'Sanity.io'],
    title: 'DRIBLE PODCAST',
  },
  {
    imageUrl: '/images/cases/data-atmos.png',
    url: '/drible',
    tech: ['React Native', 'Expo', 'Strapi', 'MySQL'],
    title: 'DATA ATMOS',
  },
];

export const Cases: FC = () => {
  return (
    <section className="py-[248px] px-[91px] bg-white relative flex h-full">
      <div>
        <SideNav />
      </div>
      <div className="w-full flex flex-col justify-end ">
        <div className="w-full flex justify-end gap-[94px]">
          {arr.map(({ imageUrl, tech, title, url }, i) => (
            <div key={i} className={`${i % 2 !== 0 ? `mt-[100px]` : ``}`}>
              <Case imageUrl={imageUrl} tech={tech} title={title} url={url} />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-end gap-[94px]">
          {secArr.map(({ imageUrl, tech, title, url }, i) => (
            <div key={i} className={`${i % 2 !== 0 ? `mt-[100px]` : ``}`}>
              <Case imageUrl={imageUrl} tech={tech} title={title} url={url} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
