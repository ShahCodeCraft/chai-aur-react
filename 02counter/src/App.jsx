// import { useState } from "react";

// import "./App.css";

// function App() {
//   let [counter, setCounter] = useState(15);

//   const addValue = () => {
//     counter = counter + 1;
//     setCounter(counter);
//     console.log("clicked", counter, Math.random());
//   };

//   const removeValue = () => {
//     setCounter(counter - 1);
//   };

//   return (
//     <>
//       <h1>Chai Aur React</h1>
//       <h2>Couter Value : {counter}</h2>

//       <button onClick={addValue}>Add Value</button>
//       <br />
//       <button onClick={removeValue}>Remove Value</button>
//     </>
//   );
// }

// export default App;

import "./App.css";
import { useState } from "react";

function App() {
  let initialValue = 0;
  const [counter, setCounter] = useState(initialValue);

  function addVal() {
    if (counter < 20) {
      setCounter(counter + 1);

      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
    }

    console.log("Clicked", counter);
  }

  const removeVal = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }

    console.log("Clicked", counter);
  };

  const restart = () => {
    setCounter(initialValue);
  };
  return (
    <>
      <h1>Digital Counting</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addVal}>Add value</button>
      <br />
      <button onClick={removeVal}>Remove value</button>
      <br />
      <button onClick={restart}>Restart</button>
    </>
  );
}

export default App;
