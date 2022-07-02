import React from "react";

const Component1Child = () => {
  let name = "Durgesh",
    age = 14;
  const incrementAge = () => {
    age += 1;
    console.log(age);
  };
  incrementAge();
  return (
    <div
      style={{ fontWeight: "bold", color: "blue", border: "1px solid black" }}
    >
      <p>HI I AM A CHILD OF COMPONENT 1</p>
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={incrementAge}>Increment Age</button>
    </div>
  );
};

export default Component1Child;
