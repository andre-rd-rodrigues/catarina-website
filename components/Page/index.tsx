import clsx from 'clsx';
import Title from './Title';

const Page = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main data-testid="page" className={clsx('min-h-screen', className)}>
      {children}
    </main>
  );
};
Page.Title = Title;
export default Page;
