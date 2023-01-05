import { UploadFile } from 'antd'
import React, { useState } from 'react'
import PictureInput from '../UploadPageComponents/PictureInput'
import PublishButton from '../UploadPageComponents/PublishButton'
import StreamRateInput from '../UploadPageComponents/StreamRateInput'
import TitleAndDescInput from '../UploadPageComponents/TitleAndDescInput'
import VideoInput from '../UploadPageComponents/VideoInput'

const UploadVideo = () => {
  const [image, setImage] = useState<UploadFile<any>>()
  const setFileToUpload = (file: React.SetStateAction<UploadFile<any> | undefined>) => {
    setImage(file)
  }
  const uploadContent = () => {
    console.log(" this is called in picture !!");
  }
  return (
    <form>
      <TitleAndDescInput ofType="video" />
      <PictureInput ofType="Thumbnail" size={1} fileUploadHandler={(file: React.SetStateAction<UploadFile<any> | undefined>) => setFileToUpload(file)}  />
      <StreamRateInput/>
      <VideoInput />
      <PublishButton uploadHandler={() => uploadContent()} />
    </form>
  );
}

export default UploadVideo
