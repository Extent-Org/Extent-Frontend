import React from "react";
import { Outlet } from 'react-router-dom'
import './UserMain.scss'


const UserMain = React.forwardRef<HTMLDivElement>((props,mainRef) => {
  return (
    <div className="UserMain" ref={mainRef}>
      <Outlet />
    </div>
  );
})

export default UserMain
