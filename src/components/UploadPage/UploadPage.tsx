import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BGEllipse from "../CreatorPage/CreatorPageComponents/BGEllipse";
import Header from "../CreatorPage/Main/MainComponents/Header";
import Logo from "../CreatorPage/Sidebar/SidebarComponents/Logo";
import UploadMusic from "./UploadePages/UploadMusic";
import UploadPicture from "./UploadePages/UploadPicture";
import UploadVideo from "./UploadePages/UploadVideo";
import "./UploadPage.scss";

const UploadPage = () => {
  const { type } = useLocation().state || {};
  
  const [toUpload, setToUpload] = useState(type? type : 0);
  const headings = ["Video", "Music", "Pictures"];
  const [selected, setSelected] = useState([
    toUpload === 0,
    toUpload === 1,
    toUpload === 2,
  ]);
  return (
    <div className="Upload">
      <BGEllipse />
      <Logo />
      <Header />
      <div className="Upload__div">
        <div className="Upload__div-heading">
          <span className="Upload__div-heading-span">Upload</span>
        </div>
        <div className="Upload__div-area">
          <>
            <ul className="Upload__div-area-nav">
              {headings.map((heading, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setToUpload(index);
                      const newSelected = [false, false, false];
                      newSelected[index] = true;
                      setSelected(newSelected);
                    }}
                    className={
                      selected[index] ? "Upload__div-area-nav-underline" : ""
                    }
                  >
                    {heading}
                  </li>
                );
              })}
            </ul>
            {toUpload === 0 && <UploadVideo />}
            {toUpload === 1 && <UploadMusic />}
            {toUpload === 2 && <UploadPicture />}
          </>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
