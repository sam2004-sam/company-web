'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Bot,
  Wifi,
  Heart,
  Stethoscope,
  Sprout,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/components/providers';

const quickLinks = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'industries', href: '#industries' },
  { key: 'research', href: '#research' },
  { key: 'contact', href: '#contact' },
];

const industries = [
  { key: 'robotics', icon: Bot },
  { key: 'iot', icon: Wifi },
  { key: 'healthcare', icon: Heart },
  { key: 'biomedical', icon: Stethoscope },
  { key: 'agriculture', icon: Sprout },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Jericho Joy Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground">
                  Jericho Joy
                </h3>
                <p className="text-xs text-gold">Faith Tech Joy</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {t.footer.tagline}
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-gold">
              <span className="font-bold">IN</span> {t.footer.madeIn}
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-gold mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {t.nav[link.key as keyof typeof t.nav]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-serif text-lg font-bold text-gold mb-4">
              {t.footer.industries}
            </h4>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.key}>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <industry.icon className="h-4 w-4 text-gold/60" />
                    {
                      t.industries.items[
                        industry.key as keyof typeof t.industries.items
                      ].title
                    }
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold text-gold mb-4">
              {t.footer.getInTouch}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@jerichojoy.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 text-gold/60" />
                  info@jerichojoy.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917075755009"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 text-gold/60" />
                  +91 7075755009
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/watTwJApmnMGpSZS7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MapPin className="h-4 w-4 text-gold/60" />
                  Huzurabad, Telangana, India
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/samebenezhar-kokkiligadda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-gold/60" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">{t.footer.copyright}</p>
          <p className="text-sm text-muted-foreground">{t.footer.crafted}</p>
        </div>
      </div>
    </footer>
  );
}
