import React from 'react'
import Table from '../Main/MainComponents/Table';
import './CreatorContent.scss'

const CreatorContent = () => {
  return (
    <div className="CreatorContent">
      <span className="CreatorContent__span">Content</span>
      <img className='CreatorContent__img' src="/assets/images/icons/content-icon.svg" alt='content-icon' />
      <Table/>
    </div>
  );
}

export default CreatorContent