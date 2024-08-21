// import React, { useState } from "react";

// const TextChange = () => {
//   // const [datas, setDatas] = useState({ name: "Shah", age: 27 });

//   const [datas, setDatas] = useState("My name is Shah");

//   const handleClick = () => {
//     // setDatas({ name: "Shahbaz", age: 21 });
//     setDatas("I am 26 years old");
//   };


// const [color,setColor] = useState("Blue")
//   const colorChange = () =>{
//     setColor("Red")
//     console.log(color);
//   }
//   return (
//     <div>
//       <h1>
//         {/* My name is {datas.name} and my age is {datas.age} */}
//         {datas}
//       </h1>
//       <button
//         className={` bg-red-600 p-2 my-2 rounded`}
//         // onClick={() => setDatas({ name: "Shahbaz Alam", age: 24 })}
//         onClick={handleClick}
//       >
//         Click me
//       </button>

//       <div>
//         <h2>My favourite color is {color}</h2>
//         <button onClick={colorChange}>Red</button>
//       </div>
//     </div>
//   );
// };
// export default TextChange;

import React,{useState} from 'react'

const TextChange = () =>{
  const [text, setText] = useState("")
  const handleText = () =>{
    setText("Welcome to my dear friend...")
  }

  const [datas, setDatas] = useState({
    name:"Shah",
    age:25,
    course:"B.Tech"
  })
  return(
    <div>
      <h1 className='text-red-400'>{text}</h1>
      <button className='bg-blue-500 px-2 py-1' onClick={handleText}>Click me</button>

      <h1>My name is {datas.name}. My Age is {datas.age}. I have done my {datas.course}</h1>
    </div>
  )
}
export default TextChange;