import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Table.scss";
import data from "../../CreatorContent/Data/data";

const Table = () => {
  const headings = ["Videos", "Music", "Pictures"];
  const [selected, setSelected] = useState([true, false, false]);

  return (
    <div className="Table">
      <>
        <ul className="Table__headings">
          {headings.map((heading, index) => {
            return (
              <li
                className={selected[index] ? "Table__headings-underline" : ""}
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
        <ul className="Table__list-headings">
          <li>Video</li>
          <li>Date</li>
          <li>Views</li>
          <li>Comments</li>
          <li>Likes</li>
          <li>Preview</li>
        </ul>

        {data.map((item, index) => {
          return (
            <div key={index}>
              <div className="horizontal-line"></div>
              <div className="Table__content" key={index}>
                <div className="Table__content-thumbnail">
                  <img
                    className="Table__content-thumbnail-img"
                    src={item.image}
                    alt="thumbnail"
                  />
                  <span className="Table__content-thumbnail-info">
                    {item.title}
                  </span>
                  <span className="Table__content-thumbnail-length">
                    {item.timeStamp}
                  </span>
                  <span className="Table__content-thumbnail-description">
                    Some important facts that matter.
                  </span>
                </div>
                <div className="Table__content-date">{item.date}</div>
                <div className="Table__content-view">{item.views}</div>
                <div className="Table__content-comment">{item.comments}</div>
                <div className="Table__content-like">{item.likes}</div>
                <div className="Table__content-preview">
                  <img src="/assets/images/preview.png" alt="preview"/>
                  Preview
                </div>
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default Table;
