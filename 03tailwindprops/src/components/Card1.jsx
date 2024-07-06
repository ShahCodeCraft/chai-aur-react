import React from "react";

const Card1 = ({ name, content }) => {
  return (
    <>
      <h1>Tailwind and Props</h1>
      <div>
        <h2>Card Name : {name}</h2>
        <p>Card Content : {content}</p>
      </div>
    </>
  );
};
export default Card1;
