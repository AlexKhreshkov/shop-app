import React from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import BlackLine from './BlackLine'

export default function LoginPage() {
    const navigate = useNavigate()
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/'
    const { signIn } = useAuth()
    const [userInput, setUserInput] = useState({
        userName: '',
        password: '',
    })

    const sumbitAuthForm = (event) => {
        event.preventDefault()
        if (userInput.userName && userInput.password) {
            signIn(userInput, () => navigate(fromPage, { replace: true }))
        }
    }

    return (
        <div className="main-content">
            <BlackLine />
            <div className="main">
                <div style={{ textAlign: 'center', fontSize: '30px', marginTop: '20px', marginBottom: '20px' }}>
                    SignUp
                    <br />
                </div>
                <div className="auth-form">
                    <form onSubmit={sumbitAuthForm}>
                        <label htmlFor="username">Username:</label>
                        <input
                            onChange={(event) => {
                                setUserInput({
                                    userName: event.target.value,
                                    password: userInput.password
                                })
                            }}
                            type="text"
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            onChange={(event) => {
                                setUserInput({
                                    userName: userInput.userName,
                                    password: event.target.value
                                })
                            }}
                            type="password"
                        />
                        <button>SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
