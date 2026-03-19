import { motion } from 'motion/react';
import { Flame, Snowflake, Wind, Thermometer, CreditCard, ArrowRight } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

const iconMap: Record<string, React.ElementType> = {
  Flame, Snowflake, Wind, Thermometer, CreditCard,
};

export default function Services() {
  const { services, servicesHeadline, servicesSubhead, colors } = useSiteConfig();

  return (
    <section className="py-24 bg-slate-50" id="services" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-semibold tracking-wide uppercase mb-3 text-sm" style={{ color: colors.primaryHex }}>
            What We Do
          </h2>
          <h3 id="services-heading" className="text-4xl font-bold text-slate-900 mb-6">{servicesHeadline}</h3>
          <p className="text-lg text-slate-600">{servicesSubhead}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Flame;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-amber-200 transition-all group"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors"
                  style={{ backgroundColor: `${colors.primaryHex}1A` }}
                >
                  <Icon className="w-7 h-7 transition-colors" style={{ color: colors.primaryHex }} aria-hidden="true" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: colors.primaryHex }}
                >
                  {service.cta} <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
