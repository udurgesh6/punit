import React from "react";

const Form = () => {
  const [name, setName] = useState("Durgesh");
  const [age, setAge] = useState(1);
  const getDetails = (e) => {
    e.preventDefault();
    console.log(name, age);
  };
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <p>Name - {name}</p>
      <p>Age - {age}</p>
      <form
        style={{ border: "1px solid black" }}
        onSubmit={(e) => getDetails(e)}
      >
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
        <button type="submit">Get Details</button>
      </form>
    </div>
  );
};

export default Form;
