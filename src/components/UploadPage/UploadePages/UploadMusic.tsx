import React from 'react'
import MusicInput from '../UploadPageComponents/MusicInput'
import PictureInput from '../UploadPageComponents/PictureInput'
import PublishButton from '../UploadPageComponents/PublishButton'
import TitleAndDescInput from '../UploadPageComponents/TitleAndDescInput'
import StreamRateInput from "../UploadPageComponents/StreamRateInput";

const UploadMusic = () => {
  return (
    <div>
      <TitleAndDescInput ofType="music" />
      <PictureInput ofType="Cover Photo" size={1} />
      <StreamRateInput />
      <MusicInput />
      <PublishButton />
    </div>
  );
}

export default UploadMusic
