import React, { JSX } from "react";
import "./ShoppingList.css";

export default function ShoppingList(): JSX.Element {
  const items = [
    { id: 1, product: "포도", quantity: 3 },
    { id: 2, product: "우유", quantity: 5 },
    { id: 3, product: "닭튀김", quantity: 2 },
  ];
  return (
    <div>
      <h1>쇼핑 목록</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.product} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
}
