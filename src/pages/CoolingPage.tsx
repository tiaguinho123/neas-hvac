import ServicePage from './ServicePage';
import { CheckCircle2 } from 'lucide-react';

export default function CoolingPage() {
  return (
    <ServicePage
      title="Cooling"
      subtitle="Air Conditioning · Humidity Control · Peak Efficiency"
      heroImage="https://neas-hvac.com/wp-content/uploads/2019/01/Cooling-Large-1-1280x580.jpg"
      heroImageAlt="NEAS Cooling — AC service and installation in Danbury CT"
      content={
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Cooling Services</h2>
          <div className="w-12 h-1 rounded-full mb-8" style={{ backgroundColor: '#CE1126' }} />

          <img
            src="https://neas-hvac.com/wp-content/uploads/2019/01/Cooling.jpg"
            alt="NEAS Cooling — air conditioning systems"
            className="w-full rounded-2xl mb-8 object-cover"
            style={{ maxHeight: '360px' }}
            loading="lazy"
            decoding="async"
          />

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            NEAS makes sure your air conditioner meets your expectations day in and day out. Precise temperature control, ideal humidity levels, clean air, and peak efficiency — that's what we deliver for Danbury homeowners every summer.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Our experienced technicians service all major brands and models, from central air conditioning systems to ductless mini-splits. Whether you need a quick repair or a full system replacement, we've got you covered.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Our Cooling Services Include:</h3>
          <ul className="space-y-3 mb-8">
            {[
              'Central air conditioning service and repair',
              'New AC system installation',
              'Ductless mini-split installation and repair',
              'Refrigerant recharge and leak detection',
              'Precise temperature and humidity control',
              'Annual AC tune-ups and maintenance',
              'Emergency cooling service — 24 hours',
              'All major brands: Carrier, Lennox, Trane & more',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#CE1126' }} aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-lg font-bold text-slate-900 mb-3" style={{ color: '#003DA5' }}>Peak Efficiency</h3>
            <p className="text-slate-600 leading-relaxed">
              A well-maintained air conditioning system uses significantly less energy. Ask us about high-efficiency replacement systems that can reduce your cooling costs by 20–30% annually.
            </p>
          </div>
        </div>
      }
    />
  );
}
