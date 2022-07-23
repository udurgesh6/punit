import React, { useContext } from "react";
import cartLayer from "./CartContext";
const MainRight = () => {
  const { cart, incCart } = useContext(cartLayer);
  //   console.log(data);
  return (
    <div style={{ width: "30%", border: "1px solid black" }}>
      <p>Cart - {cart}</p>
      <button onClick={incCart}>Inc</button>
    </div>
  );
};

export default MainRight;
