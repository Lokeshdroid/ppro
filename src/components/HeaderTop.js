import React from "react";
import { Link } from "react-router-dom";

export default function HeaderTop() {
  return (
    <>
      <div className="animated-header">
        <div className="header-animated-banner"></div>
      </div>
      <div className="header-top d-none-mobile">
        <nav>
          <ul>
            <li>
              <Link to="/sport" activeClassName="router-link-active">Exchange</Link>
            </li>
            <li>
              <Link to="/casino" activeClassName="router-link-active">Our Casino</Link>
            </li>
            <li>
              <Link to="/slot" activeClassName="router-link-active">Casino + Slot</Link>
            </li>
            <li>
              <Link to="/fantasy" activeClassName="router-link-active">Fantasy Games</Link>
            </li>
            <li>
              <Link to="/others" activeClassName="router-link-active">Others</Link>
            </li>
          </ul>
        </nav>
        <div className="color-box-container">
          <div className="color-box dark-box"></div>
          <div className="color-box light-box"></div>
          <div className="color-box blue-box"></div>
        </div>
      </div>
    </>
  );
}
