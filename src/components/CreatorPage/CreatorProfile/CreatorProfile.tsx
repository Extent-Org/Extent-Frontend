import React from 'react'
import './CreatorProfile.scss'
import ProfileCard from './CreatorProfileComponents/ProfileCard';
import ProfileForm from './CreatorProfileComponents/ProfileForm';

const CreatorProfile = () => {
  return (
    <div className="CreatorProfile">
      <span className="CreatorProfile__span">Profile</span>
      <div className="CreatorProfile__area">
        <ProfileCard />
        <ProfileForm />
      </div>
    </div>
  );
}

export default CreatorProfile