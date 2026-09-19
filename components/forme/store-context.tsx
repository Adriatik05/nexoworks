'use client'

import { createContext, useContext, useMemo, useState } from 'react'

export type Product = {
  id: string
  name: string
  price: number
  collection: 'tees' | 'long-sleeve'
  image: string
  description: string
  sizes: string[]
  soldOut?: string[]
}

export const products: Product[] = [
  {
    id: 'essential-tee',
    name: 'Essential Tee',
    price: 29,
    collection: 'tees',
    image: '/forme/tee-essential.png',
    description:
      'Mid-weight 220gsm combed cotton with a clean set-in collar. The everyday base of the FORMÉ wardrobe.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    soldOut: ['XS'],
  },
  {
    id: 'oversized-tee',
    name: 'Oversized Tee',
    price: 35,
    collection: 'tees',
    image: '/forme/tee-oversized.png',
    description:
      'A boxy, dropped-shoulder cut in heavyweight 260gsm cotton. Pre-washed for a lived-in feel.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'graphic-tee',
    name: 'Graphic Tee',
    price: 39,
    collection: 'tees',
    image: '/forme/tee-graphic.png',
    description:
      'Screen-printed graphic on a 240gsm body. A limited run, printed in Prishtina.',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: ['S'],
  },
  {
    id: 'long-sleeve',
    name: 'Long Sleeve',
    price: 45,
    collection: 'long-sleeve',
    image: '/forme/tee-longsleeve.png',
    description:
      'Heavyweight long sleeve with ribbed cuffs and a relaxed body. Built for the in-between seasons.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
]

export type CartItem = { id: string; size: string; qty: number }

export const FREE_SHIPPING = 50
export const SHIPPING_FEE = 2

type View = 'shop' | 'product' | 'cart' | 'checkout' | 'done'

type StoreCtx = {
  view: View
  setView: (v: View) => void
  activeId: string | null
  openProduct: (id: string) => void
  cart: CartItem[]
  addToCart: (id: string, size: string) => void
  updateQty: (id: string, size: string, qty: number) => void
  removeItem: (id: string, size: string) => void
  clearCart: () => void
  count: number
  subtotal: number
  shipping: number
  total: number
}

const Ctx = createContext<StoreCtx | null>(null)

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState<View>('shop')
  const [activeId, setActiveId] = useState<string | null>(null)
  const [cart, setCart] = useState<CartItem[]>([])

  const openProduct = (id: string) => {
    setActiveId(id)
    setView('product')
    if (typeof window !== 'undefined') window.scrollTo({ top: 0 })
  }

  const addToCart = (id: string, size: string) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === id && i.size === size)
      if (existing) {
        return prev.map((i) =>
          i.id === id && i.size === size ? { ...i, qty: i.qty + 1 } : i,
        )
      }
      return [...prev, { id, size, qty: 1 }]
    })
  }

  const updateQty = (id: string, size: string, qty: number) =>
    setCart((prev) =>
      prev
        .map((i) => (i.id === id && i.size === size ? { ...i, qty } : i))
        .filter((i) => i.qty > 0),
    )

  const removeItem = (id: string, size: string) =>
    setCart((prev) => prev.filter((i) => !(i.id === id && i.size === size)))

  const clearCart = () => setCart([])

  const { count, subtotal, shipping, total } = useMemo(() => {
    const count = cart.reduce((n, i) => n + i.qty, 0)
    const subtotal = cart.reduce((sum, i) => {
      const p = products.find((p) => p.id === i.id)
      return sum + (p ? p.price * i.qty : 0)
    }, 0)
    const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING ? 0 : SHIPPING_FEE
    return { count, subtotal, shipping, total: subtotal + shipping }
  }, [cart])

  const value: StoreCtx = {
    view,
    setView,
    activeId,
    openProduct,
    cart,
    addToCart,
    updateQty,
    removeItem,
    clearCart,
    count,
    subtotal,
    shipping,
    total,
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useStore() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
