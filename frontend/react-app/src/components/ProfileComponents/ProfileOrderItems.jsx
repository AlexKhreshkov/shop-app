import React from 'react'
import ProfileOrderItem from './ProfileOrderItem'

export default function ProfileOrderItems({ orderItems }) {
    return (
        <>
            {orderItems.map((orderItem, index) =>
                <ProfileOrderItem
                    key={index}
                    orderItem={orderItem}
                />
            )}
        </>
    )
}