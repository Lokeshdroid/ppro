import React from 'react'
import demo from '../../assets/images/trap.jpg';

export default function ListItem({openModal}) {
    return (
        <div className="list-card" onClick={openModal}>
            <img src={demo} alt="logo" className="list-img" />
            {
                !localStorage.getItem("user") ?
                    <div className="login--btn">Login</div> :
                null
            }
        </div>
    )
}
