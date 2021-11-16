import { AttachMoney, LineStyle, PermIdentity, Storefront, Timeline, TrendingUp } from '@material-ui/icons';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";

export default function SideBar() {
    const [activeLink, setActiveLink] = useState("/");

    function handleLinkChange(new_link) {
        setActiveLink(new_link);
        console.log("handle change called");
    }

    return (
        <div className="sideBar">
            <div className="sideBarWrapper">
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Quick Menu</h3>
                    <ul className="sideBarList">
                        <Link to="/" className="link">
                            <li className={`sideBarListItem ${activeLink === "/" ? "active" : ""}`} onClick={() => handleLinkChange("/")}>
                                <LineStyle className="sideBarIcon" />
                                Home
                            </li>
                        </Link>
                        <Link to="/users" className="link">
                            <li className={`sideBarListItem ${activeLink === "/users" ? "active" : ""}`} onClick={() => handleLinkChange("/users")}>
                                <PermIdentity className="sideBarIcon"/>
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className={`sideBarListItem ${activeLink === "/products" ? "active" : ""}`} onClick={() => handleLinkChange("/products")}>
                                <Storefront className="sideBarIcon"/>
                                Products
                            </li>
                        </Link>
                        <li className="sideBarListItem" >
                            <AttachMoney className="sideBarIcon"/>
                            Transactions
                        </li>
                    </ul>
                </div>
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Dashboard</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            <Timeline className="sideBarIcon"/>
                            Analytics
                        </li>
                        <li className="sideBarListItem">
                            <TrendingUp className="sideBarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
