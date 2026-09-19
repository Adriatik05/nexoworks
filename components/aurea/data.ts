export type Room = {
  id: string
  name: string
  price: number
  size: string
  capacity: string
  blurb: string
  image: string
  gallery: string[]
  amenities: string[]
}

export const rooms: Room[] = [
  {
    id: 'deluxe-sea',
    name: 'Deluxe Sea View',
    price: 180,
    size: '28 m²',
    capacity: '2 guests',
    blurb:
      'A calm, light-filled room with a private balcony framing the turquoise bay.',
    image: '/aurea/room-1.png',
    gallery: ['/aurea/room-1.png', '/aurea/gallery-1.png', '/aurea/gallery-2.png'],
    amenities: ['Sea-view balcony', 'King bed', 'Rainfall shower', 'Nespresso', 'Air conditioning', 'Free Wi-Fi'],
  },
  {
    id: 'garden-suite',
    name: 'Garden Suite',
    price: 150,
    size: '32 m²',
    capacity: '2–3 guests',
    blurb:
      'A serene suite opening onto a private terrace shaded by old olive trees.',
    image: '/aurea/room-2.png',
    gallery: ['/aurea/room-2.png', '/aurea/gallery-2.png', '/aurea/hero.png'],
    amenities: ['Private terrace', 'Queen + sofa bed', 'Soaking tub', 'Minibar', 'Air conditioning', 'Free Wi-Fi'],
  },
  {
    id: 'aurea-suite',
    name: 'Aurea Suite',
    price: 260,
    size: '45 m²',
    capacity: '2 guests',
    blurb:
      'Our signature top-floor suite with a freestanding tub and panoramic sea views.',
    image: '/aurea/room-3.png',
    gallery: ['/aurea/room-3.png', '/aurea/gallery-1.png', '/aurea/hero.png'],
    amenities: ['Panoramic terrace', 'Freestanding tub', 'King bed', 'Lounge area', 'Butler service', 'Free Wi-Fi'],
  },
]

export const galleryImages = [
  '/aurea/hero.png',
  '/aurea/room-1.png',
  '/aurea/gallery-1.png',
  '/aurea/room-3.png',
  '/aurea/gallery-2.png',
  '/aurea/room-2.png',
]
