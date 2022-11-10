import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Category from '../pages/Category'
import MyButton from './UI/buttons/MyButton'

export default function ItemListCategories({ categories, selectedCategories, changeSelectedCategories, priceForm, setPriceForm }) {

    return (
        <div className="items__categories">
            <form>
                <div className="items__categories-title">CATEGORIES</div>
                <div className="items__categories-list">
                    <ul>
                        {categories.map((category) =>
                            <Category
                                key={category.id}
                                name={category.name}
                                categoryId={category.id}
                                selectedCategories={selectedCategories}
                                changeSelectedCategories={changeSelectedCategories}
                            />
                        )}
                    </ul>
                </div>
                <div className="items__categories-price-filter">
                    <div className="items__categories-price-filter-title">
                        Price Filter
                    </div>
                    <div>
                        <div className='items__categories-input'>
                            Min: <input
                                type="text"
                                value={priceForm.min}
                                onChange={(e => setPriceForm({ ...priceForm, min: e.target.value }))}
                            />
                        </div>
                        <div className='items__categories-input'>
                            Max: <input
                                type="text"
                                value={priceForm.max}
                                onChange={(e => setPriceForm({ ...priceForm, max: e.target.value }))}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
