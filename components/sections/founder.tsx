'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, ExternalLink, User, Quote, Infinity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers';

const stats = [
  { value: '5+', key: 'projects' },
  { value: '1', key: 'patent' },
  { value: <Infinity className="h-6 w-6" />, key: 'vision' },
];

export function FounderSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="founder" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="section-badge mx-auto mb-6">
            <User className="h-4 w-4" />
            <span>{t.founder.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">{t.founder.title} </span>
            <span className="text-gold">{t.founder.titleHighlight}</span>
          </h2>
        </motion.div>

        {/* Founder Card */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden border-4 border-gold/30 shadow-2xl">
              <Image
                src="/images/founder.jpeg"
                alt="Kokkiligadda Samebenezhar - Founder of Jericho Joy"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-gold text-navy">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy animate-pulse" />
                  Founder & CEO
                </span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col"
          >
            <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-2">
              <span className="text-foreground">Kokkiligadda</span>{' '}
              <span className="text-gold">Samebenezhar</span>
            </h3>
            <p className="text-gold font-medium mb-6">{t.founder.role}</p>

            {/* Quote */}
            <div className="relative p-6 rounded-2xl bg-card border border-border mb-6">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-gold/20" />
              <blockquote className="relative z-10 pl-6">
                <p className="text-muted-foreground italic leading-relaxed">
                  &quot;I started Jericho Joy because I&apos;ve seen too many people
                  lose hope in problems that technology could solve. My ultimate
                  goal isn&apos;t profit — it&apos;s{' '}
                  <span className="text-gold font-medium">
                    to make people happy
                  </span>{' '}
                  and give new life to those who&apos;ve lost it. Every product we
                  build carries this promise: affordable innovation born from{' '}
                  <span className="text-gold font-medium">
                    faith, empathy, and engineering excellence.
                  </span>
                  &quot;
                </p>
              </blockquote>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                asChild
                variant="outline"
                className="border-gold/50 hover:bg-gold/10"
              >
                <a
                  href="https://www.linkedin.com/in/samebenezhar-kokkiligadda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  {t.founder.linkedin}
                </a>
              </Button>
              <Button
                asChild
                className="bg-gold text-navy hover:bg-gold-dark"
              >
                <Link href="/portfolio">
                  {t.founder.portfolio}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.key}
                  className="text-center p-4 rounded-xl border border-border bg-card/50"
                >
                  <div className="text-2xl font-bold text-gold mb-1 flex justify-center">
                    {stat.value}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {t.founder.stats[stat.key as keyof typeof t.founder.stats]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
