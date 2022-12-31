import React ,{ useState }from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

type MenuItem = {
  title: string;
  image: string;
  link: string;
};
type Props = {
  menuItems: MenuItem[];
  to: string;
};

const Menu = ({menuItems, to} : Props) => {
  const currentPath = window.location.pathname.split("/")[2];
  
  const [isSelected, setIsSelected] = useState<boolean[]>([
    currentPath === menuItems[0].link || currentPath === undefined,
    currentPath === menuItems[1].link,
    currentPath === menuItems[2].link,
    currentPath === menuItems[3].link,
  ]);
  return (
    <div className="Menu">
      <ul className="Menu__ul">
        {menuItems.map((item, index) => {
          return (
            <li className="Menu__ul-li" key={index}>
              {isSelected[index] && (
                <span className="Menu__ul-li-selector"></span>
              )}
              <Link
                to={`/${to}/${item.link}`}
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
