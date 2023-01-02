import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

type MenuItem = {
  title: string;
  image: string;
  link: string;
};
type Props = {
  menuItems: MenuItem[];
  linkTo: string;
};

const Menu = ({ menuItems, linkTo }: Props) => {
  const currentPath = window.location.pathname.split("/")[2];

  const [isSelected, setIsSelected] = useState<boolean[]>(
    new Array(menuItems.length).fill(false)
  );

  useEffect(() => {
    const newIsSelected = isSelected.map((item, i) => {
      if (currentPath ? menuItems[i].link === currentPath : i === 0) {
        return true;
      }
      return false;
    });
    setIsSelected(newIsSelected);
  }, []);

  return (
    <div className="Menu">
      <ul className="Menu__ul Menu__ul--active">
        {menuItems.map((item, index) => {
          return (
            <li className="Menu__ul-li Menu__ul-li--active" key={index}>
              <Link
                to={`/${linkTo}/${item.link}`}
                className="Menu__ul-li-a"
                onClick={() => {
                  const newIsSelected = isSelected.map((item, i) => {
                    if (i === index) {
                      return true;
                    }
                    return false;
                  });
                  setIsSelected(newIsSelected);
                }}
              >
                <span>
                  {isSelected[index] && (
                    <span className="Menu__ul-li-selector"></span>
                  )}

                  <img
                    src={item.image}
                    alt="icon"
                    className="Menu__ul-li-img"
                  />
                </span>
                <span className="Menu__ul-li-a-span Menu__ul-li-a-span--active">
                  {item.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
