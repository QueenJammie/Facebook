import React from "react";
import fbicon from "./images/fbicon.svg";
import home from "./images/fbhome.svg";
import videoPlayer from "./images/fbvideo-player.svg";
import store from "./images/fbstore.svg";
import group from "./images/fbgroup.svg";
import gaming from "./images/fbgaming.svg";
import menu from "./images/fbmenu.svg";
import messenger from "./images/fbmessenger.svg";
import alert from "./images/fbalert.svg";

import "./Header.css";

export default function Header()
{
  return (
    <div className="Header">
      <nav>
        <div className="elementMenu">
          <ul>
            <li>
              <img src={fbicon} alt="" className="icon" />
            </li>
            <li>
              <input type="search" className="me-5 form-control" id="search" placeholder="Rechercher sur Facebook" />
            </li>
            <li className="iconCenter">
              <img src={home} alt="" className="ms-5 icon" />
            </li>
            <li className="iconCenter">
              <img src={videoPlayer} alt="" className="icon" />
            </li>
            <li className="iconCenter">
              <img src={store} alt="" className="icon" />
            </li>
            <li className="iconCenter">
              <img src={group} alt="" className="icon" />
            </li>
            <li className="iconCenter">
              <img src={gaming} alt="" className="me-5 icon" />
            </li>
            <li>
              <img src={menu} alt="" className="ms-5 icon iconEnd" />
            </li>
            <li>
              <img src={messenger} alt="" className="icon iconEnd" />
            </li>
            <li>
              <img src={alert} alt="" className="icon iconEnd" />
            </li>
          </ul>
        </div>
        
      </nav>
      
    </div>
  );
}