import { ArrowRight } from 'lucide-react'

const steps = [
  {
    n: '01',
    title: 'Brief',
    desc: 'Një thirrje 30-minutëshe për të kuptuar biznesin, klientët dhe qëllimet tuaja.',
  },
  {
    n: '02',
    title: 'Dizajn',
    desc: 'Ju dërgojmë një dizajn të vërtetë — jo shabllon — të ndërtuar rreth markës suaj.',
  },
  {
    n: '03',
    title: 'Ndërto & Lanso',
    desc: 'E ndërtojmë, e testojmë dhe e lansojmë. Ju e zotëroni gjithçka.',
  },
]

export function ApproachContact() {
  return (
    <>
      <section id="qasja" className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="py-16 md:py-24">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Qasja
            </p>
            <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A calm, transparent process — from first call to launch.
            </h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n} className="bg-background p-7">
                  <span className="font-mono text-sm text-muted-foreground">{s.n}</span>
                  <h3 className="mt-6 text-lg font-medium text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid items-center gap-10 py-20 md:grid-cols-12 md:py-28">
            <div className="md:col-span-8">
              <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
                Let&apos;s make your business look like the leader it is.
              </h2>
              <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
                Na tregoni për projektin tuaj. Ju kthejmë përgjigje brenda 24
                orëve me hapat e mëtejshëm dhe një çmim të qartë.
              </p>
            </div>
            <div className="md:col-span-4 md:justify-self-end">
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hello@nexoworks.co"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  hello@nexoworks.co
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="tel:+38344000000"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  +383 44 000 000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
