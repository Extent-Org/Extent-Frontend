import React from 'react'
import PictureInput from '../UploadPageComponents/PictureInput'
import PublishButton from '../UploadPageComponents/PublishButton'
import StreamRateInput from '../UploadPageComponents/StreamRateInput'
import TitleAndDescInput from '../UploadPageComponents/TitleAndDescInput'
import VideoInput from '../UploadPageComponents/VideoInput'

const UploadVideo = () => {
  return (
    <div>
      <TitleAndDescInput ofType="video" />
      <PictureInput ofType="Thumbnail" size={1} />
      <StreamRateInput/>
      <VideoInput />
      <PublishButton />
    </div>
  );
}

export default UploadVideo
