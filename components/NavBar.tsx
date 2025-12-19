'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/presentation', label: 'Présentation' },
  { href: '/roster', label: 'Roster' },
  { href: '/stats', label: 'Stats' },
  { href: '/recrutement', label: 'Recrutement' },
  { href: '/reglement', label: 'Règlement' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 md:px-8">
        <div className="nav-blur glass relative flex w-full items-center justify-between rounded-2xl border border-white/10 px-4 py-3 shadow-inner-glow">
          <div className="flex items-center gap-3">
            <Link href="/" className="group flex items-center gap-3">
              <div className="logo-badge-sm">
                <Image
                  src="/logo-dsk.png"
                  alt="Logo DSK"
                  width={44}
                  height={44}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              <div>
                <p className="font-semibold text-dsk-ink tracking-[0.08em]">DSK</p>
                <p className="text-xs uppercase text-dsk-muted">Elite PvP Bedrock</p>
              </div>
            </Link>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={{ pathname: link.href }}
                  className={clsx(
                    'relative rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-200',
                    active ? 'text-dsk-ink' : 'text-dsk-muted hover:text-white'
                  )}
                >
                  <span>{link.label}</span>
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-1 -bottom-1 h-0.5 rounded-full bg-dsk-gradient shadow-glow"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/recrutement"
              className="relative hidden items-center gap-2 overflow-hidden rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:-translate-y-0.5 md:inline-flex btn-gradient"
            >
              <span className="button-shine absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-60" />
              <span>Postuler</span>
            </Link>

            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Ouvrir la navigation"
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-6 rounded-full bg-white" />
                <span className="block h-0.5 w-6 rounded-full bg-white" />
                <span className="block h-0.5 w-6 rounded-full bg-white" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 md:hidden"
          >
            <div className="nav-blur glass mt-2 space-y-2 rounded-2xl border border-white/10 p-4 shadow-inner-glow">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={{ pathname: link.href }}
                    className={clsx(
                      'flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors',
                      active
                        ? 'text-dsk-ink bg-white/5 border border-white/10'
                        : 'text-dsk-muted hover:text-white'
                    )}
                  >
                    <span>{link.label}</span>
                    {active && (
                      <span className="h-2 w-2 rounded-full bg-dsk-gradient shadow-glow" />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/recrutement"
                className="mt-1 flex items-center justify-center rounded-xl border border-white/10 px-3 py-2 text-sm font-semibold text-white shadow-glow btn-gradient"
              >
                Postuler
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
