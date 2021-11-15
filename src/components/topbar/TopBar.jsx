import React from 'react';
import "./topbar.css";
import {Language, NotificationsNone, Settings} from '@material-ui/icons';

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">MyDashboard</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <NotificationsNone />
                        <span className="topIconBage">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Language />
                        <span className="topIconBage">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Settings />
                    </div>
                    <img src="./images/male_avatar.png" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
