import { ArrowRight } from 'lucide-react'

export function HubHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-8 lg:py-32">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
              <span className="inline-block size-1.5 rounded-full bg-brand" aria-hidden />
              Studio digjitale · Kosovë &amp; Ballkan
            </div>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Digital products, built around your business.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Websites, booking systems and custom tools designed to make your
              business look better — and work better.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#demot"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Explore the demos
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#kontakt"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Book a call
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8">
            <dl className="flex flex-col divide-y divide-border">
              {[
                { k: 'Nga', v: '€690', s: 'projekt fillestar · jo €5,000+' },
                { k: 'Dorëzim', v: '2–4 javë', s: 'nga brief te live' },
                { k: 'Produkte', v: '9 demo', v2: 'live', s: 'restorant · sallon · hotel · dyqan · auto · klinikë · prona · servis · operacione' },
              ].map((row) => (
                <div key={row.k} className="flex items-baseline justify-between gap-4 py-5 first:pt-0">
                  <div>
                    <dt className="text-sm text-muted-foreground">{row.k}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground/80">{row.s}</dd>
                  </div>
                  <div className="flex items-baseline gap-1.5 text-right">
                    <span className="font-serif text-3xl leading-none tracking-tight text-foreground">
                      {row.v}
                    </span>
                    {row.v2 ? (
                      <span className="text-xs font-medium text-muted-foreground">{row.v2}</span>
                    ) : null}
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
