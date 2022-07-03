import React from "react";

const SimpleState = () => {
  const [name, setName] = useState("Durgesh");
  const [age, setAge] = useState(1);
  const getDetails = () => {
    console.log(name, age);
  };
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <p>Name - {name}</p>
      <p>Age - {age}</p>

      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(event) => onNameChange(event)}
      />
      <input
        placeholder="Age"
        type="number"
        value={age}
        onChange={(eventage) => setAge(eventage.target.value)}
      />
      <button onClick={getDetails}>Get Details</button>
    </div>
  );
};

export default SimpleState;
