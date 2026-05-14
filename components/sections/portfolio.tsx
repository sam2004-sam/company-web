'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain,
  Eye,
  Thermometer,
  Lightbulb as LightbulbIcon,
  Stethoscope,
  Tractor,
  Lightbulb,
} from 'lucide-react';
import { useLanguage } from '@/components/providers';

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

export function PortfolioSection() {
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
          <div className="section-badge mx-auto mb-6">
            <Lightbulb className="h-4 w-4" />
            <span>{t.portfolio.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">{t.portfolio.title} </span>
            <span className="text-gold">{t.portfolio.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 card-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${project.color}`}
                  >
                    <project.icon className={`h-6 w-6 ${project.iconColor}`} />
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
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {
                    t.portfolio.projects[
                      project.key as keyof typeof t.portfolio.projects
                    ].title
                  }
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {
                    t.portfolio.projects[
                      project.key as keyof typeof t.portfolio.projects
                    ].text
                  }
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.portfolio.projects[
                    project.key as keyof typeof t.portfolio.projects
                  ].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
