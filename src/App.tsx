import { useState } from "react";
import "./App.css";
import ItemEntry from "./components/ItemEntry";
import { CartItem } from "./components/models/Carts";
import ShoppingCart from "./ShoppingCart";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const addItem = (productName: string): void => {
    console.log("추가 항목: ", productName);
  };

  return (
    <div className="App">
      <ShoppingCart items={cart} />
      <ItemEntry addItem={addItem} />
    </div>
  );
}

export default App;
