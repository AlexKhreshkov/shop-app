import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useData } from '../hooks/useAuth'

export function RequireCartAndAuth({ children }) {
    const location = useLocation()
    const { authToken, cartItems } = useData()

    if (!authToken || !cartItems) {
        return <Navigate to={'/signup'} state={{ from: location }} />
    }

    return children
}