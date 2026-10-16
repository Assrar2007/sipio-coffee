export interface Product {
  id: string;
  name: string;
  category: 'iced' | 'hot' | 'specialty' | 'beans';
  description: string;
  price: number;
  image: string;
  badge?: string;
  volume?: string;
  notes?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
  favoriteDrink: string;
}
