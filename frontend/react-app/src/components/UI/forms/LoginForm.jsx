import React from 'react'
import { useState } from 'react'
import AuthInput from '../input/AuthInput'
import classes from './LoginForm.module.css'

export default function LoginForm({ login, fromPage, navigate }) {

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
    const handleInput = (event, field) => {
        setUserInput({
            ...userInput,
            [field]: event.target.value,
        })
    }


    return (
        <>
            <div className={classes.authForm}>
                <form onSubmit={sumbitAuthForm}>
                    <label htmlFor="username">Username:</label>
                    <AuthInput
                        required
                        onChange={(event) => handleInput(event, 'userName')}
                        type="text"
                    />
                    <label htmlFor="password">Password:</label>
                    <AuthInput
                        required
                        onChange={(event) => handleInput(event, 'password')}
                        type="password"
                    />
                    <button>Login</button>
                </form>
            </div>
        </>
    )
}
