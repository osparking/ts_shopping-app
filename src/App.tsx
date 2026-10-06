import "./App.css";
import { CartItem } from "./Carts";
import ShoppingCart from "./ShoppingCart";

function App() {
  const cart: CartItem[] = [
    { id: 1, product: "포도", quantity: 3 },
    { id: 2, product: "우유", quantity: 5 },
    { id: 3, product: "닭튀김", quantity: 2 },
  ];

  return (
    <div className="App">
      <ShoppingCart items={cart} />
    </div>
  );
}

export default App;
