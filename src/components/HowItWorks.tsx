import { motion } from 'motion/react';
import { Phone, ClipboardList, Wrench, CheckCircle2, MessageSquare } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

const iconMap: Record<string, React.ElementType> = {
  Phone, ClipboardList, Wrench, CheckCircle2, MessageSquare,
};

export default function HowItWorks() {
  const { process: steps, processHeadline, processSubhead, colors, phone, phoneFormatted } = useSiteConfig();

  return (
    <section className="py-24" id="how-it-works" aria-labelledby="how-heading" style={{ backgroundColor: colors.dark }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-semibold tracking-wide uppercase mb-3 text-sm" style={{ color: colors.primaryHex }}>
            Our Process
          </h2>
          <h3 id="how-heading" className="text-4xl font-bold text-white mb-6">{processHeadline}</h3>
          <p className="text-lg text-slate-400">{processSubhead}</p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 opacity-30" style={{ background: `linear-gradient(to right, transparent, ${colors.primaryHex}, transparent)` }} aria-hidden="true" />
          {steps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Phone;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                <div
                  className="relative z-10 w-24 h-24 rounded-2xl border flex flex-col items-center justify-center mb-5 shadow-xl"
                  style={{ backgroundColor: `${colors.dark}CC`, borderColor: `${colors.primaryHex}33` }}
                >
                  <Icon className="w-7 h-7 mb-1" style={{ color: colors.primaryHex }} aria-hidden="true" />
                  <span className="text-xs font-bold tracking-widest" style={{ color: `${colors.primaryHex}99` }}>{step.number}</span>
                </div>
                <h4 className="text-white font-bold text-base mb-2 leading-snug">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg"
            style={{ backgroundColor: colors.primaryHex, color: '#0F172A' }}
          >
            <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
            Start with a Free Call — {phoneFormatted}
          </a>
        </div>
      </div>
    </section>
  );
}
