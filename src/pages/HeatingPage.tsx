import ServicePage from './ServicePage';
import { CheckCircle2 } from 'lucide-react';

export default function HeatingPage() {
  return (
    <ServicePage
      title="Heating"
      subtitle="Oil & Gas Furnaces · Heat Pumps · Boilers"
      heroImage="https://neas-hvac.com/wp-content/uploads/2019/01/HEATING-Large-1-1280x580.jpg"
      heroImageAlt="NEAS Heating — Furnace and heat pump service in Danbury CT"
      content={
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Heating Services</h2>
          <div className="w-12 h-1 rounded-full mb-8" style={{ backgroundColor: '#CE1126' }} />

          <img
            src="https://neas-hvac.com/wp-content/uploads/2019/01/HEATING.jpg"
            alt="NEAS Heating service"
            className="w-full rounded-2xl mb-8 object-cover"
            style={{ maxHeight: '360px' }}
            loading="lazy"
            decoding="async"
          />

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            New England Air Systems provides comprehensive heating services for homeowners in Danbury and surrounding areas of Connecticut. Whether your furnace needs repair, your boiler needs maintenance, or you're ready for a full system installation, our licensed technicians are ready to help.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Our Heating Services Include:</h3>
          <ul className="space-y-3 mb-8">
            {[
              'Service and installation of oil and gas fired furnaces',
              'Heat pump system installation and repair',
              'Service and repair of oil and gas boilers',
              'Preventative maintenance service contracts',
              'Emergency heating repair — 24-hour service',
              'Energy-efficient system upgrades',
              'All major brands serviced and installed',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#CE1126' }} aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Preventive Maintenance</h3>
            <p className="text-slate-600 leading-relaxed">
              Regular preventative maintenance is the best investment you can make in your heating system. Our maintenance service contracts provide annual tune-ups, priority scheduling, and reduced repair costs — keeping your system running efficiently all winter long.
            </p>
          </div>
        </div>
      }
    />
  );
}
