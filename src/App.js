import React, { useState, useEffect } from "react";
import Child from "./Child";
import Child2 from "./Child2";
// useState, useEffect, useLayoutEffect, useReducer, useContext
const App = () => {
  const [showingChild, setShowingChild] = useState(true);
  const [cart, setCart] = useState(0);
  const addCart = () => {
    setCart((cart) => cart + 1);
  };
  const showChildOrChild2 = () => {
    setShowingChild((showingChild) => !showingChild);
  };
  return (
    <div>
      <p>Cart = {cart}</p>
      {/* {showingChild && <Child />} */}
      {showingChild ? <Child /> : <Child2 />}
      <button onClick={showChildOrChild2}>Show Child</button>
      <button onClick={addCart}>Add to Cart</button>
    </div>
  );
};

export default App;
