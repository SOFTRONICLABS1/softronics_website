import { type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main style={{ paddingTop: '64px' }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;