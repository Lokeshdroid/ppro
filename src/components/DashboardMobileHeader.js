import React from 'react'
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

export default function DashboardMobileHeader() {
    return (
        <div className="dashboard-mob-header">
            <div className="logo">
                <Link to="/sport" className="router-link-exact-active router-link-active">
                    <img src={logo} alt="logo" className="logo-img"/>
                </Link>
            </div>
        </div>
    )
}
