'use client';
import { FC, useEffect, useState } from 'react';
import { NavProps } from '../interfaces/interfaces';

export const NavTime: FC<NavProps> = ({ city }) => {
  const [currentTime, setCurrentTime] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      hours %= 12;
      hours = hours || 12;

      const formattedTime = `${String(hours).padStart(2, '0')}:${String(
        minutes
      ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}${ampm}`;
      setCurrentTime(formattedTime);
      hours >= 12
        ? setMessage('too early, take a coffee')
        : setMessage('working late?');
    };

    const intervalId = setInterval(updateCurrentTime, 1000);
    updateCurrentTime();
    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="text-xl" suppressHydrationWarning>
      {currentTime} in {city} - {message}
    </p>
  );
};
