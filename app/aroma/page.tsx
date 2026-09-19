import type { Metadata } from 'next'
import { DemoFrame } from '@/components/demo-frame'
import { AromaNav } from '@/components/aroma/aroma-nav'
import { AromaHero } from '@/components/aroma/aroma-hero'
import { AromaMenu } from '@/components/aroma/aroma-menu'
import { AromaInfo } from '@/components/aroma/aroma-info'
import { Reservation } from '@/components/aroma/reservation'

export const metadata: Metadata = {
  title: 'AROMA — Restorant mesdhetar në Prishtinë',
  description:
    'Kuzhinë mesdhetare në zemër të Prishtinës. Rezervo tavolinën tënde online në pak sekonda.',
}

export default function AromaPage() {
  return (
    <div className="theme-aroma min-h-screen bg-background font-sans text-foreground">
      <DemoFrame label="AROMA" />
      <AromaNav />
      <main>
        <AromaHero />
        <AromaMenu />
        <AromaInfo />

        <section id="rezervo" className="border-t border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Rezervim
              </p>
              <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                Rezervo tavolinën tënde
              </h2>
              <p className="mt-5 max-w-sm text-pretty text-base leading-relaxed text-muted-foreground">
                Zgjidh datën, numrin e personave dhe orarin. Konfirmimi është i
                menjëhershëm — pa telefonata, pa pritje.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                <li>· Rezervime deri në 30 ditë përpara</li>
                <li>· Anulim falas deri 2 orë para</li>
                <li>· Grupe të mëdha me kërkesë</li>
              </ul>
            </div>
            <div className="lg:col-span-7">
              <Reservation />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="font-serif text-xl text-foreground">AROMA</p>
          <p className="text-xs text-muted-foreground">
            Rr. Nëna Terezë 24, Prishtinë · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}
