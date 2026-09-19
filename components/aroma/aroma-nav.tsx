export function AromaNav() {
  const links = [
    { label: 'Menu', href: '#menu' },
    { label: 'Orari', href: '#orari' },
    { label: 'Vendndodhja', href: '#vendndodhja' },
  ]
  return (
    <nav className="sticky top-11 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-serif text-2xl tracking-tight text-foreground">
          AROMA
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#rezervo"
          className="inline-flex h-9 items-center rounded-sm bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Rezervo tavolinën
        </a>
      </div>
    </nav>
  )
}
