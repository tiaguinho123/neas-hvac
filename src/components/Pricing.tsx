import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic Tune-Up',
    price: '59',
    description: 'Perfect for a quick seasonal check to ensure everything is running smoothly.',
    features: [
      'On-site inspection',
      'AC performance check',
      'Filter cleaning',
      'Thermostat calibration',
      'Safety inspection',
    ],
  },
  {
    name: 'Standard Repair Visit',
    price: '89',
    popular: true,
    description: 'Comprehensive diagnosis and minor repairs to get your system back online.',
    features: [
      'Diagnosis by a certified technician',
      'Minor part replacement',
      'Full system evaluation',
      'Upfront repair estimate',
      'Up to 1-hour technician time',
    ],
  },
  {
    name: 'Annual Maintenance',
    price: '199',
    description: 'Year-round peace of mind with priority service and preventative care.',
    features: [
      '2 full service visits per year',
      'Priority scheduling',
      '10% discount on repairs',
      'Filter replacement reminders',
      'Thermostat and airflow optimization',
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-slate-900 text-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-400 font-semibold tracking-wide uppercase mb-3">Pricing Plans</h2>
          <h3 className="text-4xl font-bold mb-6">Simple, Honest Pricing For Every Need</h3>
          <p className="text-lg text-slate-400">
            We believe in upfront pricing with no hidden fees. Whether you need a quick fix or a full system check, our affordable plans are designed to give you the best value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? 'bg-blue-600 border-2 border-blue-400 shadow-2xl shadow-blue-900/50 transform md:-translate-y-4'
                  : 'bg-slate-800 border border-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-400 text-slate-900 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
              <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-slate-400'}`}>{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold">${plan.price}</span>
                <span className={plan.popular ? 'text-blue-200' : 'text-slate-500'}>/visit</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-blue-200' : 'text-blue-400'}`} />
                    <span className={plan.popular ? 'text-white' : 'text-slate-300'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full py-4 px-6 rounded-xl text-center font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-slate-50'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
