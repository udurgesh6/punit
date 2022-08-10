import React, { useState, useMemo } from "react";

const App = () => {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const [name, setName] = useState("");
  const incrementCounter = () => {
    setCounter((counter) => counter + 1);
  };
  const incrementCounter2 = () => {
    setCounter2((counter2) => counter2 + 1);
  };
  // button logic
  // const isEvenOrOdd = () => {
  //   if (counter % 2 === 0) {
  //     setIsEvenOdd("Even");
  //   } else {
  //     setIsEvenOdd("Odd");
  //   }
  // };

  // direct logic not optimised
  const directlyIsEvenOdd = () => {
    console.log("Even odd function called");
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return counter % 2 === 0 ? "Even" : "Odd";
  };

  // direct logic but optimised
  const directlyIsEvenOddOptimised = useMemo(() => {
    console.log("Even odd function called");
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return counter % 2 === 0 ? "Even" : "Odd";
  }, [counter]);

  return (
    <div style={{ border: "1px solid blue" }}>
      <p>Count - {counter}</p>
      {/* <p> Even or odd - {isEvendd}</p> */}
      {/* {directlyIsEvenOdd()} */}
      {directlyIsEvenOddOptimised}
      <button onClick={incrementCounter}>Increment Counter</button>
      {/* <button onClick={isEvenOrOdd}>Check if even or odd</button> */}
      <p>Counter 2 - {counter2}</p>
      <button onClick={incrementCounter2}>Increment Counter2</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default App;
