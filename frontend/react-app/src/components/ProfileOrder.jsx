import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { base_url } from '../API/getData'
import { useData } from '../hooks/useData'
import ProfileOrderItems from './ProfileOrderItems'

export default function ProfileOrder({ id, price, status }) {

    const { authToken } = useData()
    const [orderItems, setOrderItems] = useState([])

    async function getItemsToOrder(orderId) {
        const ordersItemsResponse = await fetch(`${base_url}/orders-items/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authToken}`,
            },
        })
        const orderItems = await ordersItemsResponse.json()
        return orderItems.filter(element => element.order_id === orderId)
    }

    useEffect(() => {
        const setItems = async () => {
            const orderItems = await getItemsToOrder(id)
            setOrderItems(orderItems)
        }
        setItems()
    }, [])


    return (
        <div className="profile__order">
            <div className="profile__order-number">Order #{id}</div>
            <ProfileOrderItems
                orderItems={orderItems}
            />
            <div style={{ fontSize: '20px' }}>
                Status: <span style={{ color: 'blue', textDecoration: 'underline' }}>{status}</span>
            </div>
            <div style={{ color: '#3cb878', margin: '10px 0', fontSize: '20px' }}>
                Total: {price}$
            </div>
        </div>
    )
}
