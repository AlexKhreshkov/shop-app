import React from 'react'
import classes from './BigSearch.module.css'

export default function BigSearch({ children, ...props }) {
    return (
        <input
            className={classes.bigSearch}
            {...props}
        >
            {children}
        </input>
    )
}
