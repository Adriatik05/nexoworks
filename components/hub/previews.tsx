import Image from 'next/image'
import { Calendar, Check, Clock, Minus, Plus, Star } from 'lucide-react'

/* Each preview is wrapped in its demo theme so the hub literally previews
   the product's own palette, type and radius — four distinct experiences. */

export function AromaPreview() {
  const slots = ['18:30', '19:00', '19:30', '20:00']
  return (
    <div className="theme-aroma rounded-xl border border-border bg-background p-4 font-sans shadow-sm sm:p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-serif text-xl leading-none text-foreground">AROMA</p>
          <p className="mt-1 text-[11px] tracking-wide text-muted-foreground">Prishtinë</p>
        </div>
        <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-medium text-primary-foreground">
          Rezervo tavolinën
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-md border border-border bg-card px-3 py-2">
          <p className="text-[10px] text-muted-foreground">Zgjidh datën</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-sm text-foreground">
            <Calendar className="size-3.5 text-primary" /> 14 Qershor
          </p>
        </div>
        <div className="rounded-md border border-border bg-card px-3 py-2">
          <p className="text-[10px] text-muted-foreground">Persona</p>
          <p className="mt-0.5 text-sm text-foreground">2 persona</p>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {slots.map((s, i) => (
          <div
            key={s}
            className={
              'rounded-md border px-1 py-1.5 text-center text-xs ' +
              (i === 2
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-card text-foreground')
            }
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  )
}

export function EkPreview() {
  const services = [
    { n: 'Manikyr', p: '€15' },
    { n: 'Gel', p: '€25' },
    { n: 'French', p: '€20' },
  ]
  return (
    <div className="theme-ek rounded-2xl border border-border bg-background p-4 font-sans shadow-sm sm:p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold tracking-tight text-foreground">E.K. Studio</p>
        <span className="text-[11px] text-muted-foreground">Ferizaj</span>
      </div>
      <div className="mt-3 space-y-1.5">
        {services.map((s, i) => (
          <div
            key={s.n}
            className={
              'flex items-center justify-between rounded-xl border px-3 py-2 text-sm ' +
              (i === 1 ? 'border-primary bg-accent' : 'border-border bg-card')
            }
          >
            <span className="flex items-center gap-2 text-foreground">
              {i === 1 ? (
                <Check className="size-3.5 text-primary" />
              ) : (
                <span className="size-3.5 rounded-full border border-border" aria-hidden />
              )}
              {s.n}
            </span>
            <span className="text-muted-foreground">{s.p}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-full bg-primary px-4 py-2">
        <span className="text-xs font-medium text-primary-foreground">Rezervo termin</span>
        <span className="flex items-center gap-1 text-[11px] text-primary-foreground/80">
          <Clock className="size-3" /> 11:30
        </span>
      </div>
    </div>
  )
}

export function AureaPreview() {
  return (
    <div className="theme-aurea overflow-hidden rounded-sm border border-border bg-background font-sans shadow-sm">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src="/aurea/room-1.png"
          alt="Deluxe sea-view room at Villa Aurea"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-background/90 px-2 py-1 text-[10px] font-medium tracking-wide text-foreground backdrop-blur">
          Riviera Shqiptare
        </span>
      </div>
      <div className="flex items-center justify-between p-4">
        <div>
          <p className="font-serif text-lg leading-none text-foreground">Deluxe Sea View</p>
          <p className="mt-1.5 flex items-center gap-1 text-[11px] text-muted-foreground">
            <Star className="size-3 fill-primary text-primary" /> 4.9 · Mëngjes i përfshirë
          </p>
        </div>
        <div className="text-right">
          <p className="text-base font-semibold text-foreground">€180</p>
          <p className="text-[10px] text-muted-foreground">/ natë</p>
        </div>
      </div>
    </div>
  )
}

export function NewDemoPreview({ name, label, accent }: { name: string; label: string; accent: string }) {
  const config = {
    'AutoHaus': { image: '/autoh aus/hero.png', tint: 'bg-[#ecebe6]', stat: '€42,900', detail: 'BMW 530d xDrive · 2021' },
    'Oris Dental': { image: '/oris/hero.png', tint: 'bg-[#e8f0ea]', stat: '14:30', detail: 'Appointment availability' },
    'Forma Properties': { image: '/forma/hero.png', tint: 'bg-[#ece9df]', stat: '€320,000', detail: 'Penthouse Residence' },
    'DriveCare': { image: '/drivecare/hero.png', tint: 'bg-[#e5eef0]', stat: '€69', detail: 'Oil & Filter Service' },
    Northline: { image: '/drivecare/hero.png', tint: 'bg-[#f0ede7]', stat: '€2,840', detail: "Today's revenue" },
  }[name as 'AutoHaus' | 'Oris Dental' | 'Forma Properties' | 'DriveCare' | 'Northline']
  return (
    <div className={`overflow-hidden border border-border shadow-sm ${config?.tint ?? 'bg-white'}`}>
      <div className="flex items-center justify-between border-b border-black/10 px-4 py-3">
        <span className="text-sm font-semibold tracking-tight text-slate-900">{name}</span>
        <span className="text-[10px] uppercase tracking-widest text-slate-500">{label}</span>
      </div>
      <div className="grid gap-0 sm:grid-cols-[1.15fr_.85fr]">
        <div className="relative min-h-40 overflow-hidden bg-black/10 sm:min-h-48">
          <Image src={config?.image ?? '/drivecare/hero.png'} alt={`${name} product preview`} fill sizes="(max-width: 768px) 100vw, 35vw" className="object-cover transition duration-500 hover:scale-105" />
          <span className="absolute bottom-3 left-3 bg-white/90 px-2 py-1 text-[9px] uppercase tracking-widest text-slate-700">Live product</span>
        </div>
        <div className="flex flex-col justify-between bg-white/80 p-4 backdrop-blur-sm">
          <div><p className="text-[10px] uppercase tracking-widest text-slate-400">{accent}</p><p className="mt-5 text-2xl font-medium tracking-tight text-slate-900">{config?.stat}</p><p className="mt-1 text-[11px] text-slate-500">{config?.detail}</p></div>
          <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-3 text-[10px] text-slate-500"><span>Explore flow</span><ArrowUpRight className="size-3.5 text-slate-900" /></div>
        </div>
      </div>
    </div>
  )
}

export function FormePreview() {
  return (
    <div className="theme-forme border border-border bg-background font-sans">
      <div className="relative aspect-square w-full bg-muted">
        <Image
          src="/forme/tee-oversized.png"
          alt="FORMÉ oversized tee"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
        />
        <span className="absolute left-0 top-3 bg-foreground px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-background">
          New
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-baseline justify-between">
          <p className="text-sm font-medium uppercase tracking-wide text-foreground">Oversized Tee</p>
          <p className="text-sm text-foreground">€35</p>
        </div>
        <div className="mt-3 flex items-center gap-1.5">
          {['S', 'M', 'L', 'XL'].map((s, i) => (
            <span
              key={s}
              className={
                'flex h-7 w-8 items-center justify-center border text-[11px] ' +
                (i === 1
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border text-foreground')
              }
            >
              {s}
            </span>
          ))}
          <div className="ml-auto flex items-center gap-2 text-muted-foreground">
            <Minus className="size-3.5" />
            <span className="text-xs text-foreground">1</span>
            <Plus className="size-3.5" />
          </div>
        </div>
      </div>
    </div>
  )
}
