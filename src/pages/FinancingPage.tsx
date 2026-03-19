import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, CheckCircle2 } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function FinancingPage() {
  const { phone, phoneFormatted } = useSiteConfig();

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://neas-hvac.com/wp-content/uploads/2019/07/financing-image5.jpg"
          alt="NEAS Financing — Synchrony Financial"
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase">Financing</h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-slate-500">
            <Link to="/" className="hover:text-[#CE1126] transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700 font-medium">Financing</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Flexible Financing Available</h2>
            <div className="w-12 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: '#CE1126' }} />
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              New England Air Systems understands the need for financial assistance when upgrading and improving your property and quality of living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
            <div>
              <p className="text-slate-600 leading-relaxed mb-6">
                We're proud to offer financing options through <strong>Synchrony Financial</strong>, one of the nation's leading financial institutions. Whether you need a new furnace, air conditioning system, or air quality upgrades, we can help make the investment affordable with flexible payment plans.
              </p>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Financing Benefits:</h3>
              <ul className="space-y-3">
                {[
                  'Flexible monthly payment options',
                  'Competitive interest rates',
                  'Quick application and approval process',
                  'Apply online or by phone',
                  'Covers equipment and installation costs',
                  'Available for new systems and major repairs',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#CE1126' }} aria-hidden="true" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center">
                <img
                  src="https://neas-hvac.com/wp-content/uploads/2019/07/financing-image5.jpg"
                  alt="Synchrony Financial — NEAS Financing"
                  className="w-full rounded-xl mb-6 object-cover"
                  style={{ maxHeight: '200px' }}
                  loading="lazy"
                />
                <p className="text-slate-600 mb-6">Ready to upgrade your HVAC system? Talk to us about financing options — no pressure, no obligation.</p>
                <Link
                  to="/contact-us"
                  className="block w-full py-4 text-white font-bold rounded-xl text-lg transition-colors mb-3"
                  style={{ backgroundColor: '#CE1126' }}
                >
                  <Calendar className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  Ask About Financing
                </Link>
                <a
                  href={`tel:${phone}`}
                  className="block w-full py-4 border-2 font-bold rounded-xl text-lg transition-colors"
                  style={{ borderColor: '#003DA5', color: '#003DA5' }}
                >
                  <Phone className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  Call {phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
