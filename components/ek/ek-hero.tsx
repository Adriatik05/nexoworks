import Image from 'next/image'
import { MapPin, Star } from 'lucide-react'

export function EkHeader() {
  return (
    <nav className="sticky top-11 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-base font-semibold tracking-tight text-foreground">
          E.K. <span className="text-muted-foreground">Studio</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#sherbimet" className="text-sm text-muted-foreground hover:text-foreground">
            Shërbimet
          </a>
          <a href="#rezervo" className="text-sm text-muted-foreground hover:text-foreground">
            Rezervo
          </a>
        </div>
        <a
          href="#rezervo"
          className="inline-flex h-9 items-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Rezervo termin
        </a>
      </div>
    </nav>
  )
}

export function EkHero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-4 pt-14 sm:px-6 sm:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <MapPin className="size-3.5" /> Ferizaj, Kosovë
          </div>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Kujdes për thonjtë, i menduar në detaje.
          </h1>
          <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Manikyr, gel dhe nail art nga një ekip i vogël dhe i përkushtuar.
            Rezervo terminin tënd në pak hapa.
          </p>
          <div className="mt-7 flex items-center gap-5">
            <a
              href="#rezervo"
              className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Rezervo termin
            </a>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Star className="size-4 fill-primary text-primary" />
              <span className="font-medium text-foreground">4.9</span> · 260+ klientë
            </div>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl lg:aspect-[4/4.4]">
          <Image
            src="/ek/hero.png"
            alt="Interior of E.K. Studio beauty salon"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
