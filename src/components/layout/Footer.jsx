import { Link } from 'react-router-dom';
import { navigation, services, siteConfig } from '../../data/content';
import { Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10 opacity-30" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <Terminal className="w-6 h-6 text-brand-cyan group-hover:animate-pulse" />
              <span className="text-2xl font-display font-bold tracking-widest uppercase text-glow">
                Vexig<span className="text-brand-cyan">_</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-mono">
              [ SYSTEM_STATUS: ONLINE ]<br/>
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-6 uppercase tracking-wider">Nav_Sys</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/60 hover:text-brand-cyan transition-colors text-sm font-mono uppercase flex items-center gap-2">
                    <span className="text-brand-cyan opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0">{'>'}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-6 uppercase tracking-wider">Protocols</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.id}>
                  <Link to={item.href} className="text-white/60 hover:text-brand-cyan transition-colors text-sm font-mono uppercase">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-6 uppercase tracking-wider">Comm_Link</h4>
            <ul className="space-y-3 text-sm text-white/60 font-mono">
              <li className="hover:text-brand-cyan cursor-pointer transition-colors">ERR:// {siteConfig.contact.email}</li>
              <li className="hover:text-brand-cyan cursor-pointer transition-colors">TLM:// {siteConfig.contact.phone}</li>
              <li className="text-balance pt-2 border-t border-white/10 mt-4">{siteConfig.contact.address}</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. SYSTEM.ALL_RIGHTS_RESERVED
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-brand-cyan transition-colors">SEC_POLICY</Link>
            <Link to="#" className="hover:text-brand-cyan transition-colors">TERMS_OF_ENGAGEMENT</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
