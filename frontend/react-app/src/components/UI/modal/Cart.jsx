import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../../../hooks/useAuth'
import MakeOrderBtn from '../buttons/MakeOrderBtn'
import CartItem from './CartItem'


export default function Cart() {
    const { isCartOpen, setCartStatus, cartItems, cartItemsQuantity, getCartTotal } = useData()

    useEffect(() => {
        setCartStatus(false)
    }, [!cartItems.length])

    useEffect(() => {
        getCartTotal(cartItemsQuantity)
    }, [cartItems.length])

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
                                        item={item}
                                    />
                                )}
                            </div>
                            <div className='cart__total'>Total: {getCartTotal(cartItemsQuantity)}$</div>
                            <Link to={'order'}><MakeOrderBtn onClick={() => setCartStatus(false)}>
                                Make Order
                            </MakeOrderBtn>
                            </Link>
                        </div>
                    </div>
                </div>
                :
                <div></div>
            }
        </>
    )
}
