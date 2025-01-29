const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-7xl overflow-hidden px-5">{children}</div>
  );
};

export default Page;
