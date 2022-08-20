import React, { useState, useCallback } from "react";
import Button from "./UseCallbackMemoFolder/Button";
import Header from "./UseCallbackMemoFolder/Header";
import Button1 from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { DatePicker } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
const App = () => {
  const [count, setCount] = useState(1);
  const [cp, setCp] = useState(2);
  const incrementCount = () => {
    setCount((count) => count + 1);
  };
  const incrementCp = () => {
    setCp((cp) => cp + 1);
  };
  // without optimisation
  // const timePassFunc = () => {
  //   console.log("Hello");
  // };
  // With Optimisation

  const timePassFunc = useCallback(() => {
    console.log("Hello");
  }, []);

  return (
    <div style={{ border: "1px solid blue" }}>
      <Header count={count} />
      <Button cp={cp} timePassFunc={timePassFunc} />
      <Button1 onClick={incrementCount}>Inc</Button1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <DatePicker />
      <button onClick={incrementCp}>Inc Cp</button>
    </div>
  );
};

export default App;
