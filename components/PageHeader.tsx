'use client';

import { motion } from 'framer-motion';

type PageHeaderProps = {
  label: string;
  title: string;
  description: string;
  kicker?: string;
};

export default function PageHeader({
  label,
  title,
  description,
  kicker,
}: PageHeaderProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-dsk-gradient-fade p-[1px] shadow-glow"
    >
      <div className="relative rounded-3xl bg-black/50 px-6 py-10 sm:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_35%),radial-gradient(circle_at_70%_20%,rgba(94,227,255,0.12),transparent_30%)] blur-3xl" />
        <div className="relative space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-dsk-muted">
            {label}
          </p>
          <h1 className="max-w-3xl font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="max-w-3xl text-lg text-dsk-muted">{description}</p>
          {kicker && <p className="text-sm text-dsk-ink">{kicker}</p>}
        </div>
      </div>
    </motion.section>
  );
}
