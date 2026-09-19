'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { NexoLogo } from './logo'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Demot', href: '#demot' },
  { label: 'Shërbimet', href: '#sherbimet' },
  { label: 'Qasja', href: '#qasja' },
  { label: 'Kontakt', href: '#kontakt' },
]

export function HubNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link href="/" aria-label="NexoWorks home">
          <NexoLogo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#kontakt"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Hyr
          </a>
          <a
            href="#kontakt"
            className="inline-flex h-9 items-center rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Fillo projektin
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          aria-label={open ? 'Mbyll menunë' : 'Hap menunë'}
          aria-expanded={open}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      <div
        className={cn(
          'grid overflow-hidden border-t border-border transition-all duration-300 md:hidden',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] border-t-transparent',
        )}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-medium text-background"
            >
              Fillo projektin
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
