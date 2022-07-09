import React, { useEffect, useState } from "react";

const Child = () => {
  const [num, setNum] = useState(1);
  const [num2, setNum2] = useState(2);

  useEffect(() => {
    console.log("Child Loading", num);
    return () => {
      console.log("Child Unloading");
    };
  }, [num]);

  return (
    <div style={{ border: "1px solid red" }}>
      <p>I am Child Component</p>
      <p>Num - {num}</p>
      <p>Num2 - {num2}</p>
      <button onClick={() => setNum((num) => num + 1)}>Inc Num</button>
      <button onClick={() => setNum2((num2) => num2 + 1)}>Inc Num2</button>
    </div>
  );
};

export default Child;
