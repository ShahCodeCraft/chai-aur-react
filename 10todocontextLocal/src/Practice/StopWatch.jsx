import React, { useState, useEffect } from "react";
const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [val, setVal] = useState(0);

  //   const [datas, setDatas] = useState([]);
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setDatas(data);
  //       });
  //   });

  useEffect(() => {
    let interval = null;

    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  // const startAndStop = () => {
  //   setIsRunning(!isRunning);
  // };
  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  // const handleReset = () => {
  //   if (!isRunning) {
  //     setTime(0);
  //   }
  // };

  const reset = () => {
    setTime(0);
  };
  return (
    <div>
      <h1>Stop Watch Here...</h1>
      <h1 className="mt-4">
        <strong>
          {hours}:{minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}:
          {milliseconds.toString().padStart(2, "0")}
        </strong>
      </h1>
      <div className="mt-4">
        {/* <button className='btn btn-primary me-4' onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button> */}

        <button className="btn btn-primary" onClick={handleStart}>
          Start
        </button>
        <button className="btn btn-danger ms-3" onClick={handleStop}>
          Stop
        </button>
        <button className="btn btn-warning ms-3" onClick={reset}>
          Reset
        </button>

        <div>
          <h1>{val}</h1>
          <button onClick={() => setVal((c) => c + 1)}>Increment</button>
        </div>

        {/* <div>
          <h1>Fetch Title through API</h1>
          <ul>
            {datas.map((data) => (
              <li>{data.title}</li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default StopWatch;
