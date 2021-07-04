import React from 'react';
import "../styles/components/videoFrame.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faInfoCircle,faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
export default function VideoFrame(){
    return(
        <div className="casino-video">
            <div class="casino-video-title"><span class="casino-name">3 Cards Judgement</span> <div class="casino-video-rid">Round ID: 8509885415168</div></div>
            <div className="video-box-container">
                <div className="video-box"></div>
            </div>
            <div class="casino-video-right-icons">
                <div title="Home" class="casino-video-home-icon">
                    <a href="/casino" class="router-link-active" style={{color: "white",fontSize:"24px"}}>
                    <FontAwesomeIcon icon={faHome} size="1x" />
                    </a>
                </div> 
                <div title="Rules" class="casino-video-rules-icon" role="button" tabindex="0">
                <FontAwesomeIcon icon={faInfoCircle} size="1x"  />
                </div> 
                <div title="Last Results" class="casino-video-lr-icon">
                <FontAwesomeIcon icon={faChevronCircleUp} size="1x"  />
                </div>
            </div>
            <div className="casino-timer">
            <div class="base-timer">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="base-timer__svg">
                    <g class="base-timer__circle">
                        <circle cx="50" cy="50" r="45" class="base-timer__path-elapsed"></circle> 
                        <path stroke-dasharray="278 283" d="
                                M 50, 50
                                m -45, 0
                                a 45,45 0 1,0 90,0
                                a 45,45 0 1,0 -90,0
                            " class="base-timer__path-remaining green">
                        </path>
                    </g>
                </svg> 
                <span class="base-timer__label green">
                    <span>11</span>
                </span>
            </div>
            </div>
            
        </div>
    )
 }