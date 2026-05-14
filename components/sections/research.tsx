'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FileText,
  Lock,
  Cog,
  Lightbulb,
  Shield,
  FlaskConical,
} from 'lucide-react';
import { useLanguage } from '@/components/providers';

const stats = [
  {
    key: 'paper',
    icon: FileText,
    color: 'bg-gold/20 border-gold/40',
    iconColor: 'text-gold',
    badgeColor: 'bg-green-500/20 text-green-400 border-green-500/40',
  },
  {
    key: 'patent',
    icon: Lock,
    color: 'bg-purple-500/20 border-purple-500/40',
    iconColor: 'text-purple-400',
    badgeColor: 'bg-red-500/20 text-red-400 border-red-500/40',
  },
  {
    key: 'prototype',
    icon: Cog,
    color: 'bg-blue-500/20 border-blue-500/40',
    iconColor: 'text-blue-400',
    badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
  },
  {
    key: 'projects',
    icon: Lightbulb,
    color: 'bg-gold/20 border-gold/40',
    iconColor: 'text-gold',
    badgeColor: 'bg-sky-500/20 text-sky-400 border-sky-500/40',
  },
];

export function ResearchSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="research" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="section-badge mx-auto mb-6">
            <FlaskConical className="h-4 w-4" />
            <span>{t.research.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">{t.research.title} </span>
            <span className="text-gold">{t.research.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our work isn&apos;t guesswork. Every innovation is rooted in research,
            protected by patents, and driven by the goal to solve{' '}
            <span className="text-gold font-semibold">real human problems.</span>
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 card-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${stat.color}`}
                  >
                    <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
                  </div>
                  <span
                    className={`text-xs font-medium border rounded-full px-3 py-1 ${stat.badgeColor}`}
                  >
                    {
                      t.research.stats[stat.key as keyof typeof t.research.stats]
                        .badge
                    }
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {t.research.stats[stat.key as keyof typeof t.research.stats].title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.research.stats[stat.key as keyof typeof t.research.stats].text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-navy-light to-navy p-8 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent" />
          <div className="relative z-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gold mb-2">
              {t.research.trustBadge}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.research.trustText}
            </p>
          </div>
        </motion.div>

        {/* Confidential Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-8 flex items-start gap-4 p-6 rounded-2xl border border-border bg-card/50"
        >
          <Shield className="h-8 w-8 text-gold shrink-0 mt-1" />
          <div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-gold font-semibold">Important:</span>{' '}
              {t.research.confidential}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
