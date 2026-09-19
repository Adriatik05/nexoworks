import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { demos } from '@/lib/demos'
import { AromaPreview, EkPreview, AureaPreview, FormePreview, NewDemoPreview } from './previews'
import { cn } from '@/lib/utils'

const previewMap: Record<string, React.ReactNode> = {
  aroma: <AromaPreview />,
  'ek-studio': <EkPreview />,
  'villa-aurea': <AureaPreview />,
  forme: <FormePreview />,
  autohaus: <NewDemoPreview name="AutoHaus" label="Vehicle inventory" accent="Featured vehicles" />,
  'oris-dental': <NewDemoPreview name="Oris Dental" label="Appointments" accent="Treatments" />,
  'forma-properties': <NewDemoPreview name="Forma Properties" label="Property discovery" accent="Curated listings" />,
  drivecare: <NewDemoPreview name="DriveCare" label="Custom tool" accent="Service booking" />,
  northline: <NewDemoPreview name="Northline" label="Internal software" accent="Revenue overview" />,
}

export function DemoShowcase() {
  return (
    <section id="demot" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-4 py-14 md:flex-row md:items-end md:justify-between md:py-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Nëntë produkte të vërteta
            </p>
            <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Explore nine live client products
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Secili demo është ndërtuar si një produkt real — me identitet, rrjedha dhe ndërveprime të menduara për biznesin që e përdor.
          </p>
        </div>
      </div>

      <div className="divide-y divide-border border-t border-border">
        {demos.map((demo, i) => {
          const flip = i % 2 === 1
          return (
            <div key={demo.slug} className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
              <div className="grid items-center gap-8 py-14 md:grid-cols-2 md:gap-12 md:py-20 lg:gap-20">
                <div className={cn('order-1', flip && 'md:order-2')}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">
                      {demo.index}
                    </span>
                    <span className="h-px w-8 bg-border" aria-hidden />
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      {demo.accentLabel}
                    </span>
                  </div>
                  <h3 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {demo.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {demo.category} · {demo.location}
                  </p>
                  <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                    {demo.description}
                  </p>
                  <p className="mt-4 font-serif text-lg italic text-foreground/80">
                    {demo.tagline}
                  </p>
                  <Link
                    href={demo.href}
                    className="group mt-7 inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
                  >
                    Explore demo
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                <div className={cn('order-2', flip && 'md:order-1')}>
                  <Link
                    href={demo.href}
                    aria-label={`Open ${demo.name} demo`}
                    className="group block transition-transform duration-300 will-change-transform hover:-translate-y-1"
                  >
                    <div className="relative">
                      <div
                        className="absolute -inset-3 -z-10 rounded-2xl bg-muted/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden
                      />
                      {previewMap[demo.slug]}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
