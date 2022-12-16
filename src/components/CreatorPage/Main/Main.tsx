import React from "react";
import { Outlet } from "react-router-dom";
import "./Main.scss";
import Header from "./MainComponents/Header";

const Main = () => {
  return <div className="Main">
    <Header/>
    <Outlet/>
  </div>;
};

export default Main;
