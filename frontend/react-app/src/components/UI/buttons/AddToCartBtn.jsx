import React from 'react'
import { useData } from '../../../hooks/useAuth'

export default function AddToCartBtn({ slug }) {

    const { addToCart } = useData()
    return (
        <div className="item__add-to-cart-btn">
            <button onClick={() => addToCart(slug)}>Add to cart</button>
        </div>
    )
}
