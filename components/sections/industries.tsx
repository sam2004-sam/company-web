'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Bot,
  Wifi,
  Heart,
  Stethoscope,
  Sprout,
  GraduationCap,
  Cpu,
  MoreHorizontal,
  MessageCircle,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers';

const industries = [
  {
    key: 'robotics',
    icon: Bot,
    color: 'bg-blue-500/20 border-blue-500/40',
    iconColor: 'text-blue-400',
  },
  {
    key: 'iot',
    icon: Wifi,
    color: 'bg-gold/20 border-gold/40',
    iconColor: 'text-gold',
  },
  {
    key: 'healthcare',
    icon: Heart,
    color: 'bg-rose-500/20 border-rose-500/40',
    iconColor: 'text-rose-400',
  },
  {
    key: 'biomedical',
    icon: Stethoscope,
    color: 'bg-purple-500/20 border-purple-500/40',
    iconColor: 'text-purple-400',
  },
  {
    key: 'agriculture',
    icon: Sprout,
    color: 'bg-green-500/20 border-green-500/40',
    iconColor: 'text-green-400',
  },
  {
    key: 'education',
    icon: GraduationCap,
    color: 'bg-teal-500/20 border-teal-500/40',
    iconColor: 'text-teal-400',
  },
  {
    key: 'embedded',
    icon: Cpu,
    color: 'bg-orange-500/20 border-orange-500/40',
    iconColor: 'text-orange-400',
  },
  {
    key: 'more',
    icon: MoreHorizontal,
    color: 'bg-gradient-to-br from-gold/20 to-blue-500/20 border-gold/40',
    iconColor: 'text-gold',
  },
];

export function IndustriesSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="industries" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="section-badge mx-auto mb-6">
            <Building2 className="h-4 w-4" />
            <span>{t.industries.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">{t.industries.title}</span>{' '}
            <span className="text-gold">{t.industries.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From hospitals to farms, classrooms to clinics — wherever electronics
            can make a difference, we bring{' '}
            <span className="text-gold font-semibold">
              affordable, custom solutions
            </span>{' '}
            without dependence on AI hype.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 card-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border ${industry.color} mb-4`}
                >
                  <industry.icon className={`h-6 w-6 ${industry.iconColor}`} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {
                    t.industries.items[
                      industry.key as keyof typeof t.industries.items
                    ].title
                  }
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {
                    t.industries.items[
                      industry.key as keyof typeof t.industries.items
                    ].text
                  }
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">{t.industries.cta}</p>
          <Button
            asChild
            size="lg"
            className="bg-gold text-navy hover:bg-gold-dark font-semibold px-8 rounded-full"
          >
            <a href="#contact">
              <MessageCircle className="mr-2 h-4 w-4" />
              {t.industries.ctaButton}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
