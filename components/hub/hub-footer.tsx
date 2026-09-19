import Link from 'next/link'
import { NexoLogo } from './logo'
import { demos } from '@/lib/demos'

export function HubFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <NexoLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Studio digjitale për bizneset e vogla dhe të mesme në Kosovë dhe
              Ballkan.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Demot
            </p>
            <ul className="mt-4 space-y-2.5">
              {demos.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={d.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Kontakt
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
              <li>hello@nexoworks.co</li>
              <li>+383 44 000 000</li>
              <li>Prishtinë, Kosovë</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NexoWorks. Të gjitha të drejtat e rezervuara.</p>
          <p>Ndërtuar në Kosovë · EUR</p>
        </div>
      </div>
    </footer>
  )
}
