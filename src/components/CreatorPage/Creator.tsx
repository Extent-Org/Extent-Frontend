import React from "react";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";
import "./Creator.scss";
import BGEllipse from "./CreatorPageComponents/BGEllipse";

const Creator = () => {
  return (
    <div className="Creator">
      <BGEllipse/>
      <Sidebar />
      <Main />
    </div>
  );
};

export default Creator;
