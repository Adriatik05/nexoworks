'use client'

import { useMemo, useState } from 'react'
import { Check, ChevronRight, Minus, Plus, CalendarCheck } from 'lucide-react'

const DAYS = ['Die', 'Hën', 'Mar', 'Mër', 'Enj', 'Pre', 'Sht']
const MONTHS = [
  'Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor',
  'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor',
]

const SLOTS = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30']
// A few slots are "full" to feel real.
const FULL = new Set(['18:00', '20:00'])

function buildDates(count: number) {
  const out: { key: string; day: string; date: number; month: string; label: string }[] = []
  const now = new Date()
  for (let i = 0; i < count; i++) {
    const d = new Date(now)
    d.setDate(now.getDate() + i)
    out.push({
      key: d.toISOString().slice(0, 10),
      day: i === 0 ? 'Sot' : i === 1 ? 'Nesër' : DAYS[d.getDay()],
      date: d.getDate(),
      month: MONTHS[d.getMonth()],
      label: `${d.getDate()} ${MONTHS[d.getMonth()]}`,
    })
  }
  return out
}

export function Reservation() {
  const dates = useMemo(() => buildDates(12), [])
  const [dateKey, setDateKey] = useState(dates[0].key)
  const [guests, setGuests] = useState(2)
  const [slot, setSlot] = useState<string | null>('19:30')
  const [done, setDone] = useState(false)

  const selectedDate = dates.find((d) => d.key === dateKey)!

  if (done) {
    return (
      <div className="rounded-md border border-border bg-card p-8 text-center sm:p-12">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10">
          <CalendarCheck className="size-7 text-primary" />
        </div>
        <h3 className="mt-6 font-serif text-3xl tracking-tight text-foreground">
          Rezervimi u konfirmua
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Ju kemi dërguar një konfirmim me email. Ju presim me kënaqësi.
        </p>
        <dl className="mx-auto mt-8 max-w-xs divide-y divide-border border-y border-border text-left text-sm">
          <div className="flex items-center justify-between py-3">
            <dt className="text-muted-foreground">Data</dt>
            <dd className="font-medium text-foreground">{selectedDate.label}</dd>
          </div>
          <div className="flex items-center justify-between py-3">
            <dt className="text-muted-foreground">Ora</dt>
            <dd className="font-medium text-foreground">{slot}</dd>
          </div>
          <div className="flex items-center justify-between py-3">
            <dt className="text-muted-foreground">Persona</dt>
            <dd className="font-medium text-foreground">
              {guests} {guests === 1 ? 'person' : 'persona'}
            </dd>
          </div>
        </dl>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-8 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Bëj një rezervim tjetër
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-md border border-border bg-card p-5 sm:p-7">
      {/* Date */}
      <div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-foreground">Zgjidh datën</p>
          <p className="text-sm text-muted-foreground">{selectedDate.label}</p>
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {dates.map((d) => {
            const active = d.key === dateKey
            return (
              <button
                key={d.key}
                type="button"
                onClick={() => setDateKey(d.key)}
                className={
                  'flex min-w-16 shrink-0 flex-col items-center rounded-sm border px-3 py-2.5 transition-colors ' +
                  (active
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background text-foreground hover:border-foreground/30')
                }
              >
                <span className={'text-[11px] ' + (active ? 'text-primary-foreground/80' : 'text-muted-foreground')}>
                  {d.day}
                </span>
                <span className="mt-1 text-lg font-medium leading-none tabular-nums">{d.date}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Guests */}
      <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
        <p className="text-sm font-medium text-foreground">Numri i personave</p>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setGuests((g) => Math.max(1, g - 1))}
            className="flex size-9 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary disabled:opacity-40"
            disabled={guests <= 1}
            aria-label="Ul personat"
          >
            <Minus className="size-4" />
          </button>
          <span className="w-20 text-center text-sm font-medium tabular-nums text-foreground">
            {guests} {guests === 1 ? 'person' : 'persona'}
          </span>
          <button
            type="button"
            onClick={() => setGuests((g) => Math.min(8, g + 1))}
            className="flex size-9 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary disabled:opacity-40"
            disabled={guests >= 8}
            aria-label="Shto personat"
          >
            <Plus className="size-4" />
          </button>
        </div>
      </div>

      {/* Slots */}
      <div className="mt-6 border-t border-border pt-6">
        <p className="text-sm font-medium text-foreground">Oraret e lira</p>
        <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-8">
          {SLOTS.map((s) => {
            const full = FULL.has(s)
            const active = s === slot
            return (
              <button
                key={s}
                type="button"
                disabled={full}
                onClick={() => setSlot(s)}
                className={
                  'rounded-sm border py-2 text-sm tabular-nums transition-colors ' +
                  (full
                    ? 'cursor-not-allowed border-border bg-secondary/50 text-muted-foreground/50 line-through'
                    : active
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-background text-foreground hover:border-foreground/30')
                }
              >
                {s}
              </button>
            )
          })}
        </div>
      </div>

      <button
        type="button"
        disabled={!slot}
        onClick={() => setDone(true)}
        className="group mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-primary text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
      >
        Rezervo tavolinën
        <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <Check className="size-3.5 text-primary" /> Konfirmim i menjëhershëm · pa parapagesë
      </p>
    </div>
  )
}
