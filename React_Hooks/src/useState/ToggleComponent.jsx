import React, { useState } from "react";

function Toggle() {
  const [isToggled, setIsToggled] = useState(true);

  return (
    <div className="bg-gray-800 h-screen p-5 flex flex-col items-center justify-center">
      <p className="text-white mb-4">
        The toggle is {isToggled ? "ON" : "OFF"}
      </p>
      <button
        // className={` ${isToggled ? "bg-yellow-500" : "bg-gray-500"} text-white px-4 py-2 rounded mb-4 onClick={() => setIsToggled(!isToggled)`}
        className={`
          ${!!isToggled && "bg-blue-500"}
          
          ${!isToggled && "bg-gray-500"}
        text-white px-4 py-2 rounded mb-4`}
        onClick={() => setIsToggled(!isToggled)}
      >
        Toggle
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => alert("Color Red")}
      >
        Color Red
      </button>
    </div>
  );
}

export default Toggle;

// const stats = [
//   { id: 1, name: "Transactions every 24 hours", value: "44 million" },
//   { id: 2, name: "Assets under holding", value: "$119 trillion" },
//   { id: 3, name: "New users annually", value: "46,000" },
// ];

// function Toggle() {
//   return (
//     <div className="  p-6">
//       <form>
//         <input
//           type="text"
//           className="bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300 ..."
//         />
//         <button className="bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline ...">
//           Sign Up
//         </button>
//       </form>

//       <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white rounded p-2">
//         Hover me
//       </button>
//     </div>
//   );
// }
// export default Toggle;
