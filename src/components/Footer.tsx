import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function Footer() {
  const {
    businessName, colors, phone, phoneFormatted,
    email, address, hours, license, footerTagline, footerAwards,
    serviceAreaTowns,
  } = useSiteConfig();

  return (
    <footer className="border-t border-slate-800" id="footer" style={{ backgroundColor: colors.dark }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand — real NEAS logo image */}
          <div className="col-span-1 md:col-span-2">
            <a href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block mb-6">
              <img
                src="https://neas-hvac.com/wp-content/uploads/2018/11/NEAS-LOGO.png"
                alt="New England Air Systems LLC"
                className="h-16 object-contain"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="text-slate-400 max-w-sm mb-4 leading-relaxed text-sm">{footerTagline}</p>
            <p className="text-xs text-slate-500 mb-2">{license}</p>
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} {businessName}, LLC. All rights reserved.</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-5 text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <span className="text-sm">{address.street}<br />{address.city}, {address.state} {address.zip}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <a href={`tel:${phone}`} className="hover:text-white transition-colors font-semibold">{phoneFormatted}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors text-sm">{email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 shrink-0 mt-0.5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <div className="text-sm">
                  <p>{hours.weekdays}</p>
                  <p>{hours.saturday}</p>
                  {hours.emergency && (
                    <p className="font-semibold mt-1" style={{ color: colors.primaryHex }}>Emergency: Always Available</p>
                  )}
                </div>
              </li>
            </ul>
          </div>

          {/* Service Area (Pattern 8) */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Service Area</h4>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2" aria-label="Towns we serve">
              {serviceAreaTowns.map((town) => (
                <li key={town}>
                  <a href="#contact" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                    {town}, {/* state auto-appended if needed */}CT
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-4">
              Don't see your town?{' '}
              <a href={`tel:${phone}`} className="hover:opacity-80" style={{ color: colors.primaryHex }}>
                Call us
              </a>{' '}
              — we likely serve it.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{footerAwards}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
