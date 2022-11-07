import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useData } from '../../../hooks/useAuth'
import BlackLine from '../../../pages/BlackLine'
import MyButton from '../buttons/MyButton'
import CartItem from '../modal/CartItem'


export default function OrderForm() {

    const { user, cartItems, cartItemsQuantity, getCartTotal, isCartEmpty } = useData()
    const [orderForm, setOrderForm] = useState({
        client_full_name: `${user.name} ${user.surname}`,
        delivery_address: user.address,
        phone: user.phone
    })
    const navigate = useNavigate()

    function makeOrder(event) {
        event.preventDefault()
        
    }

    useEffect(() => {
        if (isCartEmpty()) {
            navigate('/items')
        }
    }, [cartItems])

    return (
        <form onSubmit={e => makeOrder(e)}>
            <div className='order-container'>
                <div className="order__title">
                    Enter order details:
                </div>
                <div className="order__contacts">
                    <div className="order__contacts-item">
                        Your Full Name:
                        <input
                            required
                            onChange={e => setOrderForm({ ...orderForm, client_full_name: e.target.value })}
                            value={orderForm.client_full_name}
                        />
                    </div>
                    <div className="order__contacts-item">
                        Delivery address:
                        <input
                            required
                            value={orderForm.delivery_address}
                            onChange={e => setOrderForm({ ...orderForm, delivery_address: e.target.value })}
                        />
                    </div>
                    <div className="order__contacts-item">
                        Phone:
                        <input
                            required
                            value={orderForm.phone}
                            onChange={e => setOrderForm({ ...orderForm, phone: e.target.value })}
                        />
                    </div>
                    <BlackLine />
                </div>
                <div className="order__items-count">Items: {cartItems.length}</div>
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
                <div className="order__total-price">
                    Total: {getCartTotal(cartItemsQuantity)}$
                </div>
                <MyButton>
                    Make order
                </MyButton>
            </div>
        </form>
    )
}
