import React, { useEffect, useRef } from "react";
import UserMain from "./UserMain/UserMain";
import UserSidebar from "./UserSidebar/UserSidebar";
import "./UserPage.scss";
import BGEllipse from "../CreatorPage/CreatorPageComponents/BGEllipse";
import Logo from "../CreatorPage/Sidebar/SidebarComponents/Logo";

const UserPage = () => {
  const sideBarRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    sideBarRef.current?.children[1].classList.remove("SideButton--active");
    sideBarRef.current?.children[1].children[0].classList.remove(
      "SideButton__button--active"
    );
    const menu = sideBarRef.current?.children[0].children[0];
    menu?.classList.remove("Menu__ul--active"); // menu list styles
    if (menu?.children?.length) {
      for (let i = 0; i < menu?.children?.length; i++) {
        menu?.children[i].classList.remove("Menu__ul-li--active");
        menu?.children[i].children[0].children[1].classList.remove(
          "Menu__ul-li-a-span--active"
        );
      }
    }
  }, []);

  return (
    <div className="UserPage">
      <BGEllipse />
      <img
        ref={btnRef}
        src="/assets/images/icons/hamburger.svg"
        alt="menu_button"
        className="UserPage__menuButton"
        onClick={() => {
          sideBarRef.current?.classList.toggle("UserSidebar--active"); //sidebar size
          mainRef.current?.classList.toggle("UserMain--active"); //main area size
          btnRef.current?.classList.toggle("UserPage__menuButton--active"); //menu hamberger postion
          sideBarRef.current?.children[1].classList.toggle(
            "SideButton--active"
          ); //create button position
          sideBarRef.current?.children[1].children[0].classList.toggle("SideButton__button--active"); //create button styles
          const menu = sideBarRef.current?.children[0].children[0];
          menu?.classList.toggle("Menu__ul--active"); // menu list styles
          if (menu?.children?.length) {
            for (let i = 0; i < menu?.children?.length; i++) {
              menu?.children[i].classList.toggle("Menu__ul-li--active");
              menu?.children[i].children[0].children[1].classList.toggle(
                "Menu__ul-li-a-span--active"
              );
            }
          }
          sideBarRef.current?.children[2].classList.toggle(
            "UserSidebar__create--active"
          ); //"Create" text display
        }}
      />
      <Logo />
      <UserSidebar ref={sideBarRef} />
      <UserMain ref={mainRef} />
    </div>
  );
};

export default UserPage;
