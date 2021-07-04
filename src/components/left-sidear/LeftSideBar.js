import React from "react";
import "../../styles/components/left-sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import SidebarAccordion from "./SidebarAccordion";

export default function LeftSideBar() {
  const toggleMenu = (e) => {
    e.preventDefault()
    document.querySelector('.left-sidebar').classList.remove('show')
    document.querySelector('.b-sidebar-backdrop').classList.remove('show')
  }
  return (
    <>
      <div className="left-sidebar">
        <div className="d-none-desktop tabs-mobile">
          <ul>
            <li><a href="#">
              Exchange
            </a></li>
            <li><a href="#">
              Live Casino
            </a></li>
            <li><a href="#">
              Slot
            </a></li>
            <li><a href="#">
              Fantasy Games
            </a></li>
            <li><a href="#">
              Others
            </a></li>
          </ul>
        </div>
        <div className="logo-box d-none-mobile">
          <div className="logo">
            <Link
              to="/sport"
              className="router-link-exact-active router-link-active"
            >
              <img src={logo} alt="logo" className="img-fluid" />
            </Link>
          </div>
        </div>
        <div className="search-box">
          <div className="form-group">
            <input
              type="text"
              placeholder="Search"
              autocomplete="off"
              className="form-control"
              style={{ textTransform: "lowercase" }}
            />
            <FontAwesomeIcon icon={faSearch} size="sm" className="search-icon" />
          </div>
          <div class="menu-button-mobile d-none-desktop" onClick={toggleMenu}>
            <span class="menu-button-bar"></span>
            <span class="menu-button-bar"></span>
            <span class="menu-button-bar"></span>
          </div>
        </div>
        <div className="menu-box">
          <SidebarAccordion />
        </div>
      </div>
      <div className="b-sidebar-backdrop bg-dark" onClick={toggleMenu}></div>
    </>
  );
}
