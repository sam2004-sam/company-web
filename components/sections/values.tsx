'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Lightbulb, Users, Smile } from 'lucide-react';
import { useLanguage } from '@/components/providers';

const values = [
  {
    key: 'faith',
    icon: Heart,
    color: 'bg-rose-500/20 border-rose-500/40 text-rose-400',
    iconColor: 'text-rose-400',
  },
  {
    key: 'innovation',
    icon: Lightbulb,
    color: 'bg-gold/20 border-gold/40 text-gold',
    iconColor: 'text-gold',
  },
  {
    key: 'empathy',
    icon: Users,
    color: 'bg-amber-500/20 border-amber-500/40 text-amber-400',
    iconColor: 'text-amber-400',
  },
  {
    key: 'joy',
    icon: Smile,
    color: 'bg-sky-500/20 border-sky-500/40 text-sky-400',
    iconColor: 'text-sky-400',
  },
];

export function ValuesSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Our Core </span>
            <span className="text-gold">Values</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.values.title}
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => (
            <motion.div
              key={value.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 card-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border ${value.color} mb-4`}
                >
                  <value.icon className={`h-6 w-6 ${value.iconColor}`} />
                </div>
                <h3 className="font-serif text-xl font-bold text-gold mb-2">
                  {t.values.items[value.key as keyof typeof t.values.items].title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.values.items[value.key as keyof typeof t.values.items].text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="font-serif text-2xl sm:text-3xl italic text-gold">
            {t.values.quote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
