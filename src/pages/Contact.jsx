import { useState } from 'react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../data/content';
import { Terminal, ShieldAlert } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      // Connect to FastAPI backend
      const res = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Section className="pt-32 pb-20">
      <SectionHeader 
        title="Establish Connection"
        subtitle="Comm Link"
        align="center"
      />
      
      <div className="max-w-4xl mx-auto mt-12 glass-panel p-1 relative overflow-hidden">
        <div className="bg-brand-gray p-8 md:p-12 rounded-[22px] relative z-10 font-mono">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-2 text-brand-cyan">
              <Terminal className="w-4 h-4" />
              <span className="text-xs uppercase">Secure_Terminal_v2.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Terminal Info */}
            <div className="space-y-6">
              <div>
                <p className="text-brand-cyan mb-2">{'>'} SYSTEM.IDENTIFY</p>
                <p className="text-white/70">Vexig AI Infrastructure Headquarters</p>
              </div>
              
              <div>
                <p className="text-brand-cyan mb-2">{'>'} NET.STATUS</p>
                <div className="flex items-center gap-2 text-white/70">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                  ONLINE [LATENCY: 12ms]
                </div>
              </div>

              <div>
                <p className="text-brand-cyan mb-2">{'>'} LOCATE.HQ</p>
                <p className="text-white/70">{siteConfig.contact.address}</p>
              </div>

              <div>
                <p className="text-brand-cyan mb-2">{'>'} COMM.PROTOCOLS</p>
                <p className="text-white/70">Email: {siteConfig.contact.email}</p>
                <p className="text-white/70">Voice: {siteConfig.contact.phone}</p>
              </div>

              <div className="p-4 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg mt-8 flex gap-4 items-start">
                <ShieldAlert className="w-5 h-5 text-brand-cyan shrink-0" />
                <p className="text-xs text-brand-cyan leading-relaxed">
                  All communications transmitted through this portal are end-to-end encrypted using quantum-resistant protocols.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <p className="text-brand-cyan mb-6">{'>'} EXECUTE.TRANSMISSION</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs text-white/50 mb-2 uppercase">Input.Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/20 focus:border-brand-cyan p-3 text-white outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-white/50 mb-2 uppercase">Input.Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/20 focus:border-brand-cyan p-3 text-white outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/50 mb-2 uppercase">Input.Payload</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/20 focus:border-brand-cyan p-3 text-white outline-none transition-colors resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'TRANSMITTING...' : 'SEND_DATA'}
                </Button>
                
                {status === 'success' && (
                  <p className="text-brand-cyan text-sm text-center mt-4">
                    [OK] Payload delivered successfully.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center mt-4">
                    [ERR] Transmission failed. Check connection.
                  </p>
                )}
              </form>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
}
