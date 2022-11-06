import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useData } from '../hooks/useAuth'

export function RequireNoAuth({ children }) {
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const { authToken, isLoading } = useData()
    
    if (authToken) {
        return navigate(fromPage, { replace: true })
    }
    return children
}