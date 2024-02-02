export interface Gpu {
  id: string;
  brand: string;
  model: string;
  status: 'inStock' | 'outOfStock' | 'comingSoon';
  price: number;
  imageUrl?: string;
}
