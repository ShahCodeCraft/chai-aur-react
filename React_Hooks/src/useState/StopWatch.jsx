// src/components/Stopwatch.js
// import React, { useState, useRef } from "react";

// const Stopwatch = () => {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const intervalRef = useRef(null);

//   const start = () => {
//     if (!isRunning) {
//       setIsRunning(true);
//       intervalRef.current = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     }
//   };

//   const stop = () => {
//     if (isRunning) {
//       setIsRunning(false);
//       clearInterval(intervalRef.current);
//     }
//   };

//   const reset = () => {
//     setIsRunning(false);
//     clearInterval(intervalRef.current);
//     setTime(0);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold mb-4">Stopwatch</h1>
//       <div className="text-6xl mb-4">
//         {Math.floor(time / 60)
//           .toString()
//           .padStart(2, "0")}
//         :{(time % 60).toString().padStart(2, "0")}
//       </div>
//       <div>
//         <button
//           onClick={start}
//           className="bg-green-500 text-white px-4 py-2 rounded m-2"
//         >
//           Start
//         </button>
//         <button
//           onClick={stop}
//           className="bg-red-500 text-white px-4 py-2 rounded m-2"
//         >
//           Stop
//         </button>
//         <button
//           onClick={reset}
//           className="bg-yellow-500 text-white px-4 py-2 rounded m-2"
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Stopwatch;

// src/components/Stopwatch.js
import React, { useState, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
        console.log("Time Start :", time);
      }, 10);
    }
  };

  const stop = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
      console.log("Time Stop", time);
    }
  };

  const reset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
    console.log("Rest Time", time);
  };

  const formatTime = (time) => {
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Stopwatch</h1>
      <div className="text-6xl mb-4">{formatTime(time)}</div>
      <div>
        <button
          onClick={start}
          className="bg-green-500 text-white px-4 py-2 rounded m-2"
        >
          Start
        </button>
        <button
          onClick={stop}
          className="bg-red-500 text-white px-4 py-2 rounded m-2"
        >
          Stop
        </button>
        <button
          onClick={reset}
          className="bg-yellow-500 text-white px-4 py-2 rounded m-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
