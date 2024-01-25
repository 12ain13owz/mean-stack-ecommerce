export interface Cart {
  id: number;
  name: string;
  image: string;
  category?: string;
  new_price: number;
  old_price: number;
  quantity: number;
}
