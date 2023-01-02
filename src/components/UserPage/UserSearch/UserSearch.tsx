import React, { useEffect, useState } from 'react';
import Card from "../UserSharedComponents/Card/Card";
import { AiOutlineSearch } from 'react-icons/ai';
import "./UserSearch.scss";
import UserData, { UserSearchData } from "./Data/UserSearchData";

const UserSearch = () => {
  const [search, setSearch] = useState("");
  const arr: UserSearchData[] = [];
  const [searchrecord, setSearchRecord] = useState(arr);
  console.log(searchrecord);
  useEffect(() => {
    if (search === "") {
      setSearchRecord(arr);
      return;
    }
    const data = UserData.filter((creator) => creator.name.toLowerCase().includes(search.toLowerCase()) || creator.username.toLowerCase().includes(search.toLowerCase()));
    setSearchRecord(data);
  }, [search]);

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
        {
          searchrecord.length != 0 ?
            <div className="search__wrapper-trending">
              <div className="search__wrapper-trending_cards">
                {
                  searchrecord.map((creator, idx) => {
                    return <Card key={idx} imgpath={creator.imgpath} name={creator.name} username={creator.username} />;
                  })
                }
              </div>
            </div>
            : null
        }
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
