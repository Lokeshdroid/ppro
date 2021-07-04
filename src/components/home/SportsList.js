import React from 'react'
import SportItem from './SportItem'

export default function SportsList({data}) {
    return (
        <div className="home-listing-wrap">
            <h2>{data.title}</h2>
            <div className="sport-main">
                {   
                    data.list.map((item, index) => {
                        return <SportItem key={index} data={item}/>
                    })
                }
            </div>
        </div>
    )
}
