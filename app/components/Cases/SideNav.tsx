import { FC } from 'react';

const arr = [
  'ALL',
  null,
  null,
  null,
  'FRONTEND',
  null,
  null,
  null,
  'FULLSTACK',
  null,
  null,
  null,
  'LAB',
];

export const SideNav: FC = () => {
  return (
    <nav className="w-full max-w-[120px] h-full">
      <div className="sticky top-1/4">
        {arr.map((label, i) =>
          i % 4 === 0 ? (
            <div key={i} className="flex items-center gap-4">
              <hr
                className={`h-px ${
                  i % 4 === 0 ? `w-3` : `w-1`
                } my-[4px] bg-black border-0 dark:bg-gray-700`}
              />

              <p>{label}</p>
            </div>
          ) : (
            <div key={i} className="flex items-center gap-6">
              <hr
                className={`h-px ${
                  i % 4 === 0 ? `w-3` : `w-1`
                } my-[6px] bg-black border-0 dark:bg-gray-700`}
              />
            </div>
          )
        )}
      </div>
    </nav>
  );
};
