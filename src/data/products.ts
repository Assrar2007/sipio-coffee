import type { Product } from '../types';
import { getAssetUrl } from '../lib/utils';

export const PRODUCTS: Product[] = [
  {
    id: 'iced-americano',
    name: 'Iced Americano',
    category: 'iced',
    description: 'Double shot of signature SIPIO espresso diluted over crystal clear ice with crisp mountain water.',
    price: 4.75,
    image: getAssetUrl('/assets/02-iced-americano.webp'),
    badge: 'Popular',
    volume: '16 oz',
    notes: 'Dark chocolate, toasted hazelnut, bright citrus acidity'
  },
  {
    id: 'caramel-iced-coffee',
    name: 'Caramel Iced Coffee',
    category: 'iced',
    description: 'Slow-steeped espresso combined with slow-cooked Madagascar vanilla bean and house salted caramel swirl.',
    price: 5.85,
    image: getAssetUrl('/assets/04-caramel-iced-coffee.webp'),
    badge: 'Bestseller',
    volume: '16 oz',
    notes: 'Buttery caramel, sea salt, cream foam'
  },
  {
    id: 'vanilla-iced-latte',
    name: 'Vanilla Iced Latte',
    category: 'iced',
    description: 'Silky whole milk layered with rich espresso and delicate organic French vanilla essence over artisan ice.',
    price: 5.45,
    image: getAssetUrl('/assets/03-vanilla-iced-latte.webp'),
    badge: 'Classic',
    volume: '16 oz',
    notes: 'Vanilla blossom, creamy custard, gentle sweetness'
  },
  {
    id: 'mocha-frappe',
    name: 'Mocha Frappé',
    category: 'specialty',
    description: 'Blended espresso with pure Belgian dark cocoa, whipped organic cream, and artisan chocolate drizzle.',
    price: 6.25,
    image: getAssetUrl('/assets/05-mocha-frappe.webp'),
    badge: 'Indulgent',
    volume: '18 oz',
    notes: 'Belgian cocoa, velvety espresso, whipped cream'
  },
  {
    id: 'cold-brew',
    name: 'Reserve Cold Brew',
    category: 'iced',
    description: '18-hour cold steeped single-origin Ethiopian beans yielding an ultra-smooth, naturally sweet brew.',
    price: 5.25,
    image: getAssetUrl('/assets/06-cold-brew.webp'),
    badge: 'Signature',
    volume: '16 oz',
    notes: 'Stone fruit, wild honey, cocoa nibs'
  },
  {
    id: 'espresso-shot',
    name: 'Classic Double Espresso',
    category: 'hot',
    description: 'Pure extracted intensity with a dense golden-amber crema. Extracted at 9 bars of pressure in 27 seconds.',
    price: 3.85,
    image: getAssetUrl('/assets/07-espresso-shot.webp'),
    badge: 'Essential',
    volume: '2 oz',
    notes: 'Roasted almond, brown sugar, full-bodied crema'
  },
  {
    id: 'latte-art-cup',
    name: 'Velvet Latte Art',
    category: 'hot',
    description: 'Micro-foamed steamed milk poured into a double espresso ristretto with handcrafted barista rosetta art.',
    price: 4.95,
    image: getAssetUrl('/assets/08-latte-art-cup.webp'),
    badge: 'Artisan',
    volume: '12 oz',
    notes: 'Sweet steamed milk, floral undertones, caramel finish'
  },
  {
    id: 'roasted-coffee-beans',
    name: 'Single-Origin Roasted Beans',
    category: 'beans',
    description: 'Whole bean specialty roast. Altitude 1,950m, washed process. Roasted in micro-batches in our roastery.',
    price: 18.50,
    image: getAssetUrl('/assets/09-roasted-coffee-beans.webp'),
    badge: 'Reserve Roast',
    volume: '250g bag',
    notes: 'Jasmine floral, bergamot, dark plum, honey'
  }
];
