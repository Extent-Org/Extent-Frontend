import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import "./UserSearch.scss";

const UserSearch = () => {
  return (
    <div className="search">
        <div className="search__wrapper">
          <div className="search__wrapper-bar">
            <div className="search__wrapper-bar_icon"><AiOutlineSearch /></div>
            <div className="search__wrapper-bar_input">
              <input type="text" name="search" id="search_input" placeholder='Search' />
            </div>
          </div>
          <div className="search__wrapper-trending">
            <div className="search__wrapper-trending_title">
              <span>Trending</span>
            </div>
            <div className="search__wrapper-trending_cards">
              Cards
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserSearch
