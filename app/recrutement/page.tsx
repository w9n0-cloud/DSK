'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

const profiles = [
  'MCBE uniquement • maîtriser les bases PvP et l’équipement.',
  'Sérieux, respectueux, capable de suivre un vocal propre.',
  'Implication régulière (soir et week-end) et feedback honnête.',
];

const conditions = [
  'Respect absolu de la hiérarchie et des décisions staff.',
  'Aucune triche, aucun client modifié non validé.',
  'Comportement mature en vocal et en chat, même sous pression.',
  'Disponibilité pour brief/entrainements DSK Élite ou sessions Chill.',
];

const refused = [
  'Toxicité, insultes, drama.',
  'Cheats, macros non déclarés, duplication.',
  'Instabilité de présence sans prévenir.',
  'Refus d’utiliser les tickets ou les vocaux structurés.',
];

const process = [
  { title: '1. Ticket Discord', text: 'Ouvre un ticket, présente-toi et ton rôle.' },
  { title: '2. Revue staff', text: 'Vérification comportementale et orientation Élite/Chill.' },
  { title: '3. Essai', text: 'Session test : communication, réactivité, respect des calls.' },
  { title: '4. Intégration', text: 'Grade attribué, accès salons, suivi pendant la période d’essai.' },
];

export default function RecruitmentPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        label="Recrutement"
        title="Recrutements ouverts pour MCBE"
        description="Nous filtrons les profils sérieux, respectueux et impliqués. Les candidatures passent par Discord et un passage en staff."
        kicker="Ton objectif : porter le blason DSK et respecter la hiérarchie."
      />

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner-glow sm:p-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-dsk-muted">
              Profil recherché
            </p>
            <h2 className="font-display text-2xl sm:text-3xl">MCBE • PvP • Respect</h2>
          </div>
          <Link
            href="https://discord.com/channels/1323309554586357760/1323362000566484992"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-white shadow-glow btn-gradient"
          >
            Postuler
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            {profiles.map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/40 p-4"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-dsk-gradient shadow-glow" />
                <p className="text-sm text-dsk-ink">{item}</p>
              </motion.div>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-dsk-muted">
              Conditions d’entrée
            </p>
            {conditions.map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/40 p-4"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white/60" />
                <p className="text-sm text-dsk-ink">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner-glow sm:p-8">
        <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.22em] text-dsk-muted">Process</p>
            <h3 className="font-display text-2xl sm:text-3xl">
              Suis le process, prouve ton sérieux
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {process.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4"
                >
                  <div className="absolute inset-0 bg-dsk-gradient-fade opacity-70" />
                  <div className="relative space-y-1">
                    <p className="text-sm font-semibold text-dsk-ink">{step.title}</p>
                    <p className="text-xs text-dsk-muted">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/60 bg-dsk-gradient-soft p-5 shadow-glow">
            <p className="text-xs uppercase tracking-[0.18em] text-dsk-muted">Refusé</p>
            <ul className="mt-3 space-y-3 text-sm text-dsk-ink">
              {refused.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-white/5 bg-white/5 px-3 py-2"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="https://discord.com/channels/1323309554586357760/1323362000566484992"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white shadow-glow btn-gradient"
            >
              Ouvrir un ticket Discord
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
