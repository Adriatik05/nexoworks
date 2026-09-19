'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Check, Coffee, Maximize, Users, X } from 'lucide-react'
import { rooms, type Room } from './data'

export function Rooms() {
  const [active, setActive] = useState<Room | null>(null)

  return (
    <section id="rooms" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The rooms</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
              Twelve rooms, no two alike
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-muted-foreground sm:block">
            Rates include breakfast, taxes and Wi-Fi. Prices in EUR per night.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {rooms.map((room) => (
            <article key={room.id} className="group flex flex-col">
              <button
                type="button"
                onClick={() => setActive(room)}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-sm"
                aria-label={`View ${room.name}`}
              >
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-serif text-2xl tracking-tight text-foreground">{room.name}</h3>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">€{room.price}</span> / night
                </p>
              </div>
              <p className="mt-1 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Maximize className="size-3.5" /> {room.size}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Users className="size-3.5" /> {room.capacity}
                </span>
              </p>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {room.blurb}
              </p>
              <button
                type="button"
                onClick={() => setActive(room)}
                className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
              >
                View room &amp; availability
                <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-0.5" />
              </button>
            </article>
          ))}
        </div>
      </div>

      {active && <RoomModal room={active} onClose={() => setActive(null)} />}
    </section>
  )
}

function RoomModal({ room, onClose }: { room: Room; onClose: () => void }) {
  const [img, setImg] = useState(room.gallery[0])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={room.name}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl bg-background sm:rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <h3 className="font-serif text-2xl tracking-tight text-foreground">{room.name}</h3>
            <p className="text-xs text-muted-foreground">{room.size} · {room.capacity}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex size-9 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary"
            aria-label="Close"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="grid flex-1 overflow-y-auto md:grid-cols-2">
          {/* Gallery */}
          <div className="p-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
              <Image src={img} alt={room.name} fill sizes="50vw" className="object-cover" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {room.gallery.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setImg(g)}
                  className={
                    'relative aspect-[4/3] overflow-hidden rounded-sm border-2 transition-colors ' +
                    (g === img ? 'border-primary' : 'border-transparent opacity-70 hover:opacity-100')
                  }
                >
                  <Image src={g} alt="" fill sizes="20vw" className="object-cover" />
                </button>
              ))}
            </div>

            <h4 className="mt-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Amenities
            </h4>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-foreground">
              {room.amenities.map((a) => (
                <li key={a} className="flex items-center gap-2">
                  <Check className="size-3.5 text-primary" /> {a}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-start gap-2 rounded-sm bg-accent/60 p-3 text-sm text-foreground">
              <Coffee className="mt-0.5 size-4 text-primary" />
              <p>Breakfast included — a Mediterranean spread served 8:00–12:00 on the terrace.</p>
            </div>
          </div>

          {/* Booking */}
          <div className="border-t border-border p-5 md:border-t-0 md:border-l">
            <BookingForm room={room} />
          </div>
        </div>
      </div>
    </div>
  )
}

function todayISO(offset = 0) {
  const d = new Date()
  d.setDate(d.getDate() + offset)
  return d.toISOString().slice(0, 10)
}

function BookingForm({ room }: { room: Room }) {
  const [checkIn, setCheckIn] = useState(todayISO(1))
  const [checkOut, setCheckOut] = useState(todayISO(3))
  const [guests, setGuests] = useState(2)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const nights = Math.max(
    0,
    Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000),
  )
  const total = nights * room.price
  const valid = nights > 0 && name.trim().length > 1 && email.includes('@')

  if (done) {
    return (
      <div className="flex h-full flex-col items-center justify-center py-10 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
          <Check className="size-7 text-primary" />
        </div>
        <h4 className="mt-6 font-serif text-2xl tracking-tight text-foreground">Booking confirmed</h4>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          {room.name} · {nights} {nights === 1 ? 'night' : 'nights'} for {guests} guests.
          A confirmation is on its way to your inbox.
        </p>
        <p className="mt-4 text-sm">
          <span className="text-muted-foreground">Total </span>
          <span className="font-medium text-foreground">€{total}</span>
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-6 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Modify booking
        </button>
      </div>
    )
  }

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Check availability
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <label className="text-sm">
          <span className="text-muted-foreground">Check-in</span>
          <input
            type="date"
            value={checkIn}
            min={todayISO()}
            onChange={(e) => setCheckIn(e.target.value)}
            className="mt-1.5 h-10 w-full rounded-sm border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary"
          />
        </label>
        <label className="text-sm">
          <span className="text-muted-foreground">Check-out</span>
          <input
            type="date"
            value={checkOut}
            min={checkIn}
            onChange={(e) => setCheckOut(e.target.value)}
            className="mt-1.5 h-10 w-full rounded-sm border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary"
          />
        </label>
      </div>
      <label className="mt-3 block text-sm">
        <span className="text-muted-foreground">Guests</span>
        <select
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="mt-1.5 h-10 w-full rounded-sm border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary"
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? 'guest' : 'guests'}
            </option>
          ))}
        </select>
      </label>

      <div className="mt-4 grid gap-3 border-t border-border pt-4">
        <label className="text-sm">
          <span className="text-muted-foreground">Guest name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="mt-1.5 h-10 w-full rounded-sm border border-border bg-background px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary"
          />
        </label>
        <label className="text-sm">
          <span className="text-muted-foreground">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@example.com"
            className="mt-1.5 h-10 w-full rounded-sm border border-border bg-background px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary"
          />
        </label>
      </div>

      <dl className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
        <div className="flex items-center justify-between">
          <dt className="text-muted-foreground">
            €{room.price} × {nights} {nights === 1 ? 'night' : 'nights'}
          </dt>
          <dd className="text-foreground">€{total}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-muted-foreground">Breakfast &amp; taxes</dt>
          <dd className="text-foreground">Included</dd>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-2 text-base font-medium">
          <dt className="text-foreground">Total</dt>
          <dd className="text-foreground">€{total}</dd>
        </div>
      </dl>

      <button
        type="button"
        disabled={!valid}
        onClick={() => setDone(true)}
        className="mt-5 flex h-11 w-full items-center justify-center rounded-sm bg-primary text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
      >
        Reserve — €{total}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Free cancellation up to 48h before arrival.
      </p>
    </div>
  )
}
