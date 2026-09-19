import Image from 'next/image'
import { Waves, UtensilsCrossed, Wifi, Car, Sun, Coffee, MapPin, Phone } from 'lucide-react'
import { galleryImages } from './data'

export function Gallery() {
  return (
    <section id="gallery" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Gallery</p>
        <h2 className="mt-3 font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
          Life at the villa
        </h2>
        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[240px] md:grid-cols-4">
          {galleryImages.map((src, i) => (
            <div
              key={src}
              className={
                'relative overflow-hidden rounded-sm ' +
                (i === 0 ? 'col-span-2 row-span-2' : i === 3 ? 'md:col-span-2' : '')
              }
            >
              <Image
                src={src}
                alt="Villa Aurea"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const amenities = [
  { icon: Waves, label: 'Infinity pool' },
  { icon: UtensilsCrossed, label: 'Terrace restaurant' },
  { icon: Coffee, label: 'Breakfast till noon' },
  { icon: Sun, label: 'Private beach access' },
  { icon: Wifi, label: 'Fast Wi-Fi' },
  { icon: Car, label: 'Free parking' },
]

export function Amenities() {
  return (
    <section id="amenities" className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The stay</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
            Everything, unhurried
          </h2>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            A Mediterranean breakfast is served on the terrace each morning from
            8:00 to 12:00 — local cheeses, fruit, fresh bread and strong coffee.
            The rest of the day is yours.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
            {amenities.map((a) => (
              <div key={a.label} className="flex flex-col gap-3 bg-background p-6">
                <a.icon className="size-5 text-primary" strokeWidth={1.5} />
                <span className="text-sm text-foreground">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function LocationContact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Location</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-foreground">
            Above the bay of Dhërmi
          </h2>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            On the coastal road between Vlorë and Sarandë, a five-minute walk
            down to the beach and a short drive from the villages of the Riviera.
          </p>
          <div className="mt-6 space-y-3 text-sm text-foreground">
            <p className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" /> Rruga Bregdetare, Dhërmi, Shqipëri
            </p>
            <p className="flex items-center gap-2">
              <Phone className="size-4 text-primary" /> +355 69 000 0000
            </p>
          </div>
        </div>
        <div className="relative min-h-64 overflow-hidden rounded-sm">
          <Image
            src="/aurea/gallery-1.png"
            alt="Villa Aurea pool and coastline"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
