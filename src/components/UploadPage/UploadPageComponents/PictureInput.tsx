import React from "react";
import  "./PictureInput.scss";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: false,
  action: "",
  accept: "image/*",
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

type Props = {
  ofType: string;
  size: number;
};

const PictureInput = ({ ofType, size }: Props) => {
  return (
    <div className="PictureInput">
      <div className="PictureInput__title">{ofType}</div>

      <Dragger {...props} className="PictureInput__input">
        <img src="/assets/images/icons/Group.png" alt="drop here" />
        <div className="PictureInput__input-info">
          Drop your {ofType.toLowerCase()} here, or{" "}
          <span
            className="PictureInput__input-info-btn"
          >
            Browse
          </span>
        </div>
        <div className="PictureInput__input-size">Max. Size : {size} MB</div>
      </Dragger>
    </div>
  );
};

export default PictureInput;
