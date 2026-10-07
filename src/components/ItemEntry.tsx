import React, { JSX, useRef, useState } from "react";

interface ItemEntryProps {
  addItem: (name: string, quantity: number) => void;
}

function ItemEntry({ addItem }: ItemEntryProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  function handleEntry(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const productName = inputRef.current!.value;
    const quantity = quantityRef.current!.value;
    addItem(productName, parseInt(quantity));
    inputRef.current!.value = "";
    quantityRef.current!.value = "1";
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "flex-start", width: "50%" }}
    >
      <form onSubmit={handleEntry}>
        <input
          type="text"
          ref={inputRef}
          placeholder="항목 이름"
          style={{ marginLeft: "10px" }}
        />
        <input
          type="number"
          ref={quantityRef}
          placeholder="수량"
          min={0}
          style={{ marginLeft: "10px", width: "7ch" }}
        />
        <button type="submit">담기</button>
      </form>
    </div>
  );
}

export default ItemEntry;
