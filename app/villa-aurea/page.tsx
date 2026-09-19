import type { Metadata } from 'next'
import { DemoFrame } from '@/components/demo-frame'
import { AureaNav, AureaHero } from '@/components/aurea/aurea-hero'
import { Rooms } from '@/components/aurea/rooms'
import { Gallery, Amenities, LocationContact } from '@/components/aurea/sections'

export const metadata: Metadata = {
  title: 'Villa Aurea — Boutique hotel on the Albanian Riviera',
  description:
    'A twelve-room boutique villa above the Ionian Sea. Sea-view rooms, terrace breakfast and a quiet pool. Book your stay.',
}

export default function VillaAureaPage() {
  return (
    <div className="theme-aurea min-h-screen bg-background font-sans text-foreground">
      <DemoFrame label="Villa Aurea" />
      <AureaNav />
      <main>
        <AureaHero />
        <Rooms />
        <Gallery />
        <Amenities />
        <LocationContact />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="font-serif text-xl text-foreground">Villa Aurea</p>
          <p className="text-xs text-muted-foreground">
            Dhërmi, Riviera Shqiptare · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}
