import Image from 'next/image'

export function AureaNav() {
  const links = [
    { label: 'Rooms', href: '#rooms' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Contact', href: '#contact' },
  ]
  return (
    <nav className="sticky top-11 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-xl tracking-tight text-foreground">Villa Aurea</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Riviera Shqiptare
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#rooms"
          className="inline-flex h-9 items-center rounded-sm bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Book a stay
        </a>
      </div>
    </nav>
  )
}

export function AureaHero() {
  return (
    <section id="top" className="relative">
      <div className="relative h-[70vh] min-h-100 w-full overflow-hidden sm:h-[82vh]">
        <Image
          src="/aurea/hero.png"
          alt="Villa Aurea at dusk on the Albanian Riviera"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 sm:pb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-white/80">
              A boutique escape · 12 rooms
            </p>
            <h1 className="mt-4 max-w-3xl text-balance font-serif text-5xl leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Slow mornings by the Ionian Sea.
            </h1>
            <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-white/85">
              A whitewashed villa above the bay, with olive-shaded terraces,
              a quiet pool and breakfast served until noon.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
