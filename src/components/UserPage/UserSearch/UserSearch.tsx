import React, { useEffect, useState, useMemo } from 'react';
import Card from "../UserSharedComponents/Card/Card";
import { AiOutlineSearch } from 'react-icons/ai';
import "./UserSearch.scss";
import UserData, { UserSearchData } from "./Data/UserSearchData";

const UserSearch = () => {
  const [search, setSearch] = useState("");
  const arr: UserSearchData[] = useMemo(() => [], [UserData]);
  const [searchrecord, setSearchRecord] = useState(arr);

  useEffect(() => {
    if (search === "") {
      setSearchRecord(arr);
      return;
    }
    const data = UserData.filter((creator) => creator.name.toLowerCase().includes(search.toLowerCase()) || creator.username.toLowerCase().includes(search.toLowerCase()));
    setSearchRecord(data);
  }, [search, arr]);

  return (
    <div className="search">
      <div className="search__wrapper">
        <div className="search__wrapper-bar">
          <div className="search__wrapper-bar_icon"><AiOutlineSearch /></div>
          <div className="search__wrapper-bar_input">
            <input
              type="text"
              name="search"
              id="search_input"
              placeholder='Search'
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="search__wrapper-suggestion">
          <div className="search__wrapper-suggestion_title">{searchrecord.length !== 0 ?  <span>Search Records</span> : search.length === 0 ? null : <span>No Results Found</span> }</div>

          {
              <div className={`search__wrapper-suggestion_cards ${searchrecord.length !== 0 ? 'search__wrapper-suggestion_cards_active' : 'search__wrapper-suggestion_cards_inactive'}`}>
                {
                  searchrecord.map((creator, idx) => {
                    return <Card key={idx} imgpath={creator.imgpath} name={creator.name} username={creator.username} />;
                  })
                }
              </div>
          }
        </div>
        <div className="search__wrapper-trending">
          <div className="search__wrapper-trending_title">
            <span>Trending Creators</span><img src="/assets/images/icons/qrcode.svg" alt="QR Code" />
          </div>
          <div className="search__wrapper-trending_cards">
            {
              UserData.map((creator, idx) => {
                return <Card key={idx} imgpath={creator.imgpath} name={creator.name} username={creator.username} />;
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSearch;
