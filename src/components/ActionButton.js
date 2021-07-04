import React from 'react'

export default function ActionButton({title, handleModalOpen}) {
    return (
        <button className="base-button" onClick={handleModalOpen}>
            {title}
        </button>
    )
}
