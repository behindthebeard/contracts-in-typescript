export interface Gpu {
  id: number;
  brand: string;
  model: string;
  status: 'inStock' | 'outOfStock' | 'comingSoon';
  price: number;
  imageUrl?: string;
}
