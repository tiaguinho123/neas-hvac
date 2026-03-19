import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function WhyChooseUs() {
  const { whyUs, colors, phone, phoneFormatted } = useSiteConfig();

  return (
    <section className="py-24 bg-white overflow-hidden" id="why-us" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={whyUs.imageUrl}
                alt={whyUs.imageAlt}
                className="w-full h-[600px] object-cover"
                loading="lazy"
                decoding="async"
                width="2069"
                height="1380"
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(to top, ${colors.dark}B3 0%, transparent 60%)` }}
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                <div className="text-4xl font-bold mb-1" style={{ color: colors.primaryHex }}>
                  {whyUs.yearsInBusiness}+
                </div>
                <div className="text-sm font-medium uppercase tracking-wider text-slate-200">{whyUs.yearsLabel}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="font-semibold tracking-wide uppercase mb-3 text-sm" style={{ color: colors.primaryHex }}>
              Why Choose Us
            </h2>
            <h3 id="why-heading" className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {whyUs.headline}
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">{whyUs.body}</p>

            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {whyUs.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: colors.primaryHex }} aria-hidden="true" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white transition-colors"
              style={{ backgroundColor: colors.dark }}
            >
              {whyUs.ctaLabel || `Call Us: ${phoneFormatted}`}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
