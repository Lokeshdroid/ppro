import React from 'react'

export default function AppLink({title, icon, link}) {
    return (
        <a href={link} className="link" target="_blank" rel="noreferrer">
            {title}
        </a>
    )
}
