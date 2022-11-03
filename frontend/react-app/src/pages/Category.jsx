import React from 'react'
import { useData } from '../hooks/useAuth'
import { getCategoryItemCount } from '../utils/utls'

export default function Category({ name, categoryId }) {

    const { items } = useData()

    return (
        <>
            <li> {name}({getCategoryItemCount(items, categoryId)})</li>
        </>
    )
}
