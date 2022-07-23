import React, { useState } from "react";
import MainComponent from "./AmazonCart/MainComponent";
import Navigation from "./AmazonCart/Navigation";
import SubNavigation from "./AmazonCart/SubNavigation";
import cartLayer from "./AmazonCart/CartContext";

const App = () => {
  const [cart, setCart] = useState(0);
  const incCart = () => {
    setCart((cart) => cart + 1);
  };
  return (
    <cartLayer.Provider value={{ cart, incCart }}>
      <div style={{ border: "1px solid red", height: "100vh" }}>
        {/* Props Based */}
        {/* <Navigation cart_name={cart} name="Durgesh" age="25" />
      <SubNavigation />
      <MainComponent cart_name={cart} inc_name={incCart} /> */}

        <Navigation />
        <SubNavigation />
        <MainComponent />
      </div>
    </cartLayer.Provider>
  );
};

export default App;
