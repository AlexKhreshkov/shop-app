import React from 'react'
import Category from '../pages/Category'

export default function ItemListCategories({ categories }) {
    return (
        <div className="items__categories">
            <div className="items__categories-title">CATEGORIES</div>
            <div className="items__categories-list">
                <ul>
                    {categories.map((element) =>
                        <Category key={element.id} category={element.name} />
                    )}
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
