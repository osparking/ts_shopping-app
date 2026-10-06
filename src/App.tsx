import { useState } from "react";
import "./App.css";
import { CartItem } from "./components/models/Carts";
import ShoppingCart from "./ShoppingCart";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <div className="App">
      <ShoppingCart items={cart} />
    </div>
  );
}

export default App;
