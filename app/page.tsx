import { HubNav } from '@/components/hub/hub-nav'
import { HubHero } from '@/components/hub/hub-hero'
import { DemoShowcase } from '@/components/hub/demo-showcase'
import { Services } from '@/components/hub/services'
import { ApproachContact } from '@/components/hub/approach-contact'
import { HubFooter } from '@/components/hub/hub-footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HubNav />
      <main>
        <HubHero />
        <DemoShowcase />
        <Services />
        <ApproachContact />
      </main>
      <HubFooter />
    </div>
  )
}
