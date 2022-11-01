import React from 'react'

export default function ItemListCategories({ categories }) {
    return (
        <div className="items__categories">
            <div className="items__categories-title">CATEGORIES</div>
            <div className="items__categories-list">
                <ul>
                    {categories.map((category) => <li>{category.name}(1)</li>)}
                </ul>
            </div>
            <div className="items__categories-price-filter">
                <div className="items__categories-price-filter-title">
                    Price Filter
                </div>
            </div>
        </div>
    )
}
