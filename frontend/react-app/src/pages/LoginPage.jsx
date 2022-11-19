import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Loader } from '../components/UI/loader/Loader'
import { useData } from '../hooks/useData'
import BlackLine from './BlackLine'
import Navigation from './Navigation'

export default function LoginPage() {
    const navigate = useNavigate()
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/'
    const { login, isLoading, user } = useData()
    const [userInput, setUserInput] = useState({
        userName: '',
        password: '',
    })

    const sumbitAuthForm = (event) => {
        event.preventDefault()
        if (userInput.userName && userInput.password) {
            login(userInput, () => navigate(fromPage, { replace: true }))
        }
    }

    useEffect(() => {
        if (user) {
            return navigate(fromPage, { replace: true })
        }
    })


    return (
        <div className="main-content">

            {isLoading
                ?
                <div style={{ display: "flex", justifyContent: 'center', marginTop: '100px' }}><Loader /></div>
                :
                <>
                    <Navigation />
                    <BlackLine />
                    <div className="main">
                        <div style={{ textAlign: 'center', fontSize: '30px', marginTop: '20px', marginBottom: '20px' }}>
                            Login
                            <br />
                        </div>
                        <div className="auth-form">
                            <form onSubmit={sumbitAuthForm}>
                                <label htmlFor="username">Username:</label>
                                <input
                                    required
                                    onChange={(event) => {
                                        setUserInput({
                                            userName: event.target.value,
                                            password: userInput.password,
                                        })
                                    }}
                                    type="text"
                                />
                                <label htmlFor="password">Password:</label>
                                <input
                                    required
                                    onChange={(event) => {
                                        setUserInput({
                                            userName: userInput.userName,
                                            password: event.target.value,
                                        })
                                    }}
                                    type="password"
                                />
                                <button>Login</button>
                            </form>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
