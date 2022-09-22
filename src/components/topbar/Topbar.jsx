import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import React from "react";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <span className="logo">LAMA Admin</span>
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
