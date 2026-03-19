import { motion } from 'motion/react';
import { Phone, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';
import TrustBadges from '../components/TrustBadges';
import GoogleReviews from '../components/GoogleReviews';

// Real NEAS images scraped from neas-hvac.com
// Hero: the ACTUAL building & van photo shown on their homepage
const NEAS_HERO_IMAGE =
  'https://neas-hvac.com/wp-content/uploads/2018/11/462833_280179332059834_678440108_o.jpg';

const services = [
  {
    title: 'Heating',
    img: 'https://neas-hvac.com/wp-content/uploads/2019/01/HEATING.jpg',
    path: '/heating',
    desc: 'Service and installation of oil and gas fired furnaces, heat pump systems, and boilers.',
  },
  {
    title: 'Cooling',
    img: 'https://neas-hvac.com/wp-content/uploads/2019/01/Cooling.jpg',
    path: '/cooling',
    desc: 'Precise temperature control, ideal humidity levels, and peak efficiency year-round.',
  },
  {
    title: 'Indoor Air Quality',
    img: 'https://neas-hvac.com/wp-content/uploads/2019/01/180404-better-stock-woman-blowing-nose-ew-1250p_099d7e00064bb4e46bb983b8ce7e3f24.fit-760w.jpg',
    path: '/indoor-air-quality',
    desc: 'Air purification, filtration, and humidity-control systems for a healthier home.',
  },
  {
    title: 'Comfort Controls',
    img: 'https://neas-hvac.com/wp-content/uploads/2019/01/iComfort-S30-Lifestyle-4-1024x565-1024x565.jpg',
    path: '/comfort-controls',
    desc: 'Smart thermostats and automation for complete HVAC management.',
  },
];

export default function HomePage() {
  const { phone, phoneFormatted, reviews } = useSiteConfig();

  return (
    <div>
      {/* ─── Hero ──────────────────────────────────────────── */}
      {/* pt-28 = navbar (80px) + financing strip (~40px) */}
      <section className="relative pt-28" aria-label="Hero">
        <div className="relative overflow-hidden" style={{ height: '540px' }}>
          {/* Real NEAS building & vans photo */}
          <img
            src={NEAS_HERO_IMAGE}
            alt="New England Air Systems — building and work vans in Danbury, CT"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/45 to-transparent" />

          {/* Hero content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-2xl"
              >
                {/* Review badge */}
                <a
                  href={reviews.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6"
                  aria-label={`${reviews.rating} stars — ${reviews.count} Google Reviews`}
                >
                  <div className="flex gap-0.5" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-white text-sm font-semibold">
                    {reviews.rating} ·{' '}
                    <span className="text-amber-300">{reviews.count} Google Reviews</span>
                  </span>
                </a>

                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                  NEW ENGLAND AIR SYSTEMS
                  <br />
                  <span style={{ color: '#CE1126' }}>Heating & Air Conditioning</span>
                </h1>
                <p className="text-xl text-white/90 mb-3 font-medium">
                  Family-Owned • Danbury, CT
                </p>
                <p className="text-base text-white/75 mb-8">
                  Serving local homeowners for more than 20 years.
                  <br />
                  Sales • Service • Installation — 24 Hour Emergency Service
                </p>

                {/* CTA Row */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-lg text-lg transition-colors shadow-lg"
                    style={{ backgroundColor: '#CE1126' }}
                  >
                    <Calendar className="w-5 h-5" aria-hidden="true" />
                    Get a Free Estimate
                  </Link>

                  {/* Changed from phone number to Emergency Call 24/7 */}
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-lg text-lg transition-colors hover:bg-amber-50 shadow-lg border-2 border-amber-400"
                  >
                    <Phone className="w-5 h-5 text-red-600" aria-hidden="true" />
                    Emergency Call 24/7
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Badges ─── */}
      <TrustBadges />

      {/* ─── About Blurb ─── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#CE1126' }}>
            About Us
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-5">NEW ENGLAND AIR SYSTEMS</h2>
          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            NEW ENGLAND AIR SYSTEMS is a family owned heating &amp; air conditioning company
            located in Danbury, CT.
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            We have been servicing local homeowners for more than 20 years.
          </p>
          <img
            src="https://neas-hvac.com/wp-content/uploads/2021/01/Award_2021_transparent-1.png"
            alt="Expertise.com Best HVAC Professionals in Danbury 2021"
            className="mx-auto h-28 object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* ─── Our Services ─── */}
      <section className="py-20 bg-slate-50" id="services" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="services-heading" className="text-3xl font-extrabold text-slate-900 mb-3">
              OUR SERVICES
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ backgroundColor: '#CE1126' }}
              aria-hidden="true"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg">
                    {svc.title}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{svc.desc}</p>
                  <Link
                    to={svc.path}
                    className="inline-flex items-center text-sm font-bold transition-colors"
                    style={{ color: '#CE1126' }}
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Animated Google Reviews — Bottom of page, before CTA ─── */}
      <GoogleReviews />

      {/* ─── Emergency CTA Bar ─── */}
      <div className="py-12" style={{ backgroundColor: '#003DA5' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-2xl font-extrabold text-white mb-2">24 Hour Emergency Service</p>
          <p className="text-white/80 mb-6">
            No heat or cooling? We respond fast — any time of day or night.
          </p>
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-bold text-white border-2 border-white hover:bg-white hover:text-[#003DA5] transition-colors"
          >
            <Phone className="w-5 h-5" />
            Emergency Call 24/7 — {phoneFormatted}
          </a>
        </div>
      </div>
    </div>
  );
}
