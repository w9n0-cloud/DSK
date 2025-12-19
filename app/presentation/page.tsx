'use client';

import {
  CheckBadgeIcon,
  MusicalNoteIcon,
  PlayCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

const timeline = [
  {
    year: '2018',
    title: 'Fondation',
    text: 'Création de DSK avec un noyau PvP exigeant et un Discord structuré dès le premier jour.',
  },
  {
    year: '2019-2021',
    title: 'Top faction Bedrock',
    text: "Progression constante, présence sur les classements, réputation d'équipe disciplinée.",
  },
  {
    year: '2022',
    title: 'Double branche',
    text: 'Lancement DSK Élite pour le compétitif pur et DSK Chill pour le farm organisé.',
  },
  {
    year: '2023-2024',
    title: 'Stabilité & staff',
    text: 'Renforcement du staff, process de recrutement affinés, gestion des candidatures à volume élevé.',
  },
  {
    year: '2025',
    title: 'Focus image & prestige',
    text: 'Site officiel, identité renforcée, intégrations plus courtes mais plus sélectives.',
  },
];

const values = [
  {
    icon: ShieldCheckIcon,
    title: 'Respect et sérieux',
    description:
      "Politesse, esprit d’équipe, communication claire. Le respect est une condition d’entrée et de maintien.",
  },
  {
    icon: CheckBadgeIcon,
    title: 'Performance maîtrisée',
    description:
      'Nous optimisons la préparation : inventaires, rôles, alertes, vocals propres. La victoire est planifiée.',
  },
  {
    icon: SparklesIcon,
    title: 'Organisation',
    description:
      'Tickets, comptes-rendus, hiérarchie visible. Les décisions importantes sont tracées et partagées.',
  },
];

const duality = [
  {
    name: 'DSK Élite',
    focus: 'PvP, power, territoire, scrims et réactivité.',
    points: [
      "Calendrier de scrims et d'entrainements",
      'Co-leaders pour la stratégie en temps réel',
      "Groupes d'intervention rapides",
    ],
  },
  {
    name: 'DSK Chill',
    focus: 'Farm, stabilité économique, soutien en PvP non compétitif.',
    points: [
      'Mentorat léger pour monter en puissance',
      'Règles strictes mais rythme flexible',
      'Intégration vers l’Élite pour les profils prêts',
    ],
  },
];

const socials = [
  {
    name: 'TikTok',
    href: new URL('https://www.tiktok.com/@dskmcbe?_t=ZN-8vJh2Wljx6l&_r=1').toString(),
    icon: MusicalNoteIcon,
  },
  {
    name: 'YouTube',
    href: new URL('https://youtube.com/@dskmcbe?si=TyQ0RZTWkl75Xw4t').toString(),
    icon: PlayCircleIcon,
  },
];

export default function PresentationPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        label="Présentation"
        title="DSK, faction PvP Bedrock née en 2018"
        description="Organisation mature, hiérarchie claire et réputation d’équipe sérieuse. Nous combinons PvP compétitif et stabilité longue durée."
        kicker="Anciennement top faction Bedrock, toujours active et sélective."
      />

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner-glow sm:p-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-dsk-muted">2018 → 2025</p>
            <h2 className="font-display text-2xl sm:text-3xl">Histoire maîtrisée</h2>
          </div>
          <div className="hidden h-px flex-1 bg-dsk-gradient-fade md:block" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5"
            >
              <div className="absolute inset-0 bg-dsk-gradient-fade opacity-60" />
              <div className="relative space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-dsk-muted">{item.year}</p>
                <p className="text-lg font-semibold text-dsk-ink">{item.title}</p>
                <p className="text-sm text-dsk-muted">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner-glow sm:grid-cols-3 sm:p-8">
        {values.map((value) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-white/10 bg-black/40 p-4"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-dsk-gradient shadow-glow">
              <value.icon className="h-5 w-5 text-white" aria-hidden />
            </div>
            <p className="text-lg font-semibold text-dsk-ink">{value.title}</p>
            <p className="text-sm text-dsk-muted">{value.description}</p>
          </motion.div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-black/60 bg-dsk-gradient-soft p-6 shadow-glow sm:p-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-dsk-muted">Dualité</p>
            <h3 className="font-display text-2xl sm:text-3xl">DSK Élite vs DSK Chill</h3>
            <p className="text-dsk-muted">
              Même blason, deux rythmes. Chaque candidat est orienté sur la bonne voie.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {duality.map((branch) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-6"
            >
              <div className="absolute inset-0 bg-dsk-gradient-fade opacity-70" />
              <div className="relative space-y-3">
                <p className="text-xs uppercase tracking-[0.18em] text-dsk-muted">
                  {branch.name}
                </p>
                <p className="text-lg font-semibold text-dsk-ink">{branch.focus}</p>
                <ul className="space-y-2 text-sm text-dsk-muted">
                  {branch.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-dsk-gradient shadow-glow" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-dsk-ink transition hover:border-dsk-primary hover:text-white"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-dsk-gradient shadow-glow">
                <social.icon className="h-5 w-5 text-white" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-semibold">{social.name}</p>
                <p className="text-xs text-dsk-muted group-hover:text-white/80">
                  Rejoindre la communauté officielle DSK
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
