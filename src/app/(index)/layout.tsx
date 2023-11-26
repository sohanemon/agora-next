import { GoToTop } from '@/components/goto-top';

interface IndexLayoutProps {
  children: React.ReactNode;
}

export default function IndexLayout({ children }: IndexLayoutProps) {
  return (
    <>
      {children}
      <GoToTop />
    </>
  );
}
