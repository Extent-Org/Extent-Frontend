import React from 'react'
import TableDraft from '../Main/MainComponents/TableDraft';
import "./CreatorDraft.scss";

const CreatorDraft = () => {
  return (
    <div className="CreatorDraft">
      <span className="CreatorDraft__span">Drafts</span>
      <TableDraft/>
    </div>
  )
}

export default CreatorDraft