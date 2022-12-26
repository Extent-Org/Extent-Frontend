import React from "react";
import "./ProfileCard.scss";
import { motion } from "framer-motion";

interface Props {
  earningAddress: string;
  profilePic: string;
  name: string;
  userName: string;
  bio: string;
  setEarningAddress: (earningAddress: string) => void;
  setProfilePic: (profilePic: string) => void;
  setName: (name: string) => void;
  setUserName: (userName: string) => void;
  setBio: (bio: string) => void;
}

const ProfileCard = ({earningAddress, profilePic, name, userName, bio} : Props) => {
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
        {earningAddress}
      </div>
      <div className="ProfileCard__pictureDiv">
        <img src={profilePic} alt="profile" />
      </div>
      <div className="ProfileCard__info">
        <h1 className="ProfileCard__info-name">{name}</h1>
        <p className="ProfileCard__info-userName">@{userName}</p>
        <p className="ProfileCard__info-bio">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
