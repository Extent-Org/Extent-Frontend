import React from "react";
import "./ProfileCard.scss";
import { motion } from "framer-motion";

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileCard__logo">
        <img
          src="/assets/images/logo/extent-logo.png"
          alt="logo"
          className="ProfileCard__logo-icon"
        />
        Extent
      </div>
      <motion.div
        whileTap={{ scale: 0.8 }}
        className="ProfileCard__shareButton"
      >
        <img src="/assets/images/icons/share.svg" alt="share-button" />
      </motion.div>
      <div className="ProfileCard__accountAddress">
        0x044593d0eE586D538F6D3Bd05eeB1e93aD3E0716
      </div>
      <div className="ProfileCard__pictureDiv">
        <img src="/assets/images/photos/profilePic_lg.png" alt="profile" />
      </div>
      <div className="ProfileCard__info">
        <h1 className="ProfileCard__info-name">Nobuhara</h1>
        <p className="ProfileCard__info-userName">@noburockshere</p>
        <p className="ProfileCard__info-bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam{" "}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
