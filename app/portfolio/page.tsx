'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Brain,
  Eye,
  Thermometer,
  Lightbulb as LightbulbIcon,
  Stethoscope,
  Tractor,
  Lightbulb,
  ArrowLeft,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { BackToTop } from '@/components/back-to-top';

const projects = [
  {
    key: 'rag',
    icon: Brain,
    color: 'bg-purple-500/20 border-purple-500/40',
    iconColor: 'text-purple-400',
    statusColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
  },
  {
    key: 'vision',
    icon: Eye,
    color: 'bg-gold/20 border-gold/40',
    iconColor: 'text-gold',
    statusColor: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
  },
  {
    key: 'climate',
    icon: Thermometer,
    color: 'bg-blue-500/20 border-blue-500/40',
    iconColor: 'text-blue-400',
    statusColor: 'bg-sky-500/20 text-sky-400 border-sky-500/40',
  },
  {
    key: 'street',
    icon: LightbulbIcon,
    color: 'bg-gold/20 border-gold/40',
    iconColor: 'text-gold',
    statusColor: 'bg-sky-500/20 text-sky-400 border-sky-500/40',
  },
  {
    key: 'medical',
    icon: Stethoscope,
    color: 'bg-rose-500/20 border-rose-500/40',
    iconColor: 'text-rose-400',
    statusColor: 'bg-orange-500/20 text-orange-400 border-orange-500/40',
  },
  {
    key: 'agri',
    icon: Tractor,
    color: 'bg-green-500/20 border-green-500/40',
    iconColor: 'text-green-400',
    statusColor: 'bg-orange-500/20 text-orange-400 border-orange-500/40',
  },
];

export default function PortfolioPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" className="gap-2">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </motion.div>

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-12"
          >
            <div className="section-badge mx-auto mb-6">
              <Lightbulb className="h-4 w-4" />
              <span>{t.portfolio.badge}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-foreground">{t.portfolio.title} </span>
              <span className="text-gold">{t.portfolio.titleHighlight}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.portfolio.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 lg:p-8 card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl border ${project.color}`}
                    >
                      <project.icon className={`h-7 w-7 ${project.iconColor}`} />
                    </div>
                    <span
                      className={`text-xs font-medium border rounded-full px-3 py-1 ${project.statusColor}`}
                    >
                      {
                        t.portfolio.projects[
                          project.key as keyof typeof t.portfolio.projects
                        ].status
                      }
                    </span>
                  </div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    {
                      t.portfolio.projects[
                        project.key as keyof typeof t.portfolio.projects
                      ].title
                    }
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {
                      t.portfolio.projects[
                        project.key as keyof typeof t.portfolio.projects
                      ].text
                    }
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {t.portfolio.projects[
                      project.key as keyof typeof t.portfolio.projects
                    ].tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-lg bg-muted text-muted-foreground font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gold/50 hover:bg-gold/10 gap-2"
                    disabled
                  >
                    View Details
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="p-8 rounded-2xl bg-card/50 border border-border">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                Interested in our work?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get in touch to discuss collaboration opportunities or learn more about our projects.
              </p>
              <Button asChild className="bg-gold text-navy hover:bg-gold-dark">
                <Link href="/#contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
