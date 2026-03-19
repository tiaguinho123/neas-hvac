import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function FAQ() {
  const { faqs, colors, phone, phoneFormatted } = useSiteConfig();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-semibold tracking-wide uppercase mb-3 text-sm" style={{ color: colors.primaryHex }}>FAQs</h2>
          <h3 id="faq-heading" className="text-4xl font-bold text-slate-900 mb-6">
            Questions Homeowners Ask Us Most
          </h3>
          <p className="text-lg text-slate-600">
            We believe informed customers make better decisions — so ask us anything.
          </p>
        </div>

        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const btnId = `faq-btn-${index}`;
            return (
              <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden hover:border-amber-200 transition-colors" role="listitem">
                <button
                  id={btnId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-amber-50/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset"
                  style={{ '--tw-ring-color': colors.primaryHex } as React.CSSProperties}
                >
                  <span className="font-semibold text-lg text-slate-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                    style={{ color: colors.primaryHex }}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 text-[15px]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-8 rounded-3xl border" style={{ backgroundColor: `${colors.primaryHex}0D`, borderColor: `${colors.primaryHex}33` }}>
          <p className="text-slate-700 font-semibold mb-2">Still have a question?</p>
          <p className="text-slate-500 mb-4 text-sm">Our team picks up the phone. No bots, no hold music.</p>
          <a href={`tel:${phone}`} className="inline-flex items-center justify-center px-8 py-3 font-bold rounded-xl transition-colors" style={{ backgroundColor: colors.primaryHex, color: '#0F172A' }}>
            Call {phoneFormatted}
          </a>
        </div>
      </div>
    </section>
  );
}
