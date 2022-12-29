import React from 'react'
import PictureInput from '../UploadPageComponents/PictureInput'
import PublishButton from '../UploadPageComponents/PublishButton'
import StreamRateInput from '../UploadPageComponents/StreamRateInput'
import TitleAndDescInput from '../UploadPageComponents/TitleAndDescInput'
import VideoInput from '../UploadPageComponents/VideoInput'

const UploadVideo = () => {
  return (
    <form>
      <TitleAndDescInput ofType="video" />
      <PictureInput ofType="Thumbnail" size={1} />
      <StreamRateInput/>
      <VideoInput />
      <PublishButton />
    </form>
  );
}

export default UploadVideo
