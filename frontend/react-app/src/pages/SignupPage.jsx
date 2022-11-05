import React from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useData } from '../hooks/useAuth'
import BlackLine from './BlackLine'

export default function LoginPage() {
    const navigate = useNavigate()
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/'
    const { signUp } = useData()
    const [userInput, setUserInput] = useState({
        username: '',
        password: '',
        email: '',
    })

    const sumbitAuthForm = (event) => {
        event.preventDefault()
        if (userInput.username && userInput.password && userInput.email) {
            signUp(userInput, () => navigate(fromPage, { replace: true }))
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
                {fromPage !== '/' ?
                    <div style={{ textAlign: 'center', fontSize: '20px', marginTop: '40px' }}>
                        <div style={{ textDecoratzon: 'underline', marginBottom: '10px' }}>
                            First, SignUp
                        </div>
                        to access {fromPage}
                    </div>
                    :
                    <div></div>
                }
                <div className="auth-form">
                    <form onSubmit={sumbitAuthForm}>
                        <label htmlFor="username">Username:</label>
                        <input
                            required
                            onChange={(event) => {
                                setUserInput({
                                    username: event.target.value,
                                    password: userInput.password,
                                    email: userInput.email,
                                })
                            }}
                            type="text"
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            required
                            onChange={(event) => {
                                setUserInput({
                                    username: userInput.username,
                                    password: event.target.value,
                                    email: userInput.email,
                                })
                            }}
                            type="password"
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            required
                            onChange={(event) => {
                                setUserInput({
                                    username: userInput.username,
                                    password: userInput.password,
                                    email: event.target.value,
                                })
                            }}
                            type="email"
                        />
                        <button>SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
