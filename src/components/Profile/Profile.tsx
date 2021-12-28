import "./Profile.css";

import React from "react";
import flo from "./images/flo.png";
import food from "../../assets/communs/meat.png";
import gold from "../../assets/communs/gold.png";
import kill from "../../assets/communs/kill.png";
import max from "./images/max.png";
import mus from "./images/mus.png";
import nico from "./images/Nico.png";
import { useParams } from "react-router-dom";
import will from "./images/will.jpg";
import wood from "../../assets/communs/wood.png";
import xavier from "./images/xavier.png";

export type ProfileParams = { id: string };

const Profile = () => {
  const params = useParams<ProfileParams>();
  const users = [
    {
      id: "6",
      name: "Floflo",
      gold: 1000,
      kills: 320,
      food: 120,
      imgProfile: flo,
    },
    {
      id: "5",
      name: "Xavier",
      gold: 1000,
      kills: 320,
      food: 120,
      wood: 980,
      imgProfile: xavier,
    },
    {
      id: "4",
      name: "Will",
      gold: 1000,
      kills: 320,
      food: 120,
      wood: 980,
      imgProfile: will,
    },
    {
      id: "3",
      name: "Mustafa",
      gold: 1000,
      kills: 320,
      food: 120,
      wood: 980,
      imgProfile: mus,
    },
    {
      id: "2",
      name: "Maxime",
      gold: 1000,
      kills: 320,
      food: 120,
      wood: 980,
      imgProfile: max,
    },
    {
      id: "1",
      name: "Nicolas",
      gold: 1000,
      kills: 320,
      food: 120,
      wood: 980,
      imgProfile: nico,
    },
  ];

  const filteredProfile = users.filter((user) => user.id === params.id);
  return (
    <div className="body-profil">
      <div className="global-container">
        <div className="info-container">
          <div className="left-section">
            <div className="entete">
              <h1>EXPLORER PROFILE</h1>
              <p>Name : {filteredProfile[0].name}</p>
            </div>
            <div className="resourcesContainer">
              <h3>Ressources :</h3>
              <div className="list-ressource">
                <ul className="yes">
                  <li className="li-profile-card">
                    <div
                      className="icon"
                      style={{
                        backgroundImage: `url(${gold})`,
                      }}
                    />
                    {filteredProfile[0].gold} gold
                  </li>
                  <li className="li-profile-card">
                    <div
                      className="icon"
                      style={{
                        backgroundImage: `url(${wood})`,
                      }}
                    />
                    {filteredProfile[0].wood} wood{" "}
                  </li>
                </ul>
                <ul>
                  <li className="li-profile-card">
                    <div
                      className="icon"
                      style={{
                        backgroundImage: `url(${food})`,
                      }}
                    />
                    {filteredProfile[0].food} food
                  </li>
                  <li className="li-profile-card">
                    <div
                      className="icon"
                      style={{
                        backgroundImage: `url(${kill})`,
                      }}
                    />
                    {filteredProfile[0].kills} kill
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div
              className="profil-picture"
              style={{
                backgroundImage: `url(${filteredProfile[0].imgProfile})`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
