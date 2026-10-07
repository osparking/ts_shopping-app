import { useState } from "react";
import "./App.css";
import ItemEntry from "./components/ItemEntry";
import { CartItem } from "./components/models/Carts";
import ShoppingCart from "./ShoppingCart";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = async (product: string): Promise<void> => {
    const { v4: uuidv4 } = await import("uuid");
    const item: CartItem = { id: uuidv4(), product, quantity: 1 };
    setCart((prev) => [...prev, item]);
  };

  return (
    <div className="App">
      <ShoppingCart items={cart} />
      <ItemEntry addItem={addItem} />
    </div>
  );
}

export default App;
