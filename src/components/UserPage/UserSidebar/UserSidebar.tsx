import React from 'react'
import Menu from '../../CreatorPage/Sidebar/SidebarComponents/Menu'
import SideButton from '../../CreatorPage/Sidebar/SidebarComponents/SideButton'
import './UserSidebar.scss'

const UserSidebar = React.forwardRef<HTMLDivElement>((props, SideBarRef) => {
  const menuItems = [
    {
      title: "Feed",
      image: "/assets/images/icons/dashboard.svg",
      link: "feed",
    },
    {
      title: "Search",
      image: "/assets/images/icons/search.svg",
      link: "search",
    },
    {
      title: "Notifications",
      image: "/assets/images/icons/notification.svg",
      link: "notification",
    },
    {
      title: "Subscription",
      image: "/assets/images/icons/subscription.svg",
      link: "subscription",
    },
    {
      title: "Profile",
      image: "/assets/images/icons/profile.svg",
      link: "profile",
    },
  ]; 
  return (
    <div className="UserSidebar" ref={SideBarRef}>
      <Menu menuItems={menuItems} linkTo={"user"} />
      <SideButton />
      <h1 className="UserSidebar__create">Create</h1>
    </div>
  );
})

export default UserSidebar
