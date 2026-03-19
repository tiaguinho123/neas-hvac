// GoogleReviews.tsx — Real reviews scraped from Google My Business via Apify
// Place: New England Air Systems LLC — ChIJ1V0cNxL_54kRQilv8ieTwHQ
// Scraped: 2026-03-19 — 4.7 ★ across 82 reviews
// Shows only 5 reviewers — ACg8oc photo prefix = reliable Google profile photos

import { useState, useEffect, useCallback } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=New%20England%20Air%20Systems%20LLC&query_place_id=ChIJ1V0cNxL_54kRQilv8ieTwHQ';

// ACg8oc... prefix = standard Google profile picture (loads reliably without auth)
const REVIEWS = [
  {
    name: 'Patrick Lifrieri',
    photo: 'https://lh3.googleusercontent.com/a/ACg8ocLeLRNBvXo5GKMZjpz0SSkL_8qM3ep50L5n4uCiWsIoOhcSJA=s120-c-rp-mo-ba2-br100',
    stars: 5,
    date: '3 months ago',
    text: 'NEAS is a top notch company. Prompt service, reasonable prices and very knowledgeable technicians. They have taken care of all of my heating and cooling concerns for the last 7 years. I\'m more than happy with them!',
    isLocalGuide: true,
    services: 'HVAC system maintenance · A/C system maintenance · Heating system repair',
  },
  {
    name: 'John Skelton',
    photo: 'https://lh3.googleusercontent.com/a-/ALV-UjX6U5n7Gn11jpxe8wABa0z02jhBAoiGYRb7SahZALYWXQGR7LeZ=s120-c-rp-mo-br100',
    stars: 5,
    date: '5 months ago',
    text: 'This is an amazing company. Carlos not only does great work at a reasonable price, but I have never known anyone in this or any other service trade who has gone so much above and beyond to help his customers. I wish I could give more stars than 5.',
    isLocalGuide: false,
    services: '',
  },
  {
    name: 'John Grimaldi',
    photo: 'https://lh3.googleusercontent.com/a/ACg8ocIhMTKKt1cdxoWhTmTqbXTSn6YsAfETsqz7iUdi53S3MV-hOg=s120-c-rp-mo-br100',
    stars: 5,
    date: '3 months ago',
    text: 'The Technicians Carlos and Bob were terrific. They were extremely knowledgeable, professional and a pleasure to communicate with.',
    isLocalGuide: false,
    services: 'Heating system repair · Reasonable price',
  },
  {
    name: 'Ryan Knox',
    photo: 'https://lh3.googleusercontent.com/a-/ALV-UjVWpm8AN5E9Mr1LwWsCp2MGfTzf-kYzVOIaCuaTLDN1eZ1cLyyR=s120-c-rp-mo-ba2-br100',
    stars: 5,
    date: 'a year ago',
    text: 'I had a great experience with NEAS. Their price was very competitive. Carlos was extremely accommodating in working through my design with me, answering questions and trying to work out a solution that best fitted my needs. The installation went smoothly. Carlos and Bob were both very professional and pleasant to be around.',
    isLocalGuide: true,
    services: 'Heating system installation · Thermostat installation',
  },
  {
    name: 'Art Shulman',
    photo: 'https://lh3.googleusercontent.com/a/ACg8ocJh4DdHoaKHYMysAU984WT-StP84IGZrCC3kyCCoLYwogo_KA=s120-c-rp-mo-br100',
    stars: 5,
    date: '2 years ago',
    text: 'Carlos and Bob were professional, thorough, extremely neat and explained what they were doing and why. Excellent equipment, fairly priced, beautifully installed... and it works! What more could you ask for? I\'m a tough guy to please but was delighted with the performance of the system and the installation.',
    isLocalGuide: false,
    services: 'Install AC · Heating system installation · HVAC duct & vent repair',
  },
];

export default function GoogleReviews() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = REVIEWS.length;

  const go = useCallback((direction: 'prev' | 'next') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(prev =>
        direction === 'next' ? (prev + 1) % total : (prev - 1 + total) % total
      );
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, total]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const t = setInterval(() => go('next'), 6000);
    return () => clearInterval(t);
  }, [go]);

  const r = REVIEWS[current];

  return (
    <section className="py-20 bg-white border-y border-slate-100" aria-labelledby="reviews-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#CE1126' }}>
            Google Reviews
          </p>
          <h2 id="reviews-heading" className="text-3xl font-extrabold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#CE1126] transition-colors"
          >
            <span className="flex gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="font-bold text-slate-800">4.7</span>
            <span className="text-slate-500">· 82 Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Card */}
        <div
          className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
        >
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
            aria-label={`${r.name}'s Google review`}
          >
            {/* Quote mark */}
            <div className="text-6xl leading-none font-serif mb-4 select-none" style={{ color: '#CE1126' }} aria-hidden="true">
              "
            </div>

            {/* Review text — full, no truncation */}
            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              {r.text}
            </p>

            {/* Services tag */}
            {r.services && (
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
                {r.services}
              </p>
            )}

            {/* Reviewer info */}
            <div className="flex items-center gap-4">
              <img
                src={r.photo}
                alt={`${r.name} — verified Google customer`}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-slate-100 flex-shrink-0"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(r.name)}&background=CE1126&color=fff&size=56`;
                }}
              />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-slate-900 text-base">{r.name}</p>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {[...Array(r.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  {r.isLocalGuide && <span className="text-xs text-slate-400">· Local Guide</span>}
                  <span className="text-xs text-slate-400">· {r.date}</span>
                </div>
              </div>
              {/* Google G */}
              <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
            </div>
          </a>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          {/* Prev */}
          <button
            onClick={() => go('prev')}
            className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#CE1126] hover:text-[#CE1126] transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Dots */}
          <div className="flex gap-2.5" role="tablist" aria-label="Review navigation">
            {REVIEWS.map((rev, i) => (
              <button
                key={rev.name}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setTimeout(() => { setCurrent(i); setIsAnimating(false); }, 300);
                  }
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'scale-125' : 'bg-slate-200'}`}
                style={i === current ? { backgroundColor: '#CE1126' } : undefined}
                role="tab"
                aria-selected={i === current}
                aria-label={`Review ${i + 1} by ${rev.name}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => go('next')}
            className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#CE1126] hover:text-[#CE1126] transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-6 max-w-xs mx-auto h-1 bg-slate-100 rounded-full overflow-hidden">
          <div
            key={current}
            className="h-full rounded-full origin-left"
            style={{
              backgroundColor: '#CE1126',
              animation: 'progress-bar 6s linear forwards',
            }}
          />
        </div>

        <style>{`
          @keyframes progress-bar {
            from { width: 0%; }
            to   { width: 100%; }
          }
        `}</style>
      </div>
    </section>
  );
}
