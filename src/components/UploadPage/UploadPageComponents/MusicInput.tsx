import React from "react";
import "./MusicInput.scss";
import type { UploadProps } from "antd";
import { message, Upload, Form } from "antd";

const { Dragger } = Upload;


const MusicInput = () => {

  const props: UploadProps = {
  name: "file",
  multiple: false,
  action: "",
  accept: ".mp3, .wav",
  beforeUpload(file) {
    return false;
  },
  maxCount: 1,
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

  return (
    <div className="MusicInput">
      <div className="MusicInput__title">Audio</div>
      <Form.Item rules={[{ required: true }]}>
        <Dragger {...props} className="MusicInput__input">
          <img
            src="/assets/images/landing page/lp-audio-icon.png"
            alt="drop here"
          />
          <div className="MusicInput__input-info">
            Drop your audio here, or{" "}
            <span className="MusicInput__input-info-btn">Browse</span>
            <input hidden type="file" accept="audio/*" />
          </div>
          <div className="MusicInput__input-size">Max. Size : 100 MB</div>
        </Dragger>
      </Form.Item>
    </div>
  );
};

export default MusicInput;
