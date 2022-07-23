import React, { useState } from "react";

const App = () => {
  // Simple Variable Declaration and Problems
  // let cart = 1;
  // const incCart = () => {
  //   cart = cart + 1;
  //   console.log(cart);
  // };
  const [products, setProducts] = useState([
    { id: 1, name: "Soap" },
    { id: 2, name: "TV" },
    { id: 3, name: "Cake" },
  ]);
  const [productsAdded, setProductsAdded] = useState([]);

  const addProductsToCart = (element) => {
    const checkProduct = productsAdded.filter(
      (prod, prodindex) => prod.id === element.id
    );
    if (checkProduct.length > 0) {
    } else {
      setProductsAdded((productsAdded) => [
        ...productsAdded,
        { id: element.id, name: element.name, total: 1 },
      ]);
    }
  };

  return (
    <div>
      <p>Cart - {productsAdded.length}</p>
      <p>Products Added</p>
      {productsAdded.map((element, id) => (
        <div key={id}>
          <p>{element.name}</p>
        </div>
      ))}
      <p>Products on display</p>
      {products.map((element, id) => (
        <div key={id}>
          <p>{element.name}</p>
          <button onClick={() => addProductsToCart(element)}>
            Add {element.name} to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
