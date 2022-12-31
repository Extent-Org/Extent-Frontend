import React, { useState } from 'react'
import './CreatorProfile.scss'
import ProfileCard from './CreatorProfileComponents/ProfileCard';
import ProfileForm from './CreatorProfileComponents/ProfileForm';

const CreatorProfile = () => {
  const [earningAddress, setEarningAddress] = useState(
    "0x044593d0eE586D538F6D3Bd05eeB1e93aD3E0716"
  );
  const [profilePic, setProfilePic] = useState<any>(
    "/assets/images/photos/profilePic_lg.png"
  );
  const [name, setName] = useState("Nobuhara");
  const [userName, setUserName] = useState("noburockshere");
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam"
  );
  return (
    <div className="CreatorProfile">
      <div className="CreatorProfile__area">
        <ProfileCard
          earningAddress={earningAddress}
          profilePic={profilePic}
          name={name}
          userName={userName}
          bio={bio}
          setEarningAddress={setEarningAddress}
          setProfilePic={setProfilePic}
          setName={setName}
          setUserName={setUserName}
          setBio={setBio}
        />
        <ProfileForm
          earningAddress={earningAddress}
          profilePic={profilePic}
          name={name}
          userName={userName}
          bio={bio}
          setEarningAddress={setEarningAddress}
          setProfilePic={setProfilePic}
          setName={setName}
          setUserName={setUserName}
          setBio={setBio}
        />
      </div>
    </div>
  );
}

export default CreatorProfile