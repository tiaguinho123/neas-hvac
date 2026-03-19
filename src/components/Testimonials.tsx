import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function Testimonials() {
  const { testimonials, reviews, colors } = useSiteConfig();

  return (
    <section className="py-24 bg-white" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-semibold tracking-wide uppercase mb-3 text-sm" style={{ color: colors.primaryHex }}>
            Real Reviews
          </h2>
          <h3 id="reviews-heading" className="text-4xl font-bold text-slate-900 mb-4">
            What Local Homeowners Say About Us
          </h3>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4"
            style={{ backgroundColor: `${colors.primaryHex}1A`, borderColor: `${colors.primaryHex}33` }}
          >
            <div className="flex gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              {reviews.rating} average across <strong>{reviews.count} Google reviews</strong>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="bg-slate-50 p-7 rounded-3xl border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all relative"
            >
              <Quote className="absolute top-7 right-7 w-8 h-8 text-amber-100" aria-hidden="true" />
              <div className="flex gap-1 mb-4" aria-label="5 star review">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed text-sm">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={`Photo of ${t.name}`}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="48"
                  height="48"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.town}</p>
                  <p className="text-xs font-medium mt-0.5" style={{ color: colors.primaryHex }}>{t.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
