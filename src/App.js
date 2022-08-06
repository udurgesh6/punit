import React, { useState, useEffect } from "react";
import Child2 from "./Child2";
import axios from "axios";
import Child from "./Child";

const App = () => {
  const [products, setProducts] = useState([]);

  // const callProductsApiThroughAsyncAwait = async () => {
  //   const someData = await axios.get("https://fakestoreapi.com/products");
  //   console.log(someData);
  // };

  // const callProductsApiThroughSimpleAxios = async () => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((response) => console.log(response))
  //     .catch((err) => console.log(err));
  // };
  const num = 1;
  useEffect(() => {
    axios
      .get(
        `https://fakestoreapi.com/products?product=clothing&name=punit&age=2`
      )
      .then((response) => console.log(response));
  }, []);

  const addProduct = () => {
    axios
      .patch("https://fakestorapi.com/products/op", {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
        id: "uniqueid",
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const deleteProduct = () => {
    axios
      .delete("https://fakestoreapi.com/products/6")
      .then((resp) => console.log(resp));
  };

  return (
    <div style={{ border: "1px solid blue" }}>
      {/* <button onClick={callProductsApiThroughSimpleAxios}>Call API</button> */}
      {products.map((product) => (
        <div key={product.id}>
          <p>Title - {product.title}</p>
          <p>Price - {product.price}</p>
        </div>
      ))}
      <button onClick={deleteProduct}>Delete</button>
    </div>
  );
};

export default App;
