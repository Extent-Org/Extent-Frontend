import React, { useState } from "react";
import "./TitleAndDescInput.scss";

type Props = {
  ofType: string;
};

const TitleAndDescInput = ({ ofType }: Props) => {
  const [letters, setLetters] = useState(0);

  return (
    <div className="TitleAndDescInput">
      <div className="Title__div">
        <div className="TitleAndDescInput__title">Title</div>
        <textarea
          rows={3}
          name="Title"
          placeholder={`Enter your ${ofType} title here`}
          className="TitleAndDescInput__title-input"
          required
          maxLength={70}
        />
      </div>
      <div className="Description__div">
        <div className="TitleAndDescInput__description">Description</div>
        <textarea
          rows={5}
          name="Description"
          maxLength={500}
          placeholder={`Enter your ${ofType} description here`}
          className="TitleAndDescInput__description-input"
          onChange={(e) => setLetters(e.target.value.length)}
        />  
        <span className="TitleAndDescInput__description-input-limit">
          {letters}/500
        </span>
      </div>
    </div>
  );
};

export default TitleAndDescInput;
