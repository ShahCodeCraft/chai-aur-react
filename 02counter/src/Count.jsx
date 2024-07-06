import React, { useState } from "react";

function Counting() {
  let initialVal = 5;
  const [count, setCount] = useState(initialVal);

  const handleAddClick = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const handleRemoveClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleRestart = () => {
    setCount(initialVal);
  };
  return (
    <>
      <h1>Digital Counting Center</h1>
      <h1 style={{ textAlign: "center" }}>{count}</h1>

      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleRemoveClick}>Remove</button>
      <button onClick={handleRestart}>Restart</button>
    </>
  );
}

export default Counting;
