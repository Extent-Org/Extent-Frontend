import React, { useState } from 'react'
import MusicInput from '../UploadPageComponents/MusicInput'
import PictureInput from '../UploadPageComponents/PictureInput'
import PublishButton from '../UploadPageComponents/PublishButton'
import TitleAndDescInput from '../UploadPageComponents/TitleAndDescInput'
import StreamRateInput from "../UploadPageComponents/StreamRateInput";
import { UploadFile } from 'antd'
import encryptFileWithSalt from '../../../utils/ecryptFileWithSalt'

const UploadMusic = () => {
  const [image, setImage] = useState<UploadFile<any>>()
  const setFileToUpload = (file: React.SetStateAction<UploadFile<any> | undefined>) => {
    setImage(file)
  }
  const uploadContent = () => {
    console.log(" this is called in music !!");
    const encrypted = encryptFileWithSalt(image, false);
    console.log(" this is encrypted file ",encrypted)
  }
  return (
    <div>
      <TitleAndDescInput ofType="music" />
      <PictureInput ofType="Cover Photo" size={1} fileUploadHandler={(file: React.SetStateAction<UploadFile<any> | undefined>) => setFileToUpload(file)} />
      <StreamRateInput />
      <MusicInput />
      <PublishButton uploadHandler={() => uploadContent()} />
    </div>
  );
}

export default UploadMusic
