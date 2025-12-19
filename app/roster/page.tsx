'use client';

import { ShieldCheckIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import PageHeader from '@/components/PageHeader';

type Member = { id: string; name: string; avatar: string };
type RosterGroup = { title: string; members: Member[] };
type RosterPayload = {
  elite: { label: string; groups: RosterGroup[] };
  chill: { label: string; groups: RosterGroup[] };
};

const groupOrder = ['Chef', 'Co-leader', 'Officier', 'Membre'];

export default function RosterPage() {
  const [data, setData] = useState<RosterPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const sortGroups = (groups: RosterGroup[]) =>
    [...groups].sort(
      (a, b) => groupOrder.indexOf(a.title) - groupOrder.indexOf(b.title)
    );

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/roster', { cache: 'no-store' });
        if (!res.ok) throw new Error('Impossible de charger le roster Discord');
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const renderList = (groups: RosterGroup[]) => (
    <div className="space-y-3">
      {sortGroups(groups).map((group) => {
        const isMember = group.title === 'Membre';
        return (
          <div key={group.title} className="rounded-2xl border border-white/5 bg-white/5 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-dsk-muted">
              <span>{group.title}</span>
              <span className="rounded-full bg-white/10 px-2 py-1 text-dsk-ink">
                {group.members.length}
              </span>
            </div>
            <div
              className={clsx(
                'grid grid-cols-1 gap-2 sm:grid-cols-2',
                isMember && 'lg:grid-cols-3 xl:grid-cols-4'
              )}
            >
              {group.members.map((member) => (
                <a
                  key={member.id}
                  href={`https://discord.com/users/${member.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/5 bg-black/40 px-3 py-2 text-sm text-dsk-ink hover:text-white"
                >
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-lg object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">{member.name}</span>
                    <span className="text-xs text-dsk-muted">{group.title}</span>
                  </div>
                </a>
              ))}
              {group.members.length === 0 && (
                <p className="text-sm text-dsk-muted col-span-2">Aucun membre pour ce rôle.</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="space-y-10">
      <PageHeader
        label="Roster"
        title="Hiérarchie DSK — leadership en direct Discord"
        description="Structure claire : Chef, Co-leaders, Officiers, Membres. Chaque rôle a un périmètre précis et une visibilité publique."
        kicker="Synchro live depuis Discord : Élite et Chill affichés automatiquement."
      />

      {/* Élite */}
      <section className="rounded-3xl border border-white/10 bg-black/60 bg-dsk-gradient-soft p-6 shadow-glow sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5"
        >
          <div className="absolute inset-0 bg-dsk-gradient-fade opacity-70" />
          <div className="relative space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-dsk-gradient shadow-glow">
                  <ShieldCheckIcon className="h-5 w-5 text-white" aria-hidden />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-dsk-muted">DSK Élite</p>
                  <p className="text-sm text-dsk-muted">
                    Priorité aux rôles supérieurs, affichage dense en colonnes.
                  </p>
                </div>
              </div>
              {!loading && !error && data && (
                <p className="text-sm text-dsk-muted">
                  {data.elite.groups.reduce((acc, g) => acc + g.members.length, 0)} membres
                </p>
              )}
            </div>

            {loading && <p className="text-dsk-muted text-sm">Chargement du roster Discord…</p>}
            {error && (
              <p className="text-sm text-red-400">
                {error} — vérifie le bot, le token, l’ID du serveur et l’intent &quot;Server Members&quot;.
              </p>
            )}

            {data && !loading && !error && renderList(data.elite.groups)}
          </div>
        </motion.div>
      </section>

      {/* Chill */}
      <section className="rounded-3xl border border-white/10 bg-black/60 bg-dsk-gradient-soft p-6 shadow-glow sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5"
        >
          <div className="absolute inset-0 bg-dsk-gradient-fade opacity-70" />
          <div className="relative space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-dsk-gradient shadow-glow">
                  <ShieldCheckIcon className="h-5 w-5 text-white" aria-hidden />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-dsk-muted">DSK Chill</p>
                  <p className="text-sm text-dsk-muted">
                    Affichage large pour utiliser toute la colonne.
                  </p>
                </div>
              </div>
              {!loading && !error && data && (
                <p className="text-sm text-dsk-muted">
                  {data.chill.groups.reduce((acc, g) => acc + g.members.length, 0)} membres
                </p>
              )}
            </div>

            {data && !loading && !error ? (
              renderList(data.chill.groups)
            ) : loading ? (
              <p className="text-sm text-dsk-muted">Chargement du roster Chill…</p>
            ) : error ? (
              <p className="text-sm text-red-400">
                {error} — vérifie le bot, le token et l’ID du serveur.
              </p>
            ) : null}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
