import React, { useRef } from "react";
import UserMain from "./UserMain/UserMain";
import UserSidebar from "./UserSidebar/UserSidebar";
import "./UserPage.scss";
import BGEllipse from "../CreatorPage/CreatorPageComponents/BGEllipse";
import Logo from "../CreatorPage/Sidebar/SidebarComponents/Logo";

const UserPage = () => {
  const sideBarRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLImageElement>(null);
  return (
    <div className="UserPage">
      <BGEllipse />
      <img
        ref={btnRef}
        src="/assets/images/icons/hamburger.svg"
        alt="menu_button"
        className="UserPage__menuButton"
        onClick={() => {
          sideBarRef.current?.classList.toggle("UserSidebar--active");
          mainRef.current?.classList.toggle("UserMain--active");
          btnRef.current?.classList.toggle("UserPage__menuButton--active");
        }}
      />
      <Logo />
      <UserSidebar ref={sideBarRef} />
      <UserMain ref={mainRef} />
    </div>
  );
};

export default UserPage;
