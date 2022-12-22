import React ,{ useState }from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

type MenuItem = {
  title: string;
  image: string;
  link: string;
};
const Menu = () => {
  const menuItems: MenuItem[] = [
    {
      title: "Dashboard",
      image: "/assets/images/icons/dashboard.png",
      link: "dashboard",
    },
    {
      title: "Content",
      image: "/assets/images/icons/content.png",
      link: "content",
    },
    {
      title: "Drafts",
      image: "/assets/images/icons/draft.png",
      link: "draft",
    },
    {
      title: "Analytics",
      image: "/assets/images/icons/analytic.png",
      link: "analytics",
    },
    {
      title: "Profile",
      image: "/assets/images/icons/profile.png",
      link: "profile",
    },
  ];
  
  const currentPath = window.location.pathname.split("/")[2];
  
  const [isSelected, setIsSelected] = useState<boolean[]>([
    currentPath === "dashboard" || currentPath === undefined,
    currentPath === "content",
    currentPath === "draft",
    currentPath === "analytics",
    currentPath === "profile",
  ]);
  return (
    <div className="Menu">
      <ul className="Menu__ul">
        {menuItems.map((item, index) => {
          return (
            <li className="Menu__ul-li" key={index} onClick={() => {
              const newIsSelected = isSelected.map((item, i) => {
                if (i === index) {
                  return true
                }
                return false
              })
              setIsSelected(newIsSelected);
            }}>
              {isSelected[index] && (
                <span className="Menu__ul-li-selector"></span>
              )}
              <Link to={`/creator/${item.link}`} className="Menu__ul-li-a">
                <img src={item.image} alt="icon" className="Menu__ul-li-img" />
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
