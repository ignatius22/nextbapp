export interface Product {
  products: Product[];
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  brand: string;
  isLoading: boolean;
}
