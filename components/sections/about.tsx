'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Target, Eye, Quote } from 'lucide-react';
import { useLanguage } from '@/components/providers';

export function AboutSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="section-badge mx-auto mb-6">
            <Sparkles className="h-4 w-4" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">{t.about.title}</span>{' '}
            <span className="text-gold">{t.about.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
          <p className="text-gold font-semibold mt-4">{t.about.goal}</p>
        </motion.div>

        {/* Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-16 p-8 rounded-2xl bg-card border border-border"
        >
          <Quote className="absolute top-4 left-4 h-12 w-12 text-gold/20" />
          <blockquote className="relative z-10 pl-8">
            <p className="text-lg sm:text-xl italic text-foreground leading-relaxed mb-4">
              Founded with a heart that beats for those who have lost hope,{' '}
              <span className="text-gold font-semibold">Jericho Joy</span> is
              more than a startup — it&apos;s a promise. A promise to solve real
              problems with innovative electronics, making technology accessible,
              affordable, and meaningful. We don&apos;t just build products; we build{' '}
              <span className="text-gold">hope, healing, and happiness.</span>
            </p>
            <cite className="text-gold font-medium not-italic">
              {t.about.quoteAuthor}
            </cite>
          </blockquote>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 card-hover"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 border border-gold/30 mb-6">
                <Target className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gold mb-4">
                {t.about.mission.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To make people happy and solve problems where they have lost hope.
                We give new life through{' '}
                <span className="text-foreground font-medium">
                  affordable, custom electronics
                </span>{' '}
                solutions made in India — touching lives in healthcare, agriculture,
                robotics, and beyond.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="group relative overflow-hidden rounded-2xl bg-gold p-8 card-hover"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy/20 border border-navy/30 mb-6">
                <Eye className="h-7 w-7 text-navy" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">
                {t.about.vision.title}
              </h3>
              <p className="text-navy/80 leading-relaxed">
                To become India&apos;s most trusted electronics innovation house,
                then expand globally — building products that solve{' '}
                <span className="text-navy font-semibold">real-world problems</span>{' '}
                for students, farmers, hospitals, and patients with empathy and
                excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
