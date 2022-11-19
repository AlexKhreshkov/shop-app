import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../hooks/useData'

export default function ProfileOrderItem({ orderItem }) {

    const { items } = useData()
    const [item, setItem] = useState({})

    useEffect(() => {
        for (let item of items) {
            if (item.id === orderItem.item_id) {
                setItem(item)
                break
            }
        }
    }, [])

    return (
        <div className='profile__order-item'>
            <div className="profile__order-item-img">
                <img src={item.image} />
            </div>
            <div className="profile__order-item-name">
                <Link to={`/items/${item.slug}`}>{item.title}
                </Link></div>
            <div className="profile__order-item-quantity">
                <div className="profile__order-item-quantity">{orderItem.quantity} X </div>
                <div className="profile__order-item-price">{item.price}$</div>
            </div>
            <div className="profile__order-item-total-price">= {orderItem.quantity * item.price}$</div>
        </div>
    )
}
