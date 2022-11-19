import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useData } from '../hooks/useData'

export function RequireAuth({ children }) {
    const location = useLocation()
    const { authToken, isLoading } = useData()

    if (!authToken) {
        return <Navigate to={'/signup'} state={{ from: location }} />
    }
    return children
}