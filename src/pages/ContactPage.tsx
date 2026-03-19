import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function ContactPage() {
  const { phone, phoneFormatted, email, address, hours, license, contactFormServices } = useSiteConfig();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="relative h-48 overflow-hidden" style={{ backgroundColor: '#003DA5' }}>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase">Contact Us</h1>
              <p className="text-white/75 mt-2 text-lg">We'd love to hear from you</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-slate-500">
            <Link to="/" className="hover:text-[#CE1126] transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700 font-medium">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Get In Touch</h2>
              <div className="w-12 h-1 rounded-full mb-8" style={{ backgroundColor: '#CE1126' }} />

              <div className="space-y-7 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#CE11261A' }}>
                    <Phone className="w-5 h-5" style={{ color: '#CE1126' }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Phone</p>
                    <a href={`tel:${phone}`} className="text-2xl font-extrabold transition-colors" style={{ color: '#CE1126' }}>{phoneFormatted}</a>
                    <p className="text-slate-500 text-sm mt-1">24-Hour Emergency Service Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#CE11261A' }}>
                    <Mail className="w-5 h-5" style={{ color: '#CE1126' }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Email</p>
                    <a href={`mailto:${email}`} className="text-slate-700 hover:text-[#CE1126] transition-colors">{email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#CE11261A' }}>
                    <MapPin className="w-5 h-5" style={{ color: '#CE1126' }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Address</p>
                    <p className="text-slate-700">{address.street}</p>
                    <p className="text-slate-700">{address.city}, {address.state} {address.zip}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#CE11261A' }}>
                    <Clock className="w-5 h-5" style={{ color: '#CE1126' }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Hours</p>
                    <p className="text-slate-700">{hours.weekdays}</p>
                    <p className="text-slate-700">{hours.saturday}</p>
                    {hours.emergency && <p className="font-bold mt-1" style={{ color: '#CE1126' }}>Emergency: 24 Hours / 7 Days</p>}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-5 border border-slate-100 bg-slate-50">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">License</p>
                <p className="text-slate-700 font-semibold">{license}</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#CE1126' }}>
                      <Send className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                    <p className="text-slate-600">We'll be in touch shortly. For urgent needs, call <a href={`tel:${phone}`} className="font-bold" style={{ color: '#CE1126' }}>{phoneFormatted}</a>.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-first" className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                          <input id="contact-first" type="text" required autoComplete="given-name" placeholder="John"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-[#CE1126] bg-white transition" />
                        </div>
                        <div>
                          <label htmlFor="contact-last" className="block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
                          <input id="contact-last" type="text" required autoComplete="family-name" placeholder="Smith"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-[#CE1126] bg-white transition" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                        <input id="contact-phone" type="tel" required autoComplete="tel" placeholder="(555) 555-0000"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-[#CE1126] bg-white transition" />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                        <input id="contact-email" type="email" autoComplete="email" placeholder="you@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-[#CE1126] bg-white transition" />
                      </div>
                      <div>
                        <label htmlFor="contact-service" className="block text-sm font-semibold text-slate-700 mb-2">Service Needed</label>
                        <select id="contact-service"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-[#CE1126] bg-white transition">
                          <option value="">Select a service...</option>
                          {contactFormServices.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                        <textarea id="contact-message" rows={4} placeholder="Describe your HVAC issue or ask a question..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-[#CE1126] bg-white transition resize-none" />
                      </div>
                      <button type="submit"
                        className="w-full py-4 text-white font-bold text-lg rounded-xl transition-colors flex items-center justify-center gap-2"
                        style={{ backgroundColor: '#CE1126' }}
                      >
                        <Send className="w-5 h-5" aria-hidden="true" />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
