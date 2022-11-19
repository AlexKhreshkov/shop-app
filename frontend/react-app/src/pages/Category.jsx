import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useData } from '../hooks/useData'
import { getCategoryItemCount } from '../utils/utls'


export default function Category({ name, categoryId, selectedCategories, changeSelectedCategories }) {
    const { items } = useData()
    const [checkboxValue, setCheckboxValue] = useState(false)

    useEffect(() => {
        setCheckboxValue(selectedCategories[name])
    }, [])

    function onChangeBoxValue(e) {
        setCheckboxValue(e.target.checked)
        changeSelectedCategories({ ...selectedCategories, [name]: !checkboxValue })
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
