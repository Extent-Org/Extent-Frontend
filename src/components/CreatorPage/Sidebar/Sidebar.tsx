import React from "react";
import Logo from "./SidebarComponents/Logo";
import Menu from "./SidebarComponents/Menu";
import SideButton from "./SidebarComponents/SideButton";
import "./Sidebar.scss";

type MenuItem = {
  title: string;
  image: string;
  link: string;
};
const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    image: "/assets/images/icons/dashboard.svg",
    link: "dashboard",
  },
  {
    title: "Content",
    image: "/assets/images/icons/content.svg",
    link: "content",
  },
  {
    title: "Drafts",
    image: "/assets/images/icons/draft.svg",
    link: "draft",
  },
  {
    title: "Profile",
    image: "/assets/images/icons/profile.svg",
    link: "profile",
  },
];
  

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Logo />
      <Menu menuItems = {menuItems} to={"creator"}/>
      <SideButton/>
    </div>
  );
};

export default Sidebar;
