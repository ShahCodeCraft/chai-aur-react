import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let newObj = {
    username: "Shah",
    age: 25,
  };

  let newArr = [2, 4, 6];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test Kits
      </h1>
      <Card
        channelName="chaiaurcode"
        btnText="click me"
        myObject={newObj}
        myArray={newArr}
      />

      <Card channelName="Shah Alam" btnText="visit me" />
    </>
  );
}

export default App;
