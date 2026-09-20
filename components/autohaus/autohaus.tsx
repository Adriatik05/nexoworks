'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Gauge,
  Zap,
  Calendar,
  MapPin,
  DollarSign,
  X,
  Phone,
} from 'lucide-react'
import { vehicles, brands, bodyTypes, years, fuels, transmissions, type Vehicle } from './data'

export function AutoHausApp() {
  const [view, setView] = useState<'home' | 'inventory' | 'detail' | 'testdrive'>('home')
  const [activeVehicle, setActiveVehicle] = useState<Vehicle | null>(null)
  const [filters, setFilters] = useState({
    brand: 'All brands',
    bodyType: 'All types',
    year: 'All years',
    fuel: 'All fuels',
    transmission: 'All',
    priceMax: 70000,
  })

  const filtered = vehicles.filter((v) => {
    if (filters.brand !== 'All brands' && v.brand !== filters.brand) return false
    if (filters.bodyType !== 'All types' && v.bodyType !== filters.bodyType) return false
    if (filters.year !== 'All years' && v.year !== Number(filters.year)) return false
    if (filters.fuel !== 'All fuels' && v.fuel !== filters.fuel) return false
    if (filters.transmission !== 'All' && v.transmission !== filters.transmission) return false
    if (v.price > filters.priceMax) return false
    return true
  })

  const openDetail = (vehicle: Vehicle) => {
    setActiveVehicle(vehicle)
    setView('detail')
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="theme-autohaus min-h-screen bg-background font-sans text-foreground">
      {view === 'home' && (
        <>
          <AutoHausNav onBrowse={() => setView('inventory')} />
          <AutoHausHero onBrowse={() => setView('inventory')} />
          <FeaturedVehicles onSelect={openDetail} />
        </>
      )}

      {view === 'inventory' && (
        <>
          <AutoHausNav onBrowse={() => setView('inventory')} />
          <InventoryPage
            filtered={filtered}
            filters={filters}
            setFilters={setFilters}
            onSelect={openDetail}
            onBack={() => setView('home')}
          />
        </>
      )}

      {view === 'detail' && activeVehicle && (
        <>
          <AutoHausNav onBrowse={() => setView('inventory')} />
          <DetailPage
            vehicle={activeVehicle}
            onBack={() => setView('inventory')}
            onTestDrive={() => setView('testdrive')}
          />
        </>
      )}

      {view === 'testdrive' && activeVehicle && (
        <>
          <AutoHausNav onBrowse={() => setView('inventory')} />
          <TestDrivePage vehicle={activeVehicle} onBack={() => setView('detail')} />
        </>
      )}

      <AutoHausFooter />
    </div>
  )
}

function AutoHausNav({ onBrowse }: { onBrowse: () => void }) {
  return (
    <nav className="sticky top-11 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          onClick={() => window.location.href = '/autohaus'}
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          AutoHaus
        </button>
        <div className="hidden items-center gap-8 md:flex">
          <button onClick={onBrowse} className="text-sm text-muted-foreground hover:text-foreground">
            Vehicles
          </button>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Financing
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            About
          </a>
        </div>
        <button
          type="button"
          onClick={onBrowse}
          className="inline-flex h-9 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Browse inventory
        </button>
      </div>
    </nav>
  )
}

function AutoHausHero({ onBrowse }: { onBrowse: () => void }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Premium vehicles
          </p>
          <h1 className="mt-4 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Find your next car.
          </h1>
          <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Premium vehicles, carefully selected for drivers across Kosovo. Competitive pricing,
            transparent financing, and hassle-free service.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onBrowse}
              className="inline-flex h-12 items-center justify-center rounded-sm bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Browse inventory
            </button>
            <button className="inline-flex h-12 items-center justify-center rounded-sm border border-border px-8 text-sm font-medium transition-colors hover:bg-secondary">
              Sell your car
            </button>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-sm">
          <Image
            src="/autohaus/hero.png"
            alt="Luxury vehicles"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

function FeaturedVehicles({ onSelect }: { onSelect: (v: Vehicle) => void }) {
  const featured = vehicles.slice(0, 4)
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="mb-12">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Featured
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          New arrivals
        </h2>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {featured.map((v) => (
          <button
            key={v.id}
            onClick={() => onSelect(v)}
            type="button"
            className="group flex flex-col text-left"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary">
              <Image
                src={v.image}
                alt={`${v.brand} ${v.model}`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="font-semibold text-foreground">{v.brand}</h3>
              <p className="text-sm text-muted-foreground">{v.model}</p>
              <div className="flex items-baseline justify-between pt-2">
                <span className="text-xs text-muted-foreground">{v.year}</span>
                <span className="font-semibold text-foreground">€{v.price.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1.5 pt-2 text-xs text-muted-foreground">
                <Gauge className="size-3" />
                <span>{v.mileage.toLocaleString()} km</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

function InventoryPage({
  filtered,
  filters,
  setFilters,
  onSelect,
  onBack,
}: {
  filtered: Vehicle[]
  filters: any
  setFilters: (f: any) => void
  onSelect: (v: Vehicle) => void
  onBack: () => void
}) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
      <button
        onClick={onBack}
        type="button"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Back
      </button>

      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground">Our inventory</h1>
      <p className="mt-2 text-sm text-muted-foreground">{filtered.length} vehicles available</p>

      <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Filters */}
        <aside className="lg:col-span-3">
          <div className="space-y-6 rounded-sm border border-border bg-secondary/40 p-6">
            <div>
              <label className="text-xs font-medium uppercase tracking-widest text-foreground">
                Brand
              </label>
              <select
                value={filters.brand}
                onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                className="mt-2 w-full border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-foreground"
              >
                {brands.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-medium uppercase tracking-widest text-foreground">
                Body type
              </label>
              <select
                value={filters.bodyType}
                onChange={(e) => setFilters({ ...filters, bodyType: e.target.value })}
                className="mt-2 w-full border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-foreground"
              >
                {bodyTypes.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-medium uppercase tracking-widest text-foreground">
                Year
              </label>
              <select
                value={filters.year}
                onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                className="mt-2 w-full border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-foreground"
              >
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-medium uppercase tracking-widest text-foreground">
                Max price: €{filters.priceMax.toLocaleString()}
              </label>
              <input
                type="range"
                min="0"
                max="80000"
                step="5000"
                value={filters.priceMax}
                onChange={(e) => setFilters({ ...filters, priceMax: Number(e.target.value) })}
                className="mt-2 w-full"
              />
            </div>

            <div>
              <label className="text-xs font-medium uppercase tracking-widest text-foreground">
                Fuel
              </label>
              <select
                value={filters.fuel}
                onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
                className="mt-2 w-full border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-foreground"
              >
                {fuels.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => setFilters({
                brand: 'All brands',
                bodyType: 'All types',
                year: 'All years',
                fuel: 'All fuels',
                transmission: 'All',
                priceMax: 70000,
              })}
              className="w-full border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Reset filters
            </button>
          </div>
        </aside>

        {/* Grid */}
        <div className="lg:col-span-9">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((v) => (
              <button
                key={v.id}
                onClick={() => onSelect(v)}
                type="button"
                className="group flex flex-col text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-secondary">
                  <Image
                    src={v.image}
                    alt={`${v.brand} ${v.model}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">{v.brand}</h3>
                    <p className="text-sm text-muted-foreground">{v.model}</p>
                  </div>
                  <span className="font-semibold text-foreground">€{v.price.toLocaleString()}</span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Gauge className="size-3" /> {v.mileage.toLocaleString()} km
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="size-3" /> {v.fuel}
                  </span>
                </div>
              </button>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="flex h-64 items-center justify-center text-center">
              <div>
                <p className="text-sm text-muted-foreground">No vehicles match your filters.</p>
                <button
                  onClick={() => setFilters({
                    brand: 'All brands',
                    bodyType: 'All types',
                    year: 'All years',
                    fuel: 'All fuels',
                    transmission: 'All',
                    priceMax: 70000,
                  })}
                  className="mt-3 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Reset filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

function DetailPage({
  vehicle,
  onBack,
  onTestDrive,
}: {
  vehicle: Vehicle
  onBack: () => void
  onTestDrive: () => void
}) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
      <button
        onClick={onBack}
        type="button"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Back to inventory
      </button>

      <div className="mt-8 grid gap-12 lg:grid-cols-3 lg:gap-16">
        <div className="lg:col-span-2">
          <div className="relative aspect-video overflow-hidden rounded-sm">
            <Image
              src={vehicle.image}
              alt={`${vehicle.brand} ${vehicle.model}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {vehicle.year}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground">
            {vehicle.brand}
          </h1>
          <p className="mt-1 text-xl text-muted-foreground">{vehicle.model}</p>

          <div className="mt-6 space-y-2 border-t border-border pt-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Price</span>
              <span className="text-lg font-semibold text-foreground">€{vehicle.price.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Monthly est.</span>
              <span className="text-lg font-semibold text-foreground">
                €{Math.round(vehicle.price / 60)}
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Mileage</span>
              <span className="font-medium text-foreground">{vehicle.mileage.toLocaleString()} km</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Fuel</span>
              <span className="font-medium text-foreground">{vehicle.fuel}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Transmission</span>
              <span className="font-medium text-foreground">{vehicle.transmission}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Horsepower</span>
              <span className="font-medium text-foreground">{vehicle.hp} hp</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Drivetrain</span>
              <span className="font-medium text-foreground">{vehicle.drivetrain}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Color</span>
              <span className="font-medium text-foreground">{vehicle.color}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Interior</span>
              <span className="font-medium text-foreground">{vehicle.interior}</span>
            </div>
          </div>

          <button
            onClick={onTestDrive}
            type="button"
            className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-foreground text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Book a test drive <ArrowRight className="size-4" />
          </button>

          <button className="mt-3 flex h-11 w-full items-center justify-center border border-border rounded-sm text-sm font-medium transition-colors hover:bg-secondary">
            Request information
          </button>
        </div>
      </div>
    </main>
  )
}

function TestDrivePage({ vehicle, onBack }: { vehicle: Vehicle; onBack: () => void }) {
  const [step, setStep] = useState(0)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const today = new Date().toISOString().split('T')[0]
  const times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']
  const canNext =
    (step === 0 && date) ||
    (step === 1 && time) ||
    (step === 2 && name.trim().length > 1 && phone.length >= 6 && email.includes('@'))

  if (done) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
        <button
          onClick={onBack}
          type="button"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back
        </button>

        <div className="mt-12 flex flex-col items-center text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-foreground/10">
            <Check className="size-8 text-foreground" />
          </div>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground">
            Test drive confirmed
          </h1>
          <p className="mt-3 max-w-sm text-pretty text-sm text-muted-foreground">
            Thank you, {name}. We&apos;ll contact you to confirm your test drive of the {vehicle.brand} {vehicle.model}.
          </p>

          <div className="mt-8 w-full max-w-xs rounded-sm border border-border p-6">
            <dl className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Vehicle</dt>
                <dd className="font-medium text-foreground">{vehicle.brand} {vehicle.model}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Date</dt>
                <dd className="font-medium text-foreground">{date}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Time</dt>
                <dd className="font-medium text-foreground">{time}</dd>
              </div>
            </dl>
          </div>

          <button
            onClick={onBack}
            className="mt-8 text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            Back to vehicle
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
      <button
        onClick={onBack}
        type="button"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Back
      </button>

      <div className="mt-8">
        <div className="flex items-center gap-2 pb-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-1 items-center gap-2">
              <span
                className={
                  'flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium ' +
                  (i < step
                    ? 'bg-foreground text-background'
                    : i === step
                      ? 'bg-foreground/15 border border-foreground text-foreground'
                      : 'bg-secondary text-muted-foreground')
                }
              >
                {i < step ? <Check className="size-3.5" /> : i + 1}
              </span>
              {i < 2 && <span className="flex-1 h-px bg-border" />}
            </div>
          ))}
        </div>

        <div className="rounded-sm border border-border bg-card p-8">
          {step === 0 && (
            <div>
              <label className="text-sm font-medium text-foreground">Choose date</label>
              <input
                type="date"
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-3 h-11 w-full border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-foreground"
              />
            </div>
          )}

          {step === 1 && (
            <div>
              <label className="text-sm font-medium text-foreground">Choose time</label>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {times.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTime(t)}
                    className={
                      'h-10 rounded-sm border text-sm font-medium transition-colors ' +
                      (time === t
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border hover:border-foreground')
                    }
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="mt-2 h-11 w-full border border-border bg-background px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-foreground"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone
                </label>
                <input
                  id="phone"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+383 44 123 456"
                  className="mt-2 h-11 w-full border border-border bg-background px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-foreground"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 h-11 w-full border border-border bg-background px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-foreground"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-0"
          >
            Back
          </button>

          {step < 2 ? (
            <button
              onClick={() => setStep(step + 1)}
              disabled={!canNext}
              className="flex h-11 items-center gap-2 rounded-sm bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              Next <ArrowRight className="size-4" />
            </button>
          ) : (
            <button
              onClick={() => setDone(true)}
              disabled={!canNext}
              className="flex h-11 items-center gap-2 rounded-sm bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              Book test drive
            </button>
          )}
        </div>
      </div>
    </main>
  )
}

function AutoHausFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-base font-semibold text-foreground">AutoHaus</p>
        <p className="text-xs text-muted-foreground">
          Prishtinë, Kosovë · +383 44 123 456 · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
