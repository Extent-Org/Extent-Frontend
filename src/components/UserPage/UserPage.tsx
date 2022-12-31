import React, { useRef } from "react";
import UserMain from './UserMain/UserMain'
import UserSidebar from './UserSidebar/UserSidebar'
import './UserPage.scss'
import BGEllipse from '../CreatorPage/CreatorPageComponents/BGEllipse'

const UserPage = () => {
  const sideBarRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)
  return (
    <div className="UserPage">
      <BGEllipse />
      <img
        src="/assets/images/icons/hamburger.svg"
        alt="menu_button"
        className="UserPage__menuButton"
        onClick={() => {
          sideBarRef.current?.classList.toggle("UserSidebar--active");
          mainRef.current?.classList.toggle("UserMain--active");
        }}
      />
      <UserSidebar ref={sideBarRef} />
      <UserMain ref={mainRef} />
    </div>
  );
}

export default UserPage
