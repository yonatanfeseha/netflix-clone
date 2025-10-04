import React, { useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { logout } from "../../firebase";
const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("navbar-black");
      } else {
        navRef.current.classList.remove("navbar-black");
      }
    });
  }, []);
  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <SearchIcon className="icons" />
        <p>Children</p>

        <NotificationsNoneIcon className="icons" />

        <div className="navbar-profile">
          <AccountBoxIcon className="profile" />

          <ArrowDropDownIcon />
          <div className="dropdown">
            <p
              onClick={() => {
                logout();
              }}
            >
              SignOut of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
