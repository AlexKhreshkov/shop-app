import React from 'react'

export default function Items({ children }) {
    return (
        <div className="items">
            <div className="items__wrapp">
                {children}
            </div>
        </div>
    )
}
