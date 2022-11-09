import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Category from '../pages/Category'
import MyButton from './UI/buttons/MyButton'

export default function ItemListCategories({ categories }) {



    const [categoriesForm, setCategoriesForm] = useState({
        min: '',
        max: '',
    })
    const [selectedCategories, changeSelectedCategories] = useState()

    useEffect(() => {
        const obj = {}
        for (let category of categories) {
            obj[category.name] = false
        }
        changeSelectedCategories(obj)
    }, [])


    function searchWithCategories(e) {
        e.preventDefault()
        // console.log(categoriesForm);
    }

    return (
        <div className="items__categories">
            <form onSubmit={(e) => searchWithCategories(e)}>
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
                                onChange={(e => setCategoriesForm({ ...categoriesForm, min: e.target.value }))}
                            />
                        </div>
                        <div className='items__categories-input'>
                            Max: <input
                                type="text"
                                onChange={(e => setCategoriesForm({ ...categoriesForm, max: e.target.value }))}
                            />
                        </div>
                    </div>
                </div>
                <MyButton>Search</MyButton>
            </form>
        </div>
    )
}
