import React from 'react'
import "../styles/components/page.scss";
import HeaderTop from '../components/HeaderTop'
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer'
import DashboardMobileHeader from '../components/DashboardMobileHeader';
import LatestLaunches from '../components/latestLaunch/LatestLaunches';
import LeftSideBar from '../components/left-sidear/LeftSideBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
    Accordion,
    AccordionContext,
    Card,
    useAccordionToggle,
} from "react-bootstrap";

import image1 from "../assets/images/banners/2.jpeg";
import DetailsAcordion from '../components/sportsDetails/DetailsAcordion';

export default function SportDetails() {
    const width = window.innerWidth;
        
    return (
        <>
            <div className="page-container">
                <HeaderTop />
                <LeftSideBar />
                {/* { width > 768 ? 
                    <>
                    </>
                    :
                    <DashboardMobileHeader />
                } */}
                <div className="main-container detail-page-container">
                    { width > 768 && <DashboardHeader />}
                    <div className="center-main-content">
                        <div className="center-container">
                            <div className="sport-details">
                                <img src={image1} alt="logo" className="sports-details-img" />
                                <div className="sports-details-bar mt-2">
                                    <h6 className="game-header-name">Indian Premier League {'>'} Indian Premier League</h6>
                                    <span className="game-header-date">01/04/2021 17:30:00</span>
                                </div>
                                <div class="all-markets d-none-small">
                                    <div className="all-markets-left">
                                        <a href="javascript:void(0)"><small>#TOURNAMENT_WINNER</small></a><a href="javascript:void(0)"><small>#Bookmaker</small></a><a href="javascript:void(0)"><small>#Normal</small></a>
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
                                    </div>
                                </div>
                                <div className="accordion-container">
                                    <DetailsAcordion />
                                </div>
                            </div>
                            { width > 768 && <Footer />} 
                        </div>
                        <div className="right-sidebar">
                            <LatestLaunches />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
