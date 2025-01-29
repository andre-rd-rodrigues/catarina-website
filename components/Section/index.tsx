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
  return <section className={clsx('py-16', className)}>{children}</section>;
};

Section.Title = SectionTitle;

export default Section;
