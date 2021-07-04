import React from 'react'
import ListItem from './ListItem'

export default function HomeList({data, openModal}) {
    return (
        <div className="home-listing-wrap">
            <h2>{data.title}</h2>
            <div className="list-main">
                {   
                    data.list.map((item, index) => {
                        return <ListItem key={index} openModal={openModal}/>
                    })
                }
            </div>
        </div>
    )
}
