import React, { useState } from "react";
import Child2 from "./Child2";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const callProductsApi = () => {
    axios
      .get("https://fakestoreapi.com/products/1")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log("Some error");
      })
      .finally(() => {
        console.log("Finally");
      });
  };
  return (
    <div style={{ border: "1px solid blue" }}>
      <button onClick={callProductsApi}>Call API</button>
      {products.map((product) => (
        <div key={product.id}>
          <p>Title - {product.title}</p>
          <p>Price - {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
