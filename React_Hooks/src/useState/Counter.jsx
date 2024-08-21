import React, { useState } from "react";

const Counter = () => {
  const initialValue = 5;
  const [count, setCount] = useState(initialValue);

  const Increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const Reset = () => {
    setCount(initialValue);
  };

  let color = "Red";
  return (
    <div className="bg-black text-white h-screen text-center">
      <div className="mt-5">
        <h1 className="text-3xl">Digitl Counter</h1>
        <h1 className="text-3xl">{count}</h1>

        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={Increment}
        >
          Increment
        </button>
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={Decrement}
        >
          Decrement
        </button>
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={Reset}
        >
          Reset
        </button>
        <button
          className="m-2 bg-green-400 p-1.5 rounded"
          onClick={() => setCount(count + 1)}
        >
          Add
        </button>
        <button
          className="m-2 bg-red-400 p-1.5 rounded"
          onClick={() => setCount(count - 1)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default Counter;
