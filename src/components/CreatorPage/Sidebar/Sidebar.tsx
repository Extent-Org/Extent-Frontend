import React from "react";
import Logo from "./SidebarComponents/Logo";
import Menu from "./SidebarComponents/Menu";
import SideButton from "./SidebarComponents/SideButton";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Logo />
      <Menu />
      <SideButton />
    </div>
  );
};

export default Sidebar;
