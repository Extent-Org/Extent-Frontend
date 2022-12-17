import React, { useRef } from "react";
import "./MusicInput.scss";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: false,
  action: "",
  accept: "audio/*",
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
const MusicInput = () => {
  const inputRef = useRef<any>(null);

  return (
    <div className="MusicInput">
      <div className="MusicInput__title">Audio</div>
      <Dragger {...props} className="MusicInput__input">
        <img
          src="/assets/images/landing page/lp-video-icon.png"
          alt="drop here"
        />
        <div className="MusicInput__input-info">
          Drop your audio here, or{" "}
          <span
            className="MusicInput__input-info-btn"
            onClick={() => {
              if (inputRef.current) inputRef.current.click();
            }}
          >
            Browse
          </span>
          <input hidden type="file" accept="audio/*" ref={inputRef} />
        </div>
        <div className="MusicInput__input-size">Max. Size : 100 MB</div>
      </Dragger>
    </div>
  );
};

export default MusicInput;
