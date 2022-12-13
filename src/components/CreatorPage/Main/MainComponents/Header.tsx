import React from 'react'
import "./Header.scss"

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__id">
        <img
          className="Header__id-img"
          src="/assets/images/MetaMask.png"
          alt="metamask"
        />
        <span className="Header__id-span">0x0445.....3E0716</span>
      </div>
      <div className="Header__avatar">
        <div className="Header__avatar-name">Nobuhara</div>
        <div className="Header__avatar-pp">
          <img src="/assets/images/profilePic.png" alt="profile pic" />
        </div>
        <div className="Header__avatar-userName">@noburockshere</div>
      </div>
    </div>
  );
}

export default Header