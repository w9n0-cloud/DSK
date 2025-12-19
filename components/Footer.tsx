import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[0.12em] text-dsk-ink">
            DSK
          </p>
          <p className="text-sm text-dsk-muted">
            Elite PvP Bedrock — discipline, hiérarchie, prestige.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-dsk-muted">
          <a
            href="https://discord.gg/dskprime"
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:border-dsk-primary hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>
          <Link
            href="/recrutement"
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:border-dsk-primary hover:text-white"
          >
            Contact staff
          </Link>
          <p className="ml-2 text-xs text-dsk-muted">
            © DSK — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
