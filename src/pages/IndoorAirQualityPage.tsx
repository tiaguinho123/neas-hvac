import ServicePage from './ServicePage';
import { CheckCircle2 } from 'lucide-react';

export default function IndoorAirQualityPage() {
  return (
    <ServicePage
      title="Indoor Air Quality"
      subtitle="Purification · Filtration · Humidity Control"
      heroImage="https://neas-hvac.com/wp-content/uploads/2019/02/INDOOR-AIR-QUALITY-LARGE.jpg"
      heroImageAlt="NEAS Indoor Air Quality — air purification systems in Danbury CT"
      content={
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Indoor Air Quality</h2>
          <div className="w-12 h-1 rounded-full mb-8" style={{ backgroundColor: '#CE1126' }} />

          <img
            src="https://neas-hvac.com/wp-content/uploads/2019/01/180404-better-stock-woman-blowing-nose-ew-1250p_099d7e00064bb4e46bb983b8ce7e3f24.fit-760w.jpg"
            alt="Indoor air quality — healthy home air"
            className="w-full rounded-2xl mb-8 object-cover"
            style={{ maxHeight: '360px' }}
            loading="lazy"
            decoding="async"
          />

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            The air inside your home can be up to 5 times more polluted than outdoor air. New England Air Systems offers Healthy Climate® solutions to dramatically improve the air your family breathes every day.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Our Indoor Air Quality Solutions:</h3>
          <ul className="space-y-3 mb-8">
            {[
              'Air purification systems — remove bacteria, viruses, and allergens',
              'Whole-home air cleaners and filtration systems',
              'Humidity-control systems for year-round comfort',
              'Ventilation systems for fresh air circulation',
              'UV germicidal lights to eliminate airborne pathogens',
              'HEPA filtration upgrades',
              'Carbon monoxide and air quality testing',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#CE1126' }} aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Healthy Climate® Solutions</h3>
            <p className="text-slate-600 leading-relaxed">
              We install and service industry-leading Healthy Climate® air quality products designed to work seamlessly with your existing HVAC system — giving your whole home cleaner, healthier air without any lifestyle changes.
            </p>
          </div>
        </div>
      }
    />
  );
}
