export type Vehicle = {
  id: string
  brand: string
  model: string
  year: number
  price: number
  mileage: number
  fuel: 'Diesel' | 'Petrol' | 'Hybrid'
  transmission: 'Automatic' | 'Manual'
  bodyType: 'Sedan' | 'SUV' | 'Coupe' | 'Estate'
  color: string
  hp: number
  drivetrain: 'FWD' | 'RWD' | '4WD'
  interior: string
  image: string
}

export const vehicles: Vehicle[] = [
  {
    id: 'bmw-530d',
    brand: 'BMW',
    model: '530d xDrive',
    year: 2021,
    price: 42900,
    mileage: 78000,
    fuel: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Carbon Black',
    hp: 286,
    drivetrain: '4WD',
    interior: 'Leather · Climate control',
    image: '/autohaus/bmw-530d.png',
  },
  {
    id: 'merc-e220d',
    brand: 'Mercedes-Benz',
    model: 'E220d',
    year: 2020,
    price: 39500,
    mileage: 91000,
    fuel: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Polar Silver',
    hp: 194,
    drivetrain: 'RWD',
    interior: 'Leather · Panoramic roof',
    image: '/autohaus/mercedes-e220d.png',
  },
  {
    id: 'audi-a6',
    brand: 'Audi',
    model: 'A6 40 TDI',
    year: 2022,
    price: 44900,
    mileage: 62000,
    fuel: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Glacier White',
    hp: 204,
    drivetrain: '4WD',
    interior: 'Leather · Bang & Olufsen',
    image: '/autohaus/audi-a6.png',
  },
  {
    id: 'porsche-macan',
    brand: 'Porsche',
    model: 'Macan',
    year: 2021,
    price: 58900,
    mileage: 49000,
    fuel: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Jet Black',
    hp: 261,
    drivetrain: '4WD',
    interior: 'Sport leather · Panoramic',
    image: '/autohaus/porsche-macan.png',
  },
  {
    id: 'volvo-xc60',
    brand: 'Volvo',
    model: 'XC60',
    year: 2020,
    price: 36800,
    mileage: 103000,
    fuel: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Onyx Black',
    hp: 190,
    drivetrain: 'AWD',
    interior: 'Nappa leather · Bowers',
    image: '/autohaus/hero.png',
  },
  {
    id: 'tesla-model3',
    brand: 'Tesla',
    model: 'Model 3',
    year: 2022,
    price: 48500,
    mileage: 38000,
    fuel: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Pearl White',
    hp: 325,
    drivetrain: 'RWD',
    interior: 'Premium · Autopilot',
    image: '/autohaus/hero.png',
  },
]

export const brands = ['All brands', 'BMW', 'Mercedes-Benz', 'Audi', 'Porsche', 'Volvo', 'Tesla']
export const bodyTypes = ['All types', 'Sedan', 'SUV', 'Coupe', 'Estate']
export const years = ['All years', '2022', '2021', '2020', '2019']
export const fuels = ['All fuels', 'Diesel', 'Petrol', 'Hybrid']
export const transmissions = ['All', 'Automatic', 'Manual']
