import React from 'react'

export default function SportItem({data}) {
    return (
        <div className="sport-card">
            <i className={`gm--${data.icon}`}></i>
            <h5>{data.title}</h5>
        </div>
    )
}
