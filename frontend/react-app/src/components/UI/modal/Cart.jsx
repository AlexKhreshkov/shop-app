import React from 'react'
import { useData } from '../../../hooks/useAuth'
import MakeOrderBtn from '../buttons/MakeOrderBtn'
import CartItem from './CartItem'


export default function Cart() {
    const { isCartOpen, setCartStatus, cartItems } = useData()
    if (!cartItems.length) {
        setCartStatus(false)
    }

    return (
        <>
            {isCartOpen
                ?
                <div className="cart">
                    <div className="cart__body">
                        <div className="cart__content">
                            <button className="cart__close" onClick={() => setCartStatus(false)}>X</button>
                            <div className="cart__title">Items: {cartItems.length}</div>
                            <div className="cart__items">
                                {cartItems.map((item, index) =>
                                    <CartItem
                                        key={item.id}
                                        index={index}
                                        title={item.title}
                                        price={item.price}
                                        image={item.image}
                                        slug={item.slug}
                                    />
                                )}
                            </div>
                            <MakeOrderBtn>Make Order</MakeOrderBtn>
                        </div>
                    </div>
                </div>
                :
                <div></div>
            }
        </>
    )
}
