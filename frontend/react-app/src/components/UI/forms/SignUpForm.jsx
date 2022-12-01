import React from 'react'
import { useState } from 'react'
import classes from './SignUpForm.module.css'


export default function SignUpForm({ signUp, navigate, fromPage }) {

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

    const handleInput = (event, field) => {
        setUserInput({
            ...userInput,
            [field]: event.target.value,
        })
    }

    return (
        <div className="auth-form">
            <form onSubmit={sumbitAuthForm}>
                <label htmlFor="username">Username:</label>
                <input
                    required
                    onChange={(event) => handleInput(event, 'username')}
                    type="text"
                />
                <label htmlFor="password">Password:</label>
                <input
                    required
                    onChange={(event) => handleInput(event, 'password')}
                    type="password"
                />
                <label htmlFor="email">Email:</label>
                <input
                    required
                    onChange={(event) => handleInput(event, 'email')}
                    type="email"
                />
                <button>SignUp</button>
            </form>
        </div>
    )
}
