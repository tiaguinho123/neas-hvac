// Shared layout component used by all service pages
import { motion } from 'motion/react';
import { Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

interface ServicePageProps {
  title: string;
  subtitle?: string;
  heroImage: string;
  heroImageAlt: string;
  content: React.ReactNode;
}

export default function ServicePage({ title, subtitle, heroImage, heroImageAlt, content }: ServicePageProps) {
  const { phone, phoneFormatted } = useSiteConfig();

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="relative overflow-hidden h-64 md:h-80">
        <img src={heroImage} alt={heroImageAlt} className="w-full h-full object-cover object-center" fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tight">{title}</h1>
              {subtitle && <p className="text-white/80 mt-2 text-lg">{subtitle}</p>}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#CE1126] transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700 font-medium">{title}</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {content}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA Card */}
              <div className="rounded-2xl p-6 text-white text-center shadow-lg" style={{ backgroundColor: '#CE1126' }}>
                <p className="font-bold text-xl mb-3">Request a Free Estimate</p>
                <p className="text-white/85 text-sm mb-5">No obligation. Licensed technicians. Honest pricing.</p>
                <Link to="/contact-us"
                  className="block w-full py-3 bg-white font-bold rounded-lg text-base transition-colors hover:bg-slate-100 mb-3"
                  style={{ color: '#CE1126' }}
                >
                  <Calendar className="w-4 h-4 inline mr-1" aria-hidden="true" />
                  Schedule Online
                </Link>
                <a href={`tel:${phone}`}
                  className="block w-full py-3 border-2 border-white text-white font-bold rounded-lg text-base hover:bg-white transition-colors"
                  onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = '#CE1126'; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.color = 'white'; }}
                >
                  <Phone className="w-4 h-4 inline mr-1" aria-hidden="true" />
                  {phoneFormatted}
                </a>
              </div>

              {/* 24 Hour Emergency */}
              <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: '#003DA5' }}>
                <p className="font-bold text-lg mb-2">24 Hour Emergency Service</p>
                <p className="text-white/80 text-sm mb-4">Our team is on call around the clock for heating and cooling emergencies.</p>
                <a href={`tel:${phone}`} className="font-bold text-white text-xl hover:underline">{phoneFormatted}</a>
              </div>

              {/* Services Menu */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden">
                <p className="font-bold text-slate-900 px-5 py-4 bg-slate-50 border-b border-slate-200 text-sm uppercase tracking-wider">Our Services</p>
                {[
                  { label: 'Heating', path: '/heating' },
                  { label: 'Cooling', path: '/cooling' },
                  { label: 'Indoor Air Quality', path: '/indoor-air-quality' },
                  { label: 'Comfort Controls', path: '/comfort-controls' },
                  { label: 'Financing', path: '/financing' },
                ].map((s) => (
                  <Link key={s.path} to={s.path} className="block px-5 py-3 border-b border-slate-100 last:border-0 text-slate-700 hover:text-[#CE1126] hover:bg-red-50/50 transition-colors text-sm font-medium">
                    → {s.label}
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
