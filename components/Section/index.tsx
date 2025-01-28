import clsx from 'clsx';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section
      className={clsx(
        'mx-auto max-w-7xl overflow-hidden px-5 py-16',
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Section;
