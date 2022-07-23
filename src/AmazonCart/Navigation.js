import React, { useContext } from "react";
import cartLayer from "./CartContext";
// const Navigation = (props) => {
//   console.log(props);
//   return (
//     <div style={{ height: "20%", backgroundColor: "black", color: "white" }}>
//       Cart - {props.cart_name}
//     </div>
//   );
// };

const Navigation = ({ cart_name, name, age }) => {
  const { cart } = useContext(cartLayer);
  return (
    <div style={{ height: "20%", backgroundColor: "black", color: "white" }}>
      Cart - {cart}
    </div>
  );
};
export default Navigation;
