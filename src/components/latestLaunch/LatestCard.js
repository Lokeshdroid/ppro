import React from 'react'
import { Link } from "react-router-dom";
import demo from "../../assets/images/trap.jpg";

export default function LatestCard() {
    return (
        <div className="latest-launch-card">
            <Link className="link-wrap">
                <img src={demo} alt="game" className="gamecard"/>
            </Link>
            <div className="new-launch-icon">
                <img src="https://sitethemedata.com/v3/static/front/img/new-launch.png" alt="" />
            </div>
        </div>
    )
}
