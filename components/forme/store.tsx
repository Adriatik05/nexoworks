'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
  X,
} from 'lucide-react'
import {
  products,
  useStore,
  FREE_SHIPPING,
  type Product,
} from './store-context'

export function Store() {
  const { view } = useStore()
  return (
    <div className="min-h-screen bg-background">
      <StoreHeader />
      {view === 'shop' && <Shop />}
      {view === 'product' && <ProductView />}
      {view === 'cart' && <CartView />}
      {view === 'checkout' && <CheckoutView />}
      {view === 'done' && <Confirmation />}
      <StoreFooter />
    </div>
  )
}

function StoreHeader() {
  const { count, setView, view } = useStore()
  return (
    <header className="sticky top-11 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          onClick={() => setView('shop')}
          className="text-xl font-semibold uppercase tracking-[0.35em] text-foreground"
        >
          FORMÉ
        </button>
        <div className="flex items-center gap-4">
          {view !== 'shop' && (
            <button
              type="button"
              onClick={() => setView('shop')}
              className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              Continue shopping
            </button>
          )}
          <button
            type="button"
            onClick={() => setView('cart')}
            className="relative inline-flex items-center gap-2 border border-border px-3 py-2 text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:bg-secondary"
          >
            <ShoppingBag className="size-4" />
            <span className="hidden sm:inline">Cart</span>
            <span className="tabular-nums">({count})</span>
          </button>
        </div>
      </div>
    </header>
  )
}

function Shop() {
  const { openProduct } = useStore()
  const [filter, setFilter] = useState<'all' | 'tees' | 'long-sleeve'>('all')
  const [sort, setSort] = useState<'featured' | 'low' | 'high'>('featured')

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'tees', label: 'T-Shirts' },
    { id: 'long-sleeve', label: 'Long Sleeve' },
  ] as const

  let list = products.filter((p) => filter === 'all' || p.collection === filter)
  if (sort === 'low') list = [...list].sort((a, b) => a.price - b.price)
  if (sort === 'high') list = [...list].sort((a, b) => b.price - a.price)

  return (
    <main>
      {/* Editorial hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Collection 001 · Prishtinë
          </p>
          <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold uppercase leading-[0.92] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            Contemporary essentials
          </h1>
          <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
              Made in the Balkans. Considered cuts, heavyweight cotton, no logos
              shouting. Free shipping across Kosovo over €{FREE_SHIPPING}.
            </p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {list.length} products
            </p>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-27 z-30 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={
                  'border px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors ' +
                  (filter === f.id
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border text-foreground hover:bg-secondary')
                }
              >
                {f.label}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
            <span className="hidden sm:inline">Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="border border-border bg-background px-2 py-1.5 text-xs uppercase tracking-wide text-foreground outline-none focus:border-foreground"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
            </select>
          </label>
        </div>
      </div>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid grid-cols-2 gap-px border border-border bg-border lg:grid-cols-3">
          {list.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => openProduct(p.id)}
              className="group flex flex-col bg-background text-left"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-muted">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-baseline justify-between p-4">
                <span className="text-sm font-medium uppercase tracking-wide text-foreground">
                  {p.name}
                </span>
                <span className="text-sm text-foreground tabular-nums">€{p.price}</span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}

function ProductView() {
  const { activeId, addToCart, setView } = useStore()
  const product = products.find((p) => p.id === activeId)
  const [size, setSize] = useState<string | null>(null)
  const [error, setError] = useState(false)

  if (!product) return null

  const handleAdd = () => {
    if (!size) {
      setError(true)
      return
    }
    addToCart(product.id, size)
    setView('cart')
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <button
        type="button"
        onClick={() => setView('shop')}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Back
      </button>

      <div className="mt-6 grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="relative aspect-square w-full overflow-hidden border border-border bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="md:py-4">
          <h1 className="text-3xl font-semibold uppercase tracking-tight text-foreground sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-lg text-foreground tabular-nums">€{product.price}</p>
          <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-widest text-foreground">
                Size
              </span>
              <button type="button" className="text-xs text-muted-foreground underline-offset-2 hover:underline">
                Size guide
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((s) => {
                const soldOut = product.soldOut?.includes(s)
                const active = s === size
                return (
                  <button
                    key={s}
                    type="button"
                    disabled={soldOut}
                    onClick={() => {
                      setSize(s)
                      setError(false)
                    }}
                    className={
                      'flex h-11 min-w-12 items-center justify-center border px-3 text-sm transition-colors ' +
                      (soldOut
                        ? 'cursor-not-allowed border-border text-muted-foreground/40 line-through'
                        : active
                          ? 'border-foreground bg-foreground text-background'
                          : 'border-border text-foreground hover:border-foreground')
                    }
                  >
                    {s}
                  </button>
                )
              })}
            </div>
            {error && (
              <p className="mt-2 text-xs text-destructive">Please select a size.</p>
            )}
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="mt-8 flex h-12 w-full items-center justify-center gap-2 bg-foreground text-sm font-medium uppercase tracking-wide text-background transition-opacity hover:opacity-90"
          >
            Add to cart — €{product.price}
          </button>

          <ul className="mt-6 space-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Truck className="size-4 text-foreground" /> Free shipping across Kosovo over €{FREE_SHIPPING}
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-4 text-foreground" /> Cash on delivery available
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

function CartView() {
  const { cart, updateQty, removeItem, subtotal, shipping, total, setView } = useStore()

  if (cart.length === 0) {
    return (
      <main className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <ShoppingBag className="size-8 text-muted-foreground" strokeWidth={1.5} />
        <h1 className="mt-6 text-2xl font-semibold uppercase tracking-tight text-foreground">
          Your cart is empty
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Add a piece from the collection to get started.
        </p>
        <button
          type="button"
          onClick={() => setView('shop')}
          className="mt-8 inline-flex h-11 items-center gap-2 bg-foreground px-6 text-sm font-medium uppercase tracking-wide text-background"
        >
          Shop the collection <ArrowRight className="size-4" />
        </button>
      </main>
    )
  }

  const remaining = Math.max(0, FREE_SHIPPING - subtotal)

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-2xl font-semibold uppercase tracking-tight text-foreground">Cart</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="border-t border-border">
            {cart.map((item) => {
              const p = products.find((p) => p.id === item.id) as Product
              return (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4 border-b border-border py-5"
                >
                  <div className="relative size-24 shrink-0 overflow-hidden bg-muted">
                    <Image src={p.image} alt={p.name} fill sizes="96px" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium uppercase tracking-wide text-foreground">
                          {p.name}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                          Size {item.size}
                        </p>
                      </div>
                      <p className="text-sm text-foreground tabular-nums">€{p.price * item.qty}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, item.size, item.qty - 1)}
                          className="flex size-8 items-center justify-center text-foreground hover:bg-secondary"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm tabular-nums text-foreground">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, item.size, item.qty + 1)}
                          className="flex size-8 items-center justify-center text-foreground hover:bg-secondary"
                          aria-label="Increase quantity"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.size)}
                        className="inline-flex items-center gap-1 text-xs uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <X className="size-3.5" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="border border-border p-6">
            <h2 className="text-xs font-medium uppercase tracking-widest text-foreground">
              Summary
            </h2>
            {remaining > 0 ? (
              <p className="mt-4 text-xs text-muted-foreground">
                Add €{remaining} more for free shipping.
              </p>
            ) : (
              <p className="mt-4 text-xs text-foreground">You&apos;ve unlocked free shipping.</p>
            )}
            <div className="mt-3 h-1 w-full bg-secondary">
              <div
                className="h-1 bg-foreground transition-all"
                style={{ width: `${Math.min(100, (subtotal / FREE_SHIPPING) * 100)}%` }}
              />
            </div>

            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd className="text-foreground tabular-nums">€{subtotal}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Shipping</dt>
                <dd className="text-foreground tabular-nums">
                  {shipping === 0 ? 'Free' : `€${shipping}`}
                </dd>
              </div>
              <div className="flex justify-between border-t border-border pt-3 text-base font-medium">
                <dt className="text-foreground">Total</dt>
                <dd className="text-foreground tabular-nums">€{total}</dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={() => setView('checkout')}
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 bg-foreground text-sm font-medium uppercase tracking-wide text-background transition-opacity hover:opacity-90"
            >
              Checkout <ArrowRight className="size-4" />
            </button>
          </div>
        </aside>
      </div>
    </main>
  )
}

const CITIES = [
  'Prishtinë', 'Prizren', 'Ferizaj', 'Pejë', 'Gjakovë',
  'Mitrovicë', 'Gjilan', 'Vushtrri', 'Podujevë',
]

function CheckoutView() {
  const { cart, subtotal, shipping, total, setView, clearCart } = useStore()
  const [form, setForm] = useState({ name: '', phone: '', city: 'Prishtinë', address: '', note: '' })

  const valid = form.name.trim().length > 1 && form.phone.trim().length >= 6 && form.address.trim().length > 3

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
        <p className="text-sm text-muted-foreground">Your cart is empty.</p>
        <button
          type="button"
          onClick={() => setView('shop')}
          className="mt-6 inline-flex h-11 items-center bg-foreground px-6 text-sm font-medium uppercase tracking-wide text-background"
        >
          Back to shop
        </button>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <button
        type="button"
        onClick={() => setView('cart')}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Back to cart
      </button>
      <h1 className="mt-4 text-2xl font-semibold uppercase tracking-tight text-foreground">Checkout</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-12">
        <form
          className="space-y-5 lg:col-span-7"
          onSubmit={(e) => {
            e.preventDefault()
            if (valid) setView('done')
          }}
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-foreground">
              Delivery details
            </p>
          </div>
          <Field label="Full name" id="name">
            <input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Arben Gashi"
              className="h-11 w-full border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-foreground"
            />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Phone" id="phone">
              <input
                id="phone"
                inputMode="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+383 4_ ___ ___"
                className="h-11 w-full border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-foreground"
              />
            </Field>
            <Field label="City" id="city">
              <select
                id="city"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="h-11 w-full border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-foreground"
              >
                {CITIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </Field>
          </div>
          <Field label="Address" id="address">
            <input
              id="address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              placeholder="Rruga, numri, hyrja"
              className="h-11 w-full border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-foreground"
            />
          </Field>
          <Field label="Note (optional)" id="note">
            <input
              id="note"
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
              placeholder="Udhëzime për dërgesën"
              className="h-11 w-full border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-foreground"
            />
          </Field>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-foreground">Payment</p>
            <div className="mt-3 flex items-center gap-3 border border-foreground bg-secondary/40 p-4">
              <span className="flex size-4 items-center justify-center rounded-full border-2 border-foreground">
                <span className="size-2 rounded-full bg-foreground" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">Cash on delivery</p>
                <p className="text-xs text-muted-foreground">Paguaj në dorëzim, në para të gatshme.</p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={!valid}
            className="flex h-12 w-full items-center justify-center gap-2 bg-foreground text-sm font-medium uppercase tracking-wide text-background transition-opacity hover:opacity-90 disabled:opacity-40"
          >
            Place order — €{total}
          </button>
        </form>

        <aside className="lg:col-span-5">
          <div className="border border-border p-6">
            <h2 className="text-xs font-medium uppercase tracking-widest text-foreground">
              Order
            </h2>
            <ul className="mt-4 space-y-3 border-b border-border pb-4">
              {cart.map((item) => {
                const p = products.find((p) => p.id === item.id) as Product
                return (
                  <li key={`${item.id}-${item.size}`} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {p.name} · {item.size} × {item.qty}
                    </span>
                    <span className="text-foreground tabular-nums">€{p.price * item.qty}</span>
                  </li>
                )
              })}
            </ul>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd className="text-foreground tabular-nums">€{subtotal}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Shipping</dt>
                <dd className="text-foreground tabular-nums">{shipping === 0 ? 'Free' : `€${shipping}`}</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-3 text-base font-medium">
                <dt className="text-foreground">Total</dt>
                <dd className="text-foreground tabular-nums">€{total}</dd>
              </div>
            </dl>
          </div>
          <button
            type="button"
            onClick={clearCart}
            className="mt-3 text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground"
          >
            Clear cart
          </button>
        </aside>
      </div>
    </main>
  )
}

function Confirmation() {
  const { total, clearCart, setView } = useStore()
  return (
    <main className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <div className="flex size-14 items-center justify-center rounded-full bg-foreground">
        <Check className="size-7 text-background" />
      </div>
      <h1 className="mt-6 text-3xl font-semibold uppercase tracking-tight text-foreground">
        Porosia u konfirmua
      </h1>
      <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
        Faleminderit për porosinë. Do t&apos;ju kontaktojmë në telefon për të konfirmuar
        dërgesën. Pagesa bëhet në dorëzim — €{total} në para të gatshme.
      </p>
      <div className="mt-6 border border-border px-6 py-3 text-sm">
        <span className="text-muted-foreground">Order no. </span>
        <span className="font-medium text-foreground tabular-nums">
          FRM-{Math.floor(1000 + Math.random() * 9000)}
        </span>
      </div>
      <button
        type="button"
        onClick={() => {
          clearCart()
          setView('shop')
        }}
        className="mt-8 inline-flex h-11 items-center gap-2 bg-foreground px-6 text-sm font-medium uppercase tracking-wide text-background"
      >
        Back to shop <ArrowRight className="size-4" />
      </button>
    </main>
  )
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1.5 block text-sm text-muted-foreground">{label}</span>
      {children}
    </label>
  )
}

function StoreFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground">FORMÉ</p>
        <p className="text-xs text-muted-foreground">
          Prishtinë, Kosovë · Cash on delivery · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
