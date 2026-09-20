import type { Metadata } from 'next'
import { DemoFrame } from '@/components/demo-frame'

export const metadata: Metadata = {
  title: 'Northline Hospitality — Business Operations',
  description: 'Run bookings, staff, inventory and sales from one polished hospitality operations dashboard.',
}
import { NorthlineDashboard } from '@/components/northline/northline-dashboard'

export default function Page() {
  return (
    <>
      <DemoFrame label="Northline Hospitality" />
      <NorthlineDashboard />
    </>
  )
}
