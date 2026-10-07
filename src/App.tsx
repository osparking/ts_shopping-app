import { useState } from "react";
import "./App.css";
import ItemEntry from "./components/ItemEntry";
import { CartItem } from "./components/models/Carts";
import ShoppingCart from "./ShoppingCart";
import { v4 as uuidv4 } from 'uuid'; 


function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const addItem = (productName: string): void => {
    const newItem = {id: uuidv4(), product: productName, quantity: 1}
    console.log("추가 항목: ", productName);
    setCart([...cart, newItem]);
  };

  return (
    <div className="App">
      <ShoppingCart items={cart} />
      <ItemEntry addItem={addItem} />
    </div>
  );
}

export default App;
