export type Demo = {
  slug: string
  index: string
  name: string
  category: string
  location: string
  href: string
  theme: string
  tagline: string
  description: string
  accentLabel: string
}

export const demos: Demo[] = [
  {
    slug: 'aroma',
    index: '01',
    name: 'AROMA',
    category: 'Restaurant & Reservations',
    location: 'Prishtinë, Kosovë',
    href: '/aroma',
    theme: 'theme-aroma',
    tagline: 'Rezervo tavolinën në sekonda.',
    description:
      'An elegant restaurant website with a full reservation flow — date, guests and live time slots.',
    accentLabel: 'Booking system',
  },
  {
    slug: 'ek-studio',
    index: '02',
    name: 'E.K. Studio',
    category: 'Beauty Salon Booking',
    location: 'Ferizaj, Kosovë',
    href: '/ek-studio',
    theme: 'theme-ek',
    tagline: 'Rezervo termin me stafin që zgjedh.',
    description:
      'A premium salon booking experience — pick a service, a specialist and an open appointment.',
    accentLabel: 'Appointments',
  },
  {
    slug: 'villa-aurea',
    index: '03',
    name: 'Villa Aurea',
    category: 'Boutique Hotel',
    location: 'Riviera Shqiptare',
    href: '/villa-aurea',
    theme: 'theme-aurea',
    tagline: 'A boutique escape on the Albanian Riviera.',
    description:
      'An editorial hotel site with rooms, gallery, amenities and a check-in / check-out booking flow.',
    accentLabel: 'Hospitality',
  },
  {
    slug: 'forme',
    index: '04',
    name: 'FORMÉ',
    category: 'E-commerce',
    location: 'Prishtinë · Ships across Kosovë',
    href: '/forme',
    theme: 'theme-forme',
    tagline: 'Contemporary essentials, made in the Balkans.',
    description:
      'A streetwear storefront with filtering, product pages, cart and cash-on-delivery checkout.',
    accentLabel: 'Online store',
  },
  {
    slug: 'autohaus', index: '05', name: 'AutoHaus', category: 'Automotive dealership', location: 'Prishtinë, Kosovë', href: '/autohaus', theme: 'theme-auto', tagline: 'Find your next car.', description: 'A premium vehicle inventory and test-drive system for a modern dealership.', accentLabel: 'Vehicle inventory',
  },
  {
    slug: 'oris-dental', index: '06', name: 'Oris Dental', category: 'Healthcare booking', location: 'Prishtinë, Kosovë', href: '/oris-dental', theme: 'theme-oris', tagline: 'Modern dentistry. Personal care.', description: 'A calm healthcare website with treatments, doctors and appointment booking.', accentLabel: 'Appointments',
  },
  {
    slug: 'forma-properties', index: '07', name: 'Forma Properties', category: 'Real estate platform', location: 'Prishtinë, Kosovë', href: '/forma-properties', theme: 'theme-forma', tagline: 'Find a place that feels like yours.', description: 'A premium property discovery platform with listings, search and map view.', accentLabel: 'Property discovery',
  },
  {
    slug: 'drivecare', index: '08', name: 'DriveCare', category: 'Service center portal', location: 'Ferizaj, Kosovë', href: '/drivecare', theme: 'theme-drive', tagline: 'Service that keeps you moving.', description: 'A booking system and customer vehicle portal for an automotive service center.', accentLabel: 'Custom tool',
  },
  {
    slug: 'northline', index: '09', name: 'Northline Hospitality', category: 'Business operations', location: 'Kosovë', href: '/northline', theme: 'theme-northline', tagline: 'Run the room behind the room.', description: 'A responsive operations dashboard for bookings, staff, inventory and reporting.', accentLabel: 'Internal software',
  },
]
