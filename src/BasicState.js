import React from "react";

const BasicState = () => {
  const [age, setAge] = useState(1);
  const [name, setName] = useState("Durgesh");
  const incrementAge = () => {
    setAge((age) => age + 1); //2
  };
  const changeName = () => {
    if (name === "Durgesh") {
      setName("Ritesh");
    } else {
      setName("Durgesh");
    }
  };
  return (
    <div>
      <p>{age}</p>
      <p>{name}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default BasicState;
