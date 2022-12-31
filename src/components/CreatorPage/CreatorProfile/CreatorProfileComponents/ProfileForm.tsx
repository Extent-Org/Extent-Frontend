import React, { useRef, useState } from "react";
import "./ProfileForm.scss";
import { motion } from "framer-motion";
import { message } from "antd";

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

const ProfileForm = ({earningAddress, profilePic, name, userName, bio, setEarningAddress, setProfilePic, setName, setUserName,  setBio } : Props) => {
    const [bioCharCount, setBioCharCount] = useState(bio.length);
  const uploadRef = useRef<HTMLInputElement | null>(null);
  const profilePicRef = useRef<any>(null);

  return (
    <div className="ProfileForm">
      <span className="ProfileForm__span">
        <div className="ProfileForm__span-img">
          <img src={profilePic} alt="profile" ref={profilePicRef}/>
        </div>
        <input
          type={"file"}
          accept=".png, .jpeg, .jpg"
          hidden
          ref={uploadRef}
          onChange={(e) => {
            e.preventDefault();
            setProfilePic(URL.createObjectURL(e.target.files![0]))
          }}
        />
        <motion.div
          className="ProfileForm__span-uploadBtn"
          whileTap={{ scale: 0.9 }}
          onClick={() => uploadRef.current?.click()}
        >
          Upload Picture
        </motion.div>
      </span>
      <div className="ProfileForm__inputDiv">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name here"
          defaultValue={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          id="userName"
          placeholder="Enter your username here"
          defaultValue={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label htmlFor="bio">Bio</label>
        <div className="ProfileForm__inputDiv-bio">
          <textarea
            name="bio"
            id="bio"
            rows={3}
            maxLength={200}
            defaultValue={bio}
            onChange={(e) => {
              setBio(e.target.value);
              setBioCharCount(e.target.value.length);
            }}
            placeholder="Let people know about yourself"
            className="ProfileForm__inputDiv-bio-textarea"
          />
          <span className="ProfileForm__inputDiv-bio-charCount">
            {bioCharCount}/200
          </span>
        </div>
        <label htmlFor="earningAddress">Earning Address</label>
        <div className="ProfileForm__inputDiv-earning">
          <input
            type="text"
            id="earningAddress"
            className="ProfileForm__inputDiv-earning-address"
            defaultValue={earningAddress}
            onChange={(e) => {
              setEarningAddress(e.target.value);
            }}
          />
          <img
            src="/assets/images/icons/copy-btn.svg"
            alt="copy"
            onClick={() => {
              navigator.clipboard.writeText(earningAddress);
              message.success("Address copied to clipboard");
            }}
          />
        </div>
        <motion.div
          className="ProfileForm__inputDiv-saveBtn"
          whileTap={{ scale: 0.9 }}
        >
          Save Changes
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileForm;
