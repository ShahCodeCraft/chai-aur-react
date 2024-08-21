// src/App.js
import React from "react";
import PropsData from "./PropsItem";

const data = [
  { name: "Shah", age: 27, course: "B.Tech" },
  { name: "Alam", age: 26, course: "BSE" },
  { name: "Khan", age: 25, course: "BCA" },
];

const PropsCom = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student List</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {data.map((item, index) => (
          <PropsData
            key={index}
            name={item.name}
            age={item.age}
            course={item.course}
          />
        ))}
      </div>
    </div>
  );
};

export default PropsCom;

// import React from "react";

// const PropsCom = (props) => {
//   return (
//     <>
//       <h1>Student List</h1>
//       <li>My name is {props.name}</li>
//       <li>My age is {props.age}</li>
//     </>
//   );
// };
// export default PropsCom;
