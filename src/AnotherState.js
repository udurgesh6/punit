import React from "react";

const AnotherState = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(1);
  const [people, setPeople] = useState([]);
  const addThisName = () => {
    setPeople((people) => [...people, name]);
  };
  return (
    <div>
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        placeholder="Age"
        type="number"
        value={age}
        onChange={(eventage) => setAge(eventage.target.value)}
      />
      <button onClick={addThisName}>Add to list</button>
      <ul>
        {people.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnotherState;
