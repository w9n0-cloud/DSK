'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';

const rules = [
  {
    title: 'Respect obligatoire',
    text: 'Aucun drama, aucun trash talk interne. Les conflits passent par un ticket staff.',
  },
  {
    title: 'Aucune triche',
    text: 'Clients moddés interdits sans validation. Screens et logs peuvent être demandés.',
  },
  {
    title: 'Hiérarchie respectée',
    text: 'Chef → Co-leaders → Officiers → Membres. Les décisions se suivent, les débats sont cadrés.',
  },
  {
    title: 'Comportement mature',
    text: 'Vocal propre, micro calibré, présence annoncée. Les absences se signalent.',
  },
  {
    title: 'Sécurité serveur',
    text: 'Pas de partage de comptes, pas de fuite d’informations stratégiques.',
  },
  {
    title: 'Participation',
    text: 'Disponibilité minimale selon la branche. Les events obligatoires sont signalés en avance.',
  },
];

export default function RulesPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        label="Règlement"
        title="Règlement DSK — clair et professionnel"
        description="Chaque membre accepte ces règles. Elles protègent l’image DSK, la hiérarchie et la performance collective."
      />

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner-glow sm:p-8">
        <div className="mb-6 space-y-2">
          <p className="text-xs uppercase tracking-[0.22em] text-dsk-muted">Règles</p>
          <h2 className="font-display text-2xl sm:text-3xl">À lire avant de postuler</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5"
            >
              <div className="absolute inset-0 bg-dsk-gradient-fade opacity-70" />
              <div className="relative space-y-2">
                <p className="text-sm font-semibold text-dsk-ink">{rule.title}</p>
                <p className="text-sm text-dsk-muted">{rule.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-black/60 bg-dsk-gradient-soft p-6 shadow-glow sm:p-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-dsk-muted">
            Engagement
          </p>
          <h3 className="font-display text-2xl sm:text-3xl">
            Respect du règlement = accès, non-respect = sanction
          </h3>
          <p className="text-dsk-muted">
            Avertissements, rétrogradation, exclusion : les sanctions sont graduées et tracées.
            En adhérant à DSK, tu acceptes la cohérence et l’exigence qui protègent notre image.
          </p>
        </div>
      </section>
    </div>
  );
}
