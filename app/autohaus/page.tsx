import type { Metadata } from 'next'
import { DemoFrame } from '@/components/demo-frame'

export const metadata: Metadata = {
  title: 'AutoHaus — Premium Vehicles in Prishtina',
  description: 'Explore carefully selected premium vehicles and book a test drive with AutoHaus in Prishtina, Kosovo.',
}
import { AutoHausApp } from '@/components/autohaus/autohaus'

export default function Page() {
  return (
    <>
      <DemoFrame label="AutoHaus" />
      <AutoHausApp />
    </>
  )
}
