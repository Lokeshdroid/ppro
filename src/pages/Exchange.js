import React from 'react'
import "../styles/components/page.scss";
import HeaderTop from '../components/HeaderTop'
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer'
import DashboardMobileHeader from '../components/DashboardMobileHeader';
import LatestLaunches from '../components/latestLaunch/LatestLaunches';
import LeftSideBar from '../components/left-sidear/LeftSideBar';
import MainCarousel from '../components/sport/MainCarousel';
import TabContainer from '../components/sport/TabContainer';

export default function Exchange() {
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
                <div className="main-container">
                    { width > 768 && <DashboardHeader />}
                    <div className="center-main-content">
                        <div className="center-container">
                            <div className="home-container">
                                <MainCarousel />
                                <TabContainer />
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
