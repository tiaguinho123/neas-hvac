import ServicePage from './ServicePage';
import { CheckCircle2 } from 'lucide-react';

export default function ComfortControlsPage() {
  return (
    <ServicePage
      title="Comfort Controls"
      subtitle="Smart Thermostats · Automation · Energy Management"
      heroImage="https://neas-hvac.com/wp-content/uploads/2019/01/COMFORT-CONTROLS-LARGE.jpg"
      heroImageAlt="NEAS Comfort Controls — smart thermostat installation in Danbury CT"
      content={
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Comfort Controls</h2>
          <div className="w-12 h-1 rounded-full mb-8" style={{ backgroundColor: '#CE1126' }} />

          <img
            src="https://neas-hvac.com/wp-content/uploads/2019/01/iComfort-S30-Lifestyle-4-1024x565-1024x565.jpg"
            alt="iComfort S30 smart thermostat"
            className="w-full rounded-2xl mb-8 object-cover"
            style={{ maxHeight: '360px' }}
            loading="lazy"
            decoding="async"
          />

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Upgrading your existing thermostat to a smart control system allows complete management of your HVAC system, conserves energy, and truly optimizes your home comfort. Comfort is influenced by humidity, air circulation, and temperature — and the right control system manages all three automatically.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            New England Air Systems installs and services leading brands including the iComfort S30 and other smart home control systems compatible with all major platforms.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Our Comfort Control Services:</h3>
          <ul className="space-y-3 mb-8">
            {[
              'Smart thermostat installation and programming',
              'iComfort S30 and compatible systems',
              'Nest, Ecobee, and Honeywell certified installation',
              'Wi-Fi thermostat setup and app configuration',
              'Zoning systems for multi-room control',
              'Energy usage monitoring and optimization',
              'Integration with smart home systems',
              'Thermostat repair and replacement',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#CE1126' }} aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Energy Savings</h3>
            <p className="text-slate-600 leading-relaxed">
              Studies show that programmable and smart thermostats can reduce heating and cooling costs by 10–20% annually. Our technicians will help you choose the right system and program it to match your exact schedule and comfort preferences.
            </p>
          </div>
        </div>
      }
    />
  );
}
