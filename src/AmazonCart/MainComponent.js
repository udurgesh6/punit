import React from "react";
import MainLeft from "./MainLeft";
import MainMiddle from "./MainMiddle";
import MainRight from "./MainRight";

const MainComponent = () => {
  return (
    <div
      style={{
        height: "70%",
        backgroundColor: "green",
        color: "black",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <MainLeft />
      <MainMiddle />
      <MainRight />
    </div>
  );
};

export default MainComponent;
