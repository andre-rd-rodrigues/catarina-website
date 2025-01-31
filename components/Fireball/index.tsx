import clsx from 'clsx';
import React from 'react';

type Props = {
  className?: string;
};

function Fireball({ className }: Props) {
  return (
    <div
      className={clsx(
        'h-10 w-10 rounded-full bg-[#fbf7ec] shadow-[0px_0px_60px_30px_#ffffff,0px_0px_100px_60px_#ff9d00,0px_0px_140px_90px_#f8ae37]',
        'animate-[fireballPulse_4s_infinite]',
        className,
      )}
    />
  );
}

export default Fireball;
