import React from 'react';

interface TitleProps {
  src: string;
  title: string;
  subtitle?: string;
}

const Title: React.FC<TitleProps> = ({ src, title, subtitle }) => {
  return (
    <div
      className="relative flex justify-center md:justify-start items-center px-5 sm:px-28 h-64 w-full bg-center bg-cover"
      style={{ backgroundImage: `url(${src})` }}
    >
      {/* Dark overlay for text contrast (optional) */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />

      {/* Text Container */}
      <div className="relative z-10 text-white">
        <h1 className="text-4xl md:text-5xl mt-5">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-white/50 text-sm md:text-base opacity-90">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default Title;
