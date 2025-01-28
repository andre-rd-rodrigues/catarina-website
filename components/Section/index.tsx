import clsx from 'clsx';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={clsx('mx-auto my-16 max-w-7xl px-5', className)}>
      {children}
    </section>
  );
};

export default Section;
