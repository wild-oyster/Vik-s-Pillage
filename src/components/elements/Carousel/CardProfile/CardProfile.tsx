import "./CardProfile.css";

import React from "react";
import { truncateString } from "utils/string";

export interface CardProfileProps {
  name: string;
  text: string;
  img: string;
}

const CardProfile: React.FC<CardProfileProps> = ({ name, text, img }) => {
  return (
    <div className="cardGlobalContainer-card">
      <div className="container-card-rpofile">
        <div className="img-container-card">
          <img
            className="profile-img-carousel"
            src={img}
            alt="profile-avatar"
          />
        </div>
        <div className="card-infos">
          <h6 className="title-card-profile">{name}</h6>
          <p className="text-profile-card">{truncateString(text, 90)}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
