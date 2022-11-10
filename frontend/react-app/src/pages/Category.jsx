import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useData } from '../hooks/useAuth'
import { getCategoryItemCount } from '../utils/utls'


export default function Category({ name, categoryId, selectedCategories, changeSelectedCategories }) {
    const { items } = useData()
    const [checkboxValue, setCheckboxValue] = useState(false)

    // headphones
    // :
    // false
    // laptops
    // :
    // false
    // phones
    // :
    // false

    useEffect(() => {
        setCheckboxValue(selectedCategories[name])
    }, [])

    function onChangeBoxValue(e) {
        let isChecked = e.target.checked
        setCheckboxValue(isChecked)
        changeSelectedCategories({ ...selectedCategories, [name]: !isChecked })
        console.log(selectedCategories);
    }

    return (
        <>
            <input
                type="checkbox"
                checked={checkboxValue}
                value={name}
                onChange={(e) => onChangeBoxValue(e)}
            >
            </input>
            <li> {name}({getCategoryItemCount(items, categoryId)})</li>
        </>
    )
}
