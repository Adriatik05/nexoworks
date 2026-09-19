import type { Metadata } from 'next'
import { DemoFrame } from '@/components/demo-frame'
import { EkHeader, EkHero } from '@/components/ek/ek-hero'
import { Booking } from '@/components/ek/booking'

export const metadata: Metadata = {
  title: 'E.K. Studio — Sallon bukurie në Ferizaj',
  description:
    'Manikyr, gel, french dhe nail art në Ferizaj. Rezervo terminin tënd online me specialistin që zgjedh.',
}

const services = [
  { name: 'Manikyr', price: '€15' },
  { name: 'Gel', price: '€25' },
  { name: 'French', price: '€20' },
  { name: 'Pedikyr', price: '€20' },
  { name: 'Nail Art', price: '€5+' },
]

export default function EkStudioPage() {
  return (
    <div className="theme-ek min-h-screen bg-background font-sans text-foreground">
      <DemoFrame label="E.K. Studio" />
      <EkHeader />
      <main>
        <EkHero />

        <section id="sherbimet" className="mx-auto max-w-5xl px-4 pt-20 sm:px-6 sm:pt-28">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Shërbimet &amp; çmimet
            </h2>
            <span className="text-sm text-muted-foreground">Çmimet në EUR</span>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.name}
                className="flex items-baseline justify-between rounded-2xl border border-border bg-card px-5 py-4"
              >
                <span className="text-sm font-medium text-foreground">{s.name}</span>
                <span className="text-sm text-muted-foreground">{s.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="rezervo" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Rezervim
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Rezervo terminin tënd
              </h2>
              <p className="mt-5 max-w-sm text-pretty text-base leading-relaxed text-muted-foreground">
                Katër hapa të thjeshtë: zgjidh shërbimin, specialistin, orarin dhe
                lëri të dhënat. Konfirmim me SMS.
              </p>
            </div>
            <div className="lg:col-span-7">
              <Booking />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-base font-semibold text-foreground">E.K. Studio</p>
          <p className="text-xs text-muted-foreground">
            Ferizaj, Kosovë · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}
