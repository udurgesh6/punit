import React, { useState } from "react";
import Child2 from "./Child2";

const App = () => {
  const [childDisable, setChildDisable] = useState(true);
  const disableChild = () => {
    setChildDisable((childDisable) => !childDisable);
  };
  return (
    <div style={{ border: "1px solid blue" }}>
      {childDisable ? <Child2 /> : <div>No Child</div>}
      <button onClick={disableChild}>Disable/Enable</button>
    </div>
  );
};

export default App;
