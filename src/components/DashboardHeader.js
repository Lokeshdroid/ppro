import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

export default function DashboardHeader() {
    const toggleMenu = (e) => {
        e.preventDefault()
        document.querySelector('.left-sidebar').classList.add('show')
        document.querySelector('.b-sidebar-backdrop').classList.add('show')
    }
    const toggleUserDropdown = (e, id) => {
        e.preventDefault()
        const ele = document.getElementById(id)
        if (ele.classList.contains('show')) {
            ele.classList.remove('show')
        } else {
            ele.classList.add('show')
        }
    }
    return (
        <div className="dashboard-header">
            <div className="menu-button-mobile" onClick={toggleMenu}><span className="menu-button-bar"></span> <span className="menu-button-bar"></span> <span className="menu-button-bar"></span></div>
            <div className="logo-box d-none-desktop">
                <a href="#">
                    <div className="logo">
                        <img src="https://sitethemedata.com/sitethemes/faster777.com/front/logo.png" className="img-fluid" />
                    </div>
                </a>
            </div>

            <div className="float-right header-right">
                <span className="balance d-none-mobile">Pts:
                    <span className="balance-value">0</span>
                    <span className="balance-value">
                        | 0
                    </span>
                </span>
                <div className="username-info d-none-mobile" onClick={(event) => toggleUserDropdown(event, 'user-dropdown')}>
                    <span className="user-icon"><img src="https://sitethemedata.com/v3/static/front/img/user.svg" /></span>
                    <span className="username">devdemo3</span>
                    <FontAwesomeIcon icon={faChevronDown} size="sm" />
                    <div id="user-dropdown" className="user-dropdown collapse">
                        <a href="#">Account Statement</a>
                        <a href="#">Current Bets</a>
                        <a href="#">Activity Log</a>
                        <a href="#">Casino Results</a>
                        <a href="#">Live Casino Bets</a>
                        <a href="#">Set Button Value</a>
                        <a href="#">Change Password</a>
                        <a href="#">Security Auth Verification</a>
                        <div className="login-seperator"></div>
                        <a href="#">Logout</a>
                    </div>
                </div>
                <div className="text-center d-none-desktop bal-point">
                    Pts:
                    <span>0</span> <span>
                        | 0</span>
                </div>
                <div className="username-info d-none-desktop">
                    <div className="d-inline-block" onClick={(event) => toggleUserDropdown(event, 'user-dropdown-mob')}>
                        <span className="user-icon">
                            <img src="https://sitethemedata.com/v3/static/front/img/user.svg" />
                        </span>
                        <span className="username">devdemo3</span>
                        <FontAwesomeIcon icon={faChevronDown} size="sm" />
                    </div>
                    <div id="user-dropdown-mob" className="user-dropdown collapse">
                        <div className="color-box-container">
                            <div className="w-100 select-theme-title">Pick your theme</div>
                            <div className="color-box dark-box"></div>
                            <div className="color-box light-box"></div>
                            <div className="color-box blue-box"></div>
                        </div>
                        <div className="login-seperator"></div>
                        <a href="#">Account Statement</a>
                        <a href="#">Current Bets</a>
                        <a href="#">Activity Log</a>
                        <a href="#">Casino Results</a>
                        <a href="#">Live Casino Bets</a>
                        <a href="#">Set Button Value</a>
                        <a href="#">Change Password</a>
                        <a href="#">Security Auth Verification</a>
                        <div className="login-seperator"></div>
                        <a href="#">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
