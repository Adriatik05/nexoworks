import type { Metadata } from 'next'
import { DemoFrame } from '@/components/demo-frame'
import { StoreProvider } from '@/components/forme/store-context'
import { Store } from '@/components/forme/store'

export const metadata: Metadata = {
  title: 'FORMÉ — Contemporary essentials, made in the Balkans',
  description:
    'A Kosovo streetwear label. Heavyweight tees and long sleeves, free shipping across Kosovo over €50, cash on delivery.',
}

export default function FormePage() {
  return (
    <div className="theme-forme min-h-screen bg-background font-sans text-foreground">
      <DemoFrame label="FORMÉ" />
      <StoreProvider>
        <Store />
      </StoreProvider>
    </div>
  )
}
