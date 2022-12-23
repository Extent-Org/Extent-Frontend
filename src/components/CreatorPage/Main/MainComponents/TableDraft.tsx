import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TableDraft.scss";
import data from "../../CreatorContent/Data/data";

const TableDraft = () => {
    const headings = ["Videos", "Music", "Pictures"];
    const [selected, setSelected] = useState([true, false, false]);
  
    return (
      <div className="TableDraft">
        <>
          <ul className="TableDraft__headings">
            {headings.map((heading, index) => {
              return (
                <li
                  className={selected[index] ? "TableDraft__headings-underline" : "TableDraft__headings-nounderline"}
                  key={index}
                  onClick={() => {
                    const newSelected = [false, false, false];
                    newSelected[index] = true;
                    setSelected(newSelected);
                  }}
                >
                  <Link to="">{heading}</Link>
                </li>
              );
            })}
          </ul>
          <ul className="TableDraft__list-headings">
            <li>Video</li>
            <li>Date</li>
            <li>Preview</li>
            <li>Publish</li>
            <li>Delete</li>
          </ul>
          <div className="horizontal-line"></div>
          <div className="TableDraft__content-list">
            {data.map((item: any, index: any) => {
              return (
                <div key={index}>
                  {index!==0 && <div className="horizontal-line"></div>}
                  <div className="TableDraft__content" key={index}>
                    <div className="TableDraft__content-thumbnail">
                      <img
                        className="TableDraft__content-thumbnail-img"
                        src={item.image}
                        alt="thumbnail"
                      />
                      <span className="TableDraft__content-thumbnail-info">
                        {item.title}
                      </span>
                      <span className="TableDraft__content-thumbnail-length">
                        {item.timeStamp}
                      </span>
                      <span className="TableDraft__content-thumbnail-description">
                        Some important facts that matter.
                      </span>
                    </div>
                    <div className="TableDraft__content-date">{item.date}</div>
                    <div className="TableDraft__content-preview">
                      <button>
                      <img src="/assets/images/icons/preview.png" alt="preview" />
                      Preview
                      </button>
                    </div>
                    <div className="TableDraft__content-publish">
                        <button>Go Live <img className='CreatorContent__img' src="/assets/images/icons/live.png" alt='live-icon' /></button>
                    </div>
                    <div className="TableDraft__content-remove">
                        <span><img src="/assets/images/icons/remove.png" alt="delete" />
                        Remove
                        </span>
                        <img src="/assets/images/icons/options.png" alt="options" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      </div>
    );
  };
  
  export default TableDraft;