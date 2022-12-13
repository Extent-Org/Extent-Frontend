import React from "react";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";
import "./Creator.scss";

const Creator = () => {
  return (
    <div className="Creator">
      <div className="Creator__bg-ellipse"></div>
      <Sidebar />
      <Main />
    </div>
  );
};

export default Creator;
