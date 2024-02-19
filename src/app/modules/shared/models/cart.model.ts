export interface Cart {
  id: number;
  name: string;
  image: string;
  category?: string;
  newPrice: number;
  oldPrice: number;
  quantity: number;
}
