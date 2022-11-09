import React from 'react'
import { useData } from '../hooks/useAuth'
import { getCategoryItemCount } from '../utils/utls'


export default function Category({ name, categoryId, selectedCategories, changeSelectedCategories }) {
    const { items } = useData()

    return (
        <>
            <input
                type="checkbox"
                value={name}
                // onChange={(e) => changeSelectedCategories(e.target.value, e.target.checked)}
                onChange={(e) => changeSelectedCategories({
                    
                })}
            >
            </input>
            <li> {name}({getCategoryItemCount(items, categoryId)})</li>
        </>
    )
}
