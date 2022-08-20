import React, { memo } from "react";

const Button = ({ cp, timePassFunc }) => {
  console.log("I am Button");
  return <button>Click</button>;
};

export default memo(Button);
