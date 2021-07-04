import React from 'react'
import userImg from '../../assets/images/user-icon.png'

export default function WinnerCard({data}) {
    return (
        <div className="winner-card">
            <img src={userImg} alt="user-img" className="user-img" />
            <div className="winner-wrap">
                <div className="winner-info">
                    <h6>Player</h6>
                    <h6>{data.player}</h6>
                </div>
                <div className="winner-info">
                    <h6>Time</h6>
                    <h6>{data.time}</h6>
                </div>
                <div className="winner-info">
                    <h6>Win Amount</h6>
                    <h6>{data.amount}</h6>
                </div>
            </div>
        </div>
    )
}
