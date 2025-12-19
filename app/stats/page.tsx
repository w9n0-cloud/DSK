'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';

const coreStats = [
  { label: 'Fondation', value: '2018', detail: '7 ans de structure et d’archives.' },
  { label: 'Membres actifs', value: '100+', detail: 'Roster stable, rotations maîtrisées.' },
  { label: 'Candidatures', value: '700+', detail: 'Filtrées, vérifiées, documentées.' },
  { label: 'Orientation', value: 'PvP Bedrock', detail: 'Focus combat, stratégie et réponse rapide.' },
];

const prestige = [
  {
    title: 'Réputation',
    text: 'Faction reconnue pour sa discipline et son sérieux. Les recrutements sont triés et suivis.',
  },
  {
    title: 'Staff pro',
    text: 'Chef, Co-leaders, Officiers. Chaque grade a des responsabilités publiques.',
  },
  {
    title: 'Process scalables',
    text: 'Tickets, revues de candidatures, suivi des essais et montée de grade documentée.',
  },
];

export default function StatsPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        label="Stats & Prestige"
        title="Les chiffres qui définissent DSK"
        description="Année de fondation, volume de candidatures, effectifs et orientation PvP Bedrock. Tout est calibré pour une organisation e-sport."
        kicker="Prestige & Réputation : sérieux, hiérarchie, constance."
      />

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner-glow sm:p-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-dsk-muted">Chiffres</p>
            <h2 className="font-display text-2xl sm:text-3xl">Données clés</h2>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {coreStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5"
            >
              <div className="absolute inset-0 bg-dsk-gradient-fade opacity-70" />
              <div className="relative space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-dsk-muted">
                  {stat.label}
                </p>
                <p className="text-3xl font-semibold text-dsk-ink">{stat.value}</p>
                <p className="text-sm text-dsk-muted">{stat.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-black/60 bg-dsk-gradient-soft p-6 shadow-glow sm:p-8">
        <div className="mb-6 space-y-2">
          <p className="text-xs uppercase tracking-[0.22em] text-dsk-muted">
            Prestige & Réputation
          </p>
          <h3 className="font-display text-2xl sm:text-3xl">
            L’image DSK, maintenue par le règlement et la sélection
          </h3>
          <p className="text-dsk-muted">
            Chaque membre porte le blason : comportement, micro, tenue en vocal, présence en event.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {prestige.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5"
            >
              <div className="absolute inset-0 bg-dsk-gradient-fade opacity-70" />
              <div className="relative space-y-2">
                <p className="text-lg font-semibold text-dsk-ink">{item.title}</p>
                <p className="text-sm text-dsk-muted">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
