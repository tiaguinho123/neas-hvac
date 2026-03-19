import { motion } from 'motion/react';
import { Star, Phone, Calendar, Zap } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function Hero() {
  const cfg = useSiteConfig();
  const { hero, offer, reviews, colors, phone, phoneFormatted } = cfg;

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.heroBgUrl}
          alt={`${cfg.businessName} — home comfort service`}
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
          width="2075"
          height="1383"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${colors.dark}F8 0%, ${colors.dark}D9 50%, ${colors.dark}4D 100%)`
          }}
        />
      </div>

      {/* Offer Strip (Pattern 4) */}
      {offer.enabled && (
        <div className="relative z-10" style={{ backgroundColor: colors.primaryHex }}>
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-3 text-slate-900 text-sm font-bold">
            <Zap className="w-4 h-4" aria-hidden="true" />
            <span>{offer.emoji} {offer.label} {phoneFormatted}</span>
            <Zap className="w-4 h-4" aria-hidden="true" />
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Pattern 2 — Review Count Anchor */}
            <a
              href={reviews.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View our ${reviews.count} Google reviews, rated ${reviews.rating} stars`}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-xl hover:bg-white/15 transition-colors"
            >
              <div className="flex gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white text-sm font-semibold">
                {reviews.rating} stars ·{' '}
                <span className="font-bold" style={{ color: colors.primaryHex }}>
                  {reviews.count} Google Reviews
                </span>
              </span>
            </a>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.08]">
              {hero.headline.map((line, i) =>
                i === hero.accentLine ? (
                  <span key={i} style={{ color: colors.primaryHex }}>{line}<br /></span>
                ) : (
                  <span key={i}>{line}<br /></span>
                )
              )}
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-2xl leading-relaxed font-light">
              {hero.valueProp}
            </p>
            <p className="text-base text-slate-400 mb-10 max-w-xl leading-relaxed">
              {hero.subText}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl transition-all shadow-xl hover:-translate-y-0.5"
                style={{ backgroundColor: colors.primaryHex, color: '#0F172A' }}
              >
                <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                {hero.primaryCTA}
              </a>
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                Call {phoneFormatted}
              </a>
            </div>

            {/* Pattern 7 — Emergency Banner */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-red-500/10 border border-red-400/30">
              <span className="text-red-400 text-xl" aria-hidden="true">🔴</span>
              <div>
                <p className="text-white font-semibold text-sm">{hero.emergencyText}</p>
                <a href={`tel:${phone}`} className="text-red-300 text-sm hover:text-red-200 transition-colors font-medium">
                  Call {phoneFormatted} for same-day service →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
