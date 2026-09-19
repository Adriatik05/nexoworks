import { Clock, MapPin, Phone } from 'lucide-react'

const hours = [
  { d: 'E Hënë – E Enjte', h: '11:00 – 23:00' },
  { d: 'E Premte – E Shtunë', h: '11:00 – 00:30' },
  { d: 'E Diel', h: '12:00 – 22:00' },
]

export function AromaInfo() {
  return (
    <section id="orari" className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-px overflow-hidden border-x border-border bg-border md:grid-cols-3">
        <div className="bg-background p-8 sm:p-10">
          <Clock className="size-5 text-primary" strokeWidth={1.5} />
          <h3 className="mt-5 text-sm font-medium uppercase tracking-wide text-foreground">
            Orari
          </h3>
          <dl className="mt-4 space-y-3">
            {hours.map((row) => (
              <div key={row.d} className="flex items-baseline justify-between gap-4 text-sm">
                <dt className="text-muted-foreground">{row.d}</dt>
                <dd className="tabular-nums text-foreground">{row.h}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="vendndodhja" className="bg-background p-8 sm:p-10">
          <MapPin className="size-5 text-primary" strokeWidth={1.5} />
          <h3 className="mt-5 text-sm font-medium uppercase tracking-wide text-foreground">
            Vendndodhja
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Rr. Nëna Terezë 24
            <br />
            10000 Prishtinë
            <br />
            Kosovë
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            5 min në këmbë nga sheshi qendror.
          </p>
        </div>

        <div className="bg-background p-8 sm:p-10">
          <Phone className="size-5 text-primary" strokeWidth={1.5} />
          <h3 className="mt-5 text-sm font-medium uppercase tracking-wide text-foreground">
            Kontakt
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            +383 44 123 456
            <br />
            rezervime@aroma-ks.co
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Për grupe mbi 8 persona, na telefononi.
          </p>
        </div>
      </div>
    </section>
  )
}
