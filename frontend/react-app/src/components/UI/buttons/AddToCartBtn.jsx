import React from 'react'
import { useData } from '../../../hooks/useData'

export default function AddToCartBtn({ slug }) {

    const { addToCart } = useData()
    return (
        <button
            className='item__add-to-cart-btn'
            onClick={() => addToCart(slug)}
        >
            Add to cart
        </button>
    )
}
