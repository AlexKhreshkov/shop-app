import React, { useState } from 'react'
import { useEffect } from 'react'
import { useData } from '../hooks/useAuth'
import ProfileOrder from './ProfileOrder'

export default function ProfileOrders() {

    const { usersOrders } = useData()

    return (
        <div className="profile__orders-container">
            <div className="profile__orders-title">Your Orders: {usersOrders.length}</div>
            <div className="profile__orders">
                {usersOrders.map(order =>
                    <ProfileOrder
                        key={order.id}
                        id={order.id}
                        price={order.total_cost}
                    />
                )}
            </div>
        </div>

    )
}
