import React from 'react';
import "./Card.scss";

type CardProps = {
    imgpath: string;
    name: string;
    username: string;
}

const Card = (props: CardProps) => {
    const { imgpath, name, username } = props;
    return (
        <div className="creatorcard">
            <div className="creatorcard__wrapper">
                <div className="creatorcard__wrapper-profilepic">
                    <img src={imgpath} alt={`Profile ${name}`} />
                </div>
                <div className="creatorcard__wrapper-name">
                    {name}
                </div>
                <div className="creatorcard__wrapper-username">
                    @{username}
                </div>
            </div>
        </div>
    );
};

export default Card;