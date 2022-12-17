import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideButton.scss";

const SideButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handelOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="SideButton">
      <div
        className={`SideButton__button ${isOpen ? "activeBtn" : ""}`}
        onClick={handelOpen}
      >
        +
      </div>
      <ul className="SideButton__ul">
        <Link to="/creator/upload" state={{ type: 0 }}>
          <li className={isOpen ? "active3" : ""}>
            <img src="/assets/images/icons/media1.png" alt="icons" />
          </li>
        </Link>
        <Link to="/creator/upload" state={{ type: 1 }}>
          <li className={isOpen ? "active2" : ""}>
            <img src="/assets/images/icons/media2.png" alt="icons" />
          </li>
        </Link>
        <Link to="/creator/upload" state={{ type: 2 }}>
          <li className={isOpen ? "active1" : ""}>
            <img src="/assets/images/icons/media3.png" alt="icons" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideButton;
