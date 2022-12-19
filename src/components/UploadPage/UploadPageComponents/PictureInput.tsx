import React, { useState } from "react";
import "./PictureInput.scss";
import type { UploadFile, UploadProps } from "antd";
import { message, Upload } from "antd";

const { Dragger } = Upload;

type Props = {
  ofType: string;
  size: number;
};

const PictureInput = ({ ofType, size }: Props) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const props: UploadProps = {
    name: "file",
    multiple: false,
    action: "",
    accept: "image/*",
    beforeUpload(file) {
      return false;
    },
    onChange(info) {
      const { status } = info.file;
      let newFileList = [...info.fileList];
      newFileList = newFileList.slice(-1);
      newFileList = newFileList.map((file) => {
        if (file.response) {
          file.url = file.response.url;
        }
        return file;
      });

      setFileList(newFileList);
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="PictureInput">
      <div className="PictureInput__title">{ofType}</div>

      <Dragger {...props} fileList={fileList} className="PictureInput__input">
        <img src="/assets/images/icons/Group.png" alt="drop here" />
        <div className="PictureInput__input-info">
          Drop your {ofType.toLowerCase()} here, or{" "}
          <span className="PictureInput__input-info-btn">Browse</span>
        </div>
        <div className="PictureInput__input-size">Max. Size : {size} MB</div>
      </Dragger>
    </div>
  );
};

export default PictureInput;
