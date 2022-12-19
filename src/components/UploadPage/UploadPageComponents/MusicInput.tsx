import React, { useState } from "react";
import "./MusicInput.scss";
import type { UploadFile, UploadProps } from "antd";
import { message, Upload } from "antd";

const { Dragger } = Upload;


const MusicInput = () => {

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const props: UploadProps = {
  name: "file",
  multiple: false,
  action: "",
  accept: "audio/*",
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
    <div className="MusicInput">
      <div className="MusicInput__title">Audio</div>
      <Dragger {...props} fileList={fileList} className="MusicInput__input">
        <img
          src="/assets/images/landing page/lp-audio-icon.png"
          alt="drop here"
        />
        <div className="MusicInput__input-info">
          Drop your audio here, or{" "}
          <span
            className="MusicInput__input-info-btn"
          >
            Browse
          </span>
          <input hidden type="file" accept="audio/*"/>
        </div>
        <div className="MusicInput__input-size">Max. Size : 100 MB</div>
      </Dragger>
    </div>
  );
};

export default MusicInput;
