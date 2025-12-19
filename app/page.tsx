'use client';

import {
  BoltIcon,
  ShieldCheckIcon,
  SignalIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { label: 'Année de fondation', value: '2018' },
  { label: 'Membres actifs', value: '100+' },
  { label: 'Candidatures filtrées', value: '700+' },
];

const identityCards = [
  { title: 'Branches', value: 'Élite & Chill' },
  { title: 'Hiérarchie', value: 'Chef → Membres' },
  { title: 'Orientation', value: 'PvP Bedrock' },
  { title: 'Recrutement', value: 'Filtré & structuré' },
];

const pillars = [
  {
    icon: ShieldCheckIcon,
    title: 'Structure e-sport',
    description:
      'Hiérarchie Chef → Co-leaders → Officiers → Membres. Process clairs, décisions rapides.',
  },
  {
    icon: BoltIcon,
    title: 'Discipline PvP Bedrock',
    description:
      'Scrims, stratégie, optimisation gear. Chaque membre connaît son rôle et les standards DSK.',
  },
  {
    icon: SparklesIcon,
    title: 'Identité prestige',
    description:
      'Blason, cérémonial d’entrée, cohérence visuelle. Respect interne et image publique maîtrisée.',
  },
];

const branches = [
  {
    icon: SignalIcon,
    name: 'DSK Élite',
    focus: 'PvP compétitif, power, domination de territoire.',
    bullet: ['Sélections serrées', 'Coaching staff', 'Protocoles d’alertes instantanés'],
  },
  {
    icon: UserGroupIcon,
    name: 'DSK Chill',
    focus: 'Farm organisé, soutien, montée en régime sans pression.',
    bullet: ['Stabilité éco', 'Encadrement léger', 'Culture DSK sans tryhard'],
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-4xl border border-white/10 bg-dsk-gradient-fade p-[1px] shadow-glow">
        <div className="relative overflow-hidden rounded-4xl bg-black/70">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.2),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(94,227,255,0.16),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(139,92,246,0.15),transparent_40%)] blur-3xl" />
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="relative grid items-center gap-10 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:py-16">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-dsk-muted"
              >
                Since 2018 • Elite PvP Bedrock Faction
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl"
              >
                <span className="bg-dsk-gradient bg-clip-text text-transparent">DSK</span>
                <span className="block text-2xl text-white sm:text-3xl">
                  Domination, discipline, réputation.
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="max-w-2xl text-lg text-dsk-muted"
              >
                Faction PvP Bedrock fondée en 2018. 100+ membres actifs, staff structuré, culture
                élite. Nous jouons pour conserver notre blason et protéger la marque DSK.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="flex flex-wrap items-center gap-3"
              >
                <Link
                  href="/recrutement"
                  className="relative overflow-hidden rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:-translate-y-0.5 btn-gradient"
                >
                  <span className="button-shine absolute inset-0 opacity-0 transition-opacity duration-700 hover:opacity-70" />
                  Postuler maintenant
                </Link>
                <Link
                  href="/presentation"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-dsk-ink transition hover:border-dsk-primary hover:text-white"
                >
                  Découvrir l&apos;organisation
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="grid grid-cols-1 gap-3 sm:grid-cols-3"
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-inner-glow"
                  >
                    <p className="text-sm uppercase tracking-[0.18em] text-dsk-muted">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-semibold text-dsk-ink">{stat.value}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="relative mx-auto flex w-full max-w-lg flex-col gap-6 rounded-3xl border border-white/10 bg-black/60 p-8 text-center shadow-glow"
            >
              <div className="absolute -inset-16 rounded-[40px] bg-[radial-gradient(circle,_rgba(139,92,246,0.25),_rgba(5,4,12,0)_55%)] blur-3xl" />
              <div className="logo-badge mx-auto h-28 w-28">
                <Image
                  src="/logo-dsk.png"
                  alt="Blason DSK"
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="relative space-y-2">
                <p className="text-lg font-semibold text-dsk-ink">Blason DSK</p>
                <p className="text-sm text-dsk-muted">
                  Couronne, étoiles et noir profond. Symbole de prestige et de hiérarchie. Chaque page
                  du site respecte ce code.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {identityCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-left shadow-inner-glow"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-dsk-muted">{item.title}</p>
                    <p className="text-dsk-ink">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-dsk-muted">
              Architecture DSK
            </p>
            <h2 className="font-display text-2xl sm:text-3xl">
              Organisation lisible et prête pour Discord
            </h2>
          </div>
          <Link
            href="/roster"
            className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-dsk-ink transition hover:border-dsk-primary hover:text-white sm:inline-block"
          >
            Voir la hiérarchie
          </Link>
        </div>

        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner-glow md:grid-cols-3">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-white/5 bg-black/40 p-4"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-dsk-gradient shadow-glow">
                <pillar.icon className="h-5 w-5 text-white" aria-hidden />
              </div>
              <p className="text-lg font-semibold text-dsk-ink">{pillar.title}</p>
              <p className="text-sm text-dsk-muted">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner-glow sm:p-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-dsk-muted">Branches</p>
            <h3 className="font-display text-2xl sm:text-3xl">Élite & Chill</h3>
            <p className="text-dsk-muted">
              Deux parcours, une seule identité. On recrute au bon endroit pour chaque profil.
            </p>
          </div>
          <Link
            href="/presentation"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-dsk-ink transition hover:border-dsk-primary hover:text-white"
          >
            Connaître l&apos;ADN DSK
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {branches.map((branch) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6 shadow-glow"
            >
              <div className="absolute inset-0 bg-dsk-gradient-fade opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative space-y-3">
                <p className="text-xs uppercase tracking-[0.18em] text-dsk-muted">
                  {branch.name}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-dsk-gradient shadow-glow">
                    <branch.icon className="h-5 w-5 text-white" aria-hidden />
                  </div>
                  <h4 className="text-xl font-semibold text-dsk-ink">{branch.focus}</h4>
                </div>
                <ul className="space-y-2 text-sm text-dsk-muted">
                  {branch.bullet.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-dsk-gradient shadow-glow" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-black/60 bg-dsk-gradient-soft p-6 shadow-glow sm:p-8">
        <div className="grid gap-6 md:grid-cols-[2fr,1fr] md:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.22em] text-dsk-muted">
              Recrutement filtré
            </p>
            <h3 className="font-display text-2xl sm:text-3xl">
              Nous sélectionnons les profils sérieux et respectueux.
            </h3>
            <p className="text-dsk-muted">
              Process clair : ticket Discord, vérification du comportement, intégration guidée.
              Si tu cherches un environnement mature et organisé, c&apos;est ici.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/recrutement"
                className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white shadow-glow btn-gradient"
              >
                Lire les conditions
              </Link>
              <Link
                href="/reglement"
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-dsk-ink hover:border-dsk-primary hover:text-white"
              >
                Consulter le règlement
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-inner-glow">
            <div className="flex items-center justify-between text-sm text-dsk-muted">
              <span>PvP compétitif Bedrock</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-dsk-ink">
                Priorité
              </span>
            </div>
            <div className="mt-4 space-y-3 text-sm text-dsk-muted">
              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-black/50 p-3">
                <span>Sérieux & respect</span>
                <span className="text-dsk-ink">Obligatoire</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-black/50 p-3">
                <span>Disponibilité</span>
                <span className="text-dsk-ink">Soir & week-end</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-black/50 p-3">
                <span>Orientation</span>
                <span className="text-dsk-ink">DSK Élite ou Chill</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
