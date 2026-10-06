import React, { JSX, useRef, useState } from "react";

interface ItemEntryProps {
    addItem: (name: string) => void; 
}

function ItemEntry({addItem}: ItemEntryProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleEntry(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const productName = inputRef.current!.value;
    addItem(productName)
    inputRef.current!.value = "";
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
        <button type="submit">담기</button>
      </form>
    </div>
  );
}

export default ItemEntry;
