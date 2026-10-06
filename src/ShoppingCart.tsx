import { JSX } from "react";
import { Cart } from "./components/models/Carts";
import "./ShoppingCart.css";

export default function ShoppingCart({ items }: Cart): JSX.Element {
  return (
    <div style={{ marginLeft: "10px" }}>
      <h1>쇼핑 목록</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            품목: {item.product} - 수량: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
