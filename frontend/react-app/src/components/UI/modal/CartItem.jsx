import React from 'react'
import { useData } from '../../../hooks/useAuth'

export default function CartItem({ index, title, price, image, slug }) {

    const { cartItems, removeFromCart } = useData()
    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img src={image} />
            </div>
            <div className="cart__item-content">
                <div className="cart__item-column">
                    <div className="cart__item-title">{index + 1}. {title}</div>
                    <div className="cart__item-price">1 x {price}$</div>
                </div>
                <div className="cart__item-column">
                    <div className="cart__item-count-select">
                        <select name="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="cart__item-column">
                    <div className="cart__item-item_count-price">
                        Price: 999$
                        <button style={{ padding: '5px 20px' }} onClick={() => removeFromCart(slug)}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
