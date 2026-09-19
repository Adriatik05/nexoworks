'use client'

import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Sparkles,
  User,
} from 'lucide-react'

const SERVICES = [
  { id: 'manikyr', name: 'Manikyr', price: '€15', dur: '40 min' },
  { id: 'gel', name: 'Gel', price: '€25', dur: '60 min' },
  { id: 'french', name: 'French', price: '€20', dur: '55 min' },
  { id: 'pedikyr', name: 'Pedikyr', price: '€20', dur: '50 min' },
  { id: 'nailart', name: 'Nail Art', price: '€5+', dur: '15 min' },
]

const STAFF = [
  { id: 'erza', name: 'Erza', role: 'Nail artist · Senior' },
  { id: 'kaltrina', name: 'Kaltrina', role: 'Manikyr & Gel' },
  { id: 'any', name: 'Cilido specialist', role: 'Termini më i afërt' },
]

const DAYS = ['Die', 'Hën', 'Mar', 'Mër', 'Enj', 'Pre', 'Sht']
const MONTHS = [
  'Jan', 'Shk', 'Mar', 'Pri', 'Maj', 'Qer',
  'Kor', 'Gus', 'Sht', 'Tet', 'Nën', 'Dhj',
]
const TIMES = ['09:30', '10:30', '11:30', '13:00', '14:30', '16:00', '17:30', '18:30']
const BUSY = new Set(['09:30', '14:30'])

const STEPS = ['Shërbimi', 'Stafi', 'Data & ora', 'Të dhënat']

function buildDates(count: number) {
  const now = new Date()
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(now)
    d.setDate(now.getDate() + i)
    return {
      key: d.toISOString().slice(0, 10),
      day: i === 0 ? 'Sot' : DAYS[d.getDay()],
      date: d.getDate(),
      month: MONTHS[d.getMonth()],
      label: `${d.getDate()} ${MONTHS[d.getMonth()]}`,
    }
  })
}

export function Booking() {
  const dates = useMemo(() => buildDates(10), [])
  const [step, setStep] = useState(0)
  const [service, setService] = useState<string | null>(null)
  const [staff, setStaff] = useState<string | null>(null)
  const [dateKey, setDateKey] = useState<string | null>(dates[0].key)
  const [time, setTime] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [done, setDone] = useState(false)

  const svc = SERVICES.find((s) => s.id === service)
  const stf = STAFF.find((s) => s.id === staff)
  const dt = dates.find((d) => d.key === dateKey)

  const canNext =
    (step === 0 && !!service) ||
    (step === 1 && !!staff) ||
    (step === 2 && !!dateKey && !!time) ||
    (step === 3 && name.trim().length > 1 && phone.trim().length >= 6)

  if (done) {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10">
          <Check className="size-7 text-primary" />
        </div>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
          Termini u rezervua
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Faleminderit, {name.split(' ')[0]}. Do të merrni një SMS konfirmimi.
        </p>
        <dl className="mx-auto mt-8 max-w-xs space-y-3 rounded-2xl bg-secondary/60 p-5 text-left text-sm">
          <Row k="Shërbimi" v={`${svc?.name} · ${svc?.price}`} />
          <Row k="Specialisti" v={stf?.name ?? ''} />
          <Row k="Data" v={dt?.label ?? ''} />
          <Row k="Ora" v={time ?? ''} />
        </dl>
        <button
          type="button"
          onClick={() => {
            setDone(false)
            setStep(0)
            setService(null)
            setStaff(null)
            setTime(null)
            setName('')
            setPhone('')
          }}
          className="mt-8 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Rezervo një tjetër
        </button>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card">
      {/* Progress */}
      <div className="flex items-center gap-2 border-b border-border px-5 py-4 sm:px-7">
        {STEPS.map((label, i) => (
          <div key={label} className="flex flex-1 items-center gap-2">
            <span
              className={
                'flex size-6 shrink-0 items-center justify-center rounded-full text-[11px] font-medium transition-colors ' +
                (i < step
                  ? 'bg-primary text-primary-foreground'
                  : i === step
                    ? 'bg-primary/15 text-primary ring-1 ring-primary'
                    : 'bg-secondary text-muted-foreground')
              }
            >
              {i < step ? <Check className="size-3.5" /> : i + 1}
            </span>
            <span
              className={
                'hidden text-xs sm:block ' +
                (i === step ? 'font-medium text-foreground' : 'text-muted-foreground')
              }
            >
              {label}
            </span>
            {i < STEPS.length - 1 && (
              <span className="mx-1 hidden h-px flex-1 bg-border sm:block" aria-hidden />
            )}
          </div>
        ))}
      </div>

      <div className="p-5 sm:p-7">
        {step === 0 && (
          <div className="space-y-2">
            {SERVICES.map((s) => {
              const active = s.id === service
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setService(s.id)}
                  className={
                    'flex w-full items-center justify-between rounded-2xl border px-4 py-3.5 text-left transition-colors ' +
                    (active ? 'border-primary bg-accent' : 'border-border hover:border-primary/40')
                  }
                >
                  <span className="flex items-center gap-3">
                    <Sparkles
                      className={'size-4 ' + (active ? 'text-primary' : 'text-muted-foreground')}
                    />
                    <span>
                      <span className="block text-sm font-medium text-foreground">{s.name}</span>
                      <span className="block text-xs text-muted-foreground">{s.dur}</span>
                    </span>
                  </span>
                  <span className="text-sm font-medium text-foreground">{s.price}</span>
                </button>
              )
            })}
          </div>
        )}

        {step === 1 && (
          <div className="space-y-2">
            {STAFF.map((s) => {
              const active = s.id === staff
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setStaff(s.id)}
                  className={
                    'flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-colors ' +
                    (active ? 'border-primary bg-accent' : 'border-border hover:border-primary/40')
                  }
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-sm font-medium text-foreground">
                    {s.id === 'any' ? <User className="size-4" /> : s.name[0]}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-foreground">{s.name}</span>
                    <span className="block text-xs text-muted-foreground">{s.role}</span>
                  </span>
                  {active && <Check className="ml-auto size-4 text-primary" />}
                </button>
              )
            })}
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="text-sm font-medium text-foreground">Zgjidh datën</p>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {dates.map((d) => {
                const active = d.key === dateKey
                return (
                  <button
                    key={d.key}
                    type="button"
                    onClick={() => setDateKey(d.key)}
                    className={
                      'flex min-w-15 shrink-0 flex-col items-center rounded-2xl border px-3 py-2.5 transition-colors ' +
                      (active
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border text-foreground hover:border-primary/40')
                    }
                  >
                    <span
                      className={
                        'text-[11px] ' +
                        (active ? 'text-primary-foreground/80' : 'text-muted-foreground')
                      }
                    >
                      {d.day}
                    </span>
                    <span className="mt-1 text-lg font-medium leading-none tabular-nums">
                      {d.date}
                    </span>
                  </button>
                )
              })}
            </div>
            <p className="mt-6 text-sm font-medium text-foreground">Oraret e lira</p>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {TIMES.map((t) => {
                const busy = BUSY.has(t)
                const active = t === time
                return (
                  <button
                    key={t}
                    type="button"
                    disabled={busy}
                    onClick={() => setTime(t)}
                    className={
                      'rounded-xl border py-2.5 text-sm tabular-nums transition-colors ' +
                      (busy
                        ? 'cursor-not-allowed border-border bg-secondary/50 text-muted-foreground/40 line-through'
                        : active
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border text-foreground hover:border-primary/40')
                    }
                  >
                    {t}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label htmlFor="ek-name" className="text-sm font-medium text-foreground">
                Emri dhe mbiemri
              </label>
              <input
                id="ek-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="p.sh. Rina Krasniqi"
                className="mt-2 h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="ek-phone" className="text-sm font-medium text-foreground">
                Numri i telefonit
              </label>
              <input
                id="ek-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                inputMode="tel"
                placeholder="+383 4_ ___ ___"
                className="mt-2 h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>
            <div className="rounded-2xl bg-secondary/60 p-4 text-sm">
              <p className="flex items-center justify-between">
                <span className="text-muted-foreground">{svc?.name} · {stf?.name}</span>
                <span className="font-medium text-foreground">{svc?.price}</span>
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-muted-foreground">
                <Clock className="size-3.5" /> {dt?.label} · {time}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between gap-3 border-t border-border px-5 py-4 sm:px-7">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground disabled:opacity-0"
        >
          <ArrowLeft className="size-4" /> Prapa
        </button>
        {step < STEPS.length - 1 ? (
          <button
            type="button"
            disabled={!canNext}
            onClick={() => setStep((s) => s + 1)}
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
          >
            Vazhdo
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        ) : (
          <button
            type="button"
            disabled={!canNext}
            onClick={() => setDone(true)}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
          >
            Rezervo termin
          </button>
        )}
      </div>
    </div>
  )
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="font-medium text-foreground">{v}</dd>
    </div>
  )
}
