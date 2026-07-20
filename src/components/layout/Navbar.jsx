import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../../data/content';
import { Terminal } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl transition-all duration-500">
      <nav className={`
        glass-panel rounded-full px-6 py-3 flex items-center justify-between
        ${isScrolled ? 'border-brand-cyan/50 shadow-[0_0_20px_rgba(0,255,209,0.15)]' : 'border-white/10'}
      `}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Terminal className="w-5 h-5 text-brand-cyan group-hover:animate-pulse" />
          <span className="text-xl font-display font-bold tracking-widest text-white uppercase text-glow">
            Vexig<span className="text-brand-cyan">_</span>
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link 
                key={item.name} 
                to={item.href}
                className={`text-sm font-mono tracking-wider transition-all duration-300 uppercase ${
                  isActive 
                    ? 'text-brand-cyan text-glow' 
                    : 'text-white/70 hover:text-brand-cyan'
                }`}
              >
                {isActive && <span className="text-brand-cyan mr-1">{'>'}</span>}
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button - simple version for now */}
        <div className="md:hidden">
          <button className="text-brand-cyan">
            <span className="font-mono text-xl">{'≡'}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
