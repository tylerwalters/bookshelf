import { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
}

function Page(props: PageProps) {
  const { children } = props;

  return <div className="flex-grow p-4">{children}</div>;
}

export default Page;
