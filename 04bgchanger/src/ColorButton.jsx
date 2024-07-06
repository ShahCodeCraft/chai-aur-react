import React, { useState } from "react";

const ColorButton = () => {
  const [color, setColor] = useState("black");
  return (
    <div
      className=" w-full h-screen text-center p-5 text-white"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl">Background Color Change</h1>

      <button
        className="bg-red-700 p-2 m-2 mt-5"
        onClick={() => setColor("red")}
      >
        Red
      </button>

      <button
        className="bg-green-700 p-2 m-2"
        onClick={() => setColor("green")}
      >
        Green
      </button>

      <btton className="bg-blue-700 p-2 m-2" onClick={() => setColor("blue")}>
        Blue
      </btton>

      <button
        className="bg-yellow-400 p-2 m-2"
        onClick={() => setColor("yellow")}
      >
        Yellow
      </button>
    </div>
  );
};

export default ColorButton;
