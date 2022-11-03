import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useData } from '../hooks/useAuth'

export function RequireAuth({ children }) {
    const location = useLocation()
    const {user, cartItems} = useData()

    if (!user || !cartItems) {
        return <Navigate to={'/login'} state={{ from: location }} />
    }   

    return children
}