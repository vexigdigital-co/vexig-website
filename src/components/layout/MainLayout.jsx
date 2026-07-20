import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col relative bg-black selection:bg-brand-cyan selection:text-black">
      {/* Deep space / Cyberpunk ambient background elements */}
      <div className="fixed top-0 left-1/4 w-[1000px] h-[500px] bg-brand-cyan/5 blur-[200px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-[800px] h-[800px] bg-brand-cyan/5 blur-[200px] rounded-full pointer-events-none -z-10" />
      
      <Navbar />
      <main className="flex-grow pt-24 relative z-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
