import React from 'react'
import PictureInput from '../UploadPageComponents/PictureInput'
import PublishButton from '../UploadPageComponents/PublishButton'
import TitleAndDescInput from '../UploadPageComponents/TitleAndDescInput'

const UploadPicture = () => {
  return (
    <div>
      <TitleAndDescInput ofType="picture" />
      <PictureInput ofType="Picture" size={10} />
      <PublishButton />
    </div>
  );
}

export default UploadPicture
