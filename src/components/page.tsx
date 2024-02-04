import { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
}

function Page(props: PageProps) {
  const { children } = props;

  return <div className="flex flex-grow p-4 prose">{children}</div>;
}

export default Page;
