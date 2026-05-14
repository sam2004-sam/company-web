'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Send,
  User,
  AtSign,
  FileText,
  MessageSquare,
  Briefcase,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/components/providers';

export function ContactSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const mapUrl = 'https://maps.app.goo.gl/watTwJApmnMGpSZS7';
  const mapEmbedUrl = 'https://www.google.com/maps?q=18.1997074,79.4028972&hl=en&z=17&output=embed';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const subject = formData.get('subject')?.toString() || 'Contact from website';
    const message = formData.get('message')?.toString() || '';
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:info@jerichojoy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl, '_self');
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="section-badge mx-auto mb-6">
            <Mail className="h-4 w-4" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">{t.contact.title} </span>
            <span className="text-gold">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-serif text-2xl font-bold text-gold mb-2">
                {t.contact.info.title}
              </h3>
              <p className="text-muted-foreground mb-8">
                {t.contact.info.subtitle}
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 border border-gold/30">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {t.contact.info.email}
                    </p>
                    <a
                      href="mailto:info@jerichojoy.com"
                      className="text-foreground font-medium hover:text-gold transition-colors"
                    >
                      info@jerichojoy.com
                    </a>
                    <br />
                    <a
                      href="mailto:support@jerichojoy.com"
                      className="text-sm text-muted-foreground hover:text-gold transition-colors"
                    >
                      support@jerichojoy.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 border border-gold/30">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {t.contact.info.phone}
                    </p>
                    <a
                      href="tel:+917075755009"
                      className="text-foreground font-medium hover:text-gold transition-colors"
                    >
                      +91 7075755009
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 border border-gold/30">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {t.contact.info.location}
                    </p>
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground font-medium hover:text-gold transition-colors"
                    >
                      Indira Marg, Huzurabad, Telangana 505468
                    </a>
                    <p className="text-sm text-muted-foreground">
                      Telangana, India <span className="font-medium">IN</span>
                    </p>
                  </div>
                </div>

                {/* Business Email */}
                <div className="flex items-start gap-4 pt-4 border-t border-border">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 border border-gold/30">
                    <Briefcase className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gold font-medium">
                      {t.contact.info.business}
                    </p>
                    <a
                      href="mailto:admin@jerichojoy.com"
                      className="text-foreground hover:text-gold transition-colors"
                    >
                      admin@jerichojoy.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8 pt-6 border-t border-border">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-gold/50 hover:bg-gold/10 flex-1"
                >
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                    <ExternalLink className="ml-auto h-3 w-3" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-gold/50 hover:bg-gold/10 flex-1"
                >
                  <a
                    href="https://jerichojoy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jericho Joy
                    <ExternalLink className="ml-auto h-3 w-3" />
                  </a>
                </Button>
              </div>

              <div className="mt-8 rounded-3xl border border-border bg-background p-4">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">
                      {t.contact.info.location}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Tap the address to open it in Google Maps.
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-3xl border border-border">
                  <iframe
                    src={mapEmbedUrl}
                    className="h-48 w-full border-0"
                    loading="lazy"
                    allowFullScreen
                    title="Jericho Joy Location"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-serif text-2xl font-bold text-gold mb-6">
                {t.contact.form.title}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm"
                  >
                    <User className="h-4 w-4 text-gold" />
                    {t.contact.form.name}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t.contact.form.namePlaceholder}
                    required
                    className="bg-background border-border focus:border-gold focus:ring-gold"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="flex items-center gap-2 text-sm"
                  >
                    <AtSign className="h-4 w-4 text-gold" />
                    {t.contact.form.email}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t.contact.form.emailPlaceholder}
                    required
                    className="bg-background border-border focus:border-gold focus:ring-gold"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="subject"
                    className="flex items-center gap-2 text-sm"
                  >
                    <FileText className="h-4 w-4 text-gold" />
                    {t.contact.form.subject}
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder={t.contact.form.subjectPlaceholder}
                    required
                    className="bg-background border-border focus:border-gold focus:ring-gold"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="flex items-center gap-2 text-sm"
                  >
                    <MessageSquare className="h-4 w-4 text-gold" />
                    {t.contact.form.message}
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={t.contact.form.messagePlaceholder}
                    required
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold text-navy hover:bg-gold-dark font-semibold"
                >
                  {t.contact.form.submit}
                  <Send className="ml-2 h-4 w-4" />
                </Button>              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
