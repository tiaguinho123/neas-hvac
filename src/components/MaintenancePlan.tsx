import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Shield, Clock, Zap } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

const highlightIconMap: Record<string, React.ElementType> = {
  Clock, Zap, CheckCircle2, Shield,
};

export default function MaintenancePlan() {
  const { maintenancePlan: plan, colors, phone, phoneFormatted } = useSiteConfig();

  return (
    <section className="py-24 bg-slate-50" id="maintenance-plan" aria-labelledby="plan-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-semibold tracking-wide uppercase mb-3 text-sm" style={{ color: colors.primaryHex }}>
              {plan.tagline}
            </h2>
            <h3 id="plan-heading" className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              The {plan.name === 'Comfort Club' ? (
                <>The <span style={{ color: colors.primaryHex }}>{plan.name}</span></>
              ) : plan.name}
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">{plan.description}</p>

            <ul className="space-y-3 mb-10" aria-label={`${plan.name} benefits`}>
              {plan.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg"
                style={{ backgroundColor: colors.primaryHex, color: '#0F172A' }}
              >
                Join the {plan.name}
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </a>
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl border-2 border-slate-200 text-slate-700 hover:border-amber-400 hover:text-amber-600 transition-all"
              >
                Ask Us About It
              </a>
            </div>
          </motion.div>

          {/* Right — Pricing Card */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div
              className="rounded-3xl p-10 shadow-2xl border"
              style={{ backgroundColor: colors.dark, borderColor: `${colors.primaryHex}1A` }}
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="font-bold uppercase tracking-widest text-xs mb-1" style={{ color: colors.primaryHex }}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold text-white">${plan.priceMonthly}</span>
                    <span className="text-slate-400 text-lg">/mo</span>
                  </div>
                  <p className="text-slate-500 text-sm mt-1">or ${plan.priceAnnual}/year (save 2 months)</p>
                </div>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center border"
                  style={{ backgroundColor: `${colors.primaryHex}1A`, borderColor: `${colors.primaryHex}33` }}
                >
                  <Shield className="w-7 h-7" style={{ color: colors.primaryHex }} aria-hidden="true" />
                </div>
              </div>

              <div className="space-y-4 mb-8 border-t border-white/10 pt-8">
                {plan.highlights.map((h, i) => {
                  const HIcon = highlightIconMap[h.icon] ?? CheckCircle2;
                  return (
                    <div key={i} className="flex items-center gap-3 text-slate-300">
                      <HIcon className="w-5 h-5 flex-shrink-0" style={{ color: colors.primaryHex }} aria-hidden="true" />
                      <span className="text-sm">{h.text}</span>
                    </div>
                  );
                })}
              </div>

              <a
                href="#contact"
                className="block w-full text-center py-4 px-6 font-bold text-lg rounded-xl transition-all hover:opacity-90"
                style={{ backgroundColor: colors.primaryHex, color: '#0F172A' }}
              >
                Join for ${plan.priceMonthly}/month
              </a>
              <p className="text-center text-xs text-slate-500 mt-3">Cancel anytime · No setup fee</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
