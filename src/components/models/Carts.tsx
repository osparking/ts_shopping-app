export interface CartItem {
  id: number;
  product: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}
