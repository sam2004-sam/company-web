'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Star,
  IndianRupee,
  MapPin,
  Wrench,
  Shield,
  Zap,
  Heart,
  Headphones,
  Award,
} from 'lucide-react';
import { useLanguage } from '@/components/providers';

const reasons = [
  { key: 'unique', icon: Star, num: '01' },
  { key: 'affordable', icon: IndianRupee, num: '02' },
  { key: 'madeInIndia', icon: MapPin, num: '03' },
  { key: 'custom', icon: Wrench, num: '04' },
  { key: 'patent', icon: Shield, num: '05' },
  { key: 'electronics', icon: Zap, num: '06' },
  { key: 'empathy', icon: Heart, num: '07' },
  { key: 'support', icon: Headphones, num: '08' },
];

export function WhyUsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why-us" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="section-badge mx-auto mb-6">
            <Award className="h-4 w-4" />
            <span>{t.whyUs.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">{t.whyUs.title} </span>
            <span className="text-gold">{t.whyUs.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We&apos;re not just another tech startup. We&apos;re a movement built on{' '}
            <span className="text-gold font-semibold">
              faith, innovation, and empathy.
            </span>
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 card-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 border border-gold/30">
                    <reason.icon className="h-6 w-6 text-gold" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground border border-border rounded-full px-3 py-1">
                    {reason.num}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {t.whyUs.items[reason.key as keyof typeof t.whyUs.items].title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.whyUs.items[reason.key as keyof typeof t.whyUs.items].text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
