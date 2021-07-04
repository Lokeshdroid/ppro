import React from 'react'
import "../styles/components/page.scss";
import HeaderTop from '../components/HeaderTop'
import LeftSideBar from '../components/left-sidear/LeftSideBar';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer'
import VideoFrame from '../components/videoFrame';
export default function Test(){
    return(
        <div className="page-container">
            <HeaderTop />
            <LeftSideBar/>
            <div className="main-container">
                
                <DashboardHeader />
                <div className="report-container">
                    <div className="center-main-content">
                        <div className="casino-center">
                            <div className="casino-container">
                                <div className="casino-table ">
                                    <VideoFrame/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}