import React from "react";
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material/";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">udaraadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <sapn className="topIconBadge">2</sapn>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <sapn className="topIconBadge">2</sapn>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQGYfQtPP8pXsw/profile-displayphoto-shrink_800_800/0/1607578054618?e=2147483647&v=beta&t=ktcObHIitJJClFfiQN1inn0dC4Lv6NxOgQxKOph3DJ4"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
