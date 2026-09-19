import {
  Globe,
  CalendarClock,
  LayoutDashboard,
  ShoppingBag,
  Wrench,
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Business websites',
    desc: 'Faqe të shpejta, elegante që e prezantojnë biznesin tuaj si një kompani e madhe.',
  },
  {
    icon: CalendarClock,
    title: 'Online booking systems',
    desc: 'Rezervime për restorante, sallone dhe hotele — pa telefonata, pa Excel.',
  },
  {
    icon: LayoutDashboard,
    title: 'Custom dashboards',
    desc: 'Panele të personalizuara për të parë shitjet, klientët dhe metrikat në një vend.',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce websites',
    desc: 'Dyqane online me arkë, dërgesa në Kosovë dhe pagesë në dorëzim.',
  },
  {
    icon: Wrench,
    title: 'Internal web tools',
    desc: 'Vegla të brendshme që automatizojnë punën e përditshme të ekipit tuaj.',
  },
]

export function Services() {
  return (
    <section id="sherbimet" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Çfarë ndërtojmë
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              One studio for everything digital.
            </h2>
            <p className="mt-5 max-w-sm text-pretty text-base leading-relaxed text-muted-foreground">
              Nga faqja e parë e biznesit deri te veglat e brendshme — një ekip,
              një standard, pa agjenci €5,000+.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 border-t border-l border-border sm:grid-cols-2">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group border-r border-b border-border p-6 transition-colors hover:bg-muted/50"
                >
                  <s.icon className="size-5 text-foreground" strokeWidth={1.5} />
                  <h3 className="mt-4 text-base font-medium text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              ))}
              <div className="hidden border-r border-b border-border bg-muted/30 p-6 sm:block">
                <p className="font-serif text-2xl leading-tight text-foreground">
                  €690<span className="align-top text-sm text-muted-foreground">+</span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Çmim transparent. Dorëzim 2–4 javë.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
