// ============================================================
// SiteConfig — Master interface for all HVAC website clones
// To create a new client site: copy this file + neas.config.ts
// Fill in all required fields and drop in as the active config
// ============================================================

export interface SiteReview {
  rating: number;           // e.g. 4.9
  count: number;            // e.g. 87
  googleMapsUrl: string;    // link to Google Maps reviews
}

export interface SiteOffer {
  enabled: boolean;
  emoji: string;            // e.g. "🌸"
  label: string;            // e.g. "Spring Special: AC Tune-Up for $89"
}

export interface SiteTestimonial {
  name: string;             // Full name: "David Marchetti"
  town: string;             // Town + state: "Danbury, CT"
  service: string;          // Service they used: "Emergency Heating Repair"
  content: string;          // Quote body
  image: string;            // Avatar URL
}

export interface SiteService {
  title: string;
  description: string;
  cta: string;              // Button label: "Get Heating Help"
  icon: string;             // Lucide icon name: "Flame" | "Snowflake" | "Wind" | "Thermometer" | "CreditCard"
}

export interface SiteFAQ {
  question: string;
  answer: string;
}

export interface SiteTrustBadge {
  label: string;            // e.g. "Expertise.com"
  sub: string;              // e.g. "Best HVAC Danbury 2021"
  icon: string;             // Lucide icon name: "Award" | "ShieldCheck" | "Star" | "CheckCircle" | "Wrench"
}

export interface SiteProcessStep {
  number: string;           // "01" — "05"
  title: string;
  description: string;
  icon: string;             // Lucide icon name
}

export interface SiteMaintenancePlan {
  name: string;             // e.g. "Comfort Club"
  tagline: string;          // Short pitch
  description: string;      // Paragraph body
  priceMonthly: number;     // e.g. 14
  priceAnnual: number;      // e.g. 149
  memberCount: number;      // Social proof: "200+ members"
  benefits: string[];       // List of benefits
  highlights: {             // 3 highlight bullets on the card
    icon: string;
    text: string;
  }[];
}

export interface SiteConfig {
  // ─── Brand ───────────────────────────────────────────────
  businessName: string;       // "New England Air Systems"
  tagline: string;            // "HVAC Heating & Cooling Danbury CT"
  metaDescription: string;    // SEO description
  logoText: {
    line1: string;            // "New England"
    line2: string;            // "Air Systems"
  };
  logoIcon: string;           // Lucide icon name: "Wind" | "Flame" | "Snowflake"

  // ─── Colors ──────────────────────────────────────────────
  colors: {
    primary: string;          // Tailwind or hex: "amber-400" or "#FBBF24"
    primaryHex: string;       // Hex always: "#FBBF24"
    dark: string;             // Background dark: "#0D1B2A"
    darkHover: string;        // Dark hover: "#162433"
    ctaText: string;          // Text on primary button: "slate-900"
  };

  // ─── Contact ─────────────────────────────────────────────
  phone: string;              // Raw digits: "2037989375"
  phoneFormatted: string;     // Display: "(203) 798-9375"
  email: string;              // "info@neas-hvac.com"
  address: {
    street: string;           // "26 Federal Rd"
    city: string;             // "Danbury"
    state: string;            // "CT"
    zip: string;              // "06810"
  };
  hours: {
    weekdays: string;         // "Mon–Fri: 7am – 7pm"
    saturday: string;         // "Sat: 8am – 5pm"
    emergency: boolean;       // true = show "Emergency: Always Available"
  };

  // ─── SEO / Meta ──────────────────────────────────────────
  siteUrl: string;            // "https://neas-hvac.com"
  license: string;            // "CT Lic. HTG.0404292-S1"

  // ─── Hero ────────────────────────────────────────────────
  hero: {
    headline: string[];       // 3 lines: ["Danbury's Most", "Trusted HVAC", "for 20+ Years."]
    accentLine: number;       // Which line gets the accent color (0-indexed): 1
    valueProp: string;        // Short tagline: "Family-owned. Licensed. Honest pricing."
    subText: string;          // Geo sentence below value prop
    heroBgUrl: string;        // Unsplash or custom image URL
    primaryCTA: string;       // "Get My Free Estimate"
    emergencyText: string;    // "No heat or AC? We respond fast."
  };

  // ─── Offer Strip (Pattern 4) ─────────────────────────────
  offer: SiteOffer;

  // ─── Reviews (Pattern 2) ─────────────────────────────────
  reviews: SiteReview;

  // ─── Trust Badges (Pattern 5) ────────────────────────────
  trustBadges: SiteTrustBadge[];

  // ─── Services ────────────────────────────────────────────
  services: SiteService[];
  servicesHeadline: string;
  servicesSubhead: string;

  // ─── Why Choose Us ───────────────────────────────────────
  whyUs: {
    yearsInBusiness: number;          // 20
    yearsLabel: string;               // "Years Serving Danbury"
    headline: string;
    body: string;
    imageUrl: string;
    imageAlt: string;
    benefits: string[];
    ctaLabel: string;
  };

  // ─── How It Works (Pattern 9) ────────────────────────────
  process: SiteProcessStep[];
  processHeadline: string;
  processSubhead: string;

  // ─── Maintenance Plan (Pattern 6) ────────────────────────
  maintenancePlan: SiteMaintenancePlan;

  // ─── Testimonials (Pattern 10) ───────────────────────────
  testimonials: SiteTestimonial[];

  // ─── Contact Form ────────────────────────────────────────
  contactFormServices: string[];     // Dropdown options

  // ─── FAQ ─────────────────────────────────────────────────
  faqs: SiteFAQ[];

  // ─── Service Area (Pattern 8) ────────────────────────────
  serviceAreaTowns: string[];

  // ─── Footer ──────────────────────────────────────────────
  footerTagline: string;
  footerAwards: string;             // "Best HVAC in Danbury — Expertise.com 2021 · Google Rating 4.9 ⭐"
}
