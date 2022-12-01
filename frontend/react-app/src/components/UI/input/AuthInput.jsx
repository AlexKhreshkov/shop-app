import React from 'react'

export default function AuthInput({ children, ...props }) {
    return (
        <input
            {...props}
        >
            {children}
        </input>
    )
}
