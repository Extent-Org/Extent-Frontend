import { UploadFile } from 'antd'
import React, { useState } from 'react'
import PictureInput from '../UploadPageComponents/PictureInput'
import PublishButton from '../UploadPageComponents/PublishButton'
import TitleAndDescInput from '../UploadPageComponents/TitleAndDescInput'

const UploadPicture = () => {
  const [image, setImage] = useState<UploadFile<any>>()
  const setFileToUpload = (file: React.SetStateAction<UploadFile<any> | undefined>) => {
    setImage(file)
  }

  const uploadContent = () => {
    console.log(" this is called in picture !!");
  }
  return (
    <div>
      <TitleAndDescInput ofType="picture" />
      <PictureInput ofType="Picture" size={10} fileUploadHandler={(file: React.SetStateAction<UploadFile<any> | undefined>) => setFileToUpload(file)} />
      <PublishButton uploadHandler={() => uploadContent()} />
    </div>
  );
}

export default UploadPicture
