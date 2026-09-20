import type { Metadata } from 'next'
import { DemoFrame } from '@/components/demo-frame'

export const metadata: Metadata = {
  title: 'DriveCare — Vehicle Service in Ferizaj',
  description: 'Book vehicle maintenance and keep track of your car history with DriveCare in Ferizaj.',
}
import { DriveCareApp } from '@/components/drivecare/drivecare'

export default function Page() {
  return (
    <>
      <DemoFrame label="DriveCare" />
      <DriveCareApp />
    </>
  )
}
