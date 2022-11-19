import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { base_url, deleteUserItemFromCart, getAllOrders } from '../../../API/getData'
import { useData } from '../../../hooks/useData'
import BlackLine from '../../../pages/BlackLine'
import MyButton from '../buttons/MyButton'
import CartItem from '../modal/CartItem'


export default function OrderForm() {

    const { user, cartItems, setCartItems, cartItemsQuantity, getCartTotal, isCartEmpty, authToken, userCart, usersOrders, setUsersOrders } = useData()
    const [orderForm, setOrderForm] = useState({
        full_name: `${user.name} ${user.surname}`,
        delivery_address: user.address,
        phone: user.phone
    })
    const navigate = useNavigate()
    const [orderTotalPrice, setOrderTotalPrice] = useState()

    useEffect(() => {
        setOrderTotalPrice(getCartTotal(cartItemsQuantity))
    }, [cartItemsQuantity, cartItems])


    async function makeOrder(event) {
        event.preventDefault()
        const response = await fetch(`${base_url}/orders/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authToken}`,
            },
            body: JSON.stringify({
                ...orderForm,
                user_id: user.id,
                user: user.id,
                status: 1,
                total_cost: getCartTotal(cartItemsQuantity)
            }),
        })
        const orders = await getAllOrders(authToken)
        const lastOrderId = orders[orders.length - 1].id

        for (let [item, quantity] of cartItemsQuantity) {
            fetch(`${base_url}/orders-items/create/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${authToken}`,
                },
                body: JSON.stringify({
                    order: lastOrderId,
                    item: item.id,
                    quantity: quantity
                }),
            })
            const newOrder = {
                id: lastOrderId,
                user: user.id,
                user_id: user.id,
                status: 1,
                total_cost: getCartTotal(cartItemsQuantity),
                delivery_address: orderForm.delivery_address,
                full_name: orderForm.full_name,
                phone: orderForm.phone,
                created: new Date().toISOString().split('T')[0]
            }
            setUsersOrders([...usersOrders, newOrder])
        }
        for (let cartItem of cartItems) {
            deleteUserItemFromCart(authToken, cartItem, userCart)
        }
        setCartItems([])
        navigate('/profile')
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
                            onChange={e => setOrderForm({ ...orderForm, full_name: e.target.value })}
                            value={orderForm.full_name}
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
                    Total: {orderTotalPrice}$
                </div>
                <MyButton>
                    Make order
                </MyButton>
            </div>
        </form>
    )
}
