import React from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Loader } from '../components/UI/loader/Loader'
import { useData } from '../hooks/useData'
import BlackLine from '../components/UI/lines/BlackLine'
import Navigation from './../components/Navigation'
import LoginForm from '../components/UI/forms/LoginForm'


export default function LoginPage() {
    const navigate = useNavigate()
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/'
    const { login, isLoading, user } = useData()

    useEffect(() => {
        if (user) {
            return navigate(fromPage, { replace: true })
        }
    })


    return (
        <main className="main-content">
            {isLoading
                ?
                <div className='loader'><Loader /></div>
                :
                <>
                    <Navigation />
                    <BlackLine />
                    <div className="main">
                        <div className='loginTitle'>Login</div>
                        <LoginForm
                            login={login}
                            fromPage={fromPage}
                            navigate={navigate}
                        />
                    </div>
                </>
            }
        </main>
    )
}
