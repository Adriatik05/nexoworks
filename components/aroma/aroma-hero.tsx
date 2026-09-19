import Image from 'next/image'
import { MapPin } from 'lucide-react'

export function AromaHero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pt-14 pb-6 sm:px-6 sm:pt-20">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <MapPin className="size-3.5" /> Prishtinë, Kosovë
        <span className="h-px flex-1 bg-border" aria-hidden />
        <span>Est. 2019</span>
      </div>
      <h1 className="mt-6 max-w-3xl text-balance font-serif text-5xl leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
        Kuzhinë mesdhetare, e gatuar me zjarr të ngadaltë.
      </h1>
      <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
        Përbërës sezonalë nga fermat vendore, verëra ballkanike dhe një sallë e
        ngrohtë në zemër të Prishtinës. Rezervoni tavolinën tuaj në pak sekonda.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#rezervo"
          className="inline-flex h-11 items-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Rezervo tavolinën
        </a>
        <a
          href="#menu"
          className="inline-flex h-11 items-center rounded-sm border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Shiko menunë
        </a>
      </div>

      <div className="mt-14 grid gap-3 sm:grid-cols-3">
        <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-sm">
          <Image
            src="/aroma/hero.png"
            alt="Interior of AROMA restaurant at golden hour"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 66vw"
            className="object-cover"
          />
        </div>
        <div className="grid grid-rows-2 gap-3">
          <div className="relative overflow-hidden rounded-sm">
            <Image
              src="/aroma/dish-1.png"
              alt="Grilled fish main course"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-sm">
            <Image
              src="/aroma/dish-2.png"
              alt="Handmade pasta dish"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
