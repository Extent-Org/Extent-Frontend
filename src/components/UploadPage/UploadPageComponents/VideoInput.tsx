import React, { useRef } from 'react'
import "./VideoInput.scss"
import type { UploadProps } from "antd";
import { message, Upload } from "antd";

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "",
  accept: "video/*",
  onChange(info) {
    const { status } = info.file;
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


const VideoInput = () => {
  const inputRef = useRef<any>(null);
  return (
    <div className="VideoInput">
      <div className="VideoInput__title">Video</div>
      <Dragger {...props} className="VideoInput__input">
        <img
          src="/assets/images/landing page/lp-video-icon.png"
          alt="drop here"
        />
        <div className="VideoInput__input-info">
          Drop your video here, or{" "}
          <span
            className="VideoInput__input-info-btn"
            onClick={() => {
              if (inputRef.current) inputRef.current.click();
            }}
          >
            Browse
          </span>
          <input hidden type="file" ref={inputRef} accept="video/*" />
        </div>
        <div className="VideoInput__input-size">Max. Size : 1 GB</div>
      </Dragger>
    </div>
  );
}

export default VideoInput
