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
]
