import clsx from 'clsx';
import React from 'react';

type Props = {
  className?: string;
};

function GlowEffect({ className }: Props) {
  return (
    <>
      <div
        className={clsx(
          'animate-grow absolute left-1/2 top-1/2 h-10 w-10 rounded-full bg-[#e8f5f1] shadow-[0_0_40px_20px_#a8d5c4,0_0_80px_40px_#a8d5c488,0_0_120px_60px_#a8d5c433] blur-3xl',
          className,
        )}
      />
      <style jsx>{`
        @keyframes grow {
          0% {
            box-shadow: 0 0 20px 10px #a8d5c4, 0 0 40px 20px #a8d5c488,
              0 0 60px 30px #a8d5c433;
            transform: scale(0);
          }
          100% {
            box-shadow: 0 0 80px 40px #a8d5c4, 0 0 120px 60px #a8d5c488,
              0 0 160px 80px #a8d5c433;
            transform: scale(2);
          }
        }
        :global(.animate-grow) {
          animation: grow 5s ease-out forwards;
        }
      `}</style>
    </>
  );
}

export default GlowEffect;
