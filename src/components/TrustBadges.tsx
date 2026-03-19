import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Star, CheckCircle, Wrench, Clock } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

const iconMap: Record<string, React.ElementType> = {
  Award, ShieldCheck, Star, CheckCircle, Wrench, Clock,
};

export default function TrustBadges() {
  const { trustBadges, colors } = useSiteConfig();

  return (
    <section className="bg-white border-b border-slate-100 py-10" aria-label="Certifications and trust signals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-slate-400 uppercase tracking-widest font-semibold mb-8">
          Certified & Trusted by Local Homeowners
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {trustBadges.map((badge, i) => {
            const Icon = iconMap[badge.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-200 hover:bg-amber-50/40 transition-colors"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${colors.primaryHex}1A` }}
                >
                  <Icon className="w-6 h-6" style={{ color: colors.primaryHex }} aria-hidden="true" />
                </div>
                <p className="font-bold text-slate-900 text-sm leading-tight">{badge.label}</p>
                <p className="text-xs text-slate-500 leading-snug">{badge.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
