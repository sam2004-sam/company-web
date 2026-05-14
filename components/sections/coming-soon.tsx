'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Package, Briefcase, Newspaper, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers';

const items = [
  {
    key: 'products',
    icon: Package,
    color: 'bg-gold/20 border-gold/40',
    iconColor: 'text-gold',
  },
  {
    key: 'careers',
    icon: Briefcase,
    color: 'bg-gold/20 border-gold/40',
    iconColor: 'text-gold',
  },
  {
    key: 'blog',
    icon: Newspaper,
    color: 'bg-gold/20 border-gold/40',
    iconColor: 'text-gold',
  },
];

export function ComingSoonSection() {
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
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gold mb-4">
            {t.coming.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.coming.subtitle}
          </p>
        </motion.div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {items.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center card-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 right-4">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-gold/20 text-gold border border-gold/30">
                  Soon
                </span>
              </div>
              <div className="relative z-10">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl border ${item.color} mx-auto mb-4`}
                >
                  <item.icon className={`h-7 w-7 ${item.iconColor}`} />
                </div>
                <h3 className="font-serif text-xl font-bold text-gold mb-2">
                  {t.coming.items[item.key as keyof typeof t.coming.items].title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.coming.items[item.key as keyof typeof t.coming.items].text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="section-badge mx-auto mb-4">
            <MessageSquare className="h-4 w-4" />
            <span>GET IN TOUCH</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
