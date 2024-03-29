import React from 'react'
import "./Header.scss"
import RainbowButton from '../../../ConnectButton/ConnectButton';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__connectbtn">
        <RainbowButton />
      </div>
      <div className="Header__avatar">
        <div className="Header__avatar-name">Nobuhara</div>
        <div className="Header__avatar-pp">
          <img src="/assets/images/photos/profilePic.png" alt="profile pic" />
        </div>
        <div className="Header__avatar-userName">@noburockshere</div>
      </div>
    </div>
  );
}

export default Header