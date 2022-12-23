import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={"/"}>
        <img
          src="/assets/images/logo/extent-logo.png"
          alt="logo"
          className="logo__icon"
        />
        Extent
      </Link>
    </div>
  );
};

export default Logo;
