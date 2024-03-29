import React from "react";
import "./VideoInput.scss";
import type { UploadProps } from "antd";
import { message, Upload, Form } from "antd";

const { Dragger } = Upload;

const VideoInput = () => {
  const props: UploadProps = {
    name: "file",
    multiple: false,
    action: "",
    accept: ".mp4, .mov, .avi",
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
    <div className="VideoInput">
      <div className="VideoInput__title">Video</div>
      <Form.Item rules={[{ required: true }]}>
        <Dragger {...props} className="VideoInput__input">
          <img
            src="/assets/images/landing page/lp-video-icon.png"
            alt="drop here"
          />
          <div className="VideoInput__input-info">
            Drop your video here, or{" "}
            <span className="VideoInput__input-info-btn">Browse</span>
          </div>
          <div className="VideoInput__input-size">Max. Size : 1 GB</div>
        </Dragger>
      </Form.Item>
    </div>
  );
};

export default VideoInput;
