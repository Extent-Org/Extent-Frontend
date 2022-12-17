import React from 'react'
import './StreamRateInput.scss'

const StreamRateInput = () => {
  return (
    <div className="StreamRateInput">
      <div className="StreamRateInput__title">Stream Rate</div>
      <textarea
        rows={3}
        name="streamRate"
        placeholder="Enter your Stream Rate per hour (in $)"
        className="StreamRateInput__input"
      />
    </div>
  );
}

export default StreamRateInput
