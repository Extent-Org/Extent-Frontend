import React from 'react'
import './StreamRateInput.scss'
import { message } from "antd";

const StreamRateInput = () => {


  return (
    <div className="StreamRateInput">
      <div className="StreamRateInput__title">Stream Rate</div>
      <textarea
        rows={3}
        name="streamRate"
        placeholder="Enter your Stream Rate per hour (in $)"
        className="StreamRateInput__input"
        required
        onChange={(e) => {
          if(isNaN(Number(e.target.value))){
            message.error("Please enter a number")
            return;
          }
        }}
      />
    </div>
  );
}

export default StreamRateInput
