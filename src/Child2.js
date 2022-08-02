import React, { useEffect, useState } from "react";

const Child2 = () => {
  const [timer, setTimer] = useState(0);
  const [timer2, setTimer2] = useState(0);

  useEffect(() => {
    const currentId = setInterval(() => {
      setTimer((timer) => timer + 1);
      console.log("Still Running");
    }, 1000);
    return () => {
      clearInterval(currentId);
    };
  }, []);

  const incTimer = () => {
    setTimer((timer) => timer + 1);
  };
  const incTimer2 = () => {
    setTimer((timer2) => timer2 + 1);
  };
  return (
    <div style={{ border: "1px solid red" }}>
      <p>{timer}</p>
      <p>{timer2}</p>
      <button onClick={incTimer}>Inc</button>
      <button onClick={incTimer2}>Inc2</button>
    </div>
  );
};

export default Child2;
