// src/components/PropsData.js
import React from "react";

const PropsData = ({ name, age, course }) => {
  return (
    <ul className="list-none">
      <li className="border border-gray-300 px-4 py-3">Name: {name}</li>
      <li className="border border-gray-300 px-4 py-3">Age: {age}</li>
      <li className="border border-gray-300 px-4 py-3">Course: {course}</li>
    </ul>
  );
};

export default PropsData;
