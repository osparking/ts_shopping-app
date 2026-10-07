export interface CartItem {
  id: string;
  product: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}
