export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface Shop {
  id: number;
  name: string;
  address: string;
  rating: number;
  products: Product[];
}
