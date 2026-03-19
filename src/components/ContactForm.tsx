import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function ContactForm() {
  const { phone, phoneFormatted, email, address, hours, colors, businessName, contactFormServices } = useSiteConfig();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24" id="contact" aria-labelledby="contact-heading" style={{ backgroundColor: colors.dark }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-semibold tracking-wide uppercase mb-3 text-sm" style={{ color: colors.primaryHex }}>
            Get In Touch
          </h2>
          <h3 id="contact-heading" className="text-4xl font-bold text-white mb-6">Request Your Free Estimate</h3>
          <p className="text-lg text-slate-400">No pressure, no obligation. We'll assess your situation and give you an honest recommendation.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            {[
              { icon: Phone, label: 'Call or Text', value: phoneFormatted, href: `tel:${phone}`, sub: 'Available Mon–Sat, 7am–7pm' },
              { icon: Mail, label: 'Email Us', value: email, href: `mailto:${email}`, sub: null },
              { icon: MapPin, label: 'Address', value: `${address.street}, ${address.city}, ${address.state} ${address.zip}`, href: null, sub: null },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border"
                  style={{ backgroundColor: `${colors.primaryHex}1A`, borderColor: `${colors.primaryHex}33` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: colors.primaryHex }} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">{item.label}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-slate-300 hover:text-amber-400 transition-colors text-xl font-bold">{item.value}</a>
                  ) : (
                    <p className="text-slate-300">{item.value}</p>
                  )}
                  {item.sub && <p className="text-slate-500 text-sm mt-1">{item.sub}</p>}
                </div>
              </div>
            ))}

            <div className="mt-8 p-6 rounded-2xl border" style={{ borderColor: `${colors.primaryHex}33`, backgroundColor: `${colors.primaryHex}0D` }}>
              <p className="font-semibold text-sm uppercase tracking-wider mb-2" style={{ color: colors.primaryHex }}>⚡ Emergency Service</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Heating or cooling emergency? Call us immediately at <a href={`tel:${phone}`} className="font-bold" style={{ color: colors.primaryHex }}>{phoneFormatted}</a>.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {submitted ? (
              <div className="bg-white/5 border border-amber-400/30 rounded-3xl p-12 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: colors.primaryHex }}>
                  <Send className="w-8 h-8 text-slate-900" aria-hidden="true" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">Message Sent!</h4>
                <p className="text-slate-400">We'll get back to you within 1 business hour. For urgent needs, call {phoneFormatted}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-5" noValidate aria-label={`Free estimate request form — ${businessName}`}>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[{ id: 'first-name', label: 'First Name', type: 'text', autocomplete: 'given-name', placeholder: 'John' },
                    { id: 'last-name', label: 'Last Name', type: 'text', autocomplete: 'family-name', placeholder: 'Smith' }].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-sm font-medium text-slate-300 mb-2">
                        {f.label} <span style={{ color: colors.primaryHex }} aria-hidden="true">*</span>
                      </label>
                      <input id={f.id} type={f.type} required autoComplete={f.autocomplete}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition"
                        style={{ '--tw-ring-color': colors.primaryHex } as React.CSSProperties}
                        placeholder={f.placeholder} />
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number <span style={{ color: colors.primaryHex }} aria-hidden="true">*</span>
                  </label>
                  <input id="phone" type="tel" required autoComplete="tel"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition"
                    placeholder="(555) 555-0000" />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-slate-300 mb-2">Your City</label>
                  <input id="city" type="text" autoComplete="address-level2"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition"
                    placeholder={`${address.city}, ${address.state}`} />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">Service Needed</label>
                  <select id="service" className="w-full px-4 py-3 rounded-xl border border-white/10 text-white focus:outline-none focus:ring-2 focus:border-transparent transition"
                    style={{ backgroundColor: colors.darkHover }}>
                    <option value="">Select a service...</option>
                    {contactFormServices.map(s => <option key={s} value={s.toLowerCase().replace(/\s/g, '-')}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Tell us more (optional)</label>
                  <textarea id="message" rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition resize-none"
                    placeholder="Describe your situation or ask a question..." />
                </div>
                <button type="submit"
                  className="w-full py-4 px-8 font-bold text-lg rounded-xl transition-all hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  style={{ backgroundColor: colors.primaryHex, color: '#0F172A' }}>
                  <Send className="w-5 h-5" aria-hidden="true" />
                  Request Free Estimate
                </button>
                <p className="text-center text-xs text-slate-500">No spam. We'll only contact you about your request.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
