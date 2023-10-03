import { ICase } from '@/app/interfaces/interfaces';
import Image from 'next/image';
import { FC } from 'react';

export const Case: FC<ICase> = ({ imageUrl, tech, title, url }) => {
  return (
    <a href={url} className="flex flex-col gap-9">
      <div className="h-[84vh] w-[34vw] relative mt-[110px]">
        <Image
          src={imageUrl}
          alt={`of ${title}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-3">
        <hr className={`h-px w-full bg-black border-0 dark:bg-gray-700`} />
        <div className="flex flex-wrap gap-x-1 max-w-[30vw]">
          {tech.map((tech, index) => (
            <span className="text-grey text-base" key={index}>
              {index === 0 ? `` : `/ `}
              {tech}
            </span>
          ))}
        </div>
        <p className="text-4xl">{title}</p>
      </div>
    </a>
  );
};
