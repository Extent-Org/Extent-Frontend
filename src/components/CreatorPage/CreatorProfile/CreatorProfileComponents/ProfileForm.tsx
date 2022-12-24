import React, { useRef, useState } from "react";
import "./ProfileForm.scss";
import { motion } from "framer-motion";
import { message } from "antd";

const ProfileForm = () => {
  const uploadRef = useRef<HTMLInputElement | null>(null);
  const [earningAddress, setEarningAddress] = useState(
    "0x044593d0eE586D538F6D3Bd05eeB1e93aD3E0716"
  );
  const [name, setName] = useState("Nobuhara");
  const [userName, setUserName] = useState("noburockshere");
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam"
  );
  const [bioCharCount, setBioCharCount] = useState(bio.length);
  return (
    <div className="ProfileForm">
      <span className="ProfileForm__span">
        <div className="ProfileForm__span-img">
          <img src="/assets/images/photos/profilePic_lg.png" alt="profile" />
        </div>
        <input
          type={"file"}
          accept=".png, .jpeg, .jpg"
          hidden
          ref={uploadRef}
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
          onChange={() => {
            setName(name);
          }}
        />
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          id="userName"
          placeholder="Enter your username here"
          defaultValue={userName}
          onChange={() => {
            setName(userName);
          }}
        />
        <label htmlFor="bio">Bio</label>
        <div className="ProfileForm__inputDiv-bio">
          <textarea
            name="bio"
            id="bio"
            rows={3}
            defaultValue={bio}
            onChange={(e) => {
              setName(bio);
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
            value={earningAddress}
            readOnly
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
