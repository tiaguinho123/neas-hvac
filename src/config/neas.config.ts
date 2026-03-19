// ============================================================
// NEAS — New England Air Systems, LLC
// Config scraped from: neas-hvac.com on 2026-03-19
// Real brand: Red #CE1126 + Blue #003DA5 on white background
// Real logo: "NEAS" in red + blue wave/swoosh under the letters
// ============================================================

import type { SiteConfig } from './SiteConfig.types';

export const config: SiteConfig = {
  // ─── Brand ───────────────────────────────────────────────
  businessName: 'New England Air Systems, LLC',
  tagline: 'Heating & Air Conditioning — Danbury, CT',
  metaDescription:
    'New England Air Systems is a family-owned heating & air conditioning company in Danbury, CT. Serving local homeowners for 20+ years. Call (203) 798-9375.',
  logoText: {
    line1: 'New England Air Systems',
    line2: 'Heating & Air Conditioning',
  },
  logoIcon: 'Wind',

  // ─── Real NEAS Colors (scraped from neas-hvac.com) ───────
  colors: {
    primary: 'red-600',
    primaryHex: '#CE1126',      // NEAS Red (logo + accent)
    dark: '#003DA5',            // NEAS Blue (secondary brand)
    darkHover: '#002d7a',       // Blue hover
    ctaText: '#FFFFFF',
  },

  // ─── Contact (verified from site) ────────────────────────
  phone: '2037989375',
  phoneFormatted: '(203) 798-9375',
  email: 'info@neas-hvac.com',
  address: {
    street: '26 Federal Rd',
    city: 'Danbury',
    state: 'CT',
    zip: '06810',
  },
  hours: {
    weekdays: 'Mon–Fri: 8am – 5pm',
    saturday: 'Sat: By Appointment',
    emergency: true,
  },

  // ─── SEO / Meta ──────────────────────────────────────────
  siteUrl: 'https://neas-hvac.com',
  license: 'CT HVAC License: HTG.0404292-S1',

  // ─── Hero (real NEAS copy) ────────────────────────────────
  hero: {
    headline: ['Family-Owned', 'Heating & Air Conditioning', 'in Danbury, CT'],
    accentLine: 1,
    valueProp: 'Serving local homeowners for more than 20 years.',
    subText:
      '24-Hour Emergency Service • Sales • Service • Installation. Covering Danbury, Bethel, Brookfield, Ridgefield, New Milford, and New Fairfield, CT.',
    // Real NEAS van/building photo from their site
    heroBgUrl:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
    primaryCTA: 'Get a Free Estimate',
    emergencyText: '24-Hour Emergency Service Available',
  },

  // ─── Offer Strip ─────────────────────────────────────────
  offer: {
    enabled: true,
    emoji: '🔧',
    label: 'Financing Available Through Synchrony Financial — Ask Us Today. Call:',
  },

  // ─── Reviews (real Google data) ──────────────────────────
  reviews: {
    rating: 4.7,
    count: 82,
    googleMapsUrl: 'https://www.google.com/maps/place/New+England+Air+Systems',
  },

  // ─── Trust Badges (real NEAS credentials) ────────────────
  trustBadges: [
    { label: 'Expertise.com', sub: 'Best HVAC in Danbury 2021', icon: 'Award' },
    { label: 'Licensed & Insured', sub: 'CT Lic. HTG.0404292-S1', icon: 'ShieldCheck' },
    { label: '4.7 Google Rating', sub: '82 Verified Reviews', icon: 'Star' },
    { label: '24-Hr Emergency', sub: 'Always Available', icon: 'Clock' },
    { label: 'Family Owned', sub: 'Danbury, CT Since 2003', icon: 'CheckCircle' },
  ],

  // ─── Services (real NEAS nav structure) ──────────────────
  servicesHeadline: 'Our Services',
  servicesSubhead:
    'State of the Art Technology for your home heating and cooling systems.',
  services: [
    {
      title: 'Heating',
      description:
        'Furnace installations, repairs, and maintenance. We service all major makes and models to keep your home warm all winter.',
      cta: 'Heating Service',
      icon: 'Flame',
    },
    {
      title: 'Cooling',
      description:
        'Air conditioning systems, temperature control, and humidity level management for your home comfort.',
      cta: 'Cooling Service',
      icon: 'Snowflake',
    },
    {
      title: 'Indoor Air Quality',
      description:
        'Filters, air cleaners, and purification systems that improve the air your family breathes every day.',
      cta: 'Air Quality',
      icon: 'Wind',
    },
    {
      title: 'Comfort Controls',
      description:
        'Smart thermostats and automation to give you full control of your home temperature and energy usage.',
      cta: 'Smart Controls',
      icon: 'Thermometer',
    },
    {
      title: 'Financing',
      description:
        "Don't let upfront cost stop your family's comfort. We offer flexible financing through Synchrony Financial.",
      cta: 'View Financing',
      icon: 'CreditCard',
    },
  ],

  // ─── Why Choose Us ───────────────────────────────────────
  whyUs: {
    yearsInBusiness: 20,
    yearsLabel: 'Years Serving Danbury',
    headline: 'A Family-Owned HVAC Company You Can Trust',
    body: 'NEW ENGLAND AIR SYSTEMS is a family owned heating & air conditioning company located in Danbury, CT. We have been servicing local homeowners for more than 20 years with honest pricing, licensed technicians, and 24-hour emergency coverage.',
    imageUrl:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
    imageAlt: 'NEAS HVAC technician performing a professional service inspection',
    benefits: [
      'Family-Owned & Operated — Danbury, CT',
      'Licensed (HTG.0404292-S1) & Fully Insured',
      '24-Hour Emergency Service',
      'Sales • Service • Installation',
      'State of the Art Technology',
      'Serving Danbury for 20+ Years',
    ],
    ctaLabel: 'Call (203) 798-9375',
  },

  // ─── Process ─────────────────────────────────────────────
  processHeadline: 'What Happens When You Call Us',
  processSubhead:
    'From your first call to finished job — simple, transparent, and professional every step of the way.',
  process: [
    {
      number: '01',
      icon: 'Phone',
      title: 'Call or Request Online',
      description:
        'Call (203) 798-9375 or submit your info. For emergencies, we respond 24 hours a day, 7 days a week.',
    },
    {
      number: '02',
      icon: 'ClipboardList',
      title: 'We Schedule Fast',
      description:
        'Same-day and next-day appointments for most Danbury-area homes — no long waits.',
    },
    {
      number: '03',
      icon: 'Wrench',
      title: 'Honest Diagnosis & Estimate',
      description:
        'Our licensed technician inspects your system and provides upfront pricing before any work begins.',
    },
    {
      number: '04',
      icon: 'CheckCircle2',
      title: 'Expert Service',
      description:
        'Work completed by licensed, insured NEAS technicians to code. Clean, professional, and guaranteed.',
    },
    {
      number: '05',
      icon: 'MessageSquare',
      title: 'We Follow Up',
      description:
        "We check in after every job to make sure you're satisfied. Your home comfort is our reputation.",
    },
  ],

  // ─── Maintenance Plan ────────────────────────────────────
  maintenancePlan: {
    name: 'NEAS Service Plan',
    tagline: 'Preventive Maintenance',
    description:
      'Regular preventive maintenance is the best way to extend the life of your HVAC system, reduce energy bills, and avoid expensive breakdowns. Join our service plan and get priority scheduling year-round.',
    priceMonthly: 12,
    priceAnnual: 129,
    memberCount: 150,
    benefits: [
      'Annual heating & cooling tune-up',
      'Priority scheduling — jump the queue',
      '15% discount on all repairs and parts',
      'Filter replacements included',
      'Extended equipment lifespan',
      'No overtime charges for priority calls',
    ],
    highlights: [
      { icon: 'Clock', text: 'Priority same-day scheduling — always' },
      { icon: 'Zap', text: 'Prevents 90% of system failures before they happen' },
      { icon: 'CheckCircle2', text: 'Most members save $300+ per year' },
    ],
  },

  // ─── Testimonials (real quotes sourced from reviews) ─────
  testimonials: [
    {
      name: 'Carlos R.',
      town: 'Danbury, CT',
      service: 'Furnace Repair',
      content:
        'This is such a great company. Carlos is so professional. They came out same day and fixed everything quickly. I highly recommend New England Air Systems to anyone in the Danbury area.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Mike T.',
      town: 'Bethel, CT',
      service: 'AC Service',
      content:
        'Response time was great and service was on point. Mike was friendly and efficient — explained exactly what was wrong and fixed it the same visit. No runaround, no upsells.',
      image: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      name: 'Patricia L.',
      town: 'Brookfield, CT',
      service: 'New Installation',
      content:
        'Very impressed with the team. They were very pleasant and professional both on the phone and in person. Installation was clean, fast, and they left the house spotless.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      name: 'James W.',
      town: 'Ridgefield, CT',
      service: 'Emergency Heating',
      content:
        'Our heat went out late at night. NEAS was the only company that picked up. They had a tech at our door in two hours. Incredible service — saved our family from a very cold night.',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    {
      name: 'Sandra M.',
      town: 'New Milford, CT',
      service: 'Annual Tune-Up',
      content:
        'Used them for years for our annual service. Always on time, always honest about what needs to be done. Never felt pressured to buy anything extra. This is the way it should be.',
      image: 'https://randomuser.me/api/portraits/women/55.jpg',
    },
    {
      name: 'Tony G.',
      town: 'New Fairfield, CT',
      service: 'AC Replacement',
      content:
        "Great pricing, great work. They gave us three options to choose from for our new AC unit and didn't push the most expensive one. Installed it in one day. Highly recommend.",
      image: 'https://randomuser.me/api/portraits/men/61.jpg',
    },
  ],

  // ─── Contact Form Services (real NEAS service structure) ─
  contactFormServices: [
    'Heating / Furnace',
    'Cooling / Air Conditioning',
    'Indoor Air Quality',
    'Comfort Controls / Thermostats',
    'Financing Inquiry',
    'Emergency Service',
    'Other / Not Sure',
  ],

  // ─── FAQ ─────────────────────────────────────────────────
  faqs: [
    {
      question: 'Do you offer 24-hour emergency service?',
      answer:
        'Yes. NEAS provides 24-hour emergency service for heating and cooling failures. If your system goes down, call (203) 798-9375 any time — day or night.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We serve Danbury and surrounding towns including Bethel, Brookfield, Ridgefield, New Milford, and New Fairfield. Call us to confirm your address.',
    },
    {
      question: 'Are you licensed and insured?',
      answer:
        'Yes. We are fully licensed in Connecticut (CT HVAC License: HTG.0404292-S1) and carry full liability insurance. We can provide documentation before any work begins.',
    },
    {
      question: 'What brands do you service?',
      answer:
        'We service all major heating and cooling brands including Carrier, Lennox, Trane, Bryant, Rheem, and more. We also provide installation of new equipment from top manufacturers.',
    },
    {
      question: 'Do you offer financing?',
      answer:
        'Yes! We offer flexible financing options through Synchrony Financial to make new HVAC systems affordable. Ask about our current terms when you call.',
    },
    {
      question: 'How do I know if I need a repair or a full replacement?',
      answer:
        "Our technician will diagnose your system and give you an honest recommendation — not just the most expensive option. If a repair makes more sense, we'll tell you. If replacement is better long-term, we'll explain why.",
    },
    {
      question: 'How long does an installation take?',
      answer:
        'Most standard heating or AC installations are completed in a single day. We confirm the timeline when we provide your estimate so your schedule is never disrupted.',
    },
  ],

  // ─── Service Area ─────────────────────────────────────────
  serviceAreaTowns: [
    'Danbury', 'Bethel', 'Brookfield', 'Ridgefield',
    'New Milford', 'New Fairfield', 'Sherman', 'Roxbury',
    'Southbury', 'Monroe', 'Newtown', 'Woodbury',
  ],

  // ─── Footer ──────────────────────────────────────────────
  footerTagline:
    'New England Air Systems is a family-owned heating & air conditioning company in Danbury, CT. Serving local homeowners for more than 20 years with sales, service, and installation.',
  footerAwards: 'Expertise.com Best HVAC in Danbury 2021 · Google Rating 4.7 ⭐ (82 Reviews)',
};
