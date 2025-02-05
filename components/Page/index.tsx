import Title from './Title';

const Page = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen">{children}</div>;
};
Page.Title = Title;
export default Page;
