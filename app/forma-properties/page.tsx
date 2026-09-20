import type { Metadata } from 'next'
import { DemoFrame } from '@/components/demo-frame'

export const metadata: Metadata = {
  title: 'Forma Properties — Premium Real Estate in Kosovo',
  description: 'Discover considered homes and commercial properties with Forma Properties in Kosovo.',
}
import { FormaPropertiesApp } from '@/components/forma/forma-properties'

export default function Page() {
  return (
    <>
      <DemoFrame label="Forma Properties" />
      <FormaPropertiesApp />
    </>
  )
}
