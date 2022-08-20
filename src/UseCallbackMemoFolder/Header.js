import React, { memo } from "react";

const Header = ({ count }) => {
  console.log("I am header");
  return (
    <div>
      <p>I am header</p>
      {count}
    </div>
  );
};

export default memo(Header);
