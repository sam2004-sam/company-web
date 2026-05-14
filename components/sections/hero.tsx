'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Mouse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers';

const stats = [
  { value: '5+', key: 'projects', icon: Sparkles },
  { value: '6+', key: 'industries', icon: Sparkles },
  { value: '100%', key: 'madeIn', icon: Heart },
];

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-badge mb-8"
          >
            <Sparkles className="h-4 w-4" />
            <span>{t.hero.badge}</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gold mb-4"
          >
            {t.hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-3xl text-balance"
          >
            Keep Faith in Us and Let Our{' '}
            <span className="text-gold font-semibold">Tech</span> Make You{' '}
            <span className="text-gold font-semibold">Joy</span>
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed"
          >
            Empowering lives through innovative electronics in{' '}
            <span className="text-gold">Robotics</span>,{' '}
            <span className="text-gold">IoT</span>,{' '}
            <span className="text-gold">Healthcare</span>,{' '}
            <span className="text-gold">Biomedical</span>, and{' '}
            <span className="text-gold">Agriculture</span>. Affordable, custom
            solutions made with empathy.{' '}
            <span className="text-sm font-medium">IN</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-gold text-navy hover:bg-gold-dark font-semibold px-8 rounded-full"
            >
              <a href="#about">
                {t.hero.cta1}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gold/50 text-foreground hover:bg-gold/10 font-semibold px-8 rounded-full"
            >
              <a href="#contact">{t.hero.cta2}</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-4 sm:gap-8"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.key}
                className="relative flex flex-col items-center p-4 sm:p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
              >
                <stat.icon className="absolute top-2 left-2 sm:top-3 sm:left-3 h-4 w-4 text-gold/60" />
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground text-center">
                  {t.hero.stats[stat.key as keyof typeof t.hero.stats]}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Mouse className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
