import React, { JSX, useState } from "react";

function ItemEntry(): JSX.Element {
  const [itemName, setItemName] = useState<string>("");

  function handleEntry(e: React.SubmitEvent) {
    e.preventDefault();
    console.log("폼 제출됨");
  }

  function changeName(e: React.ChangeEvent<HTMLInputElement>) {
    setItemName(e.target.value);
    console.log("이름: ", e.target.value);
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "flex-start", width: "50%" }}
    >
      <form onSubmit={handleEntry}>
        <input
          type="text"
          placeholder="항목 이름"
          value={itemName}
          onChange={changeName}
          style={{ marginLeft: "10px" }}
        />
        <button type="submit">담기</button>
      </form>
    </div>
  );
}

export default ItemEntry;
