import clsx from 'clsx';
import SectionTitle from './Title';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> & { Title: typeof SectionTitle } = ({
  children,
  className,
}) => {
  return (
    <section className={clsx('py-10 sm:py-24', className)}>
      <div className="mx-auto max-w-7xl px-5">{children}</div>
    </section>
  );
};

Section.Title = SectionTitle;

export default Section;
