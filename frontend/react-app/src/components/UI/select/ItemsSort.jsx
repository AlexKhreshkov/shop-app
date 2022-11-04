import React from 'react'

export default function ItemsSort({ ...props }) {
    return (
        <div className="items__header-sort">
            <select {...props}>
                <option value="id">Sort by newness</option>
                <option value="price_descending">Price: High - Low</option>
                <option value="price_increase">Price: Low - High</option>
                <option value="likes">Sort by likes</option>
            </select>
        </div>
    )
}
