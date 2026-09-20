import type { Metadata } from 'next'
import { DemoFrame } from '@/components/demo-frame'

export const metadata: Metadata = {
  title: 'Oris Dental — Modern Dentistry in Prishtina',
  description: 'Book thoughtful, modern dental care with Oris Dental in Prishtina, Kosovo.',
}
import { OrisDentalApp } from '@/components/oris/oris-dental'

export default function Page() {
  return (
    <>
      <DemoFrame label="Oris Dental" />
      <OrisDentalApp />
    </>
  )
}
